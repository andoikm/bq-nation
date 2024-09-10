import { createContext } from 'react';

const defaultThemeContext = {
  isDark: false,
  setIsDark: () => {},
};

export const ThemeContext = createContext(defaultThemeContext);
