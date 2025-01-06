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
      description:
        'Created a personal website using React, MUI Joy, and TypeScript to showcase my projects and experiences.',
      link: 'https://github.com/MartaLiang1005/MartaLiang1005.github.io',
      techStack: ['React', 'TypeScript', 'MUI Joy'],
    },
    {
      title: 'Calorie Counter App',
      description:
        'Developed RESTful APIs using Java to handle calorie search requests, user authentication, and database interactions. Built a browser-based graphical front end in Kotlin to support user interactions.',
      link: 'https://github.com/MartaLiang1005/Calories-APP',
      techStack: ['Java', 'Kotlin', 'MySQL', 'REST API'],
    },
    {
      title: 'OCaml Casino Simulator',
      description:
        'Implemented Money, Slot-machine, and Roulette system and functions using OCaml.',
      link: 'https://github.com/MartaLiang1005/Casino-Simulator',
      techStack: ['OCaml','Java','Unix'],
    },
  ];
  