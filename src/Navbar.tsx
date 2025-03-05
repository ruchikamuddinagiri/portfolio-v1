import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const location = useLocation(); // ✅ Get current page route

  // ✅ Function to check if link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-black bg-opacity-30 backdrop-blur-lg shadow-lg border-b border-green-400/50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className={`text-white text-lg font-semibold transition duration-300 ${
                isActive("/journey") ? "text-green-400 border-b-2 border-green-400" : "hover:text-green-400"
              }`}
            >
              Home
            </Link>
          </motion.div>

          {/* Left: My Journey */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/about"
              className={`text-white text-lg font-semibold transition duration-300 ${
                isActive("/journey") ? "text-green-400 border-b-2 border-green-400" : "hover:text-green-400"
              }`}
            >
              My Journey
            </Link>
          </motion.div>

          {/* Center: My Work */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/projects"
              className={`text-white text-lg font-semibold transition duration-300 ${
                isActive("/projects") ? "text-green-400 border-b-2 border-green-400" : "hover:text-green-400"
              }`}
            >
              My Work
            </Link>
          </motion.div>

          {/* Right: Contact Me */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className={`text-white text-lg font-semibold transition duration-300 ${
                isActive("/contact") ? "text-green-400 border-b-2 border-green-400" : "hover:text-green-400"
              }`}
            >
              Contact Me
            </Link>
          </motion.div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
