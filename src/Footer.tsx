import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-700 text-gray-300 py-6 text-center bg-opacity-50 backdrop-blur-lg flex flex-col items-center">
      {/* ✅ Social Icons */}
      

      {/* ✅ Website Info */}
      <p className="text-sm mb-2">

        Built with ❤️ by <a href="https://www.linkedin.com/in/ruchika-muddinagiri/">Ruchika Muddinagiri</a>
      </p>

      {/* ✅ Technologies Used (Using DevIcons) */}
      <p className="text-xs text-gray-400 mb-2">This website is powered by</p>
      <div className="flex space-x-4 text-3xl">
        <i className="devicon-react-original colored"></i> {/* React */}
        <i className="devicon-tailwindcss-plain colored"></i> {/* Tailwind */}
        <i className="devicon-threejs-original"></i> {/* Three.js */}
        <i className="devicon-framer-original colored"></i> {/* Framer Motion */}
        <i className="devicon-javascript-plain colored"></i> {/* JavaScript */}
      </div>
    </footer>
  );
};

export default Footer;
