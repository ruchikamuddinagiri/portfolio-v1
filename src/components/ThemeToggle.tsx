import React from "react";
import { useTheme } from "../context/ThemeProvider";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 p-2 bg-gray-800 dark:bg-gray-200 rounded-full shadow-lg hover:scale-105 transition z-50"
    >
      {theme === "dark" ? (
        <FaSun className="text-yellow-400 text-xl" />
      ) : (
        <FaMoon className="text-gray-800 text-xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
