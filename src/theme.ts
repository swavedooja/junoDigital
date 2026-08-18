import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#10B981',
      light: '#34D399',
      dark: '#059669',
      contrastText: '#000000'
    },
    secondary: {
      main: '#F59E0B',
      light: '#FBBF24',
      dark: '#D97706',
      contrastText: '#000000'
    },
    background: {
      default: '#000000',
      paper: '#111827'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#9CA3AF'
    },
    grey: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827'
    },
    common: {
      black: '#000000',
      white: '#FFFFFF'
    }
  },
  typography: {
    fontFamily: '"Poppins", "Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontFamily: '"Space Grotesk", "Poppins", sans-serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      '@media (min-width:600px)': {
        fontSize: '4.5rem',
      },
    },
    h2: {
      fontFamily: '"Space Grotesk", "Poppins", sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: '"Space Grotesk", "Poppins", sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    body1: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.6,
    }
  },
  shape: {
    borderRadius: 16
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 32px',
          fontSize: '1rem',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)',
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(17, 24, 39, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-8px)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            background: 'rgba(31, 41, 55, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            '& fieldset': {
              border: '1px solid rgba(255, 255, 255, 0.1)',
            },
            '&:hover fieldset': {
              border: '1px solid rgba(16, 185, 129, 0.5)',
            },
            '&.Mui-focused fieldset': {
              border: '2px solid #10B981',
            },
          },
        },
      },
    },
  }
});

export default theme;