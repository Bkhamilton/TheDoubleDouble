import React, { createContext, useState, useContext, useEffect } from "react";

// Create a context for the theme
const ThemeContext = createContext();

// Create a custom hook to get the current theme
export const useTheme = () => useContext(ThemeContext);

export default function ThemeProviderWrapper({ children }) {
  const [theme, setTheme] = useState(() => {
    const storedTheme = window.localStorage.getItem("theme");
    return storedTheme !== null ? storedTheme : "light"
  })

  useEffect(() => {
    window.localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  // Create the theme object to pass down to the components
  const themeObj = {
    theme,
    toggleTheme,
  }

  return (
    <ThemeContext.Provider value={themeObj}>
      {children}
    </ThemeContext.Provider>
  );
};