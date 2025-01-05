// src/components/ExperienceItem.tsx
import React from 'react';
import { Card, CardContent, Typography, List, ListItem } from '@mui/joy';

interface ExperienceItemProps {
  title: string;
  dateRange: string;
  bulletPoints: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  dateRange,
  bulletPoints,
}) => {
  return (
    <Card variant="outlined" sx={{ my: 2, borderRadius: 8 }}>
      <CardContent>
        <Typography level="h2" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Typography level="body-md" sx={{ mb: 2, fontWeight: 'bold', color: '#555' }}>
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

export default ExperienceItem;
