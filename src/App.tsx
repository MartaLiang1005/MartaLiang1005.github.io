// src/App.tsx
import React from 'react';
import { CssBaseline, Sheet, Typography, Button, Box } from '@mui/joy';
import Navbar from './components/Navbar';
import ProjectItem from './components/ProjectItem';
import EducationItem from './components/EducationItem';
import ExperienceItem from './components/ExperienceItem';
import { projects } from './data/projects';
import { educationList } from './data/education';
import { researchExperiences } from './data/research';
import { experiences } from './data/experiences';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />

      {/* Hero Section */}
      <Sheet
        variant="solid"
        color="primary"
        sx={{
          py: 6,
          textAlign: 'center',
          backgroundImage: `url(/photo.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
        }}
      >
        <Typography level="h1" sx={{ fontSize: '2.5rem', mb: 1 }}>
          Hello, I'm Marta
        </Typography>
        <Typography level="h3" sx={{ fontSize: '1.25rem', mb: 2 }}>
          Software Engineer · Researcher · Tech Enthusiast
        </Typography>
        <Button
        variant="solid"
        color="neutral"
        sx={{ mt: 2 }}
        component="a"
        href="mailto:yl3386@cornell.edu"
        >
        Contact Me
        </Button>

      </Sheet>

      {/* Experiences Section */}
      <Sheet
        id="experiences"
        sx={{
          maxWidth: 900,
          mx: 'auto',
          mt: 4,
          p: 3,
          borderRadius: 8,
          backgroundColor: 'background.surface',
          boxShadow: 'md',
        }}
      >
        <Typography
          level="h2"
          sx={{ mb: 3, textAlign: 'center', textDecoration: 'underline', color: 'primary.600' }}
        >
          Experiences
        </Typography>
        {experiences.map((exp, i) => (
          <ExperienceItem key={i} {...exp} />
        ))}
      </Sheet>


      {/* Projects Section */}
      <Sheet
        id="projects"
        sx={{
          maxWidth: 900,
          mx: 'auto',
          mt: 4,
          p: 3,
          borderRadius: 8,
          backgroundColor: 'background.surface',
          boxShadow: 'md',
        }}
      >
        <Typography
          level="h2"
          sx={{ mb: 3, textAlign: 'center', textDecoration: 'underline', color: 'primary.600' }}
        >
          Projects
        </Typography>
        {projects.map((proj, i) => (
          <ProjectItem key={i} {...proj} />
        ))}
      </Sheet>

      {/* Education Section */}
      <Sheet
        id="education"
        sx={{
          maxWidth: 900,
          mx: 'auto',
          mt: 4,
          p: 3,
          borderRadius: 8,
          backgroundColor: 'background.surface',
          boxShadow: 'md',
        }}
      >
        <Typography
          level="h2"
          sx={{ mb: 3, textAlign: 'center', textDecoration: 'underline', color: 'primary.600' }}
        >
          Education
        </Typography>
        {educationList.map((edu, i) => (
          <EducationItem key={i} {...edu} />
        ))}
      </Sheet>

      {/* Research Section */}
      <Sheet
        id="research"
        sx={{
          maxWidth: 900,
          mx: 'auto',
          mt: 4,
          mb: 4,
          p: 3,
          borderRadius: 8,
          backgroundColor: 'background.surface',
          boxShadow: 'md',
        }}
      >
        <Typography
          level="h2"
          sx={{ mb: 3, textAlign: 'center', textDecoration: 'underline', color: 'primary.600' }}
        >
          Research
        </Typography>
        {researchExperiences.map((res, i) => (
          <ExperienceItem
            key={i}
            title={res.title}
            dateRange={res.dateRange}
            bulletPoints={res.bulletPoints}
            techStack={[]}
          />
        ))}
      </Sheet>

      {/* Simple Footer */}
      <Sheet
        variant="solid"
        color="neutral"
        sx={{
          py: 3,
          textAlign: 'center',
          backgroundColor: 'neutral.plainColor',
        }}
      >
        <Typography level="body-md" sx={{ color: '#fff' }}>
          © {new Date().getFullYear()} Marta Liang. All rights reserved.
        </Typography>
      </Sheet>
    </>
  );
}

export default App;
