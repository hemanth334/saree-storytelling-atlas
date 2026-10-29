import React, { useState } from 'react';
import { SilkEmblemBanner } from '../components/SilkEmblemBanner';
import { INDIA_MAP_DATA } from '../data/indiaSvgPaths';
import { ALL_STATES_DATA, TOP_WEAVES_LEADERBOARD, WORDCLOUD_LIST, getStateData } from '../data/sareeData';

export const HomeView = ({ onSelectState, onSelectWeave, darkMode }) => {
  const [hoveredState, setHoveredState] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [mapColorMode, setMapColorMode] = useState('states'); // 'states' | 'revenue'

  // Dedicated jewel colors for Dark Mode
  const DARK_STATE_JEWEL_COLORS = {
    'IN-JK': '#EAB308', // Saffron Gold
    'IN-HP': '#38BDF8', // Vivid Sky
    'IN-PB': '#E2E8F0', // Platinum Silver
    'IN-UT': '#F97316', // Ochre Flame
    'IN-HR': '#22C55E', // Spring Emerald
    'IN-DL': '#F43F5E', // Rose Crimson
    'IN-RJ': '#FB7185', // Desert Rose
    'IN-UP': '#EF4444', // Imperial Banarasi Ruby
    'IN-BR': '#D97706', // Topaz
    'IN-SK': '#94A3B8', // Mountain Mist
    'IN-AR': '#818CF8', // Mystic Indigo
    'IN-AS': '#F472B6', // Muga Blossom Pink
    'IN-NL': '#FB923C', // Naga Flame
    'IN-MN': '#38BDF8', // Manipur Blue
    'IN-MZ': '#FBBF24', // Mizo Amber
    'IN-TR': '#FACC15', // Golden Ochre
    'IN-ML': '#34D399', // Meghalaya Jade
    'IN-WB': '#FDE047', // Jamdani Gold
    'IN-JH': '#4ADE80', // Tussar Leaf Green
    'IN-OR': '#FB923C', // Sambalpuri Saffron
    'IN-CT': '#2DD4BF', // Kosa Cyan Jade
    'IN-MP': '#C084FC', // Chanderi Royal Purple
    'IN-GJ': '#38BDF8', // Patola Sapphire
    'IN-MH': '#FBBF24', // Paithani Golden Amber
    'IN-AP': '#F87171', // Uppada Crimson
    'IN-TG': '#F472B6', // Pochampally Magenta
    'IN-KA': '#A78BFA', // Mysore Imperial Violet
    'IN-GA': '#818CF8', // Goan Indigo
    'IN-KL': '#34D399', // Kasavu Deep Emerald
    'IN-TN': '#94A3B8', // Kanchipuram Silver Slate
    'IN-PY': '#38BDF8', // Pondicherry Azure
  };

  // Revenue choropleth color scale (Warm Rose to Deep Saree Maroon)
  const getRevenueColor = (revenue) => {
    if (!revenue || revenue === 0) return darkMode ? '#1E293B' : '#FEF2F2';
    if (revenue >= 7500) return darkMode ? '#EF4444' : '#780016'; // Highest tier
    if (revenue >= 5000) return darkMode ? '#F87171' : '#991B1B'; // Rich Crimson
    if (revenue >= 3500) return darkMode ? '#FB923C' : '#DC2626'; // Vivid Red
    if (revenue >= 1500) return darkMode ? '#FBBF24' : '#F87171'; // Coral
    return darkMode ? '#FDE047' : '#FECACA'; // Soft blush
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 transition-colors duration-300">
      
      {/* 1. HIGH-AESTHETIC SILK EMBLEM HERO BANNER */}
      <section className="text-center my-4">
        <SilkEmblemBanner darkMode={darkMode} />
        
        {/* Editorial Overview Text */}
        <div className="max-w-2xl mx-auto mt-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[0.14em] text-gray-900 dark:text-white uppercase mb-3">
            The Living Saree Heritage
          </h2>
          <p className="font-sans text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            The Indian Saree is an unbroken six-millennium continuum of art and civilization. 
            Across 28 states and over 500 historic loom clusters, master weavers translate regional geography, 
            sacred temple architecture, and royal dynastic heritage directly into pure mulberry silk, golden zari, and natural hand-spun cotton.
          </p>
        </div>
      </section>

      <div className="w-16 h-0.5 bg-amber-300/60 dark:bg-amber-600/40 mx-auto my-12"></div>

      {/* 2. RESEARCH PURPOSE */}
      <section className="my-8 max-w-3xl mx-auto">
        <div className="bg-white dark:bg-[#0D1322] border border-amber-200/80 dark:border-amber-900/40 rounded-3xl p-6 sm:p-8 text-center shadow-xs dark:shadow-xl transition-all duration-300">
          <div className="w-14 h-14 mx-auto mb-4 bg-amber-50 dark:bg-amber-950/60 rounded-2xl flex items-center justify-center border border-amber-200/80 dark:border-amber-800/60 shadow-2xs">
            <span className="text-2xl">⚜️</span>
          </div>
          <h2 className="font-display text-xl sm:text-2xl font-bold tracking-[0.12em] text-gray-900 dark:text-white uppercase mb-3">
            Research Purpose
          </h2>
          <p className="font-sans text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            Synthesizing data from the Ministry of Textiles and the Fourth All India Handloom Census, 
            this atlas benchmarks state market valuations, tracks bridal silk vs. festive blend segments, 
            and highlights the vital gender transition powering artisan households into modern digital commerce.
          </p>
        </div>
      </section>

      <div className="w-16 h-0.5 bg-amber-300/60 dark:bg-amber-600/40 mx-auto my-12"></div>

      {/* 3. INTERACTIVE INDIA MAP */}
      <section className="my-14 text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[0.14em] text-gray-900 dark:text-white uppercase mb-2">
          Interactive India Saree Map
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-6">
          Explore regional craft identities across all Indian states.{' '}
          <span className="font-bold text-amber-700 dark:text-amber-400 underline decoration-amber-300 dark:decoration-amber-700">
            Click any state to inspect multi-year revenue and weaving clusters!
          </span>
        </p>

        {/* View Mode Toggle */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Palette:</span>
          <button
            onClick={() => setMapColorMode('states')}
            className={`px-3.5 py-1 rounded-full text-xs font-semibold cursor-pointer transition-all ${
              mapColorMode === 'states'
                ? 'bg-amber-700 dark:bg-amber-500 text-white dark:text-gray-950 font-bold shadow-2xs'
                : 'bg-stone-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-stone-200 dark:hover:bg-gray-700'
            }`}
          >
            🎨 Regional Map Colors
          </button>
          <button
            onClick={() => setMapColorMode('revenue')}
            className={`px-3.5 py-1 rounded-full text-xs font-semibold cursor-pointer transition-all ${
              mapColorMode === 'revenue'
                ? 'bg-amber-700 dark:bg-amber-500 text-white dark:text-gray-950 font-bold shadow-2xs'
                : 'bg-stone-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-stone-200 dark:hover:bg-gray-700'
            }`}
          >
            📊 Revenue Choropleth
          </button>
        </div>

        {/* Map Container */}
        <div className="relative inline-block w-full max-w-3xl bg-white dark:bg-[#070B14] border border-stone-200 dark:border-amber-900/50 rounded-3xl shadow-sm dark:shadow-2xl p-4 sm:p-6 overflow-hidden transition-colors duration-300 ring-1 ring-black/5 dark:ring-amber-500/10">
          
          {/* Top-Left Legend */}
          {mapColorMode === 'revenue' ? (
            <div className="absolute top-6 left-6 bg-white/95 dark:bg-[#0D1322]/95 backdrop-blur-sm p-3.5 rounded-xl border border-stone-200 dark:border-gray-700 text-left shadow-sm z-10">
              <span className="text-xs font-bold text-gray-800 dark:text-gray-100 block mb-2 font-display uppercase tracking-wider">
                Revenue (₹ Cr)
              </span>
              <div className="space-y-1.5 text-[11px] font-medium text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-xs shadow-2xs" style={{ backgroundColor: darkMode ? '#EF4444' : '#780016' }}></span>
                  <span>7,500 to 12,000</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-xs shadow-2xs" style={{ backgroundColor: darkMode ? '#F87171' : '#991B1B' }}></span>
                  <span>5,000 to 7,500</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-xs shadow-2xs" style={{ backgroundColor: darkMode ? '#FB923C' : '#DC2626' }}></span>
                  <span>3,500 to 5,000</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-xs shadow-2xs" style={{ backgroundColor: darkMode ? '#FBBF24' : '#F87171' }}></span>
                  <span>1,500 to 3,500</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-xs shadow-2xs" style={{ backgroundColor: darkMode ? '#FDE047' : '#FECACA' }}></span>
                  <span>&lt; 1,500</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="absolute top-6 left-6 bg-white/90 dark:bg-[#0D1322]/90 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-stone-200 dark:border-gray-700 text-left shadow-xs z-10 text-[11px] text-gray-600 dark:text-gray-300 hidden sm:block">
              <span className="font-bold text-gray-800 dark:text-amber-300 block text-xs font-display tracking-wider">
                🇮🇳 Pan-India Handloom Atlas
              </span>
              <span className="text-[10px] text-gray-400">Click any state polygon to open deep-dive</span>
            </div>
          )}

          {/* SVG Map Canvas */}
          <svg 
            viewBox="0 0 600 660" 
            className="w-full h-auto max-h-[620px] filter drop-shadow-xs"
          >
            {INDIA_MAP_DATA.map((state) => {
              const stateData = getStateData(state.id);
              const revenue = stateData ? stateData.revenueCr : 600;
              const isHovered = hoveredState?.id === state.id;
              
              const defaultStateColor = darkMode 
                ? (DARK_STATE_JEWEL_COLORS[state.id] || state.defaultColor)
                : state.defaultColor;

              const fillColor = mapColorMode === 'revenue' 
                ? getRevenueColor(revenue) 
                : defaultStateColor;

              return (
                <g key={state.id}>
                  <path
                    d={state.d}
                    fill={fillColor}
                    stroke={isHovered ? "#F59E0B" : darkMode ? "#0B101D" : "#FFFFFF"}
                    strokeWidth={isHovered ? 2.5 : 1}
                    className="cursor-pointer transition-all duration-150"
                    style={{
                      filter: isHovered 
                        ? 'drop-shadow(0 4px 12px rgba(245, 158, 11, 0.5))' 
                        : undefined
                    }}
                    onMouseEnter={(e) => {
                      setHoveredState({ ...state, ...stateData });
                      setTooltipPos({ x: e.clientX, y: e.clientY });
                    }}
                    onMouseMove={(e) => {
                      setTooltipPos({ x: e.clientX, y: e.clientY });
                    }}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => onSelectState(state.id)}
                  />

                  {/* Centered State Label (High contrast in both Light and Dark Mode) */}
                  {state.cx && state.cy && (
                    <text
                      x={state.cx}
                      y={state.cy}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={8.5}
                      fontWeight="bold"
                      fill={darkMode ? "#FFFFFF" : "#0F172A"}
                      className="pointer-events-none select-none"
                      style={darkMode ? { textShadow: "0 1px 3px rgba(0,0,0,0.9)" } : undefined}
                      opacity={darkMode ? 0.95 : 0.88}
                    >
                      {state.code}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Hover Floating Tooltip */}
          {hoveredState && (
            <div 
              className="fixed pointer-events-none z-50 bg-gray-900/95 dark:bg-black/95 text-white px-4 py-3 rounded-xl text-xs shadow-2xl border border-gray-700 dark:border-amber-500/50 backdrop-blur-xs min-w-[180px]"
              style={{ left: `${tooltipPos.x + 14}px`, top: `${tooltipPos.y + 14}px` }}
            >
              <div className="font-display font-extrabold text-amber-300 text-sm border-b border-gray-700 dark:border-gray-800 pb-1 mb-1.5 uppercase tracking-wider">
                {hoveredState.name}
              </div>
              <div className="flex justify-between gap-3 text-gray-300">
                <span>Annual Sales:</span>
                <span className="font-bold text-white">₹{hoveredState.revenueCr ? hoveredState.revenueCr.toLocaleString() : '600'} Cr</span>
              </div>
              {hoveredState.dominantWeave && (
                <div className="flex justify-between gap-3 text-gray-300 mt-0.5">
                  <span>Flagship Weave:</span>
                  <span className="font-medium text-amber-200">{hoveredState.dominantWeave}</span>
                </div>
              )}
              {hoveredState.activeWeavers && (
                <div className="flex justify-between gap-3 text-gray-400 mt-0.5 text-[10px]">
                  <span>Census Weavers:</span>
                  <span>{Number(hoveredState.activeWeavers).toLocaleString()}</span>
                </div>
              )}
              <div className="text-[11px] text-emerald-400 mt-2 font-semibold flex items-center gap-1">
                <span>Click to view state statistics</span> →
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="w-16 h-0.5 bg-amber-300/60 dark:bg-amber-600/40 mx-auto my-12"></div>

      {/* 4. WORDCLOUD SECTION */}
      <section className="my-14 text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[0.14em] text-gray-900 dark:text-white uppercase mb-2">
          Prominent Weaves Cloud
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-8 max-w-xl mx-auto">
          Word sizing reflects national search volume and craft popularity.{' '}
          <span className="font-semibold text-amber-800 dark:text-amber-400">Click any weave to explore its production treemap!</span>
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 max-w-3xl mx-auto py-8 px-6 bg-white dark:bg-[#0D1322] rounded-3xl border border-stone-200 dark:border-amber-900/40 shadow-xs dark:shadow-xl transition-all duration-300">
          {WORDCLOUD_LIST.map((item) => {
            const fontSizesLight = {
              96: 'text-5xl font-black text-rose-900 dark:text-rose-400',
              92: 'text-5xl font-black text-red-800 dark:text-red-400',
              84: 'text-4xl font-extrabold text-amber-800 dark:text-amber-400',
              80: 'text-4xl font-extrabold text-blue-900 dark:text-sky-400',
              76: 'text-3xl font-bold text-yellow-800 dark:text-yellow-400',
              75: 'text-3xl font-bold text-emerald-800 dark:text-emerald-400',
              72: 'text-3xl font-bold text-red-700 dark:text-rose-300',
              70: 'text-2xl font-bold text-indigo-800 dark:text-indigo-400',
              68: 'text-2xl font-semibold text-purple-900 dark:text-purple-400',
              64: 'text-xl font-semibold text-yellow-700 dark:text-amber-300',
              62: 'text-xl font-medium text-amber-900 dark:text-orange-300',
              60: 'text-lg font-medium text-teal-800 dark:text-teal-400',
              58: 'text-base font-medium text-gray-800 dark:text-slate-200',
              56: 'text-base font-medium text-red-600 dark:text-red-400',
              54: 'text-sm font-normal text-gray-600 dark:text-slate-300',
              52: 'text-sm font-normal text-blue-700 dark:text-sky-300',
              50: 'text-xs font-light text-gray-500 dark:text-slate-400'
            };

            return (
              <span
                key={item.text}
                className={`${fontSizesLight[item.value] || 'text-lg font-medium text-gray-700 dark:text-gray-300'} cursor-pointer hover:scale-110 transition-transform duration-150 select-none font-serif`}
                onClick={() => onSelectWeave(item.weaveId)}
              >
                {item.text}
              </span>
            );
          })}
        </div>
      </section>

      <div className="w-16 h-0.5 bg-amber-300/60 dark:bg-amber-600/40 mx-auto my-12"></div>

      {/* 5. TOP WEAVES IN INDIA */}
      <section className="my-14">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[0.14em] text-gray-900 dark:text-white uppercase text-center mb-4">
          Top Weaves in India
        </h2>

        {/* Legend: Gold | Silver | Bronze */}
        <div className="flex justify-center items-center gap-6 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-yellow-600 rounded-xs shadow-2xs"></span>
            <span>Gold (Luxury Silk)</span>
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

        {/* Stacked Horizontal Bars */}
        <div className="space-y-4 max-w-3xl mx-auto bg-white dark:bg-[#0D1322] border border-stone-200 dark:border-amber-900/40 p-6 sm:p-8 rounded-3xl shadow-xs dark:shadow-xl transition-all duration-300">
          {TOP_WEAVES_LEADERBOARD.map((item) => {
            const goldPct = (item.gold / 10000) * 100;
            const silverPct = (item.silver / 10000) * 100;
            const bronzePct = (item.bronze / 10000) * 100;

            return (
              <div key={item.name} className="flex items-center gap-4 text-xs">
                <div className="w-48 text-right font-medium text-gray-700 dark:text-slate-200 truncate" title={item.name}>
                  {item.name}
                </div>
                <div className="flex-1 flex h-6 bg-stone-100 dark:bg-slate-800/90 rounded-xs overflow-hidden shadow-inner">
                  <div 
                    style={{ width: `${goldPct}%` }} 
                    className="bg-yellow-600 hover:opacity-90 transition-opacity" 
                    title={`Gold: ₹${item.gold} Cr`}
                  />
                  <div 
                    style={{ width: `${silverPct}%` }} 
                    className="bg-gray-400 dark:bg-slate-400 hover:opacity-90 transition-opacity" 
                    title={`Silver: ₹${item.silver} Cr`}
                  />
                  <div 
                    style={{ width: `${bronzePct}%` }} 
                    className="bg-amber-900 dark:bg-amber-800 hover:opacity-90 transition-opacity" 
                    title={`Bronze: ₹${item.bronze} Cr`}
                  />
                </div>
                <div className="w-16 font-bold text-gray-900 dark:text-white text-right">
                  ₹{item.total} Cr
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="w-16 h-0.5 bg-amber-300/60 dark:bg-amber-600/40 mx-auto my-12"></div>

      {/* 6. REFLECTION SECTION */}
      <section className="my-14 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-2xl">⚜️</span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[0.14em] text-gray-900 dark:text-white uppercase mt-2 mb-2">
            Analytical Reflections
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
            Core industry insights synthesized across state weaving cooperatives:
          </p>
        </div>

        <div className="space-y-6 text-gray-700 dark:text-slate-300 text-sm leading-relaxed">
          <div className="bg-white dark:bg-[#0D1322] p-6 rounded-3xl border border-stone-200 dark:border-amber-900/40 shadow-xs dark:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-gray-900 dark:text-amber-300 text-base mb-2 font-serif">
              1. How has the trend of sales altered across states over the years?
            </h3>
            <p>
              Southern and northern bridal silk powerhouses maintain undisputed revenue hegemony. 
              Uttar Pradesh (Banarasi) and Tamil Nadu (Kanchipuram) command over ₹8,900+ Cr each in annual turnover, 
              anchored by matrimonial customs. Meanwhile, eastern states like West Bengal lead national volume in daily breathable cottons (Jamdani and Dhaniakhali).
            </p>
          </div>

          <div className="bg-white dark:bg-[#0D1322] p-6 rounded-3xl border border-stone-200 dark:border-amber-900/40 shadow-xs dark:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-gray-900 dark:text-amber-300 text-base mb-2 font-serif">
              2. How has consumer interest in traditional weaves evolved?
            </h3>
            <p>
              Lightweight luxury has surged by over 300% among younger buyers. 
              Heavy traditional drapes are increasingly complemented by breathable silk-cotton hybrids like <em>Chanderi</em> and 
              <em>Maheshwari</em>, which offer effortless grace for modern corporate and festive evening settings.
            </p>
          </div>

          <div className="bg-white dark:bg-[#0D1322] p-6 rounded-3xl border border-stone-200 dark:border-amber-900/40 shadow-xs dark:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-gray-900 dark:text-amber-300 text-base mb-2 font-serif">
              3. How have gender dynamics shifted in artisan households?
            </h3>
            <p>
              While master weaving was once predominantly male, female artisan participation has surged 
              from 22% in 1990 to over 58% in 2024. Supported by rural micro-enterprises and spinning cooperatives in Assam and Odisha, 
              women now form the foundational pillar of India’s handloom economy.
            </p>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400 dark:text-gray-500 mt-16 pb-8 tracking-wider uppercase font-medium">
          © 2026 SutraViz • Handloom Census &amp; Ministry of Textiles Open Data
        </div>
      </section>

    </div>
  );
};
