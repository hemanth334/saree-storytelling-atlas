import { useMemo } from 'react';

export default function OverviewSection({ rawRows = [] }) {
  const stats = useMemo(() => {
    if (!rawRows || rawRows.length === 0) {
      return { statesCount: 28, totalWeavers: 3144862, totalRevenue: 62400, totalGiTags: 65 };
    }
    const statesCount = rawRows.length;
    const totalWeavers = rawRows.reduce((sum, r) => sum + (Number(r.active_weavers) || 0), 0);
    const totalRevenue = rawRows.reduce(
      (sum, r) => sum + (Number(r.annual_revenue_cr ?? r.y2024_rev) || 0),
      0
    );
    const giSet = new Set();
    rawRows.forEach((r) => {
      const tags = (r.gi_tags || '')
        .split(';')
        .map((t) => t.trim())
        .filter(Boolean);
      tags.forEach((t) => giSet.add(t));
    });
    const totalGiTags = giSet.size;
    return { statesCount, totalWeavers, totalRevenue, totalGiTags };
  }, [rawRows]);

  const cards = [
    {
      label: 'States & UTs Covered',
      value: stats.statesCount,
      unit: '',
      color: 'bg-blue-50/80 border-blue-100',
      textColor: 'text-blue-900',
      description: 'Pan-India geographic mapping',
    },
    {
      label: 'Documented Weavers',
      value: `${(stats.totalWeavers / 100000).toFixed(1)} Lakh+`,
      unit: '',
      color: 'bg-amber-50/80 border-amber-100',
      textColor: 'text-amber-900',
      description: 'Fourth Handloom Census count',
    },
    {
      label: 'Annual Market Valuation',
      value: `₹${Math.round(stats.totalRevenue).toLocaleString('en-IN')}`,
      unit: ' Cr',
      color: 'bg-red-50/80 border-red-100',
      textColor: 'text-red-900',
      description: 'Estimated FY 2023-24 turnover',
    },
    {
      label: 'Registered GI Weaves',
      value: `${stats.totalGiTags}+`,
      unit: '',
      color: 'bg-emerald-50/80 border-emerald-100',
      textColor: 'text-emerald-900',
      description: 'Geographically protected weaves',
    },
  ];

  return (
    <div>
      <div className="max-w-3xl">
        <span className="text-xs font-bold text-red-700 uppercase tracking-widest block mb-2">
          Macro Overview &amp; Industry Landscape
        </span>
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
          India's Living Handloom Economy
        </h2>
        <p className="text-gray-600 text-base leading-relaxed mb-10">
          The Indian saree is more than an unstitched drape — it represents an annual artisan
          ecosystem exceeding <strong className="text-gray-900">₹62,000 Crores</strong>, sustaining
          more than <strong className="text-gray-900">31.4 Lakh weaver households</strong> across 28
          states. From the royal patronage of Banaras and Kanchipuram to modern e-commerce channels
          championing lightweight Chanderi and Jamdani, this atlas unifies fragmented census and
          trade records into an interactive, state-by-state scrollytelling benchmark.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.label}
            className={`rounded-2xl border p-5 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5 ${card.color}`}
          >
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                {card.label}
              </p>
              <p className={`text-2xl lg:text-3xl font-extrabold tracking-tight ${card.textColor}`}>
                {card.value}
                <span className="text-lg font-bold">{card.unit}</span>
              </p>
            </div>
            <p className="text-[11px] text-gray-500 mt-3 pt-2 border-t border-gray-200/50">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
