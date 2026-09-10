import { Project } from '../../models/project.model';

// COPY THIS FILE to create a new project entry.
// Rename it to something like `my-cool-app.ts`, fill in the fields,
// then import + add it to the `projects` array in `index.ts`.

export const autoPortfolio: Project = {
  slug: 'auto-portfolio',
  name: 'Self-Updating Portfolio',
  tagline: 'Living portfolio website that updates itself as I build new projects.',
  description:
    "This website -- including this page describing the site -- is configured to update itself as I " +
    "build and update my projects. Powered by my custom CI/CD configurations, my personal microcluster, " +
    "a pretty solid amount of network configurations, GitHub webhooks, and a personally-hosted AI model, " +
    "the site keeps updated on my GitHub activity and automatically creates, updates, and deploys pages on " +
    "this site to keep you up-to-date, all without needing any input from me.",
  technologies: ['TypeScript', 'Angular', "Nginx", "Headscale", "Tailscale", "Webhooks", "Git", "vLLM", "DGX Spark"],
  githubUrl: 'https://github.com/Xachaeus/portfolio',
  links: [],
  highlights: [
    {
      title: 'Network/Hardware Configuration',
      description: 'The site is powered by a whole suite of network setups that I had to put into place before ' +
      'it would even be feasible. The process for performing the page updates has to live on a computer somewhere, ' +
      'so I set it up on SF9, my personal cluster. It also has to receive webhook requests from GitHub, so I configured ' +
      'a subdomain from my domain to point to the router that SF9 sits behind, forwarded a port to the designated ' +
      'reverse proxy server in SF9, and configured an Nginx forwarding rule to pass GitHub webhooks only to the portfolio ' +
      'process. In order to put together content for each project\'s page, I needed to allow an LLM to summarize the code ' +
      'changes into structured fields, so I needed to set up a connection path from the process to an AI somewhere. ' +
      'I have access to a DGX Spark, but it lived on a different network than SF9, so I first set up a Headscale server ' +
      'within SF9 and then configured a tailnet to connect the spark to SF9, thus allowing me to send secure requests ' +
      'to an AI model that cost me next to nothing in inference.',
    },
    {
      title: 'CI/CD',
      description: 'In order to deploy changes to the site automatically, I needed to configure a CI/CD setup. A copy of ' +
      'the GitHub repository for this site lives on the same machine in SF9 as the portfolio-updating process; when the process ' +
      'finishes making changes to the git repository, the changes are pushed, and another webhook triggers a build process on ' +
      'CloudFlare Pages. Since the website is static, the build process is all that is necessary, so the built files are rapidly ' +
      'distributed across CloudFlare\'s global network.'
    }
  ],
  conciseHighlights: [
    {
      title: 'Self-Updating',
      description: 'Whenever I begin a new project or update an existing one, site detects the change and automatically updates itself'
    },
    {
      title: 'Hardware Configuration',
      description: 'Powered by my personal cluster, which includes a DGX Spark'
    },
    {
      title: 'Network Configuration',
      description: `Utilizes Nginx reverse-proxy, GitHub webhooks, and Headscale/Tailscale to securely process events`
    },
    {
      title: 'CI/CD',
      description: 'CI/CD configuration allows changes to be deployed to CloudFlare Pages automatically'
    }
  ],
  date: '2026-09-08',
  featured: true,
  status: 'in-progress',
};
