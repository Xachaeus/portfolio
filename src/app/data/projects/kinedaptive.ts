import { Project } from '../../models/project.model';

export const kinedaptive: Project = {
  slug: 'kinedaptive',
  name: 'Kinedaptive',
  tagline:
    'A cross-platform training app that provides a simple interface for entering people\'s physical and mental limitations, and provides exercise recommendations based on that info.',
  description:
    'Kinedaptive is a full-stack product I designed and built end-to-end. It runs as a website and ' +
    'as a phone app from a single React Native (Expo) component tree. Trainers record, body part by ' +
    'body part on a 3D figure, each client\'s abilities and limitations. A proprietary ' +
    'backend-only recommendation algorithm then suggests exercises, which the app ' +
    'shows as animated demonstrations and can schedule as workouts. The platform also covers ' +
    'subscriptions, organizations with admin-built pricing, client messaging, invoicing, and a ' +
    'staff admin console. Client data is encrypted on the device before it is stored, and the ' +
    'backend is powered Supabase (Postgres, Auth and Edge Functions) with Stripe for billing.',
  technologies: [
    'TypeScript',
    'React Native',
    'Expo',
    'Supabase',
    'PostgreSQL',
    'Edge Functions',
    'Stripe',
    '3D Rendering',
  ],
  githubUrl: '',
  links: [
    { label: 'Live Platform', url: 'https://kinedaptive.com', icon: 'demo' },
  ],
  highlights: [
    {
      title: 'One codebase, web and mobile',
      description:
        'Built a single Expo / React Native component tree that ships as both a website and a native app. ' +
        'Platform differences are isolated in `.web.tsx` files (Stripe checkout, device calendar), so ' +
        'shared screens stay clean.',
    },
    {
      title: 'Client-side encryption',
      description:
        'Client data is encrypted on the device before it ever reaches the database, with a dedicated ' +
        'key-management layer and edge functions, so the server stores only ciphertext.',
    },
    {
      title: 'Confidential server-side algorithm',
      description:
        'The exercise-recommendation logic runs only inside Supabase Edge Functions. Nothing about it ' +
        'is shipped to the client, and automated secrecy tests enforce that boundary.',
    },
    {
      title: 'Interactive 3D body-mapping',
      description:
        'Engineered a translucent 3D figure with selectable regions and a rig editor, letting trainers ' +
        'record per-joint, per-muscle capability, with animated exercise demonstrations.',
    },
    {
      title: 'Production billing and organizations',
      description:
        'Implemented Stripe subscriptions and webhooks, plus organizations whose admins build custom ' +
        'plans from seats, client slots and extras. The schema changes were additive migrations against a live app.',
    },
    {
      title: 'Disciplined architecture',
      description:
        'Services return typed `{ ok, ... }` results instead of throwing, pages only compose reusable ' +
        'components, all user-facing text lives in content constants, and each folder documents its own ' +
        'purpose. The result is a large codebase that stays servicable and easily-indexable.',
    },
  ],
  conciseHighlights: [
    {
      title: 'Cross-platform',
      description: 'One React Native (Expo) codebase deployed as both a website and a mobile app.',
    },
    {
      title: 'Secure by design',
      description: 'On-device client-data encryption and a recommendation algorithm that never leaves the server.',
    },
    {
      title: 'Full-stack',
      description: 'Supabase (Postgres, Auth, Edge Functions) with Stripe billing, orgs, messaging and invoicing.',
    },
  ],
  date: '2026-11-25',
  featured: true,
  status: 'active',
};