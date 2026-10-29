import { useState, useMemo } from 'react';

export default function CsvExplorerModal({ rawRows = [], isOpen, onClose }) {
  const [search, setSearch] = useState('');
  const [regionFilter, setRegionFilter] = useState('All');

  const regions = useMemo(() => {
    const set = new Set(rawRows.map((r) => r.region).filter(Boolean));
    return ['All', ...Array.from(set)];
  }, [rawRows]);

  const filtered = useMemo(() => {
    if (!rawRows) return [];
    const q = search.toLowerCase().trim();
    return rawRows.filter((r) => {
      const matchesSearch =
        !q ||
        (r.state_name || '').toLowerCase().includes(q) ||
        (r.top_weave || '').toLowerCase().includes(q) ||
        (r.dominant_fabric || '').toLowerCase().includes(q) ||
        (r.gi_tags || '').toLowerCase().includes(q);
      const matchesRegion = regionFilter === 'All' || r.region === regionFilter;
      return matchesSearch && matchesRegion;
    });
  }, [rawRows, search, regionFilter]);

  const handleDownload = () => {
    if (!rawRows || rawRows.length === 0) return;
    const headers = Object.keys(rawRows[0]);
    const csvContent =
      headers.join(',') +
      '\n' +
      rawRows
        .map((row) =>
          headers
            .map((h) => {
              const val = row[h] ?? '';
              const s = String(val);
              if (s.includes(',') || s.includes('"') || s.includes('\n') || s.includes(';')) {
                return `"${s.replace(/"/g, '""')}"`;
              }
              return s;
            })
            .join(',')
        )
        .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'india_saree_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl mt-8 mb-8 flex flex-col border border-gray-100 overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-gray-50/50">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              India Saree Dataset Explorer &amp; Catalog
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Comprehensive 28-state records with 5-year revenues, census counts, GI tags &amp; demographics
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 bg-red-700 text-white text-xs font-semibold rounded-lg hover:bg-red-800 transition-colors shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Dataset (.CSV)
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 text-lg transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-4 flex-wrap bg-white">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search state, weave, fabric, or GI tag…"
            className="w-full sm:w-80 border border-gray-200 rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400"
          />
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 font-medium">Region:</span>
            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-400 bg-white"
            >
              {regions.map((reg) => (
                <option key={reg} value={reg}>
                  {reg}
                </option>
              ))}
            </select>
          </div>
          <span className="text-xs text-gray-400 ml-auto font-medium">
            Showing {filtered.length} of {rawRows.length} states
          </span>
        </div>

        {/* Table */}
        <div className="overflow-auto flex-1 max-h-[60vh]">
          <table className="w-full text-sm text-left">
            <thead className="sticky top-0 bg-gray-50 border-b border-gray-200 z-10">
              <tr>
                <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  State (ISO)
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Region
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider text-right">
                  Revenue (₹Cr)
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider text-right">
                  Active Weavers
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Flagship Weave
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Dominant Fabric
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  GI Tags
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((row, i) => {
                const rev = row.annual_revenue_cr ?? row.y2024_rev ?? 0;
                return (
                  <tr
                    key={row.state_id || i}
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    <td className="px-4 py-3 font-semibold text-gray-900 whitespace-nowrap">
                      {row.state_name}{' '}
                      <span className="text-[11px] font-normal text-gray-400">({row.state_id})</span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 font-medium">
                        {row.region}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-900 font-bold text-right whitespace-nowrap">
                      ₹{Number(rev).toLocaleString('en-IN')}
                    </td>
                    <td className="px-4 py-3 text-gray-700 text-right whitespace-nowrap">
                      {Number(row.active_weavers || 0).toLocaleString('en-IN')}
                    </td>
                    <td className="px-4 py-3 text-gray-800 font-medium whitespace-nowrap">
                      {row.top_weave}
                    </td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                      {row.dominant_fabric}
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-xs max-w-xs truncate" title={row.gi_tags}>
                      {row.gi_tags ? row.gi_tags.replace(/;/g, ', ') : '—'}
                    </td>
                  </tr>
                );
              })}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center text-gray-400 text-sm">
                    No matching states found for "{search}".
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between text-xs text-gray-500">
          <span>Source: Ministry of Textiles &amp; Fourth All India Handloom Census</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
