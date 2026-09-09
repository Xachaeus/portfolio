import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { projects } from '../data/projects';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private readonly all: Project[] = [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  getAll(): Project[] {
    return this.all;
  }

  getFeatured(): Project[] {
    return this.all.filter((p) => p.featured);
  }

  getBySlug(slug: string): Project | undefined {
    return this.all.find((p) => p.slug === slug);
  }

  getAllTechnologies(): string[] {
    const set = new Set<string>();
    this.all.forEach((p) => p.technologies.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }
}
