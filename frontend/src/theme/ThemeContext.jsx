import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const themes = {
  light: {
    background: '#f5f5f5',
    card: '#fff',
    text: '#222',
    accent: '#1976d2',
  },
  dark: {
    background: '#181a20',
    card: '#222',
    text: '#f5f5f5',
    accent: '#61dafb',
  },
};

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('dark');
  const toggleTheme = () => setMode(mode === 'dark' ? 'light' : 'dark');
  return (
    <ThemeContext.Provider value={{ theme: themes[mode], mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
