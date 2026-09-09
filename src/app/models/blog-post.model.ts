/**
 * Structured data shape for a single blog post.
 *
 * To add a new post:
 *   1. Copy any file in `src/app/data/blog/` (e.g. `_template.ts`)
 *   2. Fill in the fields below (body supports basic markdown)
 *   3. Register the new object in `src/app/data/blog/index.ts`
 */
export interface BlogPost {
  /** URL-safe unique identifier, used for routing e.g. /blog/hello-world */
  slug: string;

  /** Post title */
  title: string;

  /** Short summary shown in the blog list */
  excerpt: string;

  /** ISO date string (YYYY-MM-DD) */
  date: string;

  /** Estimated reading time in minutes (optional — auto-estimated if omitted) */
  readingTimeMinutes?: number;

  /** Tags for categorization */
  tags?: string[];

  /**
   * Full post body. Supports a lightweight markdown subset:
   * - Blank lines separate paragraphs
   * - Lines starting with "## " become headings
   * - Lines starting with "- " become bullet list items
   * - Lines starting with "```" toggle a code block
   * - **bold** and `inline code` are supported inline
   */
  body: string;

  /** Whether the post should appear on the home page */
  featured?: boolean;
}
