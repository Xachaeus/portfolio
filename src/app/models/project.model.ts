/**
 * Structured data shape for a single project.
 *
 * To add a new project to the site:
 *   1. Copy any file in `src/app/data/projects/` (e.g. `_template.ts`)
 *   2. Fill in the fields below
 *   3. Register the new object in `src/app/data/projects/index.ts`
 *
 * The rest of the site (list page + detail page) is generated
 * automatically from this data — no template editing required.
 */
export interface ProjectLink {
  label: string;
  url: string;
  icon?: 'github' | 'external' | 'demo' | 'docs';
}

export interface ProjectHighlight {
  title: string;
  description: string;
}

export interface Project {
  /** URL-safe unique identifier, used for routing e.g. /projects/my-app */
  slug: string;

  /** Short name shown in cards and nav */
  name: string;

  /** One-sentence summary shown on the project list/cards */
  tagline: string;

  /** Longer description shown on the project detail page. Supports simple markdown-ish line breaks. */
  description: string;

  /** Tech stack / languages / tools used */
  technologies: string[];

  /** GitHub repository URL */
  githubUrl: string;

  /** Optional additional links (live demo, docs, etc.) */
  links?: ProjectLink[];

  /** Optional list of key features / highlights */
  highlights?: ProjectHighlight[];

  conciseHighlights?: ProjectHighlight[];

  /** ISO date string (YYYY-MM-DD) representing when the project started or was most recently worked on */
  date: string;

  /** Whether this project should be featured on the home page */
  featured?: boolean;

  /** Current status of the project */
  status?: 'active' | 'completed' | 'archived' | 'in-progress';

  /** Optional cover image path (place assets in src/assets/projects/) */
  coverImage?: string;
}
