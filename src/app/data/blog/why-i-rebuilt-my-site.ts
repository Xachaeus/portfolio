import { BlogPost } from '../../models/blog-post.model';

export const whyIRebuiltMySite: BlogPost = {
  slug: 'why-i-rebuilt-my-site',
  title: 'Why I Rebuilt My Portfolio (Again)',
  excerpt:
    'Every developer rewrites their personal site at least once a year. Here\'s how I automated it.',
  date: '2026-09-09',
  tags: ['meta', 'angular', 'design'],
  body: `
Every developer I know continuously updates and revamps their personal sites to keep up
with their accomplishments. I decided to take a different approach.

## The idea

After I realized that I needed to update my portfolio for the millionth time,
I got fed up with having to update it manually. I figured, "Hey, I've got a 
personal cluster, an AI-capable machine, and technical knowledge. Why the hell
am I doing this myself?"

## The implementation

So, I built a portfolio website with Angular, designed a system to automatically
render new links/pages for my projects and blog by scanning a registry for structured
data files, and set up a rudimentary CI/CD pipeline to automatically deploy 
any changes without me having to be involved at all. All I had to do was set up
a script to run \`git push\` to my deployed branch and I was good to go.

All I had to do from there was set up a process on my cluster, SF9, that would
wait for notifications of new or updated projects from GitHub, ping my AI machine
to get some structured text for my site, write it into a new file in the repository,
and push the changes.

## Why Angular

I write a lot of Angular at work, so it made sense to use it here too — strongly
typed data models, standalone components, and a router that makes structured
content easy to reason about.


`,
  featured: true,
};
