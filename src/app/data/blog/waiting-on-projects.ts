import { BlogPost } from '../../models/blog-post.model';

export const waitingOnProjects: BlogPost = {
  slug: 'waiting-on-projects',
  title: 'Waiting on Projects for Portfolio',
  excerpt:
    `As you can see, there's not a lot of projects on this site right now. I'm already fixing that.`,
  date: '2026-09-10',
  tags: ['meta', 'portfolio'],
  body: `
As you can probably tell, there's only two projects actually visible on the site right now. 
I've had a delay in getting the automatic updates to cover EXISTING projects, including the work
I've done on them until now, so for the time being, you can see the rest of my projects at:

# https://github.com/Xachaeus/Personal-Portfolio

Sorry for the stopgap measure! I'll get it fixed as soon as I can.
`,
  featured: true,
};
