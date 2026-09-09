import { Project } from '../../models/project.model';

// COPY THIS FILE to create a new project entry.
// Rename it to something like `my-cool-app.ts`, fill in the fields,
// then import + add it to the `projects` array in `index.ts`.

export const template: Project = {
  slug: 'my-project-slug',
  name: 'My Project Name',
  tagline: 'A one-sentence summary of what this project does.',
  description:
    'A longer description of the project. Explain the problem it solves, ' +
    'why you built it, and anything notable about the approach or architecture.',
  technologies: ['TypeScript', 'Angular'],
  githubUrl: 'https://github.com/Xachaeus/your-repo',
  links: [
    { label: 'Live Demo', url: 'https://example.com', icon: 'demo' }, // Icon can be 'github', 'demo', 'docs', or ''
  ],
  highlights: [
    {
      title: 'Key feature',
      description: 'Describe a notable feature or technical challenge you solved.',
    },
  ],
  date: '2024-01-01',
  featured: false,
  status: 'completed', // Can be 'active', 'completed', 'archived', 'in-progress', or undefined
};
