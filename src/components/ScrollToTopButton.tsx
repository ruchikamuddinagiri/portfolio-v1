import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <motion.button
        onClick={scrollToTop}
        className="pointer-events-auto fixed bottom-6 right-6 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-500 focus:ring-4 focus:ring-teal-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowUp size={20} />
      </motion.button>
    )
  );
};

export default ScrollToTopButton;
