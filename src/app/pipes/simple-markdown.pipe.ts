import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Renders the lightweight markdown subset documented in BlogPost.body:
 * "## " headings, "- " bullet lists, blank-line paragraphs, fenced code
 * blocks, and inline **bold** / `code`.
 *
 * This is intentionally small and dependency-free rather than pulling in
 * a full markdown library, since the supported syntax is deliberately limited.
 */
@Pipe({
  name: 'simpleMarkdown',
  standalone: true,
})
export class SimpleMarkdownPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    const html = this.render(value ?? '');
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  private escapeHtml(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  private renderInline(text: string): string {
    let escaped = this.escapeHtml(text);
    escaped = escaped.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    escaped = escaped.replace(/`(.+?)`/g, '<code>$1</code>');
    return escaped;
  }

  private render(source: string): string {
    const lines = source.trim().split('\n');
    const htmlParts: string[] = [];
    let paragraphBuffer: string[] = [];
    let listBuffer: string[] = [];
    let inCodeBlock = false;
    let codeBuffer: string[] = [];

    const flushParagraph = () => {
      if (paragraphBuffer.length) {
        htmlParts.push(`<p>${this.renderInline(paragraphBuffer.join(' '))}</p>`);
        paragraphBuffer = [];
      }
    };

    const flushList = () => {
      if (listBuffer.length) {
        const items = listBuffer.map((item) => `<li>${this.renderInline(item)}</li>`).join('');
        htmlParts.push(`<ul>${items}</ul>`);
        listBuffer = [];
      }
    };

    for (const rawLine of lines) {
      const line = rawLine.trim();

      if (line.startsWith('```')) {
        if (inCodeBlock) {
          htmlParts.push(`<pre><code>${this.escapeHtml(codeBuffer.join('\n'))}</code></pre>`);
          codeBuffer = [];
          inCodeBlock = false;
        } else {
          flushParagraph();
          flushList();
          inCodeBlock = true;
        }
        continue;
      }

      if (inCodeBlock) {
        codeBuffer.push(rawLine);
        continue;
      }

      if (line === '') {
        flushParagraph();
        flushList();
        continue;
      }

      if (line.startsWith('## ')) {
        flushParagraph();
        flushList();
        htmlParts.push(`<h2>${this.renderInline(line.slice(3))}</h2>`);
        continue;
      }

      if (line.startsWith('- ')) {
        flushParagraph();
        listBuffer.push(line.slice(2));
        continue;
      }

      flushList();
      paragraphBuffer.push(line);
    }

    flushParagraph();
    flushList();
    if (codeBuffer.length) {
      htmlParts.push(`<pre><code>${this.escapeHtml(codeBuffer.join('\n'))}</code></pre>`);
    }

    return htmlParts.join('\n');
  }
}
