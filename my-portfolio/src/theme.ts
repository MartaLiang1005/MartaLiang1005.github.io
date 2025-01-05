// src/theme.ts
import { extendTheme } from '@mui/joy/styles';

// Example brand colors from your original design
const brandColors = {
  primary: {
    50: '#FCE7F7',
    100: '#F8C7EE',
    200: '#F199E1',
    300: '#EB6BD3',
    400: '#E449C9',
    500: '#c253b1', // darker pink/purple
    600: '#AF4EA2',
    700: '#993F8A',
    800: '#7A3270',
    900: '#52214B',
  },
  pinkBackground: '#fb95f7',
  lightText: '#efadee',
  buttonHover: '#ee8bd7',
};

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          ...brandColors.primary,
          // MUI Joy uses `.plain`, `.soft`, `.solid` variants, etc.
          solidBg: brandColors.primary[500],
          solidHoverBg: brandColors.primary[600],
          solidColor: '#fff',
        },
        background: {
          // Page background
          body: brandColors.pinkBackground,
          // Cards, sheets, etc.
          surface: '#fff',
        },
      },
    },
  }
});

export default theme;
