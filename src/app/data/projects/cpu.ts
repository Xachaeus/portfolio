import { Project } from '../../models/project.model';

export const multicyclePipelinedRiscVCpu: Project = {
  slug: 'multicycle-pipelined-risc-v-cpu',
  name: 'Multicycle Pipelined RISC-V CPU',
  tagline: 'A multicycle, pipelined RISC-V CPU designed entirely from individual logic gates in the Digital circuit simulator.',
  description:
    'This project is a RISC-V CPU built from the ground up in Digital, a logic circuit simulator, with every ' +
    "component designed and composed by hand rather than dropped in from a " +
    "pre-made library. Small building blocks like a 1-bit ALU, a 1-bit full adder, and a 1-bit register are " +
    "composed into their full 32-bit counterparts (a 32-bit ALU, a 32-bit register, and a 32-entry register file), " +
    "which are then wired together with a program counter, an immediate generator, dedicated ALU-control and " +
    "control-unit circuits, a format detector and flag parser for decoding instructions, and dual-port ROM/RAM for " +
    "instruction and data memory. The result is a complete multicycle, pipelined, and forwarded CPU capable of executing RISC-V " +
    "instructions, with both a flattened and a hierarchically-organized (\"unpacked\") version of the circuit " +
    "available for inspection.",
  technologies: ['RISC-V', 'Computer Architecture', 'CPU Design'],
  githubUrl: 'https://github.com/Xachaeus/Personal-Portfolio/tree/main/College%20Projects/Multicycle%20Pipelined%20RISC-V%20CPU',
  links: [],
  highlights: [
    {
      title: 'Ground-Up Component Design',
      description:
        'Every major datapath component starts from a single-bit primitive -- a 1-bit ALU, a 1-bit full adder, a ' +
        '1-bit register -- that is then replicated and composed into its full 32-bit version (a 32-bit ALU, a ' +
        '32-bit register, a 32-entry register file). Building the CPU this way, instead of starting from pre-built ' +
        'wide components, forces every carry chain, control line, and bit-width decision to be made explicitly.',
    },
    {
      title: 'Instruction Decode and Control',
      description:
        'A dedicated format detector and flag parser interpret incoming instructions and feed a separate ' +
        'ALU-control and control-unit circuit, which together drive the datapath through each stage of a ' +
        'multicycle, pipelined execution flow -- coordinating the program counter, register file, ALU, and ' +
        'dual-port ROM/RAM as an instruction moves through fetch, decode, execute, and writeback.',
    },
    {
      title: 'Multicycle, Pipelined, and Forwarded',
      description:
        'The CPU is designed to execute instructions in a multicycle, pipelined fashion, with forwarding logic ' +
        'to resolve data hazards. Instructions are fetched, decoded, executed, and written back in overlapping ' +
        'stages, allowing for higher throughput and more efficient use of the datapath components.',
    }
  ],
  conciseHighlights: [
    {
      title: 'Built from Single Bits Up',
      description: '32-bit ALU, register, and register file are all composed from hand-built 1-bit primitives',
    },
    {
      title: 'Multicycle & Pipelined',
      description: 'Custom control and ALU-control circuits drive instructions through a full multicycle, pipelined datapath',
    },
    {
      title: 'Zero Pre-Built Components',
      description: 'Every circuit, from adders to memory addressing, was designed from scratch in the Digital simulator',
    },
  ],
  date: '2026-03-17',
  featured: true,
  status: 'completed',
};
