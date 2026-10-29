import React, { useState } from 'react';
import { getStateData } from '../data/sareeData';

export const StateDetailView = ({ stateId, onBack, darkMode }) => {
  const state = getStateData(stateId);
  const [hoveredBar, setHoveredBar] = useState(null);

  // Maximum scale calculation for the 220px vertical chart area
  const CHART_HEIGHT = 220;
  const maxVal = Math.max(
    ...state.yearlyHistory.map((item) => item.gold + item.silver + item.bronze),
    1000
  );

  const maxClusterTotal = Math.max(
    ...state.topClusters.map((c) => c.gold + c.silver + c.bronze),
    1
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 transition-colors duration-300">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-sm font-bold text-amber-800 dark:text-amber-400 hover:text-amber-950 dark:hover:text-amber-200 transition-colors cursor-pointer group"
      >
        <span className="transition-transform group-hover:-translate-x-1">←</span> Back to All States
      </button>

      {/* Main State Title & Subtitle (Matching 0:08 in Video) */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-900 dark:text-rose-400 tracking-tight font-serif">
          {state.name}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 font-medium text-lg mt-1">
          Revenue earned over the year
        </p>
        <div className="mt-3 flex items-center justify-center gap-4 text-xs text-gray-500 dark:text-slate-400 flex-wrap font-medium">
          <span>Weavers: <strong className="text-gray-800 dark:text-white font-bold">{Number(state.activeWeavers || 0).toLocaleString()}</strong></span>
          <span>•</span>
          <span>Flagship: <strong className="text-gray-800 dark:text-amber-300 font-bold">{state.dominantWeave}</strong></span>
          <span>•</span>
          <span>Turnover: <strong className="text-red-800 dark:text-rose-400 font-bold">₹{Number(state.revenueCr || 0).toLocaleString()} Cr</strong></span>
        </div>
      </div>

      {/* Legend (Gold | Silver | Bronze) */}
      <div className="flex justify-center items-center gap-6 text-xs font-semibold text-gray-600 dark:text-slate-300 mb-8">
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 bg-yellow-600 rounded-xs shadow-2xs"></span>
          <span>Gold (Pure Silk / Zari)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 bg-gray-400 dark:bg-slate-400 rounded-xs shadow-2xs"></span>
          <span>Silver (Festive Blends)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 bg-amber-900 dark:bg-amber-800 rounded-xs shadow-2xs"></span>
          <span>Bronze (Everyday Cotton)</span>
        </div>
      </div>

      {/* Multi-Year Stacked Vertical Bars (Matching 0:09 in Video) */}
      <div className="relative bg-white dark:bg-[#0D1322] border border-stone-200 dark:border-amber-900/40 rounded-3xl p-6 sm:p-8 shadow-xs dark:shadow-2xl mb-16 transition-all duration-300">
        {/* Plot Area */}
        <div className="flex items-end justify-between gap-3 sm:gap-6 h-72 border-b border-gray-200 dark:border-slate-700 pb-2">
          {state.yearlyHistory.map((item) => {
            const goldPx = Math.max(Math.round((item.gold / maxVal) * CHART_HEIGHT), 3);
            const silverPx = Math.max(Math.round((item.silver / maxVal) * CHART_HEIGHT), 3);
            const bronzePx = Math.max(Math.round((item.bronze / maxVal) * CHART_HEIGHT), 3);
            const totalBarHeight = goldPx + silverPx + bronzePx;

            return (
              <div 
                key={item.year}
                className="flex-1 flex flex-col items-center h-full justify-end relative cursor-pointer group"
                onMouseEnter={() => setHoveredBar(item)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                {/* Stacked Vertical Column with explicit calculated pixel height */}
                <div 
                  style={{ height: `${totalBarHeight}px` }}
                  className="w-full max-w-[44px] flex flex-col rounded-t-xs overflow-hidden shadow-xs transition-transform duration-150 group-hover:scale-105"
                >
                  {/* Top segment: Gold */}
                  <div 
                    style={{ height: `${goldPx}px` }} 
                    className="bg-yellow-600 w-full hover:brightness-110" 
                    title={`Gold: ₹${item.gold} Cr`}
                  />
                  {/* Middle segment: Silver */}
                  <div 
                    style={{ height: `${silverPx}px` }} 
                    className="bg-gray-400 dark:bg-slate-400 w-full hover:brightness-110" 
                    title={`Silver: ₹${item.silver} Cr`}
                  />
                  {/* Bottom segment: Bronze */}
                  <div 
                    style={{ height: `${bronzePx}px` }} 
                    className="bg-amber-900 dark:bg-amber-800 w-full hover:brightness-110" 
                    title={`Bronze: ₹${item.bronze} Cr`}
                  />
                </div>
                
                <span className="text-xs font-semibold text-gray-500 dark:text-slate-400 mt-3 select-none">
                  {item.year}
                </span>
              </div>
            );
          })}
        </div>
        <div className="text-center text-xs text-gray-400 dark:text-slate-500 mt-3 font-medium">Year</div>

        {/* Hover Tooltip (Matching exactly 0:09 in video) */}
        {hoveredBar && (
          <div className="absolute top-8 right-8 bg-gray-950/95 dark:bg-black/95 text-white p-3.5 rounded-xl text-xs shadow-2xl border border-gray-700 dark:border-amber-500/50 min-w-[170px] z-20 pointer-events-none backdrop-blur-xs">
            <div className="font-bold text-amber-300 mb-1.5 border-b border-gray-700 dark:border-gray-800 pb-1 font-display uppercase tracking-wider">
              Year: {hoveredBar.year}
            </div>
            <div className="text-yellow-400 font-semibold mb-0.5">
              Gold Count: ₹{hoveredBar.gold.toLocaleString()} Cr
            </div>
            <div className="text-gray-300 font-semibold mb-0.5">
              Silver Count: ₹{hoveredBar.silver.toLocaleString()} Cr
            </div>
            <div className="text-amber-500 font-semibold mb-1">
              Bronze Count: ₹{hoveredBar.bronze.toLocaleString()} Cr
            </div>
            <div className="text-[11px] text-gray-300 pt-1 border-t border-gray-800 font-bold">
              Total: ₹{(hoveredBar.gold + hoveredBar.silver + hoveredBar.bronze).toLocaleString()} Cr
            </div>
          </div>
        )}
      </div>

      {/* Top Weaves & Clusters Horizontal Bars (Matching 0:13 in Video) */}
      <div className="my-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight text-center mb-4 font-display uppercase">
          Top Weaves and Clusters of {state.name}
        </h2>

        {/* Legend */}
        <div className="flex justify-center items-center gap-6 text-xs font-semibold text-gray-600 dark:text-slate-400 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-yellow-600 rounded-xs shadow-2xs"></span>
            <span>Gold</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-gray-400 dark:bg-slate-400 rounded-xs shadow-2xs"></span>
            <span>Silver</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-amber-900 dark:bg-amber-800 rounded-xs shadow-2xs"></span>
            <span>Bronze</span>
          </div>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto bg-white dark:bg-[#0D1322] p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-amber-900/40 shadow-xs dark:shadow-xl transition-all duration-300">
          {state.topClusters.map((cluster) => {
            const goldW = (cluster.gold / maxClusterTotal) * 100;
            const silverW = (cluster.silver / maxClusterTotal) * 100;
            const bronzeW = (cluster.bronze / maxClusterTotal) * 100;

            return (
              <div key={cluster.name} className="flex items-center gap-4 text-xs">
                <div className="w-48 text-right font-medium text-gray-700 dark:text-slate-200 truncate" title={cluster.name}>
                  {cluster.name}
                </div>
                <div className="flex-1 flex h-6 bg-stone-100 dark:bg-slate-800/90 rounded-xs overflow-hidden shadow-inner">
                  <div 
                    style={{ width: `${goldW}%` }} 
                    className="bg-yellow-600 hover:brightness-110 transition-opacity" 
                    title={`Gold: ${cluster.gold}`} 
                  />
                  <div 
                    style={{ width: `${silverW}%` }} 
                    className="bg-gray-400 dark:bg-slate-400 hover:brightness-110 transition-opacity" 
                    title={`Silver: ${cluster.silver}`} 
                  />
                  <div 
                    style={{ width: `${bronzeW}%` }} 
                    className="bg-amber-900 dark:bg-amber-800 hover:brightness-110 transition-opacity" 
                    title={`Bronze: ${cluster.bronze}`} 
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Heritage Badges */}
      <div className="mt-12 p-6 sm:p-8 bg-white dark:bg-[#0D1322] rounded-3xl border border-amber-200/80 dark:border-amber-900/40 max-w-2xl mx-auto text-xs shadow-xs dark:shadow-xl transition-all duration-300">
        <span className="font-bold text-amber-900 dark:text-amber-300 block mb-3 text-sm font-serif">
          Registered Geographical Indication (GI) Tags:
        </span>
        <div className="flex flex-wrap gap-2.5">
          {state.giTags.map((tag) => (
            <span key={tag} className="bg-amber-50/80 dark:bg-slate-800/90 px-3 py-1.5 rounded-xl border border-amber-200 dark:border-amber-700/60 text-amber-950 dark:text-amber-300 font-semibold shadow-2xs">
              🏷️ {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
