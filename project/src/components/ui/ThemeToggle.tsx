import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../../hooks/useDarkMode';

export function ThemeToggle() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      ) : (
        <Moon className="h-5 w-5 text-gray-500" />
      )}
    </button>
  );
}