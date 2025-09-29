import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[rgb(250,243,239)] text-slate-800">
      {/* top gradient divider */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pink-600 via-rose-500 to-orange-400"
      />
      <div className="mx-auto max-w-6xl px-6 py-10 text-center">
        {/* tagline */}
        <p className="text-sm md:text-base">
          Built with <span className="align-middle">❤️</span> by{" "}
          <a
            href="https://www.linkedin.com/in/ruchika-muddinagiri/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold bg-gradient-to-r from-pink-600 to-orange-400 bg-clip-text text-transparent underline-offset-4 hover:underline"
          >
            Ruchika Muddinagiri
          </a>
        </p>

        {/* tech line */}
        <p className="mt-2 text-xs text-slate-600">This website is powered by</p>

        {/* devicons row */}
        <div className="mt-3 flex items-center justify-center gap-5 text-2xl md:text-3xl">
          <i className="devicon-react-original colored" aria-label="React" />
          <i className="devicon-tailwindcss-plain colored" aria-label="Tailwind CSS" />
          <i className="devicon-framer-plain colored" aria-label="Framer Motion" />
          <i className="devicon-javascript-plain colored" aria-label="JavaScript" />
          <i className="devicon-threejs-original text-slate-700" aria-label="Three.js" />
        </div>

        {/* bottom note */}
        <p className="mt-6 text-xs text-slate-600">
          © {new Date().getFullYear()} Ruchika Muddinagiri • All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
