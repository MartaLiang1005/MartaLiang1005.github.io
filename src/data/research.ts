// src/data/research.ts
export interface Research {
    title: string;
    dateRange: string;
    bulletPoints: string[];
  }
  
  export const researchExperiences: Research[] = [
    {
      title: 'Cornell University, Research Assistant under Professor Zhiru Zhang',
      dateRange: 'August 2023 – May 2024',
      bulletPoints: [
        'Researched an extension to HeteroCL, a Python-based domain-specific language & FPGA-targeted framework',
        'Developed and optimized matrix-operations libraries on HLS kernel',
      ],
    },
  ];
  