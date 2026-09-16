import { Project } from '../../models/project.model';

export const solsync: Project = {
  slug: 'solsync',
  name: 'SolSync',
  tagline: 'Full-stack application for tracking and managing long-running processes across multiple machines.',
  description:
    `SolSync is a full-stack application designed to help me track and manage long-term processes that are running \
    on a collection of different machines. It utilizes a Node.js backend with a PostgreSQL database to store information \
    about running processes, and an Angular frontend to provide a user-friendly interface to both monitor the status of \
    these processes and to send triggers to them. The backend server allows both RESTful and WebSocket connections, enabling \
    real-time updates to the frontend when a process reports an update.`,
  technologies: ['TypeScript', 'Angular', 'PostgreSQL', 'Node.js', 'Express', 'WebSockets', 'REST API', 'Frontend', 'Backend'],
  links: [
    { label: 'Live Demo', url: 'https://solsync.sollenbergertech.com', icon: 'demo' }, // Icon can be 'github', 'demo', 'docs', or ''
  ],
  highlights: [
    {
      title: 'Full-Stack Application',
      description: `The application utilizes a Node.js backend that differentiates between two types of clients: \
      "Viewer" clients, which access/view the status of other running processes, and "Worker" clients, which define \
      running processes and report their status. The backend also allows WebSocket connections for both Viewer and Worker \
      clients, enabling real-time updates between Viewers and Workers.`,
    },
    {
      title: 'API Access',
      description: `SolSync is configured to provide information to applications, allowing developers \
      to utilize SolSync in their own applications. This enables developers to trigger events in their own applications when \
      other processes running on other machines report a status update, allowing for vastly more complex workflows to be \
      utilized.`
    },
    {
      title: 'Frontend Interface',
      description: `The application provides a user-friendly Angular frontend that allows users to easily view the status of \
      their running processes, as well as send triggers to them. It is designed to be intuitive, responsive, and information-dense, \
      enabling quick access to the information users are looking for.`
    },
    {
      title: 'API Libraries',
      description: `As part of this project, I built a Python library wrapper around the Worker API that allows developers to \
      trivially manage their Python programs with SolSync. This library allows developers to easily specify what values they want \
      to be able to track, and what values they want to be able to trigger; the library then handles all further logic to \
      automatically report and update these values as needed.`
    }
  ],
  conciseHighlights: [
    {
      title: 'Full-Stack Development',
      description: 'Built utilizing an Angular frontend, Node.js backend, PostgreSQL database, and an application-friendly REST/WebSocker API for both Viewer and Worker applications.',
    },
    {
      title: 'Frontend Interface',
      description: 'User-friendly Angular frontend that allows users to easily view the status of their running processes, as well as send triggers to them.',
    },
    {
      title: 'API Libraries',
      description: 'Python library wrapper around the Worker API that allows developers to trivially manage their Python programs with SolSync.',
    }
  ],
  date: '2026-07-01',
  featured: false,
  status: 'in-progress', // Can be 'active', 'completed', 'archived', 'in-progress', or undefined
};
