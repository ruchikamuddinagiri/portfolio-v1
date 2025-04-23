import { useEffect } from "react";

declare global {
  interface Window {
    particlesJS: {
      load: (
        id: string,
        path: string,
        callback?: () => void
      ) => void;
    };
  }
}

const ParticlesBackground: React.FC = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS.load('particles-js', '/particles.json', () => {
        console.log('particles.js loaded');
      });
    }
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        backgroundColor: "#1a1a1a",
      }}
    />
  );
};


export default ParticlesBackground;
