import React from "react";

function Logo({ width = "80px" }) {
  return (
    <div
      className="flex items-center justify-center rounded-full overflow-hidden shadow-md transition duration-300 transform hover:rotate-12 hover:scale-105 hover:shadow-lg"
      style={{
        width,
        height: width,
        background:
          "linear-gradient(45deg, rgba(255, 165, 0, 0.8), rgba(0, 128, 0, 0.8))",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-3/4 h-3/4 text-white transition duration-300 transform hover:rotate-45 hover:scale-125"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <path d="M8 12h8M12 8v8"></path>
      </svg>
    </div>
  );
}

export default Logo;
