import React from "react";

type Props = { size?: number; className?: string; title?: string };

const Logo: React.FC<Props> = ({ size = 48, className, title = "Ruchika Monogram" }) => {
  return (
    <div className={`relative inline-block ${className || ""}`} style={{ width: size, height: size }}>
      {/* soft halo */}
      <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 opacity-40 blur-md pointer-events-none" />
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        role="img"
        aria-label={title}
        className="relative block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="rg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>

        {/* gradient ring */}
        <circle cx="24" cy="24" r="21" fill="none" stroke="url(#rg)" strokeWidth="3" />

        {/* centered RM text (uses available fonts on page) */}
        <text
          x="24"
          y="28"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="18"
          fontWeight="800"
          fontFamily="Poppins, Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
          fill="#ffffff"
          letterSpacing="1"
        >
          RM
        </text>
      </svg>
    </div>
  );
};

export default Logo;
