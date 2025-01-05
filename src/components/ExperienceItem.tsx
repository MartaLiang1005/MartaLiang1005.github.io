// src/components/ExperienceItem.tsx
import React from 'react';
import { Card, CardContent, Typography, List, Box, ListItem, Chip } from '@mui/joy';
interface ExperienceItemProps {
  title: string;
  dateRange: string;
  bulletPoints: string[];
  techStack: string[]
}

/*************  ✨ Codeium Command ⭐  *************/
/******  79df1762-69f7-4dcd-94d5-04780c957e87  *******/
const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  dateRange,
  bulletPoints,
  techStack= [],
}) => {
  return (
    <Card variant="outlined" sx={{ mb: 3 }}>
      <CardContent>
        <Typography level="h3" sx={{ mb: 1, color: 'primary.600' }}>
          {title}
        </Typography>
        <Typography level="body-md" sx={{ color: 'neutral.500', fontWeight: 'bold', mb: 2 }}>
          {dateRange}
        </Typography>
        <List sx={{ listStyle: 'disc', pl: 4 }}>
          {bulletPoints.map((point, index) => (
            <ListItem key={index} sx={{ mb: 1 }}>
              {point}
            </ListItem>
          ))}
        </List>
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

export default ExperienceItem;
