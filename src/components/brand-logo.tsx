import React from "react";

interface BrandLogoProps {
  variant?: "full" | "icon" | "compact" | "footer";
  className?: string;
}

export default function BrandLogo({ variant = "full", className = "" }: BrandLogoProps) {
  // SVG Icon dimensions: viewBox="0 0 64 36"
  const logoIcon = (
    <svg
      viewBox="0 0 64 36"
      className="h-full w-auto select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="bubbleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1677FF" />
          <stop offset="100%" stopColor="#00E5FF" />
        </linearGradient>
        <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1677FF" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Chat bubble outline (Concept 02) */}
      <path
        d="M 19 6 C 11.27 6 5 11.37 5 18 C 5 21.36 6.59 24.37 9.16 26.54 L 8 31 L 13 29.5 C 14.78 30.46 16.82 31 19 31 C 26.73 31 33 25.63 33 18 C 33 11.37 26.73 6 19 6 Z"
        stroke="url(#bubbleGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#0B1220"
      />

      {/* Three conversation dots */}
      <circle cx="13" cy="18" r="1.5" fill="#00E5FF" />
      <circle cx="19" cy="18" r="1.5" fill="#00E5FF" />
      <circle cx="25" cy="18" r="1.5" fill="#00E5FF" />

      {/* Circuit paths (Concept 02 Data Flow) */}
      {/* Trace 1: Top (Up & Right) */}
      <path
        d="M 31 13 L 38 10 L 46 10"
        stroke="url(#circuitGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="46" cy="10" r="2" fill="#00E5FF" />

      {/* Trace 2: Upper middle (Straight right) */}
      <path
        d="M 33 16.5 L 42 14.5 L 51 14.5"
        stroke="url(#circuitGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="51" cy="14.5" r="2" fill="#00E5FF" />

      {/* Trace 3: Lower middle (Straight right) */}
      <path
        d="M 33 19.5 L 40 21.5 L 49 21.5"
        stroke="url(#circuitGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="49" cy="21.5" r="2" fill="#00E5FF" filter="url(#logoGlow)" />

      {/* Trace 4: Bottom (Down & Right) - Hot Lead glowing dot */}
      <path
        d="M 31 23 L 37 26.5 L 44 26.5"
        stroke="url(#circuitGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="44" cy="26.5" r="2.5" fill="#FFB020" filter="url(#logoGlow)" />
    </svg>
  );

  if (variant === "icon") {
    return <div className={`h-12 w-[85px] shrink-0 ${className}`}>{logoIcon}</div>;
  }

  return (
    <div className={`flex items-center space-x-3.5 shrink-0 ${className}`}>
      {/* Icon portion */}
      <div className={variant === "compact" ? "h-9 w-16" : variant === "footer" ? "h-14 w-24" : "h-12 w-[85px]"}>
        {logoIcon}
      </div>

      {/* Text lockup portion */}
      <div className="flex flex-col text-left">
        <span
          className={`font-sans font-extrabold tracking-normal leading-none text-white ${
            variant === "compact" ? "text-lg sm:text-xl" : variant === "footer" ? "text-3xl" : "text-2xl sm:text-[28px]"
          }`}
        >
          Alex Minh{" "}
          <span className="bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] bg-clip-text text-transparent ml-1">
            AI
          </span>
        </span>
        {variant === "footer" && (
          <span className="text-[10px] text-[#8A94A6] tracking-wider uppercase font-bold mt-2">
            Website AI • Chatbot AI • Form nhận khách
          </span>
        )}
      </div>
    </div>
  );
}
