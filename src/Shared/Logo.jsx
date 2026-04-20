import React from 'react';

const Logo = ({ className = "w-10 h-10" }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Concentric circles/Orbit background */}
    <circle cx="50" cy="50" r="45" fill="#D9C5B2" fillOpacity="0.2" />
    <circle cx="50" cy="50" r="35" fill="#FA8B78" fillOpacity="0.4" />
    <circle cx="50" cy="50" r="25" fill="#FA8B78" />
    
    {/* Pin Shape */}
    <path 
      d="M50 95C50 95 85 64.1209 85 40C85 20.67 69.33 5 50 5C30.67 5 15 20.67 15 40C15 64.1209 50 95 50 95Z" 
      stroke="#D9C5B2" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    
    {/* Orbit Ring */}
    <ellipse 
      cx="50" 
      cy="40" 
      rx="45" 
      ry="15" 
      stroke="#D9C5B2" 
      strokeWidth="3" 
      transform="rotate(-15 50 40)"
      fill="none"
    />
    
    {/* Airplane SVG path (Simplified) */}
    <path 
      d="M35 45L45 35M45 42H65L75 35L70 45L75 55L65 48H45L35 55L40 45Z" 
      fill="white" 
      stroke="white" 
      strokeWidth="2" 
      strokeLinejoin="round"
    />
  </svg>
);

export default Logo;
