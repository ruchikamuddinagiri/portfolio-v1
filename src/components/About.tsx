
import React, { useEffect } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import ScrollToTopButton from "./ScrollToTopButton";

import mobileDevelopmentImage from "../assets/mobile_development.gif";
import research from "../assets/research.gif";
import lti from "../assets/lti.avif";
import intern from "../assets/intern.gif";
import gssoc from "../assets/gssoc.gif";
import swoc from "../assets/swoc.avif";
import gsocextended from "../assets/gsocextended.gif";
import gra from "../assets/gra.png";

const WorkExperience: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const timelineItems = [
    {
      date: "June 2024 - Present",
      title: "Software Engineer @ KLC Group LLC",
      subtitle: "🧑‍💻 Building an Android app 📱 using Kotlin to securely lock and unlock NVMe disks 💾",
      image: mobileDevelopmentImage,
      url: "https://www.klc-group.com/",
    },
    {
      date: "August 2022 - May 2023",
      title: "Graduate Research Assistant",
      subtitle: "Developed a data collection website for the Clemson Box Turtle Project",
      image: research,
      url: "https://www.clemson.edu/",
    },
    {
      date: "August 2023 - May 2024",
      title: "Graduate Research Assistant",
      subtitle: "Worked at Clemson University's DRIVE Lab to build accessible web and mobile applications",
      image: gra,
      url: "https://drive.clemson.edu/",
    },
    {
      date: "May 2023 - August 2023",
      title: "Software Engineering Intern @ Pangea Cyber Corporation",
      subtitle: "Built cloud infrastructure for company microservices",
      image: intern,
      url: "https://pangea.cloud",
    },
    {
      date: "August 2020 - July 2022",
      title: "Software Engineer - Data @ LTIMindtree",
      subtitle: "Built ETL pipelines using IBM Cognos TM1 and forecasting and planning activities.",
      image: lti,
      url: "https://www.ltimindtree.com/",
    },
    {
      date: "March 2021 - June 2021",
      title: "Mentor @ Girlscript Summer of Code",
      subtitle: "Mentored students on building a diversity-centric web application and led development",
      image: gssoc,
      url: "https://gssoc.girlscript.tech/",
    },
    {
      date: "December 2020 - February 2020",
      title: "Open Source Developer @ Script Winter of Code",
      subtitle: "Frontend development of a SCRUM tool for project management",
      image: swoc,
      url: "https://winterofcode.com/",
    },
    {
      date: "August 2020 - November 2020",
      title: "Open Source Developer @ GirlScript Summer of Code",
      subtitle: "Built a fullstack inclusivity platform for diverse communities",
      image: gsocextended,
      url: "https://gssoc.girlscript.tech/",
    },
  ];

  return (
    <div className="pointer-events-auto lg:pointer-events-none w-screen min-h-screen text-gray-900">
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">

        {/* Gradient Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-10 bg-gradient-to-r from-pink-600 to-orange-400 bg-clip-text text-transparent"
          style={{ WebkitTextStroke: '1px rgba(0,0,0,0.4)' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg max-w-3xl text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          I have close to 3 years of experience building web & mobile applications, ETL pipelines, and AI-based solutions. Here's my journey!
        </motion.p>

        {/* Timeline */}
        <div className="w-full max-w-5xl mb-12 ">
          <VerticalTimeline lineColor="#ffc0cb">
            {timelineItems.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                date={item.date}
                dateClassName="text-pink-800 font-semibold"
                contentStyle={{
                  background: "#2a2a2a",
                  color: "#ffe4ec",
                  border: "1px solid #ffc0cb",
                  borderRadius: "12px",
                  padding: 0,
                  overflow: "visible",
                }}
                contentArrowStyle={{ borderRight: "7px solid #ffc0cb" }}
                iconStyle={{ background: "#ffc0cb", color: "#fff" }}
                className = "pointer-events-auto"
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="p-6 rounded-lg transition-shadow duration-300 flex flex-col items-center text-center"
                  >
                    <div className="p-[3px] rounded-full bg-gradient-to-tr from-pink-300 to-orange-400 mb-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-24 object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-[#ffc0cb]">{item.title}</h3>
                    <h4 className="text-lg text-[#ffe4ec] mt-2">{item.subtitle}</h4>
                  </motion.div>
                </a>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        <ScrollToTopButton />

      </div>
    </div>
  );
};

export default WorkExperience;