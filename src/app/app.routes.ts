import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsListComponent } from './pages/projects-list/projects-list.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { ResumeComponent } from './pages/resume/resume.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Zachariah Sollenberger — Software Engineer' },
  { path: 'projects', component: ProjectsListComponent, title: 'Projects — Zachariah Sollenbergr' },
  { path: 'projects/:slug', component: ProjectDetailComponent, title: 'Project — Zachariah Sollenberger' },
  { path: 'blog', component: BlogListComponent, title: 'Blog — Zachariah Sollenberger' },
  { path: 'blog/:slug', component: BlogDetailComponent, title: 'Post — Zachariah Sollenberger' },
  { path: 'resume', component: ResumeComponent, title: 'Resume — Zachariah Sollenberger' },
  { path: '**', redirectTo: '' },
];
