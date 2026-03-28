import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

export const DarkModeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-surface dark:bg-surface-dark hover:bg-accent/10 dark:hover:bg-accent/10 transition-all duration-300 group"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <FaMoon className="text-textMuted dark:text-textMuted-dark group-hover:text-accent transition-colors" />
      ) : (
        <FaSun className="text-textMuted dark:text-textMuted-dark group-hover:text-accent transition-colors" />
      )}
    </button>
  );
};