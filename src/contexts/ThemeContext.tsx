import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/** Fallback delay for re-enabling transitions when rAF is unavailable. */
const TRANSITION_UNLOCK_MS = 120;

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // Suppress transitions for the frame the theme class changes on. An
    // in-flight colour transition otherwise holds the previous palette once
    // its dark: rule stops matching, leaving text the same colour as its
    // background until the next reload.
    root.classList.add('theme-switching');
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);

    // rAF never fires in a hidden or throttled tab, which would leave
    // transitions disabled for good, so a timer backs it up.
    const clear = () => root.classList.remove('theme-switching');
    const frame = window.requestAnimationFrame(() => window.requestAnimationFrame(clear));
    const timer = window.setTimeout(clear, TRANSITION_UNLOCK_MS);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};