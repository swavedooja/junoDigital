import { createTheme, Theme } from '@mui/material/styles';

// ─── Module Augmentation ─────────────────────────────────────────────
// Extends the MUI Theme with custom design tokens for adaptive surfaces,
// borders, gradients, and shadows that switch between dark/light modes.

interface CustomTokens {
  surface: {
    glass: string;
    glassLight: string;
    card: string;
    cardAlt: string;
    input: string;
  };
  border: {
    subtle: string;
    default: string;
    strong: string;
  };
  gradient: {
    sectionA: string;
    sectionB: string;
  };
  shadow: {
    card: string;
    cardHover: string;
    elevated: string;
  };
  overlay: {
    imageOpacity: number;
  };
}

declare module '@mui/material/styles' {
  interface Theme {
    custom: CustomTokens;
  }
  interface ThemeOptions {
    custom?: CustomTokens;
  }
}

// ─── Theme Factory ───────────────────────────────────────────────────

const getTheme = (mode: 'dark' | 'light'): Theme => {
  const isDark = mode === 'dark';

  // Primary & Secondary palette values (pre-computed for use in overrides)
  const primaryMain = isDark ? '#FFB800' : '#D97706';
  const primaryLight = isDark ? '#FFC933' : '#F59E0B';

  // ── Custom Design Tokens ───────────────────────────────────────────
  const custom: CustomTokens = {
    surface: {
      glass:      isDark ? 'rgba(17, 24, 39, 0.8)'  : 'rgba(255, 255, 255, 0.85)',
      glassLight: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
      card:       isDark ? 'rgba(17, 24, 39, 0.6)'  : 'rgba(255, 255, 255, 0.9)',
      cardAlt:    isDark ? 'rgba(17, 24, 39, 0.5)'  : 'rgba(255, 255, 255, 0.95)',
      input:      isDark ? 'rgba(31, 41, 55, 0.8)'  : 'rgba(243, 244, 246, 0.8)',
    },
    border: {
      subtle:  isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.06)',
      default: isDark ? 'rgba(255, 255, 255, 0.1)'  : 'rgba(0, 0, 0, 0.1)',
      strong:  isDark ? 'rgba(255, 255, 255, 0.2)'  : 'rgba(0, 0, 0, 0.15)',
    },
    gradient: {
      sectionA: isDark
        ? 'linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0%, rgba(17, 24, 39, 0.9) 100%)'
        : 'linear-gradient(180deg, #FAFAFA 0%, #F3F4F6 100%)',
      sectionB: isDark
        ? 'linear-gradient(180deg, rgba(17, 24, 39, 0.9) 0%, rgba(0, 0, 0, 0.95) 100%)'
        : 'linear-gradient(180deg, #F3F4F6 0%, #FAFAFA 100%)',
    },
    shadow: {
      card:      isDark ? '0 20px 40px rgba(0, 0, 0, 0.3)'  : '0 4px 20px rgba(0, 0, 0, 0.08)',
      cardHover: isDark ? '0 20px 40px rgba(0, 0, 0, 0.4)'  : '0 8px 30px rgba(0, 0, 0, 0.12)',
      elevated:  isDark ? '0 25px 50px rgba(0, 0, 0, 0.4)'  : '0 10px 40px rgba(0, 0, 0, 0.1)',
    },
    overlay: {
      imageOpacity: isDark ? 0.12 : 0.06,
    },
  };

  // ── Create Theme ───────────────────────────────────────────────────
  return createTheme({
    palette: {
      mode,
      primary: {
        main: primaryMain,
        light: primaryLight,
        dark: isDark ? '#D97706' : '#B45309',
        contrastText: isDark ? '#000000' : '#FFFFFF',
      },
      secondary: {
        main: isDark ? '#F59E0B' : '#D97706',
        light: isDark ? '#FBBF24' : '#F59E0B',
        dark: isDark ? '#D97706' : '#B45309',
        contrastText: '#000000',
      },
      background: {
        default: isDark ? '#000000' : '#FAFAFA',
        paper: isDark ? '#111827' : '#FFFFFF',
      },
      text: {
        primary: isDark ? '#FFFFFF' : '#1A1A2E',
        secondary: isDark ? '#9CA3AF' : '#4B5563',
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
        900: '#111827',
      },
      divider: custom.border.default,
    },

    custom,

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
      },
    },

    shape: {
      borderRadius: 16,
    },

    // ── Component Overrides (theme-aware) ────────────────────────────
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
              boxShadow: isDark
                ? '0 10px 25px rgba(255, 184, 0, 0.35)'
                : '0 10px 25px rgba(217, 119, 6, 0.25)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            background: custom.surface.glass,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${custom.border.default}`,
            borderRadius: '20px',
            boxShadow: isDark ? 'none' : custom.shadow.card,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'translateY(-8px)',
              border: '1px solid rgba(255, 184, 0, 0.35)',
              boxShadow: custom.shadow.cardHover,
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              background: custom.surface.input,
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              '& fieldset': {
                border: `1px solid ${custom.border.default}`,
              },
              '&:hover fieldset': {
                border: `1px solid rgba(255, 184, 0, 0.5)`,
              },
              '&.Mui-focused fieldset': {
                border: `2px solid ${primaryMain}`,
              },
            },
          },
        },
      },
    },
  });
};

export default getTheme;