import React from "react";
import { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import TypingEffect from "react-typing-effect";


import BubblesBackground from "./BubblesBackground";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";



const Home: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null); // ✅ Reference to the footer

  // ✅ Auto-scroll after 5 seconds
  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      if (footerRef.current) {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 5000); // 5 seconds delay before scrolling

    return () => clearTimeout(scrollTimeout); // Cleanup on unmount
  }, []);

  return (
    <div className="w-screen min-h-screen bg-[#1a1a1a] text-gray-100 flex flex-col items-center justify-center">
      <BubblesBackground />

      {/* ✅ Main Content */}
      <motion.div
        className="flex flex-col items-center text-center mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-100">
          <TypingEffect text="🎮 Hi, I'm Ruchika" speed={70} eraseDelay={99999999} cursor={"|"} />
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
        I Build Scalable Web, Mobile & AI Applications        </p>

        {/* ✅ Buttons */}
        <div className="mt-8 space-x-4">
          <Link to="/about">
            <motion.button
              className="px-8 py-3 bg-teal-600 text-white rounded-lg text-lg shadow-lg hover:bg-teal-500 focus:ring-4 focus:ring-teal-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              My Journey
            </motion.button>
          </Link>
          <Link to="/projects">
            <motion.button
              className="px-8 py-3 bg-teal-600 text-white rounded-lg text-lg shadow-lg hover:bg-teal-500 focus:ring-4 focus:ring-teal-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              My Work
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button
              className="px-8 py-3 bg-teal-600 text-white rounded-lg text-lg shadow-lg hover:bg-teal-500 focus:ring-4 focus:ring-teal-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* ✅ Footer with auto-scroll target */}
      <div ref={footerRef}>
      </div>
    </div>
  );
};


// App Component
const App: React.FC = () => {
  return (
    <>
    
    {/* <BubblesBackground /> */}
    <Router>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    
    </>
  );
};

export default App;
