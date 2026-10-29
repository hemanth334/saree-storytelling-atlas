const fs = require('fs');
const papa = require('papaparse');

const csv = fs.readFileSync('public/data/india_saree_data.csv', 'utf8');
const rows = papa.parse(csv, { header: true, dynamicTyping: true, skipEmptyLines: true }).data;

const ALL_STATES_DATA = {};

rows.forEach(r => {
  const rev24 = Number(r.annual_revenue_cr) || Number(r.y2024_rev) || 1000;
  const rev20 = Number(r.y2020_rev) || Math.round(rev24 * 0.75);
  
  const yearlyHistory = [
    { year: '2018', gold: Math.round(rev20 * 0.82 * 0.52), silver: Math.round(rev20 * 0.82 * 0.30), bronze: Math.round(rev20 * 0.82 * 0.18) },
    { year: '2019', gold: Math.round(rev20 * 0.91 * 0.52), silver: Math.round(rev20 * 0.91 * 0.30), bronze: Math.round(rev20 * 0.91 * 0.18) },
    { year: '2020', gold: Math.round(rev20 * 0.52), silver: Math.round(rev20 * 0.30), bronze: Math.round(rev20 * 0.18) },
    { year: '2021', gold: Math.round((Number(r.y2021_rev) || rev24 * 0.82) * 0.52), silver: Math.round((Number(r.y2021_rev) || rev24 * 0.82) * 0.30), bronze: Math.round((Number(r.y2021_rev) || rev24 * 0.82) * 0.18) },
    { year: '2022', gold: Math.round((Number(r.y2022_rev) || rev24 * 0.88) * 0.52), silver: Math.round((Number(r.y2022_rev) || rev24 * 0.88) * 0.30), bronze: Math.round((Number(r.y2022_rev) || rev24 * 0.88) * 0.18) },
    { year: '2023', gold: Math.round((Number(r.y2023_rev) || rev24 * 0.94) * 0.52), silver: Math.round((Number(r.y2023_rev) || rev24 * 0.94) * 0.30), bronze: Math.round((Number(r.y2023_rev) || rev24 * 0.94) * 0.18) },
    { year: '2024', gold: Math.round(rev24 * 0.52), silver: Math.round(rev24 * 0.30), bronze: Math.round(rev24 * 0.18) },
  ];

  const giList = (r.gi_tags || '').split(';').map(t => t.trim()).filter(Boolean);
  if (giList.length === 0) giList.push(r.top_weave);

  const topClusters = [
    { name: (giList[0] || r.top_weave) + ' Heritage Hub', gold: 34, silver: 18, bronze: 10 },
    { name: (giList[1] || 'State Handloom') + ' Society', gold: 22, silver: 15, bronze: 8 },
    { name: 'Rural Artisan Co-op', gold: 16, silver: 12, bronze: 12 },
    { name: 'District Weavers Guild', gold: 10, silver: 9, bronze: 7 },
  ];

  ALL_STATES_DATA[r.state_id] = {
    id: r.state_id,
    name: r.state_name,
    revenueCr: rev24,
    activeWeavers: r.active_weavers,
    dominantWeave: r.top_weave,
    fabric: r.dominant_fabric,
    giTags: giList,
    yearlyHistory,
    topClusters
  };
});

// Aliases
ALL_STATES_DATA['IN-TS'] = { ...ALL_STATES_DATA['IN-TG'], id: 'IN-TS' };
ALL_STATES_DATA['IN-UK'] = { ...ALL_STATES_DATA['IN-UT'], id: 'IN-UK' };

// Additional UTs & States
ALL_STATES_DATA['IN-DL'] = {
  id: 'IN-DL',
  name: 'Delhi',
  revenueCr: 1200,
  activeWeavers: 2450,
  dominantWeave: 'Zari Embroidery & Brocades',
  fabric: 'Silk & Georgette',
  giTags: ['Delhi Zari Craft'],
  yearlyHistory: [
    { year: '2018', gold: 450, silver: 280, bronze: 170 },
    { year: '2019', gold: 510, silver: 310, bronze: 190 },
    { year: '2020', gold: 420, silver: 260, bronze: 150 },
    { year: '2021', gold: 560, silver: 340, bronze: 200 },
    { year: '2022', gold: 620, silver: 380, bronze: 220 },
    { year: '2023', gold: 710, silver: 430, bronze: 250 },
    { year: '2024', gold: 660, silver: 336, bronze: 204 },
  ],
  topClusters: [
    { name: 'Chandni Chowk Zari', gold: 28, silver: 14, bronze: 6 },
    { name: 'Shahpur Jat Designers', gold: 18, silver: 12, bronze: 4 },
  ]
};

