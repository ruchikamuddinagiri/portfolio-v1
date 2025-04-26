import React from "react";

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Home from "./Home";


// App Component
const App: React.FC = () => {
  return (
    <div className="scroll-smooth text-gray-100 relative">
      <Navbar />

      <section id="home" className="min-h-screen flex items-center justify-center">
        <Home />
      </section>

      <section id="about" className="scroll-smooth min-h-screen flex items-center justify-center">
        <About />
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center">
        <Projects />
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default App;
