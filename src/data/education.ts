// src/data/education.ts
export interface Education {
    institution: string;
    degree: string;
    dateRange: string;
    bulletPoints: string[];
  }
  
  export const educationList: Education[] = [
    {
      institution: 'Cornell University',
      degree: 'B.A. in Computer Science',
      dateRange: 'August 2021 – May 2024 (Early Graduation)',
      bulletPoints: [
        'Relevant Courses: Data Structures, Algorithm Design, Object-Oriented Programming, Large-scale Machine Learning, Cryptography, Operating Systems, Discrete Structures',
        'Dean’s List: Fall 2021, Spring 2022, Spring 2023, Fall 2023, Spring 2024',
        'GPA: 3.83/4.00',
        'Teaching assistant for: Human-Computer Interaction, Discrete Structures, and Operating Systems'
      ],
    },
    {
        institution: 'Cornell University',
        degree: 'MEng in Operations Research and Information Engineering',
        dateRange: 'August 2024 – May 2025 (Expected)',
        bulletPoints: [
          'Relevant Courses: OR tools for Financial Engineering, Game Theory, Monte Carlo Simulations, Data-Driven Marketing',
          'GPA: 4.04/4.00'
        ],
      }
  ];
  