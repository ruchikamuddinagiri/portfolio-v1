import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

import boxturtle from "../assets/box-turtle.png";
import remedi from "../assets/remedi.png";
import contentCraft from "../assets/content-craft.png";
import ScrollToTopButton from "./ScrollToTopButton";
import SimpleMarquee from "@/fancy/components/blocks/simple-marquee";


// Tech Logo Mapping (Using Devicon classes)
const techIcons: { [key: string]: string } = {
  "Next.js": "devicon-nextjs-plain",
  "MongoDB": "devicon-mongodb-plain-wordmark",
  "REST APIs": "devicon-express-original",
  "React.js": "devicon-react-original-wordmark",
  "Node.js": "devicon-nodejs-plain-wordmark",
  "DynamoDB": "devicon-dynamodb-plain",
  "AWS S3": "devicon-amazonwebservices-plain-wordmark",
  "Tailwind.css": "devicon-tailwindcss-original",
  "OpenAI": "devicon-openai-plain",
  "Tensorflow.js": "devicon-tensorflow-original",
  "Firestore": "devicon-firebase-plain",
};

// Project Data
const projects = [
    {
        title: "ContentCraft",
        description: "AI powered creative content creation website",
        techStack: ["Next.js", "Tailwind.css", "OpenAI", "Tensorflow.js", "MobileNet", "Firestore"],
        image: contentCraft,
        link: "https://content-craft-one.vercel.app/",
      },
      {
        title: "ReMEDI",
        description: "Accessible website for dyslexic users with reading customizations.",
        techStack: ["Next.js", "DynamoDB", "AWS S3", "Tailwind.css"],
        image: remedi,
        link: "https://re-medi.vercel.app/",
      },
  {
    
    title: "Clemson Box Turtle",
    description: "Dynamic web app to track box turtles' migration patterns.",
    techStack: ["Next.js", "MongoDB"],
    image: boxturtle,
    link: "https://clemsonboxturtles.vercel.app/turtles/allison",
  },
  
  
];

const Projects: React.FC = () => {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
      <div className="relative w-screen min-h-screen text-gray-100">
  
        <div className="relative z-10 flex flex-col items-center pt-24 px-6">
          <motion.h1
              className="text-5xl md:text-6xl font-bold mb-10 bg-gradient-to-r from-pink-600 to-orange-400 bg-clip-text text-transparent"
              style={{ WebkitTextStroke: '1px rgba(0,0,0,0.4)' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Featured Projects
          </motion.h1>
  
          {/* ✅ Projects listed one below the other */}
<div className="w-full overflow-hidden">
  <SimpleMarquee slowdownOnHover repeat={2} className="w-max">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        className="pointer-events-auto w-[300px] p-6 m-4 bg-[#2a2a2a] rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
        whileHover={{ scale: 1.05 }}
      >
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-32 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold text-teal-400">{project.title}</h3>
          <p className="text-gray-300 mt-2 text-sm">{project.description}</p>
          <div className="mt-2 flex flex-wrap gap-1 items-center">
            {project.techStack.map((tech, i) => (
              <i
                key={i}
                className={`${techIcons[tech]} text-white text-2xl`}
              ></i>
            ))}
          </div>
        </a>
      </motion.div>
    ))}
  </SimpleMarquee>
</div>


  
          <ScrollToTopButton />
        </div>
      </div>
    );
};

export default Projects;
