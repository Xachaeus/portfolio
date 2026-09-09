import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { resumeData } from '../../data/resume.data';
import { ResumeData } from '../../models/resume.model';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  resume: ResumeData = resumeData;

  formatRange(start: string, end?: string): string {
    const fmt = (d: string) => {
      const [year, month] = d.split('-');
      const date = new Date(Number(year), Number(month) - 1);
      return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    };
    return `${fmt(start)} — ${end ? fmt(end) : 'Present'}`;
  }

  formatAuthors(authors: string[]) {
    return authors.join(', ');
  }
}
