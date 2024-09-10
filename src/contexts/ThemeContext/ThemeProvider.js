import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';
import { checkIsDarkSchemePreferred } from '../../utils/helpers';

export const ThemeProvider = ({
  children,
}) => {
  const [isDark, setIsDark] = useState(checkIsDarkSchemePreferred());

  useEffect(() => {
    const mediaQueryList = window.matchMedia(
      '(prefers-color-scheme: dark)',
    );

    const handleChange = (event) => setIsDark(event.matches);

    setIsDark(mediaQueryList.matches);

    mediaQueryList.addEventListener('change', handleChange);
    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
