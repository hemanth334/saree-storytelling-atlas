import { useState } from 'react';

export default function StateDetailCard({ stateData }) {
  const [hoveredBar, setHoveredBar] = useState(null);

  if (!stateData) {
    return (
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm h-full flex items-center justify-center text-gray-400 text-sm">
        Select a state on the map to inspect craft &amp; market details.
      </div>
    );
  }

  const years = [2020, 2021, 2022, 2023, 2024];
  const yearData = [
    { year: 2020, rev: Number(stateData.y2020_rev ?? stateData.revenue_cr_2020 ?? 0) },
    { year: 2021, rev: Number(stateData.y2021_rev ?? stateData.revenue_cr_2021 ?? 0) },
    { year: 2022, rev: Number(stateData.y2022_rev ?? stateData.revenue_cr_2022 ?? 0) },
    { year: 2023, rev: Number(stateData.y2023_rev ?? stateData.revenue_cr_2023 ?? 0) },
    { year: 2024, rev: Number(stateData.y2024_rev ?? stateData.annual_revenue_cr ?? 0) },
  ];

  const maxRevenue = Math.max(...yearData.map((d) => d.rev), 1);

  const demographics = [
    {
      label: '18–25 yrs',
      sub: 'College / Guest',
      key: 'target_age_18_25',
      fallbackKey: 'demo_18_25',
      color: '#D97706',
    },
    {
      label: '26–40 yrs',
      sub: 'Bridal / Professional',
      key: 'target_age_26_40',
      fallbackKey: 'demo_26_40',
      color: '#DC2626',
    },
    {
      label: '41–60 yrs',
      sub: 'Traditional / Silk',
      key: 'target_age_41_60',
      fallbackKey: 'demo_41_60',
      color: '#2563EB',
    },
    {
      label: '60+ yrs',
      sub: 'Everyday Cotton',
      key: 'target_age_60_plus',
      fallbackKey: 'demo_60_plus',
      color: '#059669',
    },
  ];

  const giTagsRaw = stateData.gi_tags || '';
  const giTags = giTagsRaw
    .split(';')
    .map((t) => t.trim())
    .filter(Boolean);

  const regionBadgeColors = {
    North: 'bg-blue-50 text-blue-700 border-blue-200',
    South: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    East: 'bg-amber-50 text-amber-700 border-amber-200',
    West: 'bg-orange-50 text-orange-700 border-orange-200',
    'North-East': 'bg-purple-50 text-purple-700 border-purple-200',
    Central: 'bg-rose-50 text-rose-700 border-rose-200',
  };

  const currentRevenue = stateData.annual_revenue_cr ?? stateData.y2024_rev ?? 0;
  const growth5yr =
    yearData[0].rev > 0
      ? (((yearData[4].rev - yearData[0].rev) / yearData[0].rev) * 100).toFixed(1)
      : null;

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
      {/* State Identity & Key Indicators */}
      <div>
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                {stateData.state_name}
              </h3>
              <span
                className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                  regionBadgeColors[stateData.region] || 'bg-gray-100 text-gray-700'
                }`}
              >
                {stateData.region}
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-0.5 font-medium">
              ISO: {stateData.state_id}
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs uppercase font-bold tracking-wider text-gray-400 block">
              FY 2024 Revenue
            </span>
            <span className="text-xl font-extrabold text-red-700">
              ₹{Number(currentRevenue).toLocaleString('en-IN')} Cr
            </span>
            {growth5yr && (
              <span className="text-[11px] text-emerald-600 block font-semibold">
                +{growth5yr}% (5-Yr Growth)
              </span>
            )}
          </div>
        </div>

        {/* Quick Highlights */}
        <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-gray-100 text-xs">
          <div>
            <span className="text-gray-400 block">Dominant Fabric</span>
            <span className="font-semibold text-gray-800 text-sm">
              {stateData.dominant_fabric || 'Handloom Silk/Cotton'}
            </span>
          </div>
          <div>
            <span className="text-gray-400 block">Flagship Weave</span>
            <span className="font-semibold text-gray-800 text-sm">
              {stateData.top_weave || 'Heritage Weave'}
            </span>
          </div>
        </div>
      </div>

      {/* 5-Year Revenue Trend (2020–2024) */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            5-Year Revenue Trajectory (2020–2024)
          </span>
          {hoveredBar && (
            <span className="text-xs font-bold text-red-700">
              {hoveredBar.year}: ₹{Number(hoveredBar.rev).toLocaleString('en-IN')} Cr
            </span>
          )}
        </div>

        <div className="flex items-end gap-2.5 h-32 pt-2 pb-1 bg-slate-50/70 rounded-xl px-4 border border-gray-100">
          {yearData.map((d) => {
            const pct = (d.rev / maxRevenue) * 100;
            const isHovered = hoveredBar?.year === d.year;
            return (
              <div
                key={d.year}
                className="flex flex-col items-center flex-1 h-full justify-end cursor-pointer group"
                onMouseEnter={() => setHoveredBar(d)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                <span className="text-[10px] text-gray-500 font-medium mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  ₹{d.rev >= 1000 ? `${(d.rev / 1000).toFixed(1)}k` : d.rev}
                </span>
                <div
                  className={`w-full rounded-t-md transition-all duration-200 ${
                    isHovered ? 'bg-red-800 scale-105' : 'bg-red-600 hover:bg-red-700'
                  }`}
                  style={{ height: `${Math.max(pct, 8)}%` }}
                />
                <span className="text-[11px] font-semibold text-gray-500 mt-1.5">{d.year}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Target Buyer Demographics */}
      <div>
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-3">
          Target Buyer Demographics
        </span>
        <div className="space-y-3">
          {demographics.map(({ label, sub, key, fallbackKey, color }) => {
            const val = Number(stateData[key] ?? stateData[fallbackKey] ?? 0);
            return (
              <div key={key}>
                <div className="flex items-center justify-between text-xs mb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-gray-700">{label}</span>
                    <span className="text-gray-400 text-[11px]">({sub})</span>
                  </div>
                  <span className="font-bold text-gray-900">{val}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${val}%`, backgroundColor: color }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Registered GI Tags & Active Weavers */}
      <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
        <div>
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">
            Registered Geographical Indication (GI) Tags
          </span>
          {giTags.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {giTags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full border bg-amber-50/80 border-amber-200 text-amber-900 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : (
            <span className="text-xs text-gray-400 italic">No registered GI tags documented.</span>
          )}
        </div>

        <div className="flex items-center justify-between bg-slate-50 rounded-xl px-4 py-3 border border-gray-100">
          <div>
            <span className="text-xs text-gray-500 font-medium block">
              Active Handloom Weavers Census
            </span>
            <span className="text-xs text-gray-400">Fourth All India Handloom Census</span>
          </div>
          <span className="text-xl font-bold text-gray-900">
            {Number(stateData.active_weavers || 0).toLocaleString('en-IN')}
          </span>
        </div>
      </div>
    </div>
  );
}
