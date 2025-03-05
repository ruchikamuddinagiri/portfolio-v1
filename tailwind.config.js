/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        fontFamily: {
          pixel: ["Press Start 2P", "cursive"], // Add pixel-style fonts
        },
        
      },
    },
    plugins: [],
  };
  