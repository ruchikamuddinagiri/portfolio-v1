import React from "react";
import { useEffect } from "react";
import { Chrono } from "react-chrono";
import { motion } from "framer-motion";
import mobileDevelopmentImage from "./assets/mobile_development.gif";
import research from "./assets/research.gif";
import lti from "./assets/lti.avif";
import intern from "./assets/intern.gif";
import gssoc from "./assets/gssoc.gif";
import swoc from "./assets/swoc.avif";
import gsocextended from "./assets/gsocextended.gif";
import gra from "./assets/gra.png";
import Navbar from "./Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";

const About: React.FC = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    
    <div className="w-screen min-h-screen text-white">
      <Navbar /> {/* ✅ Navbar added */}
      {/* Content Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <motion.h1
          className="text-4xl font-bold mb-6 mt-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>

        <motion.p
          className="text-lg max-w-3xl text-center text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          I have close to 3 years of experience working on building websites, mobile applications, ETL pipelines, and leveraging AI to generate insights. I have wandered all around the stack, and here is my journey outlined for you in detail!
        </motion.p>

        {/* ✅ Timeline Section */}
        <div className="w-full max-w-5xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white"
          >
            <Chrono
              items={[
                {
                  title: "June 2024 - Present",
                  cardTitle: "Software Engineer @ KLC Group LLC",
                  cardSubtitle:
                    "🧑‍💻 Building an Android app 📱 using Kotlin to securely lock and unlock NVMe disks 💾",
                  media: {
                    type: "IMAGE",
                    source: {
                      url: mobileDevelopmentImage,
                    },
                  },
                },
                {
                  title: "August 2023 - May 2024",
                  cardTitle: "Graduate Research Assistant",
                  cardSubtitle:
                    "Worked at Clemson University's DRIVE Lab to build accessible web and mobile applications",
                  media: {
                    type: "IMAGE",
                    source: {
                      url: gra,
                    },
                  },
                },
                {
                  title: "May 2023 - August 2023",
                  cardTitle: "Software Engineering Intern @ Pangea Cyber Corporation",
                  cardSubtitle: "Worked on building cloud infrastructure for company microservices",
                  media: {
                    type: "IMAGE",
                    source: {
                      url: intern,
                    },
                  },
                },
                {
                  title: "August 2022 - May 2023",
                  cardTitle: "Graduate Research Assistant",
                  cardSubtitle:
                    "Developed a data collection website for the Clemson Box Turtle Project",
                  media: {
                    type: "IMAGE",
                    source: {
                      url: research,
                    },
                  },
                },
                {
                  title: "August 2020 - July 2022",
                  cardTitle: "Software Engineer - Data @ LTIMindtree",
                  cardSubtitle:
                    "Worked on building ETL pipelines using IBM Cognos TM1 and forecasting and planning activities in IBM Cognos Planning Analytics Workspace (PAW).",
                  media: {
                    type: "IMAGE",
                    source: {
                      url: lti,
                    },
                  },
                },
                {
                  title: "March 2021 - June 2021",
                  cardTitle: "Mentor @ Girlscript Summer of Code",
                  cardSubtitle:
                    "Mentored students on building a diversity-centric web application and led the development of the project",
                  media: {
                    type: "IMAGE",
                    source: {
                      url: gssoc,
                    },
                  },
                },
                {
                  title: "December 2020 - February 2020",
                  cardTitle: "Open Source Developer @ Script Winter of Code",
                  cardSubtitle:
                    "Worked on frontend development of a SCRUM tool for project management",
                  media: {
                    type: "IMAGE",
                    source: {
                      url: swoc,
                    },
                  },
                },
                {
                  title: "August 2020 - November 2020",
                  cardTitle: "Open Source Developer @ GirlScript Summer of Code",
                  cardSubtitle:
                    "Built the front-end and back-end of a web application targeting inclusivity of diverse groups",
                  media: {
                    type: "IMAGE",
                    source: {
                      url: gsocextended,
                    },
                  },
                },
              ]}
              mode="VERTICAL_ALTERNATING"
              disableToolbar={true}
              theme={{
                primary: "#00FF7F", // ✅ Neon Green for timeline & markers
                secondary: "#000000", // ✅ Fully black background
                cardBgColor: "#4B4B4B", // ✅ Dark Gray for modern look
                cardForeColor: "#FFFFFF", // ✅ Pure White text for readability
                titleColor: "#00FF7F", // ✅ Neon Green for highlighted titles
                cardDetailsColor: "#FFFFFF", // ✅ Pure White for details
                nestedCardDetailsColor: "white",
                cardTitleColor: "#000000",
                detailsColor: "#FFFFFF",
              }}
            />
          </motion.div>
        </div>

        {/* ✅ Back Button */}
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default About;
