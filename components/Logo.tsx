import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

const Logo: React.FC<LogoProps> = ({ className = "h-16", variant = 'default' }) => {
  const tealColor = "#3BB8B5";
  const redColor = "#E31B23";
  const greyColor = variant === 'white' ? "#FFFFFF" : "#94A3B8";

  return (
    <svg 
      viewBox="0 0 500 400" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Texto "Bright" */}
      <text 
        x="80" 
        y="110" 
        fontFamily="Playfair Display, serif" 
        fontSize="100" 
        fontWeight="700" 
        fontStyle="italic" 
        fill={tealColor}
      >
        Bright
      </text>
      
      {/* Texto "lips" */}
      <text 
        x="105" 
        y="190" 
        fontFamily="Playfair Display, serif" 
        fontSize="110" 
        fontWeight="700" 
        fontStyle="italic" 
        fill={redColor}
      >
        lips
      </text>

      {/* Icono de Cinta y Labios a la derecha */}
      <g transform="translate(320, 110)">
        {/* Cinta Teal */}
        <path 
          d="M60 50 C40 10 100 10 80 50 L20 220 M80 50 L140 220" 
          stroke={tealColor} 
          strokeWidth="45" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        {/* Labios Rojos (Forma de cabeza de cinta) */}
        <path 
          d="M45 45 C45 25 60 10 80 10 C100 10 115 25 115 45 C115 70 80 95 80 95 C80 95 45 70 45 45Z" 
          fill={redColor} 
        />
        <path 
          d="M70 50 Q80 60 90 50" 
          stroke="white" 
          strokeWidth="5" 
          strokeLinecap="round"
        />
      </g>

      {/* Texto "Against Cancer" */}
      <g transform="translate(85, 260)">
        <text 
          x="0" 
          y="0" 
          fontFamily="Inter, sans-serif" 
          fontSize="45" 
          fontWeight="300" 
          fill={greyColor}
          letterSpacing="1"
        >
          Against
        </text>
        <text 
          x="0" 
          y="60" 
          fontFamily="Inter, sans-serif" 
          fontSize="55" 
          fontWeight="400" 
          fill={greyColor}
          letterSpacing="2"
        >
          Cancer
        </text>
      </g>
    </svg>
  );
};

export default Logo;