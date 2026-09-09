import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss',
})
export class ProjectsListComponent {
  allProjects: Project[];
  allTechnologies: string[];
  activeFilter = signal<string | null>(null);

  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (!filter) return this.allProjects;
    return this.allProjects.filter((p) => p.technologies.includes(filter));
  });

  constructor(private projectService: ProjectService) {
    this.allProjects = this.projectService.getAll();
    this.allTechnologies = this.projectService.getAllTechnologies();
  }

  setFilter(tech: string | null) {
    this.activeFilter.set(this.activeFilter() === tech ? null : tech);
  }
}
