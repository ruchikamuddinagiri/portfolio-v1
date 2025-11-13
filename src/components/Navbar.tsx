import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";

// Extend Window interface for fluid animation function
declare global {
  interface Window {
    triggerFluidAnimation?: (amount?: number) => void;
  }
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to trigger fluid animation
  const triggerFluidAnimation = () => {
    if (window.triggerFluidAnimation) {
      window.triggerFluidAnimation(6); // Trigger 6 splashes
    }
  };

  //     <nav className="pointer-events-auto fixed top-0 left-0 w-full z-40 bg-gradient-to-r from-pink-500 to-orange-400 backdrop-blur-lg shadow-lg border-b border-white">


  return (
    <nav className="pointer-events-auto fixed top-0 left-0 w-full z-40 bg-gradient-to-r from-pink-50/95 to-orange-50/95 backdrop-blur-lg shadow-lg border-b border-pink-100/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      
      {/* Logo */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <a href="#home" onClick={triggerFluidAnimation} className="flex items-center gap-2">
          <Logo /> {/* Your new SVG logo component */}
          <span className="sr-only">Ruchika</span>
        </a>
      </motion.div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <a href="#home" onClick={triggerFluidAnimation} className="text-gray-700 hover:text-pink-600 text-lg font-medium tracking-wide transition-colors">Home</a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <a href="#overview" onClick={triggerFluidAnimation} className="text-gray-700 hover:text-pink-600 text-lg font-medium tracking-wide transition-colors">Overview</a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <a href="#workexperience" onClick={triggerFluidAnimation} className="text-gray-700 hover:text-pink-600 text-lg font-medium tracking-wide transition-colors">Work Experience</a>
        </motion.div>
        {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <a href="#projects" onClick={triggerFluidAnimation} className="text-gray-700 hover:text-pink-600 text-lg font-medium tracking-wide transition-colors">Projects</a>
        </motion.div> */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <a href="#contact" onClick={triggerFluidAnimation} className="text-gray-700 hover:text-pink-600 text-lg font-medium tracking-wide transition-colors">Let's Talk</a>
        </motion.div>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 hover:text-pink-600 focus:outline-none transition-colors"
        >
          {isOpen ? (
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

    </div>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="md:hidden bg-gradient-to-r from-pink-50/95 to-orange-50/95 backdrop-blur-lg shadow-lg border-t border-pink-100/50">
      <div className="flex flex-col items-center space-y-4 py-4">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <a href="#home" onClick={triggerFluidAnimation} className="text-gray-700 hover:text-pink-600 text-lg font-medium tracking-wide transition-colors">Home</a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <a href="#overview" onClick={triggerFluidAnimation} className="text-gray-700 hover:text-pink-600 text-lg font-medium tracking-wide transition-colors">Overview</a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <a href="#workexperience" onClick={triggerFluidAnimation} className="text-gray-700 hover:text-pink-600 text-lg font-medium tracking-wide transition-colors">Work Experience</a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <a href="#projects" onClick={triggerFluidAnimation} className="text-gray-700 hover:text-pink-600 text-lg font-medium tracking-wide transition-colors">Projects</a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <a href="#contact" onClick={triggerFluidAnimation} className="text-gray-700 hover:text-pink-600 text-lg font-medium tracking-wide transition-colors">Let's Talk</a>
        </motion.div>
      </div>
    </div>
  )}
</nav>

  );
};

export default Navbar;

