import React from 'react';

export const SilkEmblemBanner = ({ className = "", darkMode = false }) => {
  return (
    <div className={`relative w-full max-w-4xl mx-auto my-6 px-4 ${className}`}>
      {/* Ambient Silk Aura Glow */}
      <div 
        className={`absolute inset-0 -top-6 rounded-3xl blur-3xl opacity-90 pointer-events-none transition-opacity duration-300 ${
          darkMode 
            ? 'bg-gradient-to-r from-amber-500/25 via-rose-600/30 to-purple-600/25' 
            : 'bg-gradient-to-r from-amber-500/15 via-rose-500/15 to-purple-500/10'
        }`} 
      />

      {/* Main Luxury Frame */}
      <div 
        className={`relative z-10 w-full rounded-3xl p-8 md:p-12 transition-all duration-300 overflow-hidden border gold-border-glow ${
          darkMode 
            ? 'bg-gradient-to-b from-[#0B101D] via-[#090D18] to-[#05070E] border-amber-600/40 shadow-2xl text-white' 
            : 'bg-gradient-to-b from-amber-50/60 via-white to-stone-50/80 border-amber-300/70 shadow-sm text-gray-900'
        }`}
      >
        {/* Subtle Background Zari Filigree Grid */}
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] pointer-events-none bg-[radial-gradient(#d4af37_1.2px,transparent_1.2px)] [background-size:24px_24px]" />

        {/* Ornate Corner Royal Brackets */}
        <div className={`absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 rounded-tl-sm pointer-events-none ${
          darkMode ? 'border-amber-400/60' : 'border-amber-500/60'
        }`} />
        <div className={`absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 rounded-tr-sm pointer-events-none ${
          darkMode ? 'border-amber-400/60' : 'border-amber-500/60'
        }`} />
        <div className={`absolute bottom-4 left-4 w-7 h-7 border-b-2 border-l-2 rounded-bl-sm pointer-events-none ${
          darkMode ? 'border-amber-400/60' : 'border-amber-500/60'
        }`} />
        <div className={`absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 rounded-br-sm pointer-events-none ${
          darkMode ? 'border-amber-400/60' : 'border-amber-500/60'
        }`} />

        <div className="relative z-20 flex flex-col items-center text-center">
          
          {/* Top Heritage Sub-Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.22em] uppercase mb-5 shadow-2xs border ${
            darkMode 
              ? 'bg-amber-950/70 border-amber-700/60 text-amber-300' 
              : 'bg-amber-100/90 border-amber-300/80 text-amber-900'
          }`}>
            <span>⚜️</span>
            <span>The Imperial Textile Heritage of India</span>
            <span>⚜️</span>
          </div>

          {/* Central Aesthetic Flying Saree Artwork */}
          <div className="w-full max-w-xl h-44 sm:h-52 flex items-center justify-center my-1 relative">
            <svg 
              viewBox="0 0 640 180" 
              className="w-full h-full filter drop-shadow-md overflow-visible select-none"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* 24K Gold Foil Shimmer */}
                <linearGradient id="silkFoilGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#DFBA5A" />
                  <stop offset="25%" stopColor="#FFF2B2" />
                  <stop offset="50%" stopColor="#C59B27" />
                  <stop offset="75%" stopColor="#FDE68A" />
                  <stop offset="100%" stopColor="#854D0E" />
                </linearGradient>

                {/* Crimson Ruby Silk Drape */}
                <linearGradient id="silkCrimsonPallu" x1="0%" y1="0%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#991B1B" stopOpacity="0.95" />
                  <stop offset="45%" stopColor="#DC2626" stopOpacity="0.98" />
                  <stop offset="75%" stopColor="#B91C1C" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#7F1D1D" stopOpacity="0.9" />
                </linearGradient>

                {/* Royal Peacock Emerald Silk */}
                <linearGradient id="silkEmeraldDrape" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#064E3B" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#059669" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#047857" stopOpacity="0.85" />
                </linearGradient>

                {/* Royal Sapphire Indigo Silk */}
                <linearGradient id="silkSapphireBase" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E1B4B" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#1E3A8A" stopOpacity="0.92" />
                  <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.85" />
                </linearGradient>
              </defs>

              {/* Layer 1: Deep Indigo Silk Wave (Under-fold) */}
              <path 
                d="M40,125 C130,55 240,155 350,90 C460,30 530,130 600,75 C540,140 440,70 340,135 C240,195 130,85 40,125 Z"
                fill="url(#silkSapphireBase)"
                opacity="0.8"
              />

              {/* Layer 2: Emerald Green Silk Wave (Body pleat) */}
              <path 
                d="M30,105 C130,35 240,135 340,80 C440,25 520,115 590,60 C530,120 430,55 330,115 C230,170 120,65 30,105 Z"
                fill="url(#silkEmeraldDrape)"
                opacity="0.85"
              />

              {/* Layer 3: Main Billowing Crimson Silk Saree with Flying Pallu */}
              <path 
                d="M20,85 C120,15 230,115 340,55 C450,0 520,95 580,45 C520,105 420,40 310,95 C200,150 100,45 20,85 Z"
                fill="url(#silkCrimsonPallu)"
              />

              {/* Flying Pallu Zari Border (Ornate Top Trim) */}
              <path 
                d="M20,85 C120,15 230,115 340,55 C450,0 520,95 580,45"
                stroke="url(#silkFoilGold)"
                strokeWidth="5"
                strokeLinecap="round"
              />

              {/* Fine Golden Zari Brocade Stitching */}
              <path 
                d="M23,90 C122,21 230,119 340,60 C450,6 518,100 575,51"
                stroke="#FFFBEB"
                strokeWidth="1.2"
                strokeDasharray="4 2"
                opacity="0.95"
              />

              {/* Saree Pallu Tassels (Jhumka / Fringe at end of Pallu) */}
              <g transform="translate(575, 45)">
                <line x1="0" y1="0" x2="12" y2="10" stroke="url(#silkFoilGold)" strokeWidth="1.5" />
                <circle cx="13" cy="11" r="2" fill="#FDE68A" />
                <line x1="3" y1="-4" x2="16" y2="4" stroke="url(#silkFoilGold)" strokeWidth="1.5" />
                <circle cx="17" cy="5" r="2" fill="#FDE68A" />
                <line x1="-3" y1="4" x2="8" y2="16" stroke="url(#silkFoilGold)" strokeWidth="1.5" />
                <circle cx="9" cy="17" r="2" fill="#FDE68A" />
              </g>

              {/* Traditional Handloom Shuttle (Dhoki) weaving through the silk */}
              <g transform="translate(285, 46) rotate(-10)">
                <path 
                  d="M0,14 C28,-2 62,-2 90,14 C62,22 28,22 0,14 Z"
                  fill="#78350F"
                  stroke="url(#silkFoilGold)"
                  strokeWidth="2.2"
                />
                <circle cx="45" cy="14" r="3.5" fill="#FEF3C7" stroke="url(#silkFoilGold)" strokeWidth="1" />
                {/* Spindle Core */}
                <line x1="38" y1="14" x2="52" y2="14" stroke="#92400E" strokeWidth="2" strokeLinecap="round" />
                {/* Flowing Golden Zari Thread */}
                <path 
                  d="M45,14 Q100,-15 160,20 Q210,50 260,10"
                  fill="none"
                  stroke="url(#silkFoilGold)"
                  strokeWidth="1.8"
                  strokeDasharray="3 2"
                />
              </g>

              {/* Golden Zari Paisley / Buta Motifs */}
              <g transform="translate(145, 62) scale(0.7)">
                <path d="M0,15 C-5,5 5,-5 15,0 C25,5 20,20 10,22 C3,23 0,20 0,15 Z" fill="url(#silkFoilGold)" opacity="0.9" />
                <circle cx="10" cy="10" r="2" fill="#FFFBEB" />
              </g>
              <g transform="translate(425, 42) scale(0.7)">
                <path d="M0,15 C-5,5 5,-5 15,0 C25,5 20,20 10,22 C3,23 0,20 0,15 Z" fill="url(#silkFoilGold)" opacity="0.9" />
                <circle cx="10" cy="10" r="2" fill="#FFFBEB" />
              </g>

              {/* Shimmering Star Sparkles */}
              <circle cx="95" cy="40" r="2" fill="#FDE047" />
              <circle cx="215" cy="115" r="2.5" fill="#FDE047" />
              <circle cx="360" cy="30" r="2.2" fill="#FDE047" />
              <circle cx="495" cy="85" r="2" fill="#FDE047" />
            </svg>
          </div>

          {/* Regal Brand Title */}
          <h1 className={`font-display text-4xl sm:text-5xl font-extrabold tracking-[0.2em] uppercase mt-2 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Sutra<span className="gold-gradient-text font-black">Viz</span>
          </h1>

          <p className={`font-serif italic text-base sm:text-lg mt-2 max-w-xl ${
            darkMode ? 'text-amber-200/90' : 'text-amber-900/80'
          }`}>
            "Where ancient threads weave royal geography, temple architectural motifs, and timeless craftsmanship."
          </p>

          {/* Three Royal Accents */}
          <div className={`flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 text-xs font-semibold ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <span className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border shadow-2xs ${
              darkMode ? 'bg-gray-800/80 border-amber-700/60' : 'bg-white/90 border-amber-200'
            }`}>
              <span className={darkMode ? 'text-amber-400' : 'text-amber-600'}>✦</span> Pure Mulberry, Muga &amp; Tussar Silk
            </span>
            <span className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border shadow-2xs ${
              darkMode ? 'bg-gray-800/80 border-amber-700/60' : 'bg-white/90 border-amber-200'
            }`}>
              <span className={darkMode ? 'text-amber-400' : 'text-amber-600'}>✦</span> 65+ Registered GI Craft Weaves
            </span>
            <span className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border shadow-2xs ${
              darkMode ? 'bg-gray-800/80 border-amber-700/60' : 'bg-white/90 border-amber-200'
            }`}>
              <span className={darkMode ? 'text-amber-400' : 'text-amber-600'}>✦</span> 31.4 Lakh Documented Artisans
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};
