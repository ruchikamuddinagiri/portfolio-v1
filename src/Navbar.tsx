import React from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  return (
<nav className="pointer-events-auto fixed top-0 left-0 w-full z-40 bg-pink-300/90 backdrop-blur-lg shadow-lg border-b border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 space-x-6">

          {/* Home */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#home"
                className="text-gray-800 text-lg font-semibold transition duration-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-400 hover:bg-clip-text hover:text-transparent"
              >
                Home
              </a>
            </motion.div>



          {/* My Journey */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#about"
              className="text-gray-800 text-lg font-semibold transition duration-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-400 hover:bg-clip-text hover:text-transparent"
              >
              My Journey
            </a>
          </motion.div>

          {/* My Work */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#projects"
              className="text-gray-800 text-lg font-semibold transition duration-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-400 hover:bg-clip-text hover:text-transparent"
              >
              My Work
            </a>
          </motion.div>

          {/* Contact Me */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#contact"
              className="text-gray-800 text-lg font-semibold transition duration-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-400 hover:bg-clip-text hover:text-transparent"
              >
              Let's Talk
            </a>
          </motion.div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
