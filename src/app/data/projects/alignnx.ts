import { Project } from '../../models/project.model';

// COPY THIS FILE to create a new project entry.
// Rename it to something like `my-cool-app.ts`, fill in the fields,
// then import + add it to the `projects` array in `index.ts`.

export const AlignNX: Project = {
  slug: 'alignnx',
  name: 'AlignNX Platform',
  tagline: 'AI-Powered platform for accelerating pharmaceutical drug development regulatory filing.',
  description:
   `AlignNX is a full-stack platform that leverages AI to accelerate the drafting phase of pharmaceutical \
   regulatory filings. It consolidates many aspects of the regulatory filing process into a single platform, \
   including document management, AI-assisted drafting, and collaboration tools. The platform is designed to \
   streamline the workflow for regulatory professionals, enabling them to produce high-quality submissions \
   more efficiently.`,
  technologies: ['TypeScript', 'Angular', 'AWS', 'PostgreSQL', 'Docker', 'Python', 'Django', 'Amazon Bedrock', 'Frontend', 'Backend'],
  links: [
    { label: 'Company Landing Page', url: 'https://alignnx.com', icon: 'docs' }, // Icon can be 'github', 'demo', 'docs', or ''
  ],
  highlights: [
    {
      title: 'Technical Lead',
      description: `The CEO of AlignNX, INC. had been hiring an external developer team exclusively to build the \
      platform until he hired me, so I was the first technical employee of AlignNX. As such, I acted as the technical \
      lead for the development of the platform, directing both a small internal team of developers and the external contracted \
      team to build the platform to the CEO's expectations.`,
    },
    {
      title: 'Client Integration',
      description: `I worked with IT personnel from client companies to integrate their document storage systems with \
      the AlignNX platform, allowing for seamless transition into the workflow provided by AlignNX. My role involved extensive \
      communication with client IT and technical staff to understand their existing systems and ensure that our system \
      interfaced smoothly with theirs.`
    },
    {
      title: 'AI Engineering',
      description: `A critical aspect of my role was to rebuild the AI generation pipeline for the platform to improve the quality \
      of generated documents. This involved extensive reworking of multiple backend systems, both to ensure user requests were \
      appropriately passed to and handled by the backend server, and to enable generated documents to be stored automatically in \
      client-accessible storage systems. This also involved a significant amount of work to improve the agentic structure of the \
      pipeline, enabling iterative improvement of generated text and allowing for repeated retrieval of relevant context to \
      suppliment any hallucinated or missing information.`
    }
  ],
  conciseHighlights: [
    {
      title: 'Technical Lead and Client Integration',
      description: 'Acted as Technical Lead for AlignNX development, reporting directly to the CEO and working with client IT personnel to integrate the AlignNX platform with client infrastructure.',
    },
    {
      title: 'AI Engineering',
      description: `Built an agentic pipeline to generate high-quality draftes of regulatory filings with iterative improvement and context retrieval from client documentation.`
    }
  ],
  date: '2026-08-25',
  featured: false,
  status: 'completed', // Can be 'active', 'completed', 'archived', 'in-progress', or undefined
};
