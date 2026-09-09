import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent {
  project: Project | undefined;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.project = this.projectService.getBySlug(slug);
  }

  get descriptionParagraphs(): string[] {
    if (!this.project) return [];
    return this.project.description.split('\n').filter((p) => p.trim().length > 0);
  }

  iconFor(icon?: string): string {
    switch (icon) {
      case 'github':
        return '⌥';
      case 'demo':
        return '▸';
      case 'docs':
        return '☰';
      default:
        return '↗';
    }
  }
}
