import { motion } from "framer-motion";
import TypingEffect from "react-typing-effect";
import me from "./assets/me.jpg"; // ✅ Import your image file

const Home: React.FC = () => {
    return (
      <div className="w-screen min-h-screen text-gray-100 flex flex-col items-center justify-center pointer-events-none">
        <motion.div
  className="relative z-10 flex flex-col items-center text-center mt-20"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  {/* ✅ New Flex Container */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-8">
    
    {/* Left Side: Profile Picture */}
    <div className="flex-shrink-0">
      <img
        src={me}   // ✅ Put your actual image path
        alt="Ruchika Profile"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-pink-300"
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
    </div>

  </div>

  {/* Sub Text */}
  <p className="text-lg md:text-xl text-black max-w-3xl">
    I Build Scalable Web, Mobile & AI Applications
  </p>
</motion.div>


  
        
      </div>
    );
  };

export default Home;
