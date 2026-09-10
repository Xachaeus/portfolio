import { ResumeData } from '../models/resume.model';

// Edit this file to update the /resume page. All fields are plain data —
// no markup required.
export const resumeData: ResumeData = {
  name: 'Zachariah Sollenberger',
  title: 'AI Researcher Software Engineer',
  summary:
    'Highly-experienced developer and researcher with a deep passion for all things computer-related. ' +
    'I\'ve been programming since I was seven, and have been building projects for fun ever since. ' +
    'I like to work on novel and original implementations - I prefer to build projects that have nothing ' +
    'to reference and pose interesting design challenges by their very nature.',
  location: 'Newark, DE',
  email: 'zack.sollenberger@gmail.com',
  links: [
    { label: 'GitHub - @Xachaeus', url: 'https://github.com/Xachaeus' },
    { label: 'LinkedIn - @ZackSoll', url: 'https://linkedin.com/in/zacksoll' },
  ],
  experience: [
    {
      role: 'Tech Lead Intern',
      organization: 'AlignNX, Inc.',
      location: 'Wilmington, DE',
      startDate: '2026-06',
      endDate: '2026-08',
      summary:
        'Led development efforts of both internal and contracted Software Engineers and acted as primary Point-of-Reference for product technical details.',
      achievements: [
        'Directed internal developer team and worked with contracted Software Engineer team to build product to CEO\'s expectations',
        'Improved Angular frontend appearance, added caching mechanism to Django backend to reduce request count and improve response time, and rebuilt AI generation pipeline',
        'Worked with IT personnel from client companies to integrate AlignNX product with their workflows',
      ],
      technologies: ['Angular', 'Django', 'PostgreSQL', 'AWS', 'Amazon Bedrock', 'LLM Integration'],
    },
    {
      role: 'Undergraduate Researcher',
      organization: 'Computational Research and Programming Lab',
      location: 'Newark, DE',
      startDate: '2024-05',
      summary: 'Conducted AI research on HPC clusters, mentored other students in HPC applications, and worked with the First State AI Institute to build a cluster of DGX Sparks.',
      achievements: [
        'Directed the LLM4VV research project which aimed to automate compiler test code generation for directive-based parallel programming models like OpenMP and OpenACC',
        'Published two papers and a poster with IEEE as primary author',
        'Taught two sections of the University of Delaware\'s HPC Vertically-Integrated Projects class which sought to give students experience with HPC clusters',
        'Worked with Perlmutter, Frontier, and Delta AI supercomputers to train and perform experiements with LLMs'
      ],
      technologies: ['Python', 'Transformers', 'HPC', 'Docker', 'Slurm', 'Bash', 'GPUs', 'OpenMP', 'OpenACC'],
    },
  ],
  education: [
    {
      degree: 'B.S. in Computer Science',
      institution: 'University of Delaware',
      location: 'Newark, DE',
      startDate: '2023-08',
      endDate: '2027-05',
    },
  ],
  skills: [
    {
      category: 'Languages',
      skills: ['TypeScript', 'HTML/JS/CSS', 'Python', 'SQL', 'C', 'C++', 'C#', 'Java', 'Go', 'Rust', 'Kotlin', 'Arduino', 'R'],
    },
    {
      category: 'AI + ML',
      skills: ['PyTorch', 'NumPy', 'Transformers', 'HuggingFace', 'Nvidia GPUs', 'Computer Vision', 'RAG']
    },
    {
      category: 'HPC Systems',
      skills: ['Bash', 'Pthreads', 'MPI', 'Slurm', 'OpenMP', 'CUDA', 'GLSL', 'x86 Assembly', 'ARM Assembly']
    },
    {
      category: 'Frontend',
      skills: ['Angular', 'React', 'React Native', 'SCSS', 'Vite'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'PostgreSQL', 'Django', 'Docker', 'REST', 'JWT'],
    },
    {
      category: 'Infrastructure',
      skills: ['AWS', 'CloudFlare', 'GitHub', 'Headscale', 'Tailscale', 'Nginx', 'Samba']
    },
    {
      category: 'Practices',
      skills: ['CI/CD', 'Test-Driven Development', 'Agile/Scrum', 'Code Review', 'Mentoring'],
    },
  ],

  recognitions : [
    {
      title: "Sophomore of the Year Award",
      institution: "UD CIS Department",
      date: "2024-2025",
      location: "University of Delaware"
    },
    {
      title: "Junior of the Year Award",
      institution: "UD CIS Department",
      date: "2025-2026",
      location: "University of Delaware"
    },
    {
      title: "Selected by Dean to Represent UD at NASEC 2025",
      institution: "UD College of Engineering",
      date: "2024",
      location: "U.S. Naval Academy"
    },
    {
      title: "Spoke as a panelist at the Vibe Coding for Science Panel",
      institution: "2025 OpenACC Summit",
      date: "2025",
      location: "Virtual"
    }
  ],

  publications : [
    {
      title: "LLM4VV: Exploring LLM-as-a-Judge for Validation and Verification Testsuites",
      authors: ["Zachariah Sollenberger", 'Jay Patel', 'Christian Munley', 'Aaron Jarmusch', 'Sunita Chandrasekaran'],
      year: '2024',
      DOI: "10.1109/SCW63240.2024.00238",
      conference: "SC24 Workshops",
      pages: "pp.1885-1893",
      summary: "Explored the potential use of Large Language Models (LLMs) for evaluating the correctness of LLM-generated test suites.",
      publisher: "IEEE",
      link: 'https://ieeexplore.ieee.org/document/10820751'
    },
    {
      title: "LLM4VV: Evaluating Cutting-Edge LLMs for Generation and Evaluation of Directive-Based Parallel Programming Model Compiler Tests",
      authors: ["Zachariah Sollenberger", 'Rahul Patel', 'Saieda Ali Zada', 'Sunita Chandrasekaran'],
      year: '2025',
      DOI: "10.1109/HiPC66333.2025.00041",
      conference: "HiPC 2025",
      pages: "pp.333-342",
      summary: "Considered and evaluated a selection of cutting-edge LLMs to determine their potential for parallel code generation and verification.",
      publisher: "IEEE",
      link: 'https://ieeexplore.ieee.org/document/11433358/'
    }
  ],

  resumeFileUrl: undefined,
};
