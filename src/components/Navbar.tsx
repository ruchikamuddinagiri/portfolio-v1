// import React from "react";
// import { motion } from "framer-motion";

// const Navbar: React.FC = () => {
//   return (
// <nav className="pointer-events-auto fixed top-0 left-0 w-full z-40 bg-gradient-to-r from-pink-500 to-orange-400 backdrop-blur-lg shadow-lg border-b border-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16 space-x-6">

//           {/* Home */}
//           <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
//               <a
//                 href="#home"
//                 className="text-gray-800 text-lg font-semibold transition duration-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-400 hover:bg-clip-text hover:text-transparent"
//               >
//                 Home
//               </a>
//             </motion.div>



//           {/* My Journey */}
//           <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
//             <a
//               href="#about"
//               className="text-gray-800 text-lg font-semibold transition duration-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-400 hover:bg-clip-text hover:text-transparent"
//               >
//               My Journey
//             </a>
//           </motion.div>

//           {/* My Work */}
//           <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
//             <a
//               href="#projects"
//               className="text-gray-800 text-lg font-semibold transition duration-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-400 hover:bg-clip-text hover:text-transparent"
//               >
//               My Work
//             </a>
//           </motion.div>

//           {/* Contact Me */}
//           <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
//             <a
//               href="#contact"
//               className="text-gray-800 text-lg font-semibold transition duration-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-400 hover:bg-clip-text hover:text-transparent"
//               >
//               Let's Talk
//             </a>
//           </motion.div>

//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="pointer-events-auto fixed top-0 left-0 w-full z-40 bg-gradient-to-r from-pink-500 to-orange-400 backdrop-blur-lg shadow-lg border-b border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#home"
              className="text-gray-800 text-xl font-bold transition duration-500"
            >
              Ruchika
            </a>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#home"
                className="text-gray-800 text-lg font-semibold transition duration-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-400 hover:bg-clip-text hover:text-transparent"
              >
                Home
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#about"
                className="text-gray-800 text-lg font-semibold transition duration-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-400 hover:bg-clip-text hover:text-transparent"
              >
                My Journey
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#projects"
                className="text-gray-800 text-lg font-semibold transition duration-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-400 hover:bg-clip-text hover:text-transparent"
              >
                My Work
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#contact"
                className="text-gray-800 text-lg font-semibold transition duration-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-400 hover:bg-clip-text hover:text-transparent"
              >
                Let's Talk
              </a>
            </motion.div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
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
        <div className="md:hidden bg-gradient-to-r from-pink-500 to-orange-400 backdrop-blur-lg shadow-lg border-t border-white">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 text-lg font-semibold transition duration-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-400 hover:bg-clip-text hover:text-transparent"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 text-lg font-semibold transition duration-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-400 hover:bg-clip-text hover:text-transparent"
            >
              My Journey
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 text-lg font-semibold transition duration-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-400 hover:bg-clip-text hover:text-transparent"
            >
              My Work
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 text-lg font-semibold transition duration-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-400 hover:bg-clip-text hover:text-transparent"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

