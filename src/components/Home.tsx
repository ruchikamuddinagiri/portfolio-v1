import { motion } from "framer-motion";
import TypingEffect from "react-typing-effect";
import me from "../assets/me.png";
import VariableFontCursorProximity from "@/fancy/components/text/variable-font-cursor-proximity"
import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";


const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const texts = ["I ", "build ", "scalable ", "web, ", "mobile ","and ", "AI ", "applications."];
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handlePointerMove = (e: PointerEvent) => {
      console.log("Pointer moving! X:", e.clientX, "Y:", e.clientY);
    };

    container.addEventListener("pointermove", handlePointerMove);

    return () => {
      container.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

    return (
      <div className="w-screen min-h-screen text-gray-100 flex flex-col items-center justify-center pointer-events-none">
        <motion.div
            className="relative z-10 flex flex-col items-center text-center mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* New Flex Container */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-8">
              
              {/* Left Side: Profile Picture */}
              <div className="flex-shrink-0">
                <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-pink-500 via-rose-400 to-orange-400 opacity-40 blur-3xl pointer-events-none" />
                  <img
                    src={me}
                    alt="Ruchika Profile"
                    className="relative w-40 h-60 md:w-80 md:h-100 rounded-full object-cover ring-4 ring-white"
                  />
              </div>

              {/* Right Side: Typing Text */}
              <div className="text-center md:text-left">
                <h1 
                  className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-orange-400 bg-clip-text text-transparent"
                  style={{
                    WebkitTextStroke: '1px rgba(0,0,0,0.4)'
                  }}
                >
                  <TypingEffect text="Hi, I'm Ruchika" speed={70} eraseDelay={99999999} cursor={"|"} />
                </h1>
                {/* Social Icons */}
                <div className="pointer-events-auto flex justify-center md:justify-start gap-6 mt-4">

                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://www.linkedin.com/in/yourlinkedinprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition"
                >
                  <FaLinkedin
                    className="text-3xl transition-all duration-300 text-pink-600 bg-clip-text group-hover:text-orange-400"
                  />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://www.github.com/ruchikamuddinagiri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition"
                >
                  <FaGithub
                    className="text-3xl transition-all duration-300 text-pink-600 bg-clip-text group-hover:text-orange-400"
                  />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="mailto:rrmuddinagiri@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition"
                >
                  <FaEnvelope
                    className="text-3xl transition-all duration-300 text-pink-600 bg-clip-text group-hover:text-orange-400"
                  />
                </motion.a>

                </div>

              </div>

              

            </div>

            {/* Sub Text */}
            <div 
            ref = {containerRef}
            className="description-text pointer-events-auto touch-auto text-lg md:text-xl text-gray-800 max-w-3xl">
            {texts.map((text, i) => (
              <VariableFontCursorProximity
                key={i}
                label={text}
                className={cn("text-xl md:text-3xl lg:text-4xl leading-tight")}
                fromFontVariationSettings="'wght' 400, 'slnt' 0"
                toFontVariationSettings="'wght' 900, 'slnt' -10"
                radius={200}
                containerRef={containerRef}
              />
            ))}
          </div>

          <button
            onClick={() => {
              const nextSection = document.getElementById("myjourney");
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="pointer-events-auto mt-10 px-6 py-3 bg-gradient-to-r from-pink-600 to-orange-400 text-white rounded-lg text-lg font-semibold shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            See My Work ↓
          </button>


        </motion.div>
        
      </div>
    );
  };

export default Home;
