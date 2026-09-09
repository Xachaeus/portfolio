import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../models/blog-post.model';
import { SimpleMarkdownPipe } from '../../pipes/simple-markdown.pipe';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, SimpleMarkdownPipe],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss',
})
export class BlogDetailComponent {
  post: BlogPost | undefined;
  readingTime = 0;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.post = this.blogService.getBySlug(slug);
    if (this.post) {
      this.readingTime = this.blogService.getReadingTime(this.post);
    }
  }
}
