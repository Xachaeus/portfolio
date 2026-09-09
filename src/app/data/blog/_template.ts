import { BlogPost } from '../../models/blog-post.model';

// COPY THIS FILE to write a new post.
// Rename it, fill in the fields, then register it in `index.ts`.

export const template: BlogPost = {
  slug: 'my-post-slug',
  title: 'My Post Title',
  excerpt: 'A one or two sentence summary that shows up in the post list.',
  date: '2024-01-01',
  tags: ['general'],
  body: `
This is the first paragraph of the post. Write in plain text —
blank lines separate paragraphs.

## A heading

- A bullet point
- Another bullet point

You can use **bold text** and \`inline code\` in your paragraphs.

\`\`\`
// a fenced code block
console.log('hello world');
\`\`\`
`,
  featured: false,
};
