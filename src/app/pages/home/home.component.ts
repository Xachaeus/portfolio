import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ProjectService } from '../../services/project.service';
import { BlogService } from '../../services/blog.service';
import { Project } from '../../models/project.model';
import { BlogPost } from '../../models/blog-post.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  featuredProjects: Project[];
  recentPosts: BlogPost[];

  constructor(
    private projectService: ProjectService,
    private blogService: BlogService
  ) {
    this.featuredProjects = this.projectService.getFeatured().slice(0, 3);
    this.recentPosts = this.blogService.getAll().slice(0, 2);
  }
}
