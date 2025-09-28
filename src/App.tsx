import React from "react";

import WorkExperience from "./components/About";
// import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Overview from "./components/Overview";


// App Component
const App: React.FC = () => {
  return (
    <div className="scroll-smooth text-gray-100 relative">
      <Navbar />

      <section id="home" className="min-h-screen flex items-center justify-center">
        <Home />
      </section>

      <section id="overview" className="scroll-smooth min-h-screen flex items-center justify-center">
        <Overview />
      </section>

      <section id="workexperience" className="scroll-smooth min-h-screen flex items-center justify-center">
        <WorkExperience />
      </section>

      
      {/* <section id="mywork" className="min-h-screen flex items-center justify-center">
        <Projects />
      </section> */}

      <section id="contact" className="min-h-screen flex items-center justify-center">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default App;
