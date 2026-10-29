import React from 'react';
import { WEAVE_DETAILS_DATA } from '../data/sareeData';

export const WeaveDetailView = ({ weaveId, onBack, darkMode }) => {
  const weave = WEAVE_DETAILS_DATA[weaveId] || WEAVE_DETAILS_DATA["banarasi"];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 transition-colors duration-300">
      <button 
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-sm font-bold text-amber-800 dark:text-amber-400 hover:text-amber-950 dark:hover:text-amber-200 transition-colors cursor-pointer group"
      >
        <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Overview
      </button>

      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight font-serif">
          {weave.title}
        </h1>
        <p className="text-gray-500 dark:text-slate-400 font-medium text-sm mt-2">
          TreeMap of top winning clusters and production regions
        </p>
      </div>

      {/* 1. TREEMAP (Matching Video 0:28 - 0:30) */}
      <div className="mb-16">
        <h3 className="text-center text-sm font-bold text-gray-700 dark:text-slate-300 uppercase tracking-wider mb-4 font-display">
          TreeMap of top winning clusters
        </h3>
        <div className="grid grid-cols-12 h-64 border border-stone-200 dark:border-amber-900/40 gap-0.5 rounded-3xl overflow-hidden shadow-xs dark:shadow-xl">
          {weave.clustersTreemap.map((cluster, i) => {
            const cols = i === 0 ? 'col-span-6 row-span-2' : i === 1 ? 'col-span-3' : 'col-span-3';
            return (
              <div 
                key={cluster.name}
                style={{ backgroundColor: cluster.color }}
                className={`${cols} flex flex-col justify-center items-center text-white p-3 text-center transition-opacity hover:opacity-95 cursor-pointer`}
              >
                <span className="font-bold text-sm leading-tight drop-shadow-xs">{cluster.name}</span>
                <span className="text-xs opacity-90 mt-1 font-medium">{cluster.share}% output</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. LINE CHART 1: Clusters Active Over the Years (Matching 0:31 in video) */}
      <div className="mb-16 bg-white dark:bg-[#0D1322] p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-amber-900/40 shadow-xs dark:shadow-xl transition-all duration-300">
        <h3 className="text-center text-sm font-bold text-gray-800 dark:text-slate-200 mb-6 font-display uppercase tracking-wider">
          Number of registered clusters active over the years
        </h3>
        <div className="flex items-end justify-between h-48 border-b border-gray-200 dark:border-slate-700 px-4">
          {weave.clusterParticipationGrowth.map((point) => (
            <div key={point.year} className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-bold text-emerald-800 dark:text-emerald-400">{point.count}</span>
              <div 
                style={{ height: `${(point.count / 300) * 140}px` }} 
                className="w-2 sm:w-3 bg-emerald-600 dark:bg-emerald-500 rounded-t-full shadow-xs"
              />
              <span className="text-[11px] text-gray-400 dark:text-slate-400">{point.year}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. LINE CHART 2: Male and Female Artisans Over the Years (Matching 0:32 - 0:33 in video) */}
      <div className="mb-16 bg-white dark:bg-[#0D1322] p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-amber-900/40 shadow-xs dark:shadow-xl transition-all duration-300">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-sm font-bold text-gray-800 dark:text-slate-200 font-display uppercase tracking-wider">
            Male and Female artisans over the year
          </h3>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-1 bg-blue-600 rounded-full"></span>
              <span className="text-blue-600 dark:text-blue-400">Male</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-1 bg-pink-500 rounded-full"></span>
              <span className="text-pink-500 dark:text-pink-400">Female</span>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between h-48 border-b border-gray-200 dark:border-slate-700 px-4">
          {weave.genderTrends.map((point) => (
            <div key={point.year} className="flex flex-col items-center gap-1">
              <div className="flex items-end gap-1.5">
                <div 
                  style={{ height: `${(point.male / 1200) * 140}px` }} 
                  className="w-2 sm:w-2.5 bg-blue-600 dark:bg-blue-500 rounded-t-sm shadow-xs"
                  title={`Male: ${point.male}`}
                />
                <div 
                  style={{ height: `${(point.female / 1200) * 140}px` }} 
                  className="w-2 sm:w-2.5 bg-pink-500 dark:bg-pink-400 rounded-t-sm shadow-xs"
                  title={`Female: ${point.female}`}
                />
              </div>
              <span className="text-[11px] text-gray-400 dark:text-slate-400 mt-2">{point.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
