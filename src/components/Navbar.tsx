// src/components/Navbar.tsx
import React from 'react';
import { Sheet, Typography, Box, Link } from '@mui/joy';

const Navbar: React.FC = () => {
  return (
    <Sheet
      variant="solid"
      color="primary"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 2,
      }}
    >
      <Typography level="h2" sx={{ color: 'white', fontWeight: 'bold' }}>
        Marta Liang-Portfolio
      </Typography>
      <Box component="nav" sx={{ display: 'flex', gap: 2 }}>
        <Link href="#projects" sx={{ color: '#fff', textDecoration: 'none' }}>
          Projects
        </Link>
        <Link href="#education" sx={{ color: '#fff', textDecoration: 'none' }}>
          Education
        </Link>
        <Link href="#research" sx={{ color: '#fff', textDecoration: 'none' }}>
          Research
        </Link>
      </Box>
    </Sheet>
  );
};

export default Navbar;
