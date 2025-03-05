import React, { createContext, useContext, useEffect, useState } from "react";

// ✅ Create Theme Context
const ThemeContext = createContext<{ theme: string; toggleTheme: () => void } | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark"; // ✅ Default to dark mode
  });

  // ✅ Toggle between light and dark mode
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(newTheme);
  };

  // ✅ Apply theme on initial load
  useEffect(() => {
    document.documentElement.classList.add(theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
