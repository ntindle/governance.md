import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  width = 200, 
  height = 40 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 40"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background with subtle gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      
      {/* Subtle background rectangle */}
      <rect
        x="2"
        y="2"
        width="196"
        height="36"
        rx="4"
        fill="url(#logoGradient)"
        stroke="url(#textGradient)"
        strokeWidth="1"
        strokeOpacity="0.3"
      />
      
      {/* Text in monospace font */}
      <text
        x="100"
        y="25"
        fontFamily="'Courier New', Courier, monospace"
        fontSize="16"
        fontWeight="600"
        fill="url(#textGradient)"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        governance.md
      </text>
      
      {/* Optional: Add a small icon/decoration */}
      <circle cx="15" cy="20" r="2" fill="url(#textGradient)" opacity="0.6" />
      <circle cx="185" cy="20" r="2" fill="url(#textGradient)" opacity="0.6" />
    </svg>
  );
};

// Alternative minimalist version
export const LogoMinimal: React.FC<LogoProps> = ({ 
  className = "", 
  width = 200, 
  height = 40 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 40"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="100"
        y="25"
        fontFamily="'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace"
        fontSize="18"
        fontWeight="500"
        fill="currentColor"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        governance.md
      </text>
    </svg>
  );
};

// Terminal-style version
export const LogoTerminal: React.FC<LogoProps> = ({ 
  className = "", 
  width = 200, 
  height = 40 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 40"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Terminal background */}
      <rect
        x="0"
        y="8"
        width="200"
        height="24"
        rx="2"
        fill="#1a1a1a"
      />
      
      {/* Prompt symbol */}
      <text
        x="8"
        y="24"
        fontFamily="'Courier New', Courier, monospace"
        fontSize="14"
        fontWeight="600"
        fill="#10b981"
        dominantBaseline="middle"
      >
        $
      </text>
      
      {/* Text */}
      <text
        x="22"
        y="24"
        fontFamily="'Courier New', Courier, monospace"
        fontSize="14"
        fontWeight="400"
        fill="#f3f4f6"
        dominantBaseline="middle"
      >
        governance.md
      </text>
      
      {/* Blinking cursor */}
      <rect
        x="138"
        y="16"
        width="8"
        height="16"
        fill="#f3f4f6"
        opacity="0.8"
      >
        <animate
          attributeName="opacity"
          values="0.8;0;0.8"
          dur="1s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
};