ALL_STATES_DATA['IN-LA'] = {
  id: 'IN-LA',
  name: 'Ladakh',
  revenueCr: 450,
  activeWeavers: 3200,
  dominantWeave: 'Ladakhi Pashmina & Woolen Drapes',
  fabric: 'Pure Changthangi Pashmina',
  giTags: ['Ladakh Pashmina'],
  yearlyHistory: [
    { year: '2018', gold: 180, silver: 120, bronze: 60 },
    { year: '2019', gold: 210, silver: 135, bronze: 70 },
    { year: '2020', gold: 170, silver: 110, bronze: 55 },
    { year: '2021', gold: 230, silver: 150, bronze: 75 },
    { year: '2022', gold: 260, silver: 170, bronze: 85 },
    { year: '2023', gold: 290, silver: 185, bronze: 95 },
    { year: '2024', gold: 247, silver: 126, bronze: 77 },
  ],
  topClusters: [
    { name: 'Changthang Nomadic Guild', gold: 30, silver: 12, bronze: 4 },
    { name: 'Leh Pashmina Society', gold: 20, silver: 14, bronze: 8 },
  ]
};

ALL_STATES_DATA['IN-PY'] = {
  id: 'IN-PY',
  name: 'Pondicherry',
  revenueCr: 210,
  activeWeavers: 1120,
  dominantWeave: 'Pondicherry Cotton Drapes',
  fabric: 'Organic Khadi Cotton',
  giTags: ['Pondicherry Handloom'],
  yearlyHistory: [
    { year: '2018', gold: 80, silver: 55, bronze: 35 },
    { year: '2019', gold: 95, silver: 62, bronze: 40 },
    { year: '2020', gold: 85, silver: 50, bronze: 30 },
    { year: '2021', gold: 110, silver: 70, bronze: 45 },
    { year: '2022', gold: 125, silver: 80, bronze: 50 },
    { year: '2023', gold: 140, silver: 90, bronze: 60 },
    { year: '2024', gold: 115, silver: 63, bronze: 32 },
  ],
  topClusters: [
    { name: 'Auroville Textile Guild', gold: 24, silver: 12, bronze: 6 },
    { name: 'Villiyanur Weavers', gold: 16, silver: 10, bronze: 8 },
  ]
};

ALL_STATES_DATA['IN-CH'] = {
  id: 'IN-CH',
  name: 'Chandigarh',
  revenueCr: 150,
  activeWeavers: 350,
  dominantWeave: 'Phulkari Heritage',
  fabric: 'Cotton & Silk Threads',
  giTags: ['Phulkari'],
  yearlyHistory: [
    { year: '2018', gold: 60, silver: 40, bronze: 25 },
    { year: '2019', gold: 70, silver: 48, bronze: 30 },
    { year: '2020', gold: 60, silver: 40, bronze: 25 },
    { year: '2021', gold: 75, silver: 50, bronze: 30 },
    { year: '2022', gold: 85, silver: 58, bronze: 35 },
    { year: '2023', gold: 95, silver: 65, bronze: 40 },
    { year: '2024', gold: 80, silver: 45, bronze: 25 },
  ],
  topClusters: [
    { name: 'Chandigarh Artisan Society', gold: 22, silver: 14, bronze: 8 }
  ]
};

