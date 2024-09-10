import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';

const Providers = ({ children }) => {
  return (
    <ThemeProvider>
        {children}
    </ThemeProvider>
  );
};

export default Providers;