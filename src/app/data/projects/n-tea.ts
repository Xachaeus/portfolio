import { Project } from '../../models/project.model';

export const nTea: Project = {
  slug: 'n-tea',
  name: 'N-TEA: Non-Trivial Educational Architecture',
  tagline: 'A custom 16-bit computer architecture with its own assembler and emulator, built entirely as a single-page browser app.',
  description:
    "N-TEA (Non-Trivial Educational Architecture) started as a summer project to deepen my understanding of how " +
    "computer architectures actually work, and grew into a full custom instruction set with a browser-based " +
    "assembler and emulator to run programs written for it. The page is split into panels for writing N-TEA " +
    "assembly, viewing the preprocessed and resolved intermediate output, viewing the final binary, and running " +
    "the emulator itself. The assembler works in stages: it prepends a small OS to the start of every program, " +
    "strips comments and decodes constants during preprocessing, expands pseudo-instructions that don't map " +
    "directly to hardware, resolves aliases, and then runs a resolver pass that replaces label references with " +
    "concrete branch targets before finally translating everything one-to-one into binary. The emulator simulates " +
    "a full 16-bit machine underneath that binary -- 32 registers, 64 KiB of RAM, a dedicated flag register, and " +
    "a 32-bit I/O bus -- and boots a minimal OS that launches the user's program, manages heap allocation, and " +
    "halts execution once the bus receives the value 0xffff. Programs can be stepped one instruction at a time, " +
    "with live views of the next instruction and every register's current signed value, or run to completion.",
  technologies: ['Computer Architecture', 'Assemblers', 'Assembly', 'Emulation', 'Instruction Set Design'],
  githubUrl: 'https://github.com/Xachaeus/Personal-Portfolio/tree/main/College%20Projects/N-TEA',
  links: [
    {
      label: 'Live Emulator',
      url: 'https://html-preview.github.io/?url=https://github.com/Xachaeus/Personal-Portfolio/blob/main/N-TEA/index.html',
      icon: 'demo',
    },
    {
      label: 'N-TEA Specification',
      url: 'https://docs.google.com/document/d/1tEcc_vdRTd_nN5Cux7oWXvK_KLFdmpyIQ8oaS4kIMKE/edit?usp=sharing',
      icon: 'docs',
    },
  ],
  highlights: [
    {
      title: 'Multi-Stage Custom Assembler',
      description:
        'N-TEA assembly goes through a full pipeline before it becomes binary: an OS stub is prepended to the ' +
        'program, comments are stripped and constants decoded during preprocessing, pseudo-instructions without ' +
        'direct hardware equivalents are expanded, aliases are resolved, and a dedicated resolver pass rewrites ' +
        'every label reference into a concrete branch target before the final one-to-one translation into binary.',
    },
    {
      title: 'From-Scratch Emulator',
      description:
        'The emulator simulates the full N-TEA machine -- 32 registers, 64 KiB of RAM, a specialized flag ' +
        'register, and a 32-bit I/O bus -- and boots a small bundled operating system that launches the loaded ' +
        'program, manages heap memory, and halts the machine once 0xffff is written to the bus. Execution can be ' +
        'stepped instruction-by-instruction, with live register and next-instruction views, or run continuously.',
    },
  ],
  conciseHighlights: [
    {
      title: 'Custom Instruction Set',
      description: 'Designed its own 16-bit computer architecture from scratch, including registers, flags, and an I/O bus',
    },
    {
      title: 'Full Assembler Pipeline',
      description: 'Preprocesses, resolves, and assembles N-TEA assembly into binary entirely in the browser',
    },
    {
      title: 'Interactive Emulator',
      description: 'Steps or runs assembled programs while showing live register state and the next instruction to execute',
    },
  ],
  date: '2025-01-10',
  featured: false,
  status: 'completed',
};
