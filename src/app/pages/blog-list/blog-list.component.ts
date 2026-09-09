import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../models/blog-post.model';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent {
  posts: BlogPost[];

  constructor(private blogService: BlogService) {
    this.posts = this.blogService.getAll();
  }

  readingTime(post: BlogPost): number {
    return this.blogService.getReadingTime(post);
  }
}
