// Navbar.tsx (using MUI Joy)
import React from 'react';
import { Sheet, Typography, Link } from '@mui/joy';

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
      <Typography level="h2" sx={{ color: 'white' }}>
        Marta's Planet
      </Typography>
      <nav>
        <Link href="/" sx={{ color: '#fff', mx: 1 }}>
          Home
        </Link>
        <Link href="/experiences" sx={{ color: '#fff', mx: 1 }}>
          Experiences
        </Link>
        <Link href="/project-gallery" sx={{ color: '#fff', mx: 1 }}>
          Project Gallery
        </Link>
      </nav>
    </Sheet>
  );
};

export default Navbar;
