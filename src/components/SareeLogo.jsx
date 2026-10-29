import React from 'react';

// Bespoke Royal Silk Emblem Logo (Hermès / Sabyasachi level Luxury Silk Emblem)
export const SareeLogo = ({ size = 38, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <defs>
      <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#DFBA5A" />
        <stop offset="35%" stopColor="#FFF2B2" />
        <stop offset="70%" stopColor="#C59B27" />
        <stop offset="100%" stopColor="#8A6715" />
      </linearGradient>

      <linearGradient id="silkRuby" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#991B1B" />
        <stop offset="100%" stopColor="#580C1F" />
      </linearGradient>
    </defs>

    {/* Concentric Royal Filigree Rings */}
    <circle cx="50" cy="50" r="46" stroke="url(#logoGold)" strokeWidth="1.2" opacity="0.6" strokeDasharray="3 2" />
    <circle cx="50" cy="50" r="43" stroke="url(#logoGold)" strokeWidth="0.8" opacity="0.4" />
    <circle cx="50" cy="50" r="39" fill="url(#silkRuby)" opacity="0.1" />

    {/* Elegant Flowing Silk Ribbons forming an Infinity Loom Crest */}
    <path 
      d="M26,50 C26,34 38,24 50,24 C62,24 74,34 74,50 C74,66 62,76 50,76 C38,76 26,66 26,50 Z" 
      stroke="url(#logoGold)" 
      strokeWidth="2.4" 
      fill="none"
    />

    {/* Intertwined Silk Drape Curve */}
    <path 
      d="M20,62 C34,42 66,58 80,38 C68,54 38,40 20,62 Z" 
      fill="url(#logoGold)" 
      opacity="0.9"
    />

    {/* Stylized Golden Shuttle in Center */}
    <path 
      d="M32,50 C44,43 56,43 68,50 C56,57 44,57 32,50 Z" 
      fill="url(#logoGold)" 
    />
    <circle cx="50" cy="50" r="2.8" fill="#FFFBEB" />

    {/* North & South Cardinal Heritage Dots */}
    <circle cx="50" cy="18" r="1.8" fill="url(#logoGold)" />
    <circle cx="50" cy="82" r="1.8" fill="url(#logoGold)" />
    <circle cx="18" cy="50" r="1.8" fill="url(#logoGold)" />
    <circle cx="82" cy="50" r="1.8" fill="url(#logoGold)" />
  </svg>
);
