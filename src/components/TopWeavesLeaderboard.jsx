import { useState } from 'react';

const TOP_WEAVES = [
  { name: 'Banarasi',     luxury: 4200, festive: 3800, everyday: 1850 },
  { name: 'Kanchipuram', luxury: 3900, festive: 3500, everyday: 1500 },
  { name: 'Jamdani',     luxury: 1800, festive: 3200, everyday: 2400 },
  { name: 'Paithani',    luxury: 2800, festive: 1900, everyday:  900 },
  { name: 'Mysore Silk', luxury: 2600, festive: 2300, everyday: 1300 },
  { name: 'Pochampally', luxury: 1600, festive: 1800, everyday: 1200 },
  { name: 'Kota Doria',  luxury:  800, festive: 1400, everyday: 1600 },
  { name: 'Chanderi',    luxury:  900, festive: 1700, everyday: 1600 },
  { name: 'Sambalpuri',  luxury: 1200, festive: 1500, everyday: 1200 },
  { name: 'Patola',      luxury: 2200, festive: 1800, everyday: 1100 },
];

const SEGMENTS = [
  { key: 'luxury',   label: 'Luxury Silk',    color: '#B7791F' },
  { key: 'festive',  label: 'Festive Blend',  color: '#C53030' },
  { key: 'everyday', label: 'Everyday Cotton', color: '#2B6CB0' },
];

const BAR_HEIGHT = 26;
const BAR_GAP = 10;
const LABEL_WIDTH = 110;
const CHART_WIDTH = 480;
const PADDING = { top: 10, right: 20, bottom: 10, left: 10 };

export default function TopWeavesLeaderboard() {
  const [tooltip, setTooltip] = useState(null);

  const maxTotal = Math.max(
    ...TOP_WEAVES.map((w) => w.luxury + w.festive + w.everyday)
  );

  const svgWidth = LABEL_WIDTH + CHART_WIDTH + PADDING.left + PADDING.right;
  const svgHeight = TOP_WEAVES.length * (BAR_HEIGHT + BAR_GAP) + PADDING.top + PADDING.bottom;

  const scale = (val) => (val / maxTotal) * CHART_WIDTH;

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6">
        {SEGMENTS.map((seg) => (
          <div key={seg.key} className="flex items-center gap-1.5">
            <span className="inline-block w-3 h-3 rounded-sm" style={{ background: seg.color }} />
            <span className="text-xs text-gray-600">{seg.label}</span>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto">
        <svg
          width={svgWidth}
          height={svgHeight}
          className="block"
          onMouseLeave={() => setTooltip(null)}
        >
          {TOP_WEAVES.map((weave, i) => {
            const y = PADDING.top + i * (BAR_HEIGHT + BAR_GAP);
            let xOffset = LABEL_WIDTH + PADDING.left;

            return (
              <g key={weave.name}>
                {/* Label */}
                <text
                  x={LABEL_WIDTH + PADDING.left - 8}
                  y={y + BAR_HEIGHT / 2}
                  textAnchor="end"
                  dominantBaseline="middle"
                  fontSize={11}
                  fill="#374151"
                  fontFamily="inherit"
                  fontWeight="600"
                >
                  {weave.name}
                </text>

                {/* Stacked segments */}
                {SEGMENTS.map((seg) => {
                  const val = weave[seg.key];
                  const w = scale(val);
                  const x = xOffset;
                  xOffset += w;
                  return (
                    <rect
                      key={seg.key}
                      x={x}
                      y={y}
                      width={w}
                      height={BAR_HEIGHT}
                      fill={seg.color}
                      rx={seg.key === 'luxury' ? 4 : 0}
                      ry={seg.key === 'luxury' ? 4 : 0}
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={(e) =>
                        setTooltip({
                          x: e.clientX,
                          y: e.clientY,
                          text: `${weave.name} — ${seg.label}: ₹${val.toLocaleString('en-IN')} Cr`,
                        })
                      }
                      onMouseMove={(e) =>
                        setTooltip((prev) =>
                          prev ? { ...prev, x: e.clientX, y: e.clientY } : null
                        )
                      }
                    />
                  );
                })}

                {/* Total label */}
                <text
                  x={xOffset + 6}
                  y={y + BAR_HEIGHT / 2}
                  dominantBaseline="middle"
                  fontSize={10}
                  fill="#6B7280"
                  fontFamily="inherit"
                >
                  {`₹${(weave.luxury + weave.festive + weave.everyday).toLocaleString('en-IN')}`}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Tooltip portal-like fixed element */}
      {tooltip && (
        <div
          className="fixed z-50 pointer-events-none bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap"
          style={{ left: tooltip.x + 12, top: tooltip.y - 8 }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
}