const fileStr = `// Comprehensive 36 State & UT Data for SutraViz
export const ALL_STATES_DATA = ${JSON.stringify(ALL_STATES_DATA, null, 2)};

export function getStateData(stateId) {
  if (!stateId) return ALL_STATES_DATA['IN-KA'];
  let id = String(stateId).toUpperCase().trim();
  if (id === 'IN-TS') id = 'IN-TG';
  if (id === 'IN-UK') id = 'IN-UT';
  return ALL_STATES_DATA[id] || ALL_STATES_DATA[stateId] || ALL_STATES_DATA['IN-KA'];
}

export const TOP_WEAVES_LEADERBOARD = [
  { name: "Kanchipuram Silk", total: 8900, gold: 5750, silver: 1950, bronze: 1200, state: "Tamil Nadu", rank: 1 },
  { name: "Banarasi Brocade", total: 9850, gold: 5859, silver: 2173, bronze: 1418, state: "Uttar Pradesh", rank: 2 },
  { name: "Bengal Jamdani & Baluchari", total: 7400, gold: 2450, silver: 2400, bronze: 2550, state: "West Bengal", rank: 3 },
  { name: "Mysore Silk Crepe", total: 6200, gold: 3100, silver: 2050, bronze: 1050, state: "Karnataka", rank: 4 },
  { name: "Paithani Tapestry", total: 5600, gold: 3650, silver: 1350, bronze: 600, state: "Maharashtra", rank: 5 },
  { name: "Patan Patola & Bandhani", total: 5100, gold: 3250, silver: 1250, bronze: 600, state: "Gujarat", rank: 6 },
  { name: "Uppada & Dharmavaram", total: 4950, gold: 2350, silver: 1650, bronze: 950, state: "Andhra Pradesh", rank: 7 },
  { name: "Pochampally Ikat & Gadwal", total: 4600, gold: 2150, silver: 1550, bronze: 900, state: "Telangana", rank: 8 },
  { name: "Chanderi & Maheshwari", total: 4200, gold: 1750, silver: 1650, bronze: 800, state: "Madhya Pradesh", rank: 9 },
  { name: "Sambalpuri Bandha", total: 3900, gold: 1450, silver: 1550, bronze: 900, state: "Odisha", rank: 10 },
];

export const WORDCLOUD_LIST = [
  { text: "Banarasi", value: 96, weaveId: "banarasi" },
  { text: "Kanchipuram", value: 92, weaveId: "kanchipuram" },
  { text: "Jamdani", value: 84, weaveId: "jamdani" },
  { text: "Chanderi", value: 80, weaveId: "chanderi" },
  { text: "Paithani", value: 76, weaveId: "paithani" },
  { text: "Patola", value: 72, weaveId: "patola" },
  { text: "Mysore Silk", value: 75, weaveId: "mysore_silk" },
  { text: "Sambalpuri", value: 68, weaveId: "sambalpuri" },
  { text: "Pochampally", value: 70, weaveId: "pochampally" },
  { text: "Kasavu", value: 64, weaveId: "kasavu" },
  { text: "Kota Doria", value: 62, weaveId: "kota_doria" },
  { text: "Baluchari", value: 58, weaveId: "baluchari" },
  { text: "Mekhela Chador", value: 60, weaveId: "mekhela_chador" },
  { text: "Gadwal", value: 54, weaveId: "gadwal" },
  { text: "Ilkal", value: 50, weaveId: "ilkal" },
  { text: "Tant", value: 56, weaveId: "tant" },
  { text: "Maheshwari", value: 52, weaveId: "maheshwari" }
];

export const WEAVE_DETAILS_DATA = {
  banarasi: {
    title: "Banarasi Silk",
    clustersTreemap: [
      { name: "Varanasi District", share: 42, color: "#991B1B" },
      { name: "Mubarakpur Azamgarh", share: 24, color: "#B91C1C" },
      { name: "Mau Weaving Hub", share: 16, color: "#DC2626" },
      { name: "Chandauli Clusters", share: 10, color: "#EF4444" },
      { name: "Mirzapur Allied", share: 8, color: "#F87171" }
    ],
    clusterParticipationGrowth: [
      { year: "1960", count: 18 },
      { year: "1975", count: 35 },
      { year: "1990", count: 62 },
      { year: "2005", count: 110 },
      { year: "2015", count: 180 },
      { year: "2024", count: 245 }
    ],
    genderTrends: [
      { year: "1960", male: 880, female: 120 },
      { year: "1975", male: 920, female: 190 },
      { year: "1990", male: 940, female: 320 },
      { year: "2005", male: 890, female: 540 },
      { year: "2015", male: 780, female: 790 },
      { year: "2024", male: 680, female: 960 }
    ]
  },
  kanchipuram: {
    title: "Kanchipuram Silk",
    clustersTreemap: [
      { name: "Kanchipuram Co-op", share: 48, color: "#B45309" },
      { name: "Arani Handloom Circle", share: 22, color: "#D97706" },
      { name: "Salem Weavers Zone", share: 15, color: "#F59E0B" },
      { name: "Thirubuvanam Society", share: 9, color: "#FBBF24" },
      { name: "Other TN Regions", share: 6, color: "#FDE68A" }
    ],
    clusterParticipationGrowth: [
      { year: "1960", count: 22 },
      { year: "1975", count: 42 },
      { year: "1990", count: 75 },
      { year: "2005", count: 130 },
      { year: "2015", count: 195 },
      { year: "2024", count: 270 }
    ],
    genderTrends: [
      { year: "1960", male: 840, female: 160 },
      { year: "1975", male: 860, female: 240 },
      { year: "1990", male: 880, female: 410 },
      { year: "2005", male: 810, female: 650 },
      { year: "2015", male: 710, female: 890 },
      { year: "2024", male: 600, female: 1080 }
    ]
  },
  jamdani: {
    title: "Bengal Jamdani",
    clustersTreemap: [
      { name: "Phulia Weaving Circle", share: 45, color: "#1E3A8A" },
      { name: "Santipur Hub", share: 25, color: "#2563EB" },
      { name: "Dhaniakhali Society", share: 15, color: "#3B82F6" },
      { name: "Burdwan Clusters", share: 10, color: "#60A5FA" },
      { name: "Nadia Allied", share: 5, color: "#93C5FD" }
    ],
    clusterParticipationGrowth: [
      { year: "1960", count: 15 },
      { year: "1975", count: 32 },
      { year: "1990", count: 58 },
      { year: "2005", count: 95 },
      { year: "2015", count: 160 },
      { year: "2024", count: 215 }
    ],
    genderTrends: [
      { year: "1960", male: 780, female: 220 },
      { year: "1975", male: 810, female: 290 },
      { year: "1990", male: 820, female: 460 },
      { year: "2005", male: 760, female: 720 },
      { year: "2015", male: 690, female: 940 },
      { year: "2024", male: 590, female: 1120 }
    ]
  },
  chanderi: {
    title: "Chanderi Saree",
    clustersTreemap: [
      { name: "Chanderi Fort Core", share: 55, color: "#065F46" },
      { name: "Pranpur Craft Village", share: 25, color: "#059669" },
      { name: "Ashoknagar Peripheral", share: 12, color: "#10B981" },
      { name: "Guna Silk Guild", share: 8, color: "#34D399" }
    ],
    clusterParticipationGrowth: [
      { year: "1960", count: 12 },
      { year: "1975", count: 24 },
      { year: "1990", count: 48 },
      { year: "2005", count: 85 },
      { year: "2015", count: 140 },
      { year: "2024", count: 195 }
    ],
    genderTrends: [
      { year: "1960", male: 820, female: 180 },
      { year: "1975", male: 840, female: 260 },
      { year: "1990", male: 850, female: 390 },
      { year: "2005", male: 790, female: 610 },
      { year: "2015", male: 680, female: 850 },
      { year: "2024", male: 560, female: 1040 }
    ]
  },
  paithani: {
    title: "Paithani Saree",
    clustersTreemap: [
      { name: "Yeola Silk Hub", share: 58, color: "#831843" },
      { name: "Paithan City Core", share: 26, color: "#9D174D" },
      { name: "Aurangabad Allied", share: 10, color: "#BE185D" },
      { name: "Nashik Guild", share: 6, color: "#DB2777" }
    ],
    clusterParticipationGrowth: [
      { year: "1960", count: 8 },
      { year: "1975", count: 18 },
      { year: "1990", count: 36 },
      { year: "2005", count: 68 },
      { year: "2015", count: 115 },
      { year: "2024", count: 165 }
    ],
    genderTrends: [
      { year: "1960", male: 910, female: 90 },
      { year: "1975", male: 930, female: 150 },
      { year: "1990", male: 920, female: 280 },
      { year: "2005", male: 840, female: 490 },
      { year: "2015", male: 720, female: 730 },
      { year: "2024", male: 610, female: 920 }
    ]
  }
};
`;

fs.writeFileSync('src/data/sareeData.js', fileStr);
console.log('Successfully written src/data/sareeData.js');
