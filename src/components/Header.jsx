import React from 'react';
import { SareeLogo } from './SareeLogo';

export const Header = ({ onGoHome, darkMode, onSetTheme }) => {
  return (
    <header 
      className={`border-b backdrop-blur-md sticky top-0 z-40 transition-colors duration-300 shadow-2xs ${
        darkMode 
          ? 'bg-[#070B14]/95 border-amber-900/40 text-white' 
          : 'bg-white/95 border-amber-200/80 text-gray-900'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <div 
          onClick={onGoHome} 
          className="flex items-center gap-3 cursor-pointer group"
          role="button"
          tabIndex={0}
          title="Return to Atlas Overview"
        >
          <div className={`relative flex items-center justify-center p-1 rounded-xl border transition-transform group-hover:scale-105 shadow-2xs ${
            darkMode 
              ? 'bg-amber-950/60 border-amber-800/60' 
              : 'bg-amber-50 border-amber-200/80'
          }`}>
            <SareeLogo size={32} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className={`font-display text-xl font-bold tracking-[0.08em] uppercase transition-colors ${
                darkMode 
                  ? 'text-white group-hover:text-amber-400' 
                  : 'text-gray-900 group-hover:text-amber-700'
              }`}>
                Sutra<span className="gold-gradient-text font-black">Viz</span>
              </h1>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold border uppercase tracking-wider ${
                darkMode 
                  ? 'bg-amber-950/80 text-amber-300 border-amber-800/60' 
                  : 'bg-amber-100 text-amber-900 border-amber-300'
              }`}>
                Silk Atlas
              </span>
            </div>
            <p className={`text-[10px] tracking-wider uppercase font-semibold ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Handlooms &amp; Heritage of India
            </p>
          </div>
        </div>

        {/* Right side: Market Pills + Direct Toggle Buttons */}
        <div className="flex items-center gap-3">
          <span className={`hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-semibold border ${
            darkMode 
              ? 'bg-amber-950/40 text-amber-300 border-amber-800/60' 
              : 'bg-amber-50/90 text-amber-900 border-amber-200/80'
          }`}>
            ₹62,400+ Cr Market
          </span>

          {/* High-Reliability Dual Segmented Light / Dark Switcher */}
          <div 
            className={`flex items-center p-1 rounded-full border shadow-2xs transition-all ${
              darkMode 
                ? 'bg-gray-800/90 border-gray-700' 
                : 'bg-stone-200/80 border-stone-300/80'
            }`}
            role="radiogroup" 
            aria-label="Theme Switcher"
          >
            {/* Direct Switch to Light Mode */}
            <button
              onClick={() => onSetTheme(false)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                !darkMode
                  ? 'bg-white text-amber-950 shadow-md border border-amber-300/90 font-black scale-105'
                  : 'text-gray-400 hover:text-white'
              }`}
              title="Activate Light Mode (Light Parchment Background)"
              aria-checked={!darkMode}
              role="radio"
            >
              <span>☀️</span>
              <span className="font-bold">Light</span>
            </button>

            {/* Direct Switch to Dark Mode */}
            <button
              onClick={() => onSetTheme(true)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                darkMode
                  ? 'bg-amber-500 text-gray-950 shadow-md font-black scale-105'
                  : 'text-gray-600 hover:text-gray-950'
              }`}
              title="Activate Dark Mode (Midnight Obsidian Background)"
              aria-checked={darkMode}
              role="radio"
            >
              <span>🌙</span>
              <span className="font-bold">Dark</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
