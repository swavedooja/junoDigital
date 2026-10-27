import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import getTheme from './theme';

// ─── Types ───────────────────────────────────────────────────────────

type ColorMode = 'dark' | 'light';

interface ColorModeContextType {
  mode: ColorMode;
  toggleColorMode: () => void;
}

// ─── Context ─────────────────────────────────────────────────────────

const ColorModeContext = createContext<ColorModeContextType>({
  mode: 'dark',
  toggleColorMode: () => {},
});

/**
 * Hook to access the current color mode and toggle function.
 * Must be used within a ColorModeProvider.
 */
export const useColorMode = () => useContext(ColorModeContext);

// ─── Provider ────────────────────────────────────────────────────────

const STORAGE_KEY = 'juno-theme-mode';

export const ColorModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ColorMode>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored === 'light' || stored === 'dark' ? stored : 'dark';
    } catch {
      return 'dark';
    }
  });

  // Persist preference and set data attribute for CSS selectors
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // localStorage may be unavailable (private browsing, etc.)
    }
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  const colorMode = useMemo<ColorModeContextType>(
    () => ({
      mode,
      toggleColorMode: () => {
        // Briefly add class so the scoped CSS transition fires only during theme switch
        document.body.classList.add('theme-switching');
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
        setTimeout(() => document.body.classList.remove('theme-switching'), 400);
      },
    }),
    [mode]
  );

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
