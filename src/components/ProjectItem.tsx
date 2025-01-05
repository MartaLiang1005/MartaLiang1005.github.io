// src/components/ProjectItem.tsx
import React from 'react';
import { Card, CardContent, Typography, Chip, Box, Link } from '@mui/joy';
import { Project } from '../data/projects';

const ProjectItem: React.FC<Project> = ({ title, description, link, techStack }) => {
  return (
    <Card variant="outlined" sx={{ mb: 3 }}>
      <CardContent>
        <Typography level="h3" sx={{ mb: 1, color: 'primary.600' }}>
          {title}
        </Typography>
        <Typography level="body-md" sx={{ mb: 1 }}>
          {description}
        </Typography>
        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontWeight: 'bold', display: 'block', mb: 1 }}
          >
            View Project
          </Link>
        )}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
          {techStack.map((tech, index) => (
            <Chip key={index} variant="soft" color="neutral" size="sm">
              {tech}
            </Chip>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectItem;
