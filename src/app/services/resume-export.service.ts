
import { saveAs } from "file-saver";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
  ExternalHyperlink,
  Tab,
  PositionalTab,
  PositionalTabAlignment,
  PositionalTabLeader,
} from "docx";

import { Injectable } from '@angular/core';
import { ExperienceEntry, EducationEntry, PublicationEntry, RecognitionEntry, SkillGroup, ResumeData } from "../models/resume.model";
import { Project } from "../models/project.model";

// ---------------------------------------------------------------------------
// Tiered layout system
//
// docx-js can't tell us how tall the rendered page will be, so instead of
// guessing exact pixel fit, we score the amount of content and pick from a
// small ladder of progressively denser layouts. The densest tier also caps
// list lengths (achievements/highlights) so a genuinely overloaded resume
// still lands on one page instead of silently spilling to a second.
//
// If you want exact fit, render the output with the docx skill's
// soffice.py + pdftoppm flow and check the page count; bump CONTENT_SCORE
// weights below if a real resume still overflows.
// ---------------------------------------------------------------------------

interface Tier {
  name: string;
  bodySize: number; // half-points (docx-js `size` unit): 20 = 10pt
  nameSize: number;
  titleSize: number;
  headingSize: number;
  marginDxa: number; // page margin, twentieths of a point
  paraSpacingAfter: number; // dxa
  sectionSpacingBefore: number;
  lineSpacing: number; // docx "line" unit, 240 = single
  maxAchievements: number;
  maxHighlights: number;
  maxProjects: number;
  showTechnologies: boolean;
}

const TIERS: Tier[] = [
  {
    name: "roomy",
    bodySize: 21,
    nameSize: 44,
    titleSize: 24,
    headingSize: 21,
    marginDxa: 720,
    paraSpacingAfter: 120,
    sectionSpacingBefore: 200,
    lineSpacing: 264,
    maxAchievements: 5,
    maxHighlights: 4,
    maxProjects: 99,
    showTechnologies: true,
  },
  {
    name: "regular",
    bodySize: 19,
    nameSize: 40,
    titleSize: 22,
    headingSize: 19,
    marginDxa: 620,
    paraSpacingAfter: 90,
    sectionSpacingBefore: 160,
    lineSpacing: 240,
    maxAchievements: 4,
    maxHighlights: 3,
    maxProjects: 99,
    showTechnologies: true,
  },
  {
    name: "compact",
    bodySize: 18,
    nameSize: 36,
    titleSize: 21,
    headingSize: 18,
    marginDxa: 520,
    paraSpacingAfter: 60,
    sectionSpacingBefore: 120,
    lineSpacing: 228,
    maxAchievements: 3,
    maxHighlights: 2,
    maxProjects: 6,
    showTechnologies: true,
  },
  {
    name: "dense-truncated",
    bodySize: 17,
    nameSize: 34,
    titleSize: 20,
    headingSize: 17,
    marginDxa: 460,
    paraSpacingAfter: 40,
    sectionSpacingBefore: 90,
    lineSpacing: 216,
    maxAchievements: 2,
    maxHighlights: 2,
    maxProjects: 4,
    showTechnologies: false,
  },
];



@Injectable({ providedIn: 'root' })
export class ResumeExportService {


    /** Rough proxy for "how many lines will this render as". Not exact — just
     * enough to rank content volume and pick a tier. */
    estimateContentScore(data: ResumeData, projects: Project[]): number {
        let score = 0;
        score += 3; // name/title/contact header
        score += Math.ceil(data.summary.length / 95); // summary wraps

        for (const e of data.experience) {
            score += 1.3; // role/org line
            score += Math.ceil(e.summary.length / 100);
            score += (e.achievements?.length ?? 0);
            score += e.technologies?.length ? 0.6 : 0;
        }

        const featured = projects.filter((p) => p.featured);
        for (const p of featured) {
            score += 1.3;
            score += Math.ceil(p.tagline.length / 100);
            score += (p.conciseHighlights?.length ?? 0) * 0.8;
            score += p.technologies.length ? 0.5 : 0;
        }

        for (const pub of data.publications ?? []) {
            score += 1.3;
            score += pub.summary ? Math.ceil(pub.summary.length / 100) : 0.5;
        }
        for (const ed of data.education ?? []) {
            score += 1.2;
            score += ed.details ? 0.7 : 0;
        }
        for (const r of data.recognitions ?? []) {
            score += 1;
            score += r.details ? 0.5 : 0;
        }
        score += (data.skills?.length ?? 0) * 0.9;

        // section headings
        const sectionCount =
            1 + // experience
            (featured.length ? 1 : 0) +
            (data.publications?.length ? 1 : 0) +
            (data.education?.length ? 1 : 0) +
            (data.recognitions?.length ? 1 : 0) +
            (data.skills?.length ? 1 : 0);
        score += sectionCount * 0.8;

        return score;
    }

