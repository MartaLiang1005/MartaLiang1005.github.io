// src/components/EducationItem.tsx
import React from 'react';
import { Card, CardContent, Typography, List, ListItem } from '@mui/joy';
import { Education } from '../data/education';

const EducationItem: React.FC<Education> = ({
  institution,
  degree,
  dateRange,
  bulletPoints,
}) => {
  return (
    <Card variant="outlined" sx={{ mb: 3 }}>
      <CardContent>
        <Typography level="h3" sx={{ mb: 1, color: 'primary.600' }}>
          {institution}
        </Typography>
        <Typography level="body-md" sx={{ fontWeight: 'bold', mb: 1 }}>
          {degree}
        </Typography>
        <Typography level="body-md" sx={{ color: 'neutral.500', mb: 2 }}>
          {dateRange}
        </Typography>
        <List sx={{ listStyle: 'disc', pl: 4 }}>
          {bulletPoints.map((point, index) => (
            <ListItem key={index} sx={{ mb: 1 }}>
              {point}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default EducationItem;
