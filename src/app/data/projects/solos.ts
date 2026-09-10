import { Project } from '../../models/project.model';

// COPY THIS FILE to create a new project entry.
// Rename it to something like `my-cool-app.ts`, fill in the fields,
// then import + add it to the `projects` array in `index.ts`.

export const solos: Project = {
  slug: 'sol-os',
  name: 'SolOS: 32-bit x86 OS Built from Scratch',
  tagline: '32-bit x86 bootloader, kernel, and operating system, all built entirely from scratch and with zero dependecies.',
  description:
    `SolOS is a kernel and operating system written for the x86 architecture that operates in 32-bit mode. It was built \
    as a passion project and to help me learn more about how modern computer systems actually operate. In order to get \
    a better understanding of everything that goes on at the lowest levels of operation, I decided to build the project \
    with no libraries or dependencies, and to write an original implementation for as many features and functionalities \
    as I could. The resulting system is able to operate in VGA Text mode, with virtual memory active. It operates on the \
    FAT12 file system, and reads/writes data to said file system on a virtual floppy disk (chosen for bootloading purposes). \
    It can load executable files that are in ELF32 format, and launch them as processes with their own virtual address space. \
    These processes run in round-robin fashion with task switching. The entire process is simulated with QEMU, but the OS \
    would work on a real computer that was configured with at least an i386 CPU and a floppy disk drive.`,
  technologies: ['C', 'x86', 'Make', 'Assembly', 'QEMU', 'Emulation', 'Systems Programming', 'FAT12', 'ELF32', 'Cross-Compilation'],
  githubUrl: 'https://github.com/Xachaeus/SolOS-x86-Operating-System-from-Scratch',
  links: [],
  highlights: [
    {
      title: 'Program Loading',
      description: 
        `The repository includes a special static library that enables programs to be cross-compiled for use with SolOS. This library \
        defines several system calls and maps them to an appropriate interrupt structure for SolOS (which is designed to mimic the Linux \
        system calling convention). These compiled binaries can then be loaded into the virtual floppy disk image that SolOS reads from. \
        SolOS can then read the executable file, parse through the ELF32 fields, create a process object for the executable, and run it \
        alongside other programs in round-robin fashion.`
    },
    {
      title: 'Custom Bootloader',
      description: 
        `I wrote a custom, dedicated bootloader for SolOS in order to understand exactly how code begins running after boot. The bootloader is \
        two-stage, with the first stage only loading the second stage from the floppy disk and passing control to it, and the second stage \
        loading the kernel and putting the CPU into 32-bit Protected Mode. The reason a virtual floppy was chosen instead of a virtual hard disk \
        was simply because the first stage of the bootloader can be 510 bytes long if it is read from a floppy, but it can only be 446 bytes long if \
        it is read from a hard disk. The small size of either option meant that writing the bootloader directly in assembly was required, but having \
        64 extra bytes to use made it easier to write the FAT12 driver required to load the second stage.`
    }
  ],
  conciseHighlights: [
    {
      title: 'No Dependencies',
      description: 'Built entirely from scratch. Utilizes absolutely zero dependencies and provides custom libraries to cross-compile for SolOS'
    },
    {
      title: 'Program Execution',
      description: 'Capable of loading ELF32 binaries, giving it its own virtual address space, and executing multiple processes at once in round-robin fashion'
    },
    {
      title: 'Custom Bootloader',
      description: 'Includes custom two-stage bootloader, built to help me get a better understanding of the boot process'
    }
  ],
  date: '2026-03-18',
  featured: true,
  status: 'active',
};