    pickTier(score: number): Tier {
        // Thresholds tuned for a US-Letter page at 10-11pt body text.
        if (score <= 34) return TIERS[0];
        if (score <= 46) return TIERS[1];
        if (score <= 58) return TIERS[2];
        return TIERS[3];
    }

    // ---------------------------------------------------------------------------
    // Formatting helpers
    // ---------------------------------------------------------------------------

    formatDateRange(start: string, end?: string): string {
        const fmt = (d: string) => {
            const [y, m] = d.split("-");
            if (!m) return y;
            const monthNames = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
            ];
            const idx = parseInt(m, 10) - 1;
            return `${monthNames[idx] ?? m} ${y}`;
        };
        return `${fmt(start)} – ${end ? fmt(end) : "Present"}`;
    }

    COLORS = {
        heading: "1F1F1F",
        muted: "595959",
        rule: "BFBFBF",
        link: "1155CC",
    };

    sectionHeading(text: string, tier: Tier): Paragraph {
        return new Paragraph({
            spacing: { before: tier.sectionSpacingBefore, after: tier.paraSpacingAfter },
            border: {
            bottom: { style: BorderStyle.SINGLE, size: 4, color: this.COLORS.rule, space: 2 },
            },
            children: [
            new TextRun({
                text: text.toUpperCase(),
                bold: true,
                size: tier.headingSize,
                color: this.COLORS.heading,
                characterSpacing: 12,
            }),
            ],
        });
    }

    bulletParagraph(text: string, tier: Tier): Paragraph {
        return new Paragraph({
            spacing: { after: Math.max(20, tier.paraSpacingAfter - 30), line: tier.lineSpacing },
            indent: { left: 260, hanging: 140 },
            children: [
            new TextRun({ text: "•  ", size: tier.bodySize, color: this.COLORS.heading }),
            new TextRun({ text, size: tier.bodySize, color: this.COLORS.heading }),
            ],
        });
    }

    metaLine(text: string, tier: Tier): TextRun {
        return new TextRun({ text, size: tier.bodySize - 1, color: this.COLORS.muted, italics: true });
    }

    // ---------------------------------------------------------------------------
    // Section builders
    // ---------------------------------------------------------------------------

    buildHeader(data: ResumeData, tier: Tier): Paragraph[] {
        const paras: Paragraph[] = [
            new Paragraph({
            spacing: { after: 40 },
            children: [
                new TextRun({ text: data.name, bold: true, size: tier.nameSize, color: this.COLORS.heading }),
            ],
            }),
            new Paragraph({
            spacing: { after: 80 },
            children: [
                new TextRun({ text: data.title, size: tier.titleSize, color: this.COLORS.muted }),
            ],
            }),
        ];

        const contactBits: (TextRun | ExternalHyperlink)[] = [];

        const pushSep = () => {
            if (contactBits.length) {
            contactBits.push(new TextRun({ text: "   |   ", size: tier.bodySize, color: this.COLORS.muted }));
            }
        };

        if (data.location) {
            pushSep();
            contactBits.push(new TextRun({ text: data.location, size: tier.bodySize, color: this.COLORS.muted }));
        }

        if (data.email) {
            pushSep();
            contactBits.push(new TextRun({ text: data.email, size: tier.bodySize, color: this.COLORS.muted }));
        }

        pushSep();
        contactBits.push(
            new ExternalHyperlink({
                link: 'https://xachaeus.com',
                children: [
                    new TextRun({
                        text: "Portfolio: xachaeus.com",
                        size: tier.bodySize,
                        color: this.COLORS.link,
                        underline: {},
                    })
                ]
            })
        );

        for (const link of data.links ?? []) {
            pushSep();
            contactBits.push(
            new ExternalHyperlink({
                link: link.url,
                children: [
                new TextRun({
                    text: link.label,
                    size: tier.bodySize,
                    color: this.COLORS.link,
                    underline: {},
                }),
                ],
            })
            );
        }
        if (contactBits.length) {
            paras.push(
            new Paragraph({ spacing: { after: tier.sectionSpacingBefore }, children: contactBits })
            );
        }

        if (data.summary) {
            paras.push(
            new Paragraph({
                spacing: { after: tier.sectionSpacingBefore, line: tier.lineSpacing },
                children: [new TextRun({ text: data.summary, size: tier.bodySize, color: this.COLORS.heading })],
            })
            );
        }

        return paras;
    }

    buildExperience(entries: ExperienceEntry[], tier: Tier): Paragraph[] {
        const out: Paragraph[] = [this.sectionHeading("Experience", tier)];
        for (const e of entries) {
            out.push(
            new Paragraph({
                spacing: { after: 20 },
                tabStops: [{ type: "right" as const, position: 9350 }],
                children: [
                new TextRun({ text: e.role, bold: true, size: tier.bodySize, color: this.COLORS.heading }),
                new TextRun({ text: `  —  ${e.organization}`, size: tier.bodySize, color: this.COLORS.heading }),
                new TextRun({
                    children: [new Tab()],
                    text: `${this.formatDateRange(e.startDate, e.endDate)}${e.location ? "  ·  " + e.location : ""}`,
                    size: tier.bodySize - 1,
                    color: this.COLORS.muted,
                }),
                ],
            })
            );
            out.push(
            new Paragraph({
                spacing: { after: tier.paraSpacingAfter - 20, line: tier.lineSpacing },
                children: [new TextRun({ text: e.summary, size: tier.bodySize, color: this.COLORS.heading })],
            })
            );
            const achievements = (e.achievements ?? []).slice(0, tier.maxAchievements);
            for (const a of achievements) out.push(this.bulletParagraph(a, tier));
            if (tier.showTechnologies && e.technologies?.length) {
            out.push(
                new Paragraph({
                spacing: { after: tier.paraSpacingAfter },
                children: [this.metaLine(`Technologies: ${e.technologies.join(", ")}`, tier)],
                })
            );
            } else {
            out.push(new Paragraph({ spacing: { after: tier.paraSpacingAfter }, children: [] }));
            }
        }
        return out;
    }

    buildProjects(projects: Project[], tier: Tier): Paragraph[] {
        const featured = projects.filter((p) => p.featured).slice(0, tier.maxProjects);
        if (!featured.length) return [];
        const out: Paragraph[] = [this.sectionHeading("Projects", tier)];
        for (const p of featured) {
            out.push(
            new Paragraph({
                spacing: { after: 20 },
                children: [
                new TextRun({ text: p.name, bold: true, size: tier.bodySize, color: this.COLORS.heading }),
                new TextRun({ text: `  —  ${p.tagline}`, size: tier.bodySize, color: this.COLORS.heading }),
                ],
            })
            );
            const highlights = (p.conciseHighlights ?? []).slice(0, tier.maxHighlights);
            for (const h of highlights) {
            out.push(this.bulletParagraph(`${h.title}: ${h.description}`, tier));
            }
            const metaBits: string[] = [];
            if (tier.showTechnologies && p.technologies.length) {
                metaBits.push(p.technologies.join(", "));
            }
            if (metaBits.length) {
                out.push(
                    new Paragraph({
                    spacing: { after: tier.paraSpacingAfter },
                    children: [this.metaLine(metaBits.join("  ·  "), tier)],
                    })
                );
            } else {
                out.push(new Paragraph({ spacing: { after: tier.paraSpacingAfter }, children: [] }));
            }
        }

        out.push(new Paragraph({ 
            spacing: { after: tier.paraSpacingAfter }, 
            children: [
                new TextRun({
                    text: 'To see more of my projects, check out my portfolio at xachaeus.com!', 
                    size: tier.bodySize, 
                    color: this.COLORS.muted 
                })
            ] 
        }));
        return out;
    }

    buildEducation(entries: EducationEntry[], tier: Tier): Paragraph[] {
        if (!entries.length) return [];
        const out: Paragraph[] = [this.sectionHeading("Education", tier)];
        for (const ed of entries) {
            out.push(
            new Paragraph({
                spacing: { after: ed.details ? 10 : tier.paraSpacingAfter },
                tabStops: [{ type: "right" as const, position: 9350 }],
                children: [
                new TextRun({ text: ed.degree, bold: true, size: tier.bodySize, color: this.COLORS.heading }),
                new TextRun({ text: `  —  ${ed.institution}`, size: tier.bodySize, color: this.COLORS.heading }),
                new TextRun({
                    children: [new Tab()],
                    text: `${this.formatDateRange(ed.startDate, ed.endDate)}${ed.location ? "  ·  " + ed.location : ""}`,
                    size: tier.bodySize - 1,
                    color: this.COLORS.muted,
                }),
                ],
            })
            );
            if (ed.details) {
            out.push(
                new Paragraph({
                spacing: { after: tier.paraSpacingAfter, line: tier.lineSpacing },
                children: [new TextRun({ text: ed.details, size: tier.bodySize, color: this.COLORS.heading })],
                })
            );
            }
        }
        return out;
    }

    buildPublications(entries: PublicationEntry[], tier: Tier): Paragraph[] {
        if (!entries.length) return [];
        const out: Paragraph[] = [this.sectionHeading("Publications", tier)];
        for (const pub of entries) {
            const authors = pub.authors.join(", ");
            const venue = [pub.conference, pub.publisher, pub.year].filter(Boolean).join(", ");
            out.push(
            new Paragraph({
                spacing: { after: 10, line: tier.lineSpacing },
                children: [
                new TextRun({ text: pub.title, bold: true, italics: true, size: tier.bodySize, color: this.COLORS.heading }),
                ],
            })
            );
            out.push(
            new Paragraph({
                spacing: { after: tier.paraSpacingAfter },
                children: [this.metaLine(`${authors}${venue ? "  ·  " + venue : ""}  ·  DOI: ${pub.DOI}`, tier)],
            })
            );
        }
        return out;
    }

    buildRecognitions(entries: RecognitionEntry[], tier: Tier): Paragraph[] {
        if (!entries.length) return [];
        const out: Paragraph[] = [this.sectionHeading("Recognitions & Awards", tier)];
        for (const r of entries) {
            out.push(
            new Paragraph({
                spacing: { after: tier.paraSpacingAfter - 20 },
                tabStops: [{ type: "right" as const, position: 9350 }],
                children: [
                new TextRun({ text: r.title, bold: true, size: tier.bodySize, color: this.COLORS.heading }),
                new TextRun({
                    text: r.institution ? `  —  ${r.institution}` : "",
                    size: tier.bodySize,
                    color: this.COLORS.heading,
                }),
                new TextRun({
                    children: [new Tab()],
                    text: `${r.date}${r.location ? "  ·  " + r.location : ""}`,
                    size: tier.bodySize - 1,
                    color: this.COLORS.muted,
                }),
                ],
            })
            );
        }
        return out;
    }

    buildSkills(groups: SkillGroup[], tier: Tier): Paragraph[] {
        if (!groups.length) return [];
        const out: Paragraph[] = [this.sectionHeading("Skills", tier)];
        for (const g of groups) {
            out.push(
            new Paragraph({
                spacing: { after: tier.paraSpacingAfter - 30, line: tier.lineSpacing },
                children: [
                new TextRun({ text: `${g.category}: `, bold: true, size: tier.bodySize, color: this.COLORS.heading }),
                new TextRun({ text: g.skills.join(", "), size: tier.bodySize, color: this.COLORS.heading }),
                ],
            })
            );
        }
        return out;
    }

    // ---------------------------------------------------------------------------
    // Public entry point
    // ---------------------------------------------------------------------------

    async generateResumeDocx(
        data: ResumeData,
        projects: Project[],
        outputPath: string
    ): Promise<void> {

        const score = this.estimateContentScore(data, projects);
        const tier = this.pickTier(score);

        const children: Paragraph[] = [
            ...this.buildHeader(data, tier),
            ...this.buildExperience(data.experience, tier),
            ...this.buildPublications(data.publications ?? [], tier),
            ...this.buildRecognitions(data.recognitions ?? [], tier),
            ...this.buildSkills(data.skills ?? [], tier),
            ...this.buildEducation(data.education ?? [], tier),
            ...this.buildProjects(projects, tier),
        ];

        const doc = new Document({
            sections: [
            {
                properties: {
                page: {
                    size: { width: 12240, height: 15840 }, // US Letter
                    margin: {
                    top: tier.marginDxa,
                    bottom: tier.marginDxa,
                    left: tier.marginDxa,
                    right: tier.marginDxa,
                    },
                },
                },
                children,
            },
            ],
            styles: {
            default: {
                document: {
                run: { font: "Calibri" },
                },
            },
            },
        });

        Packer.toBlob(doc).then((blob) => {
            saveAs(blob, outputPath);
        }).catch((error) => {
            console.error("Error generating document:", error);
        });
    }

}
