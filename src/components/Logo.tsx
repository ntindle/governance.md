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

// Modern gradient version that matches the page design
export const LogoModern: React.FC<LogoProps> = ({ 
  className = "", 
  width = 280, 
  height = 50 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 280 50"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="modernTextGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.95)" />
          <stop offset="50%" stopColor="rgba(255, 255, 255, 1)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0.95)" />
        </linearGradient>
        <linearGradient id="modernAccentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
          <stop offset="100%" stopColor="rgba(139, 92, 246, 0.8)" />
        </linearGradient>
      </defs>
      
      {/* Subtle background glow */}
      <ellipse
        cx="140"
        cy="25"
        rx="130"
        ry="20"
        fill="url(#modernAccentGradient)"
        opacity="0.1"
      />
      
      {/* Main text */}
      <text
        x="140"
        y="28"
        fontFamily="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontSize="22"
        fontWeight="700"
        fill="url(#modernTextGradient)"
        textAnchor="middle"
        dominantBaseline="middle"
        letterSpacing="-0.5px"
      >
        governance.md
      </text>
      
      {/* Subtle accent dots */}
      <circle cx="25" cy="25" r="1.5" fill="url(#modernTextGradient)" opacity="0.6" />
      <circle cx="255" cy="25" r="1.5" fill="url(#modernTextGradient)" opacity="0.6" />
      
      {/* Small decorative line under text */}
      <rect
        x="90"
        y="35"
        width="100"
        height="1"
        rx="0.5"
        fill="url(#modernTextGradient)"
        opacity="0.3"
      />
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