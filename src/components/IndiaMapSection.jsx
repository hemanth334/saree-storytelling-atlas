import { useState, useMemo } from 'react';
import { scaleThreshold } from '@visx/scale';
import { geoMercator, geoPath } from 'd3-geo';

const COLOR_DOMAIN = [1000, 3000, 5000, 7500];
const COLOR_RANGE = ['#FFF5F5', '#FED7D7', '#FEB2B2', '#E53E3E', '#9B2C2C'];

const colorScale = scaleThreshold({
  domain: COLOR_DOMAIN,
  range: COLOR_RANGE,
});

const REGIONS = ['All', 'North', 'South', 'East', 'West', 'Central', 'North-East'];

export default function IndiaMapSection({
  geoJson,
  stateDataMap = {},
  selectedStateId,
  onStateSelect,
}) {
  const [activeRegion, setActiveRegion] = useState('All');
  const [hoveredStateId, setHoveredStateId] = useState(null);
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    stateName: '',
    revenue: '',
    weavers: '',
    topWeave: '',
    fabric: '',
    region: '',
  });

  const width = 600;
  const height = 650;

  const { pathGenerator, featurePaths } = useMemo(() => {
    if (!geoJson || !geoJson.features) {
      return { pathGenerator: null, featurePaths: [] };
    }
    const proj = geoMercator().fitExtent(
      [
        [30, 25],
        [width - 30, height - 25],
      ],
      geoJson
    );
    const pg = geoPath().projection(proj);

    const paths = geoJson.features.map((feature) => {
      const stateId = feature.properties?.state_id;
      const d = pg(feature) || '';
      let centroid = null;
      try {
        centroid = pg.centroid(feature);
        if (!centroid || isNaN(centroid[0]) || isNaN(centroid[1])) {
          centroid = null;
        }
      } catch (err) {
        centroid = null;
      }
      return { feature, stateId, d, centroid };
    });

    return { pathGenerator: pg, featurePaths: paths };
  }, [geoJson]);

  const handleMouseEnter = (e, feature) => {
    const stateId = feature.properties?.state_id;
    setHoveredStateId(stateId);
    const data = stateDataMap[stateId];
    const name = data?.state_name || feature.properties?.ST_NM || stateId;
    const revVal = data?.annual_revenue_cr ?? data?.y2024_rev;
    const revenue = revVal != null ? `₹${Number(revVal).toLocaleString('en-IN')} Cr` : 'Data pending';
    const weavers = data?.active_weavers
      ? `${Number(data.active_weavers).toLocaleString('en-IN')} weavers`
      : '';
    const topWeave = data?.top_weave ? data.top_weave : '';
    const fabric = data?.dominant_fabric ? data.dominant_fabric : '';
    const region = data?.region || '';

    const rect = e.currentTarget.closest('svg')?.getBoundingClientRect() || { left: 0, top: 0 };
    setTooltip({
      visible: true,
      x: e.clientX - rect.left + 16,
      y: e.clientY - rect.top - 16,
      stateName: name,
      revenue,
      weavers,
      topWeave,
      fabric,
      region,
    });
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.closest('svg')?.getBoundingClientRect() || { left: 0, top: 0 };
    setTooltip((prev) => ({
      ...prev,
      x: e.clientX - rect.left + 16,
      y: e.clientY - rect.top - 16,
    }));
  };

  const handleMouseLeave = () => {
    setHoveredStateId(null);
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  if (!geoJson || !featurePaths.length) {
    return (
      <div className="flex flex-col items-center justify-center h-96 bg-gray-50 rounded-2xl border border-gray-100 p-8 text-center">
        <div className="w-8 h-8 border-3 border-red-600 border-t-transparent rounded-full animate-spin mb-3" />
        <span className="text-gray-600 font-medium text-sm">Loading India Saree Atlas Map…</span>
      </div>
    );
  }

  // Sorted states list for direct dropdown selector
  const sortedStates = Object.values(stateDataMap).sort((a, b) =>
    (a.state_name || '').localeCompare(b.state_name || '')
  );

  return (
    <div className="relative bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      {/* Top Controls: Region Filters & Direct State Dropdown */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-gray-100">
        <div>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
            Interactive Geographic Atlas
          </span>
          <span className="text-xs text-gray-400">
            Hover to view metrics • Click to open state deep-dive
          </span>
        </div>

        {/* Quick State Dropdown Selector */}
        <div className="flex items-center gap-2">
          <label htmlFor="state-select" className="text-xs font-medium text-gray-600 whitespace-nowrap">
            Select State:
          </label>
          <select
            id="state-select"
            value={selectedStateId || ''}
            onChange={(e) => onStateSelect && onStateSelect(e.target.value)}
            className="text-xs font-semibold bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            {sortedStates.map((s) => (
              <option key={s.state_id} value={s.state_id}>
                {s.state_name} ({s.state_id})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Region Filter Pills */}
      <div className="flex items-center gap-1.5 flex-wrap mb-4">
        <span className="text-xs font-semibold text-gray-400 mr-1">Region:</span>
        {REGIONS.map((reg) => (
          <button
            key={reg}
            onClick={() => setActiveRegion(reg)}
            className={`text-xs px-2.5 py-1 rounded-full font-medium transition-colors ${
              activeRegion === reg
                ? 'bg-red-700 text-white shadow-xs'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {reg}
          </button>
        ))}
      </div>

      {/* SVG Map Canvas */}
      <div className="relative overflow-hidden rounded-xl bg-slate-50 border border-slate-100">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto"
          style={{ maxHeight: 620 }}
          onMouseLeave={handleMouseLeave}
        >
          {featurePaths.map(({ feature, stateId, d, centroid }) => {
            const data = stateDataMap[stateId];
            const revVal = data?.annual_revenue_cr ?? data?.y2024_rev;
            const fill = revVal != null ? colorScale(revVal) : '#F1F5F9';
            const isSelected = stateId === selectedStateId;
            const isHovered = stateId === hoveredStateId;
            const stateRegion = data?.region;
            const matchesRegion = activeRegion === 'All' || stateRegion === activeRegion;

            const opacity = matchesRegion ? 1 : 0.25;
            const shortCode = stateId ? stateId.replace('IN-', '') : '';

            return (
              <g key={stateId || feature.id}>
                <path
                  d={d}
                  fill={fill}
                  opacity={opacity}
                  stroke={isSelected ? '#2B6CB0' : isHovered ? '#1E293B' : '#94A3B8'}
                  strokeWidth={isSelected ? 2.8 : isHovered ? 1.8 : 0.8}
                  className="transition-all duration-150"
                  style={{
                    cursor: 'pointer',
                    filter: isSelected
                      ? 'drop-shadow(0 3px 6px rgba(43, 108, 176, 0.45))'
                      : undefined,
                  }}
                  onClick={() => onStateSelect && onStateSelect(stateId)}
                  onMouseEnter={(e) => handleMouseEnter(e, feature)}
                  onMouseMove={handleMouseMove}
                />
                {/* State Label on Centroid */}
                {centroid && matchesRegion && (
                  <text
                    x={centroid[0]}
                    y={centroid[1]}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={9}
                    fontWeight={isSelected ? 'bold' : '600'}
                    fill={isSelected ? '#2B6CB0' : '#475569'}
                    className="pointer-events-none select-none transition-colors"
                  >
                    {shortCode}
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        {/* Floating Tooltip */}
        {tooltip.visible && (
          <div
            className="pointer-events-none absolute z-30 bg-gray-900/95 backdrop-blur-sm text-white text-xs px-3.5 py-2.5 rounded-xl shadow-2xl border border-gray-700/60 max-w-xs"
            style={{ left: tooltip.x, top: tooltip.y }}
          >
            <div className="flex items-center justify-between gap-2 border-b border-gray-700/80 pb-1 mb-1.5">
              <span className="font-extrabold text-white text-sm">{tooltip.stateName}</span>
              {tooltip.region && (
                <span className="text-[10px] uppercase font-semibold text-gray-400 bg-gray-800 px-1.5 py-0.5 rounded">
                  {tooltip.region}
                </span>
              )}
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-gray-400 text-[11px]">Annual Turnover:</span>
              <span className="font-bold text-red-300 text-xs">{tooltip.revenue}</span>
            </div>
            {tooltip.topWeave && (
              <div className="flex items-baseline justify-between gap-4 mt-0.5">
                <span className="text-gray-400 text-[11px]">Flagship Weave:</span>
                <span className="font-medium text-amber-300 text-xs">{tooltip.topWeave}</span>
              </div>
            )}
            {tooltip.fabric && (
              <div className="flex items-baseline justify-between gap-4 mt-0.5">
                <span className="text-gray-400 text-[11px]">Dominant Fabric:</span>
                <span className="font-medium text-gray-200 text-[11px]">{tooltip.fabric}</span>
              </div>
            )}
            {tooltip.weavers && (
              <div className="flex items-baseline justify-between gap-4 mt-0.5 pt-1 border-t border-gray-800 text-[10px] text-gray-400">
                <span>Active Artisans:</span>
                <span className="text-gray-300">{tooltip.weavers}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Legend & Instructions */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between flex-wrap gap-2 text-xs text-gray-500">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold text-gray-700">Market Value:</span>
          {COLOR_RANGE.map((color, idx) => {
            const label =
              idx === 0
                ? '< ₹1k Cr'
                : idx === 1
                ? '₹1k–3k Cr'
                : idx === 2
                ? '₹3k–5k Cr'
                : idx === 3
                ? '₹5k–7.5k Cr'
                : '₹7.5k+ Cr';
            return (
              <div key={color} className="flex items-center gap-1">
                <span
                  className="inline-block w-3.5 h-3.5 rounded-sm border border-gray-300"
                  style={{ backgroundColor: color }}
                />
                <span className="text-[11px] text-gray-600">{label}</span>
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="inline-block w-3 h-3 rounded-xs border-2 border-blue-600 bg-blue-100" />
          <span className="text-gray-600 font-medium">Active Selection</span>
        </div>
      </div>
    </div>
  );
}
