// src/components/ProjectItem.tsx
import React from 'react';
import { Card, CardContent, Typography, Chip, Box, Link } from '@mui/joy';
import { Project } from '../data/projects';

const ProjectItem: React.FC<Project> = ({ title, description, link, techStack }) => {
  return (
    <Box
      sx={{
        perspective: '1000px', // Add perspective for 3D effects
        mb: 4,
      }}
    >
      <Card
        variant="outlined"
        sx={{
          transform: 'rotateY(0deg)',
          transition: 'transform 0.6s ease-in-out',
          '&:hover': {
            transform: 'rotateY(5deg) rotateX(5deg)', // 3D hover effect
            boxShadow: 'lg',
          },
        }}
      >
        <CardContent>
          <Typography level="h3" sx={{ mb: 1, color: 'primary.600', fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography level="body-md" sx={{ mb: 1, color: 'neutral.700' }}>
            {description}
          </Typography>
          {link && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ fontWeight: 'bold', display: 'block', mb: 1, color: 'primary.400' }}
            >
              View Project
            </Link>
          )}
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
            {techStack.map((tech, index) => (
              <Chip
                key={index}
                variant="soft"
                color="neutral"
                size="sm"
                sx={{
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
              >
                {tech}
              </Chip>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProjectItem;
