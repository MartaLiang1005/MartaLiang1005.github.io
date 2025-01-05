import React from 'react';
import { Box, Typography, LinearProgress, Sheet } from '@mui/joy';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'React', level: 80 },
  { name: 'Machine Learning', level: 75 },
  { name: 'C++', level: 70 },
  { name: 'Kotlin', level: 65 },
];

const SkillProgress = () => {
  return (
    <Sheet
      sx={{
        maxWidth: 900,
        mx: 'auto',
        my: 4,
        p: 3,
        borderRadius: 8,
        backgroundColor: 'background.surface',
        boxShadow: 'md',
      }}
    >
      <Typography level="h2" sx={{ mb: 3, textAlign: 'center', color: 'primary.600' }}>
        My Skills
      </Typography>
      {skills.map((skill, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Typography level="h4" sx={{ mb: 1, color: 'neutral.800' }}>
            {skill.name}
          </Typography>
          <LinearProgress
            variant="soft"
            value={skill.level}
            sx={{
              '--LinearProgress-thickness': '10px',
              '--LinearProgress-radius': '10px',
              mb: 1,
            }}
          />
          <Typography level="body-md" sx={{ color: 'neutral.500' }}>
            Proficiency: {skill.level}%
          </Typography>
        </Box>
      ))}
    </Sheet>
  );
};

export default SkillProgress;
