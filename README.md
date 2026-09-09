# Personal Portfolio

A dark-green, modern personal portfolio site built with Angular (standalone
components, signals, the new `@if`/`@for` control-flow syntax). It has three
main sections:

- **Projects** — showcases things you've built on GitHub
- **Blog** — simple posts written in plain data files
- **Resume** — your experience, education, and skills

## Adding content

Everything on the site is driven by plain TypeScript data files — you never
need to touch HTML/CSS to add a project or blog post.

### Add a project

1. Copy `src/app/data/projects/_template.ts` to a new file, e.g. `my-app.ts`
2. Fill in the fields (see `src/app/models/project.model.ts` for what each
   field means)
3. Import it and add it to the array in `src/app/data/projects/index.ts`

The project automatically gets a card on `/projects`, appears on the home
page if `featured: true`, and gets its own detail page at
`/projects/<slug>` — no routing or template changes needed.

### Add a blog post

1. Copy `src/app/data/blog/_template.ts` to a new file, e.g. `my-post.ts`
2. Fill in the fields — the `body` field supports a small markdown subset
   (`## heading`, `- bullets`, `**bold**`, `` `code` ``, and fenced code
   blocks)
3. Import it and add it to the array in `src/app/data/blog/index.ts`

### Update your resume

Edit `src/app/data/resume.data.ts` directly — it's a single plain object
with your experience, education, and skills.

### Personalize branding

- Your name / title: search for "Your Name" across
  `src/app/components/navbar`, `src/app/components/footer`, and
  `src/index.html`
- GitHub links: search for `your-username` and replace with your GitHub
  handle
- Theme colors: all colors are CSS custom properties defined at the top of
  `src/styles.scss` under `:root` — tweak `--accent-400` / `--accent-500`
  etc. to adjust the green palette, or `--bg-0` / `--bg-1` for the
  background darkness

## Development

```bash
npm install
npm start        # dev server at http://localhost:4200
npm run build    # production build to dist/portfolio/browser
```

---


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
