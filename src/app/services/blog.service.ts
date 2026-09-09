import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog-post.model';
import { blogPosts } from '../data/blog';

@Injectable({ providedIn: 'root' })
export class BlogService {
  private readonly all: BlogPost[] = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  getAll(): BlogPost[] {
    return this.all;
  }

  getFeatured(): BlogPost[] {
    return this.all.filter((p) => p.featured);
  }

  getBySlug(slug: string): BlogPost | undefined {
    return this.all.find((p) => p.slug === slug);
  }

  /** Rough reading time estimate (~200 wpm) if not explicitly set. */
  getReadingTime(post: BlogPost): number {
    if (post.readingTimeMinutes) return post.readingTimeMinutes;
    const words = post.body.trim().split(/\s+/).length;
    return Math.max(1, Math.round(words / 200));
  }
}
