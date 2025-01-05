// src/App.tsx
import React from 'react';
import { CssBaseline, Sheet, Typography } from '@mui/joy';
import Navbar from './components/Navbar'; 
import ExperienceItem from './components/ExperienceItem';

function App() {
  return (
    <>
      {/* Normalizes CSS & applies Joy’s baseline */}
      <CssBaseline />
      <Navbar />

      {/* Main content area */}
      <Sheet
        variant="plain"
        sx={{
          maxWidth: 800,
          mx: 'auto',
          my: 4,
          p: 3,
          borderRadius: 8,
          backgroundColor: 'background.surface',
          boxShadow: 'md',
          textAlign: 'center',
        }}
      >
        <Typography level="h1" sx={{ mb: 3 }}>
          Research
        </Typography>

        {/* Example Experience */}
        <ExperienceItem
          title="Cornell University, Research Assistant under Professor Zhiru Zhang"
          dateRange="August 2023 – May 2024"
          bulletPoints={[
            'Researched an extension to HeteroCL, a Python-based domain-specific language & FPGA-targeted framework',
            'Developed and optimized matrix-operations libraries on HLS kernel',
          ]}
        />
      </Sheet>
    </>
  );
}

export default App;
