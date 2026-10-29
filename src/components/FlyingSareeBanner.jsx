import React from 'react';

export const FlyingSareeBanner = ({ className = "" }) => {
  return (
    <div className={`relative w-full max-w-4xl mx-auto my-6 px-4 ${className}`}>
      {/* Background Ambient Aura */}
      <div className="absolute inset-0 -top-6 rounded-3xl bg-gradient-to-r from-rose-500/15 via-amber-500/15 to-indigo-500/15 dark:from-rose-600/25 dark:via-amber-500/20 dark:to-indigo-600/25 blur-2xl opacity-75 pointer-events-none" />

      {/* Main Vector Saree Stage */}
      <div className="relative z-10 w-full bg-gradient-to-b from-amber-50/70 to-rose-50/40 dark:from-gray-800/90 dark:to-gray-900/90 border border-amber-200/50 dark:border-gray-700/60 rounded-3xl p-6 md:p-8 shadow-sm backdrop-blur-xs overflow-hidden">
        
        {/* Subtle Decorative Background Loom Pattern */}
        <div className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#b91c1c_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Floating Flying Saree SVG Canvas */}
        <div className="relative w-full h-48 md:h-64 flex items-center justify-center animate-saree-flow">
          <svg
            viewBox="0 0 900 320"
            className="w-full h-full filter drop-shadow-md overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Silk Red Gradient */}
              <linearGradient id="silkCrimson" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#991B1B" />
                <stop offset="40%" stopColor="#DC2626" />
                <stop offset="70%" stopColor="#B91C1C" />
                <stop offset="100%" stopColor="#780016" />
              </linearGradient>

              {/* Silk Indigo/Royal Purple Gradient for Undertone */}
              <linearGradient id="silkIndigo" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1E3A8A" />
                <stop offset="50%" stopColor="#312E81" />
                <stop offset="100%" stopColor="#4C1D95" />
              </linearGradient>

              {/* Silk Emerald Green for Pleat Contrast */}
              <linearGradient id="silkEmerald" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#065F46" />
                <stop offset="50%" stopColor="#059669" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>

              {/* Pure Gold Zari Brocade Gradient */}
              <linearGradient id="goldZari" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="25%" stopColor="#FDE047" />
                <stop offset="50%" stopColor="#B45309" />
                <stop offset="75%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>

              {/* Filter for golden sparkle glow */}
              <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* 1. WEAVING LOOM WARP THREADS IN BACKGROUND */}
            <g opacity="0.4" className="stroke-amber-600/40 dark:stroke-amber-400/30">
              <path d="M50,160 Q 250,90 450,170 T 850,120" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M50,180 Q 250,110 450,190 T 850,140" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M50,200 Q 250,130 450,210 T 850,160" strokeWidth="1" strokeDasharray="4 4" />
            </g>

            {/* 2. LOWER UNDULATING SILK FOLD (Emerald / Indigo Sheen) */}
            <path
              d="M100,210 
                 C 200,160 300,250 430,220 
                 C 560,190 680,260 790,210 
                 C 730,255 580,270 450,250 
                 C 320,230 200,270 100,210 Z"
              fill="url(#silkEmerald)"
              opacity="0.85"
            />

            {/* 3. MIDDLE UNDULATING SILK FOLD (Royal Purple & Indigo) */}
            <path
              d="M80,180 
                 C 210,110 330,230 460,180 
                 C 590,130 710,220 820,150 
                 C 750,200 610,220 480,195 
                 C 350,170 200,240 80,180 Z"
              fill="url(#silkIndigo)"
              opacity="0.9"
            />

            {/* 4. MAIN BILLOWING DRAPE OF THE CRIMSON SAREE */}
            <path
              d="M60,150 
                 C 180,60 320,200 470,140 
                 C 620,80 720,180 840,110 
                 C 810,180 670,200 500,165 
                 C 350,135 200,220 60,150 Z"
              fill="url(#silkCrimson)"
              className="drop-shadow-lg"
            />

            {/* 5. FLOWING GOLDEN ZARI BORDER (Zari Patti) */}
            <path
              d="M60,150 
                 C 180,60 320,200 470,140 
                 C 620,80 720,180 840,110"
              stroke="url(#goldZari)"
              strokeWidth="7"
              strokeLinecap="round"
              filter="url(#goldGlow)"
            />
            {/* Fine secondary gold inner border */}
            <path
              d="M65,155 
                 C 183,67 320,205 470,147 
                 C 620,87 720,185 836,117"
              stroke="#FFFBEB"
              strokeWidth="1.5"
              strokeDasharray="3 2"
              opacity="0.9"
            />

            {/* 6. FLUTTERING PALLU (Anchal) with Intricate Brocade Motifs */}
            <g className="animate-pallu-flutter origin-right">
              {/* Billowing Pallu End */}
              <path
                d="M780,130 
                   C 820,90 865,115 880,95 
                   C 890,140 860,175 830,195 
                   C 800,170 785,150 780,130 Z"
                fill="url(#silkCrimson)"
                stroke="url(#goldZari)"
                strokeWidth="2.5"
              />
              
              {/* Traditional Gold Paisley / Kalga Motif on Pallu */}
              <path
                d="M825,145 C 835,130 850,135 845,155 C 840,170 825,165 825,145 Z"
                fill="url(#goldZari)"
              />
              <circle cx="837" cy="145" r="2.5" fill="#FFFFFF" />

              {/* Hand-tied Pallu Tassels (Kuchu) Fluttering */}
              <line x1="860" y1="120" x2="885" y2="115" stroke="url(#goldZari)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="868" y1="135" x2="892" y2="135" stroke="url(#goldZari)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="865" y1="150" x2="890" y2="155" stroke="url(#goldZari)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="855" y1="165" x2="880" y2="175" stroke="url(#goldZari)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="840" y1="180" x2="865" y2="195" stroke="url(#goldZari)" strokeWidth="2.5" strokeLinecap="round" />

              {/* Tassel Beads */}
              <circle cx="885" cy="115" r="3" fill="#D4AF37" />
              <circle cx="892" cy="135" r="3" fill="#D4AF37" />
              <circle cx="890" cy="155" r="3" fill="#D4AF37" />
              <circle cx="880" cy="175" r="3" fill="#D4AF37" />
              <circle cx="865" cy="195" r="3" fill="#D4AF37" />
            </g>

            {/* 7. FLYING ARTISAN LOOM SHUTTLE (Weaving through the Silk) */}
            <g className="animate-shuttle-fly origin-center" transform="translate(240, 95) rotate(-12)">
              {/* Wooden Handloom Shuttle Boat */}
              <path
                d="M0,15 C 35,0 75,0 110,15 C 75,22 35,22 0,15 Z"
                fill="#78350F"
                stroke="#D4AF37"
                strokeWidth="2"
                filter="url(#goldGlow)"
              />
              {/* Spindle Pirn in Center with Golden Thread */}
              <ellipse cx="55" cy="15" rx="22" ry="4.5" fill="#F59E0B" />
              <line x1="35" y1="15" x2="75" y2="15" stroke="#FFFBEB" strokeWidth="1.5" strokeDasharray="2 1" />
              <circle cx="55" cy="15" r="3" fill="#B45309" />
              
              {/* Thread trail streaming from shuttle */}
              <path
                d="M55,15 Q 120,40 180,10 T 280,30"
                stroke="#FDE047"
                strokeWidth="1.8"
                strokeDasharray="4 2"
                fill="none"
                opacity="0.9"
              />
            </g>

            {/* 8. SPARKLING GOLD SILK SPECKS & ZARI STARS */}
            <g fill="#FDE047" opacity="0.85">
              <circle cx="160" cy="110" r="2" />
              <circle cx="340" cy="160" r="2.5" />
              <circle cx="420" cy="90" r="1.8" />
              <circle cx="580" cy="120" r="2.2" />
              <circle cx="680" cy="80" r="2.5" />
              <polygon points="340,155 342,160 347,160 343,163 345,168 340,165 335,168 337,163 333,160 338,160" fill="#FFF" />
              <polygon points="680,75 682,80 687,80 683,83 685,88 680,85 675,88 677,83 673,80 678,80" fill="#FFF" />
            </g>
          </svg>
        </div>

        {/* Banner Tagline & Accents */}
        <div className="relative z-20 text-center mt-2 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 dark:bg-amber-900/40 border border-amber-300/60 dark:border-amber-700/50 text-[11px] font-bold text-amber-900 dark:text-amber-300 tracking-wider uppercase mb-1">
            <span>✨</span> Six Yards of Living Indian Heritage <span>✨</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
            Handcrafted across 28 states • 65+ GI Certified Weaves • 31+ Lakh Master Artisans
          </p>
        </div>
      </div>
    </div>
  );
};

