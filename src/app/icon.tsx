import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0B1220",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "24%",
          border: "12px solid rgba(22, 119, 255, 0.25)",
          padding: "36px",
        }}
      >
        <svg
          viewBox="0 0 64 36"
          style={{ width: "100%", height: "100%" }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Chat bubble outline */}
          <path
            d="M 19 6 C 11.27 6 5 11.37 5 18 C 5 21.36 6.59 24.37 9.16 26.54 L 8 31 L 13 29.5 C 14.78 30.46 16.82 31 19 31 C 26.73 31 33 25.63 33 18 C 33 11.37 26.73 6 19 6 Z"
            stroke="url(#bubbleGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="#0B1220"
          />

          {/* Three conversation dots */}
          <circle cx="13" cy="18" r="2" fill="#00E5FF" />
          <circle cx="19" cy="18" r="2" fill="#00E5FF" />
          <circle cx="25" cy="18" r="2" fill="#00E5FF" />

          {/* Circuit paths */}
          <path
            d="M 31 13 L 38 10 L 46 10"
            stroke="url(#circuitGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="46" cy="10" r="2.5" fill="#00E5FF" />

          <path
            d="M 33 16.5 L 42 14.5 L 51 14.5"
            stroke="url(#circuitGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="51" cy="14.5" r="2.5" fill="#00E5FF" />

          <path
            d="M 33 19.5 L 40 21.5 L 49 21.5"
            stroke="url(#circuitGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="49" cy="21.5" r="2.5" fill="#00E5FF" />

          <path
            d="M 31 23 L 37 26.5 L 44 26.5"
            stroke="url(#circuitGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="44" cy="26.5" r="3" fill="#FFB020" />

          {/* Gradients */}
          <defs>
            <linearGradient id="bubbleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1677FF" />
              <stop offset="100%" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1677FF" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
