// src/data/projects.ts
export interface Project {
    title: string;
    description: string;
    link?: string; // optional link to GitHub or live demo
    techStack: string[];
  }
  
  export const projects: Project[] = [
    {
      title: 'Personal Portfolio Website',
      description: 'Created a personal website using React, MUI Joy, and TypeScript to showcase my projects and experiences.',
      link: 'https://github.com/MartaLiang1005/my-portfolio',
      techStack: ['React', 'TypeScript', 'MUI Joy']
    },
    {
      title: 'FPGA Accelerator',
      description: 'Developed an FPGA-based accelerator for matrix multiplication, improving performance by 3x.',
      link: 'https://github.com/MartaLiang1005/fpga-accel',
      techStack: ['Verilog', 'HeteroCL', 'Python']
    },
    // ... add more projects
  ];
  