// src/data/experiences.ts

export const experiences = [
  {
    category: 'Start-up Co-op',
    title: 'Co-op Web Engineer at Next Play',
    dateRange: 'August 2024 – October 2024',
    link: 'https://dev-frontend.nextplayfantasy.com/',
    bulletPoints: [
      'Implemented and maintained the website using TypeScript for development and AWS service for database. Implemented the Personal Information and Login & Security page.',
      'Contributed to the QA tests and debugging process for the prototype delivery.',
    ],
    techStack: ['TypeScript', 'React', 'AWS', 'HTML/CSS', 'REST API'],
  },
  {
    category: 'Research Project',
    title: 'Dashboard Web Developer at Cornell University',
    dateRange: 'June 2023 – May 2024',
    bulletPoints: [
      'Developed an internal website using ReactJS to facilitate professor Elizabeth Johnson’s research.',
      'Contributed to the redesign of the researcher dashboard user interface, improving modularity and clarity using TypeScript @mui/joy library. Independently developed Login and DemographicData hooks.',
      'Led cross-functional team meetings to synchronize implementation details and align the UI for the mobile and browser-based versions.',
      'Implemented front-end integration and connected the interface to the backend database.',
    ],
    techStack: ['TypeScript', 'React', 'MangoDB', 'REST API'],

  },
  {
    category: 'Summer Intern',
    title: 'Quantitative Researcher Intern at CICC',
    dateRange: 'June 2024 – August 2024',
    bulletPoints: [
      'Engineered data pipelines to aggregate stock data into industry factors using Python and Pandas.',
      'Utilized regular regression models, LSTM, and GRU to predict industry performance, achieving a 30% reduction in MSE through cross-validation.',
      'Conducted backtesting of industry rotation strategies using historical industry price data and visualized results with Matplotlib, with the best factor achieving 18% alpha and less than 4% maximum drawdown.',
    ],
    techStack: ['Python', 'gplearn', 'Tensorflow', 'PyTorch'],

  },
  {
    category: 'Summer Intern',
    title: 'Quantitative Developer Intern at TechSharpe',
    dateRange: 'June 2023 – August 2023',
    bulletPoints: [
      'Developed and integrated a platform for visualizing high-frequency trading indicators with role-based access control using Django and HTML/CSS. Used across the company.',
      'Designed outlier detection and risk management modules in Python, unifying the system for reporting anomalous trades by synthesizing existing pipelines with outlier data streams.',
      'Enhanced data storage and querying efficiency in MySQL, reducing processing time by approximately 40 seconds.',
      'Applied test-driven development by creating unit and integration tests using Pytest.',
    ],
    techStack: ['Python', 'Django', 'MySQL'],
  }
];
