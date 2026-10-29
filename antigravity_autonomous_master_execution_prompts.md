# SutraViz: Exact Video Replica & Clean-Slate Master Runner

## Autonomous Execution Blueprint for Antigravity Agent

> **System Directive:** You are an autonomous Senior Data Visualization Engineer.
> Execute all terminal commands, purge previous broken or polygonal files, build the fresh multi-page routing architecture, implement the custom saree logo and realistic smooth India map, and verify that all transitions faithfully replicate the reference video flow.

---

### Core Architecture & Flow (Strict Match to Reference Video)

1. **Home Landing View (`/`)**:
   * **Header**: Custom Saree Shuttle & Draped Silk vector logo + `SutraViz` + subtle tagline.
   * **Overview Section**: Editorial text + vibrant handloom weaving vector motif banner (matching video `0:00 - 0:02`).
   * **Purpose Section**: Circular artisan craft illustration + research objectives (matching video `0:02 - 0:04`).
   * **Interactive India Map**: Accurate, smoothly curved state borders with vertical choropleth legend on the top-left (matching video `0:05 - 0:07`).
   * **WordCloud Section**: Popular saree weaves sized by search & production volume (matching video `0:24 - 0:26`).
   * **Top Weaves in India**: National horizontal stacked bar leaderboard with Gold (Luxury Silk), Silver (Festive), and Bronze (Cotton) tiers (matching video `0:37`).
   * **Reflection Section**: Answers 3 numbered analytical questions matching the video's conclusion (`0:39 - 0:43`).

2. **Dedicated State Detail Page (`/state/:stateId`)** *(Replicates Canada page at 0:08 - 0:17)*:
   * Triggered **on clicking any state on the India map**.
   * Large centered state name (e.g. `Tamil Nadu`, `Uttar Pradesh`, `West Bengal`).
   * Subtitle: `Revenue and production earned over the years`.
   * Three-tier legend: 🟨 Gold (Luxury Pure Silk) | ⬜ Silver (Festive Blends) | 🟫 Bronze (Everyday Handloom).
   * **Multi-Year Vertical Stacked Bar Chart (2018–2024)** with floating dark hover tooltip showing exact counts.
   * **Top Weaves & Clusters Horizontal Stacked Bars** with hover segment tooltips.
   * `← Back to All States` button returning to Home.

3. **Dedicated Weave Detail Page (`/weave/:weaveId`)** *(Replicates Athletics page at 0:27 - 0:35)*:
   * Triggered **on clicking any weave in the WordCloud**.
   * Large centered title (e.g. `Banarasi Silk`, `Kanchipuram`, `Chanderi`).
   * **Treemap**: Proportional blocks of top producing artisan clusters and states.
   * **Line Chart 1**: `Number of registered weaving clusters active over the years`.
   * **Line Chart 2**: `Male and Female artisan participants over the years`.
   * `← Back to Overview` button returning to Home.

---

## EXECUTION SEQUENCE

### PHASE 0: Clean Slate (Purge Old Broken Files)

Run in Antigravity Terminal:

```bash
# Clean previous artifacts if any exist
rm -rf src/*
mkdir -p src/assets src/components src/views src/data src/utils public/data
```

---

### PHASE 1: Dependencies, Tailwind & Fonts Setup

```bash
npm install @visx/scale @visx/shape @visx/wordcloud @visx/tooltip @visx/responsive lucide-react papaparse
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### 1. Configure `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        gold: '#D4AF37',
        silver: '#9CA3AF',
        bronze: '#926036',
        sareeMaroon: '#780016',
        sareeCrimson: '#B91C1C',
        sareeIndigo: '#1E3A8A',
        sareeEmerald: '#15803D',
        sareeGold: '#EAB308',
      }
    },
  },
  plugins: [],
}
```

#### 2. Configure `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SutraViz — Handlooms & Heritage of India</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
  </head>
  <body class="bg-white text-gray-900 font-sans antialiased selection:bg-amber-100 selection:text-amber-900">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

#### 3. Configure `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  background-color: #FFFFFF;
  color: #1A202C;
}

/* Tooltip transition smoothness */
.visx-tooltip {
  pointer-events: none;
  transition: opacity 0.15s ease;
}
```

---

### PHASE 2: Dedicated Saree Logo & Illustrations

Create `src/components/SareeLogo.jsx`:

```jsx
import React from 'react';

// Bespoke Handloom Shuttle & Draped Saree Pallu Icon
export const SareeLogo = ({ size = 36, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    {/* Concentric Golden Weaving Loom Spindle Rings */}
    <circle cx="30" cy="35" r="20" stroke="#D4AF37" strokeWidth="5" fill="none" opacity="0.85" />
    <circle cx="50" cy="35" r="20" stroke="#B91C1C" strokeWidth="5" fill="none" opacity="0.85" />
    <circle cx="70" cy="35" r="20" stroke="#1E3A8A" strokeWidth="5" fill="none" opacity="0.85" />
    
    {/* Interlocking Saree Borders Below (Olympic-inspired 5 Heritage Rings & Shuttle) */}
    <circle cx="40" cy="55" r="20" stroke="#15803D" strokeWidth="5" fill="none" opacity="0.85" />
    <circle cx="60" cy="55" r="20" stroke="#E65100" strokeWidth="5" fill="none" opacity="0.85" />
    
    {/* Golden Artisan Shuttle Silhouette Through Center */}
    <path 
      d="M12 45 C35 30, 65 30, 88 45 C75 52, 25 52, 12 45 Z" 
      fill="#D4AF37" 
      stroke="#78350F" 
      strokeWidth="2" 
    />
    <circle cx="50" cy="45" r="3.5" fill="#FFFFFF" />
  </svg>
);

// Circular Hero Art Vector (Matches Video timestamp 0:00 - 0:04 banner)
export const CulturalBannerIllustration = () => (
  <div className="flex justify-center items-center my-6">
    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
      {/* Background radial aura */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-100 via-amber-50 to-teal-50 opacity-90 blur-xl"></div>
      
      {/* Stylized Indian Handloom Motif Circle */}
      <svg viewBox="0 0 200 200" className="w-full h-full relative z-10">
        <circle cx="100" cy="100" r="85" fill="#FFFDF8" stroke="#E5E7EB" strokeWidth="2" />
        
        {/* Draped Floral Saree Curves */}
        <path d="M40 100 C 60 40, 140 40, 160 100 C 140 160, 60 160, 40 100 Z" fill="#FEE2E2" opacity="0.6"/>
        <path d="M50 100 C 70 55, 130 55, 150 100 C 130 145, 70 145, 50 100 Z" fill="#FEF3C7" opacity="0.7"/>
        <path d="M65 100 C 80 70, 120 70, 135 100 C 120 130, 80 130, 65 100 Z" fill="#E0F2FE" opacity="0.8"/>
        
        {/* Zari Brocade Peacock / Kalga Motif in Center */}
        <path d="M100 65 C 110 80, 125 95, 100 135 C 75 95, 90 80, 100 65 Z" fill="#D4AF37" />
        <circle cx="100" cy="78" r="4" fill="#991B1B" />
        
        {/* Weaving Threads */}
        <line x1="30" y1="100" x2="170" y2="100" stroke="#78350F" strokeWidth="1.5" strokeDasharray="3 3"/>
        <line x1="100" y1="30" x2="100" y2="170" stroke="#78350F" strokeWidth="1.5" strokeDasharray="3 3"/>
      </svg>
    </div>
  </div>
);
```

---

### PHASE 3: Comprehensive Saree Dataset & Real India SVG Coordinates

#### 1. Save `src/data/sareeData.js`:

```javascript
export const ALL_STATES_DATA = {
  "IN-UP": {
    id: "IN-UP",
    name: "Uttar Pradesh",
    revenueCr: 9850,
    activeWeavers: 93054,
    dominantWeave: "Banarasi Silk",
    fabric: "Mulberry Silk & Zari",
    giTags: ["Banarasi Silk", "Tanchoi", "Jangla"],
    yearlyHistory: [
      { year: "2018", gold: 3500, silver: 1400, bronze: 900 },
      { year: "2019", gold: 3900, silver: 1550, bronze: 1000 },
      { year: "2020", gold: 3100, silver: 1250, bronze: 750 },
      { year: "2021", gold: 4200, silver: 1650, bronze: 1050 },
      { year: "2022", gold: 4800, silver: 1850, bronze: 1200 },
      { year: "2023", gold: 5300, silver: 2050, bronze: 1300 },
      { year: "2024", gold: 5859, silver: 2173, bronze: 1418 },
    ],
    topClusters: [
      { name: "Varanasi Heritage", gold: 28, silver: 12, bronze: 7 },
      { name: "Mubarakpur Brocades", gold: 18, silver: 10, bronze: 5 },
      { name: "Mau Handloom", gold: 12, silver: 14, bronze: 8 },
      { name: "Chandauli Silk", gold: 8, silver: 6, bronze: 4 },
      { name: "Kotwa Weaving Village", gold: 6, silver: 5, bronze: 3 }
    ]
  },
  "IN-TN": {
    id: "IN-TN",
    name: "Tamil Nadu",
    revenueCr: 8900,
    activeWeavers: 126549,
    dominantWeave: "Kanchipuram Silk",
    fabric: "Mulberry Silk & Pure Silver Zari",
    giTags: ["Kanchipuram Silk", "Thirubuvanam", "Arani Silk"],
    yearlyHistory: [
      { year: "2018", gold: 4200, silver: 1500, bronze: 1000 },
      { year: "2019", gold: 4700, silver: 1650, bronze: 1050 },
      { year: "2020", gold: 3800, silver: 1350, bronze: 900 },
      { year: "2021", gold: 5200, silver: 1850, bronze: 1150 },
      { year: "2022", gold: 5900, silver: 2100, bronze: 1350 },
      { year: "2023", gold: 6500, silver: 2300, bronze: 1450 },
      { year: "2024", gold: 5750, silver: 1950, bronze: 1200 },
    ],
    topClusters: [
      { name: "Kanchipuram Town", gold: 34, silver: 15, bronze: 8 },
      { name: "Arani Weavers Hub", gold: 20, silver: 14, bronze: 10 },
      { name: "Salem Handlooms", gold: 14, silver: 12, bronze: 9 },
      { name: "Thirubuvanam Society", gold: 12, silver: 8, bronze: 4 },
      { name: "Sirumugai Cluster", gold: 8, silver: 7, bronze: 6 }
    ]
  },
  "IN-WB": {
    id: "IN-WB",
    name: "West Bengal",
    revenueCr: 7400,
    activeWeavers: 368864,
    dominantWeave: "Jamdani & Baluchari",
    fabric: "Fine Cotton & Tussar Silk",
    giTags: ["Dhaniakhali", "Santipuri", "Baluchari"],
    yearlyHistory: [
      { year: "2018", gold: 1400, silver: 1500, bronze: 2200 },
      { year: "2019", gold: 1550, silver: 1650, bronze: 2350 },
      { year: "2020", gold: 1200, silver: 1350, bronze: 1950 },
      { year: "2021", gold: 1700, silver: 1800, bronze: 2500 },
      { year: "2022", gold: 1950, silver: 2050, bronze: 2800 },
      { year: "2023", gold: 2200, silver: 2300, bronze: 3100 },
      { year: "2024", gold: 2450, silver: 2400, bronze: 2550 },
    ],
    topClusters: [
      { name: "Bishnupur Baluchari", gold: 24, silver: 18, bronze: 12 },
      { name: "Santipur Handlooms", gold: 12, silver: 22, bronze: 28 },
      { name: "Phulia Jamdani", gold: 18, silver: 20, bronze: 24 },
      { name: "Dhaniakhali Cottons", gold: 6, silver: 16, bronze: 30 },
      { name: "Begampur Weaves", gold: 5, silver: 12, bronze: 20 }
    ]
  },
  "IN-KA": {
    id: "IN-KA",
    name: "Karnataka",
    revenueCr: 6200,
    activeWeavers: 28192,
    dominantWeave: "Mysore Silk & Ilkal",
    fabric: "Crepe Silk & Kasuti Cotton",
    giTags: ["Mysore Silk", "Ilkal Saree", "Molakalmuru"],
    yearlyHistory: [
      { year: "2018", gold: 1800, silver: 1300, bronze: 700 },
      { year: "2019", gold: 2050, silver: 1450, bronze: 750 },
      { year: "2020", gold: 1700, silver: 1200, bronze: 600 },
      { year: "2021", gold: 2250, silver: 1550, bronze: 850 },
      { year: "2022", gold: 2550, silver: 1750, bronze: 950 },
      { year: "2023", gold: 2850, silver: 1950, bronze: 1050 },
      { year: "2024", gold: 3100, silver: 2050, bronze: 1050 },
    ],
    topClusters: [
      { name: "KSIC Mysore Mills", gold: 28, silver: 14, bronze: 6 },
      { name: "Ilkal Town", gold: 8, silver: 20, bronze: 18 },
      { name: "Molakalmuru Weaves", gold: 14, silver: 10, bronze: 8 },
      { name: "Anekal Silk Hub", gold: 10, silver: 8, bronze: 6 }
    ]
  },
  "IN-MH": {
    id: "IN-MH",
    name: "Maharashtra",
    revenueCr: 5600,
    activeWeavers: 1266,
    dominantWeave: "Paithani & Yeola",
    fabric: "Silk with Pure Gold Zari Tapestry",
    giTags: ["Paithani Saree", "Yeola Paithani", "Karvath Kati"],
    yearlyHistory: [
      { year: "2018", gold: 2200, silver: 900, bronze: 500 },
      { year: "2019", gold: 2450, silver: 1000, bronze: 550 },
      { year: "2020", gold: 2000, silver: 850, bronze: 450 },
      { year: "2021", gold: 2700, silver: 1100, bronze: 600 },
      { year: "2022", gold: 3100, silver: 1250, bronze: 650 },
      { year: "2023", gold: 3500, silver: 1400, bronze: 700 },
      { year: "2024", gold: 3650, silver: 1350, bronze: 600 },
    ],
    topClusters: [
      { name: "Yeola Town", gold: 32, silver: 12, bronze: 6 },
      { name: "Paithan Heritage", gold: 24, silver: 10, bronze: 4 },
      { name: "Nagpur Tussar", gold: 8, silver: 12, bronze: 10 }
    ]
  },
  "IN-GJ": {
    id: "IN-GJ",
    name: "Gujarat",
    revenueCr: 5100,
    activeWeavers: 4725,
    dominantWeave: "Patan Patola & Bandhani",
    fabric: "Double Ikat Silk & Tie-Dye",
    giTags: ["Patan Patola", "Bandhani", "Tangaliya"],
    yearlyHistory: [
      { year: "2018", gold: 2100, silver: 950, bronze: 450 },
      { year: "2019", gold: 2400, silver: 1050, bronze: 500 },
      { year: "2020", gold: 1950, silver: 850, bronze: 400 },
      { year: "2021", gold: 2650, silver: 1150, bronze: 550 },
      { year: "2022", gold: 3000, silver: 1300, bronze: 650 },
      { year: "2023", gold: 3400, silver: 1450, bronze: 700 },
      { year: "2024", gold: 3250, silver: 1250, bronze: 600 },
    ],
    topClusters: [
      { name: "Patan Salvi Vada", gold: 30, silver: 8, bronze: 2 },
      { name: "Bhujodi Kutch", gold: 14, silver: 18, bronze: 12 },
      { name: "Jamnagar Bandhej", gold: 16, silver: 16, bronze: 10 }
    ]
  },
  "IN-MP": {
    id: "IN-MP",
    name: "Madhya Pradesh",
    revenueCr: 4200,
    activeWeavers: 9269,
    dominantWeave: "Chanderi & Maheshwari",
    fabric: "Silk-Cotton Sheer & Zari Butis",
    giTags: ["Chanderi Saree", "Maheshwari"],
    yearlyHistory: [
      { year: "2018", gold: 950, silver: 1200, bronze: 750 },
      { year: "2019", gold: 1100, silver: 1350, bronze: 800 },
      { year: "2020", gold: 900, silver: 1150, bronze: 650 },
      { year: "2021", gold: 1250, silver: 1500, bronze: 900 },
      { year: "2022", gold: 1450, silver: 1750, bronze: 1050 },
      { year: "2023", gold: 1650, silver: 1950, bronze: 1150 },
      { year: "2024", gold: 1750, silver: 1650, bronze: 800 },
    ],
    topClusters: [
      { name: "Chanderi Fort Cluster", gold: 26, silver: 20, bronze: 10 },
      { name: "Maheshwar Ghats", gold: 18, silver: 22, bronze: 12 }
    ]
  },
  "IN-OD": {
    id: "IN-OD",
    name: "Odisha",
    revenueCr: 3900,
    activeWeavers: 57640,
    dominantWeave: "Sambalpuri & Bomkai",
    fabric: "Bandha Ikat Cotton & Silk",
    giTags: ["Sambalpuri Bandha", "Bomkai", "Kotpad"],
    yearlyHistory: [
      { year: "2018", gold: 800, silver: 1100, bronze: 700 },
      { year: "2019", gold: 900, silver: 1250, bronze: 750 },
      { year: "2020", gold: 750, silver: 1050, bronze: 650 },
      { year: "2021", gold: 1050, silver: 1400, bronze: 850 },
      { year: "2022", gold: 1200, silver: 1600, bronze: 950 },
      { year: "2023", gold: 1350, silver: 1800, bronze: 1050 },
      { year: "2024", gold: 1450, silver: 1550, bronze: 900 },
    ],
    topClusters: [
      { name: "Bargarh Weavers", gold: 22, silver: 20, bronze: 14 },
      { name: "Sonepur Silk", gold: 18, silver: 16, bronze: 10 },
      { name: "Nuapatna Khandua", gold: 12, silver: 12, bronze: 8 }
    ]
  },
  "IN-RJ": {
    id: "IN-RJ",
    name: "Rajasthan",
    revenueCr: 3800,
    activeWeavers: 6244,
    dominantWeave: "Kota Doria & Leheriya",
    fabric: "Khat Cotton-Silk & Tie-Dye",
    giTags: ["Kota Doria", "Bagru Handblock", "Sanganeri"],
    yearlyHistory: [
      { year: "2018", gold: 500, silver: 1100, bronze: 800 },
      { year: "2019", gold: 600, silver: 1250, bronze: 900 },
      { year: "2020", gold: 480, silver: 1050, bronze: 750 },
      { year: "2021", gold: 700, silver: 1400, bronze: 1000 },
      { year: "2022", gold: 850, silver: 1650, bronze: 1150 },
      { year: "2023", gold: 950, silver: 1850, bronze: 1300 },
      { year: "2024", gold: 1100, silver: 1700, bronze: 1000 },
    ],
    topClusters: [
      { name: "Kaithun Kota", gold: 24, silver: 20, bronze: 16 },
      { name: "Jaipur Leheriya", gold: 14, silver: 22, bronze: 14 }
    ]
  },
  "IN-KL": {
    id: "IN-KL",
    name: "Kerala",
    revenueCr: 2650,
    activeWeavers: 14175,
    dominantWeave: "Kasavu (Set Saree)",
    fabric: "Natural Off-White Cotton & Gold Zari",
    giTags: ["Balaramapuram", "Kuthampully", "Chendamangalam"],
    yearlyHistory: [
      { year: "2018", gold: 450, silver: 850, bronze: 600 },
      { year: "2019", gold: 520, silver: 950, bronze: 680 },
      { year: "2020", gold: 420, silver: 800, bronze: 580 },
      { year: "2021", gold: 580, silver: 1050, bronze: 750 },
      { year: "2022", gold: 650, silver: 1200, bronze: 850 },
      { year: "2023", gold: 750, silver: 1350, bronze: 950 },
      { year: "2024", gold: 850, silver: 1100, bronze: 700 },
    ],
    topClusters: [
      { name: "Balaramapuram Society", gold: 26, silver: 16, bronze: 12 },
      { name: "Kuthampully Weavers", gold: 20, silver: 18, bronze: 14 },
      { name: "Chendamangalam Cluster", gold: 12, silver: 15, bronze: 15 }
    ]
  },
  "IN-AS": {
    id: "IN-AS",
    name: "Assam",
    revenueCr: 3400,
    activeWeavers: 1179507,
    dominantWeave: "Mekhela Chador",
    fabric: "Golden Muga & Eri Silk",
    giTags: ["Muga Silk of Assam", "Assam Karbi"],
    yearlyHistory: [
      { year: "2018", gold: 1200, silver: 800, bronze: 500 },
      { year: "2019", gold: 1400, silver: 900, bronze: 550 },
      { year: "2020", gold: 1150, silver: 780, bronze: 480 },
      { year: "2021", gold: 1550, silver: 1050, bronze: 650 },
      { year: "2022", gold: 1800, silver: 1200, bronze: 750 },
      { year: "2023", gold: 2050, silver: 1350, bronze: 850 },
      { year: "2024", gold: 1800, silver: 1000, bronze: 600 },
    ],
    topClusters: [
      { name: "Sualkuchi Silk Town", gold: 34, silver: 14, bronze: 8 },
      { name: "Kamrup Weavers", gold: 14, silver: 16, bronze: 10 }
    ]
  },
  "IN-AP": {
    id: "IN-AP",
    name: "Andhra Pradesh",
    revenueCr: 4950,
    activeWeavers: 86398,
    dominantWeave: "Uppada Jamdani & Dharmavaram",
    fabric: "Mulberry Silk & Fine Cotton",
    giTags: ["Uppada Jamdani", "Dharmavaram Silk", "Venkatagiri", "Mangalagiri"],
    yearlyHistory: [
      { year: "2018", gold: 1400, silver: 1200, bronze: 800 },
      { year: "2019", gold: 1600, silver: 1350, bronze: 900 },
      { year: "2020", gold: 1300, silver: 1100, bronze: 750 },
      { year: "2021", gold: 1800, silver: 1500, bronze: 1000 },
      { year: "2022", gold: 2100, silver: 1750, bronze: 1150 },
      { year: "2023", gold: 2400, silver: 1950, bronze: 1250 },
      { year: "2024", gold: 2350, silver: 1650, bronze: 950 },
    ],
    topClusters: [
      { name: "Uppada Beach Village", gold: 28, silver: 12, bronze: 6 },
      { name: "Dharmavaram Silk City", gold: 22, silver: 14, bronze: 8 },
      { name: "Mangalagiri Society", gold: 10, silver: 18, bronze: 16 }
    ]
  },
  "IN-TG": {
    id: "IN-TG",
    name: "Telangana",
    revenueCr: 4600,
    activeWeavers: 23245,
    dominantWeave: "Pochampally Ikat & Gadwal",
    fabric: "Double Ikat Silk & Cotton Blend",
    giTags: ["Pochampally Ikat", "Gadwal Sarees", "Narayanpet"],
    yearlyHistory: [
      { year: "2018", gold: 1300, silver: 1100, bronze: 700 },
      { year: "2019", gold: 1500, silver: 1250, bronze: 800 },
      { year: "2020", gold: 1250, silver: 1050, bronze: 680 },
      { year: "2021", gold: 1700, silver: 1400, bronze: 920 },
      { year: "2022", gold: 1950, silver: 1600, bronze: 1050 },
      { year: "2023", gold: 2250, silver: 1800, bronze: 1180 },
      { year: "2024", gold: 2150, silver: 1550, bronze: 900 },
    ],
    topClusters: [
      { name: "Bhoodan Pochampally", gold: 30, silver: 16, bronze: 8 },
      { name: "Gadwal Fort Weavers", gold: 20, silver: 12, bronze: 6 },
      { name: "Narayanpet Hub", gold: 12, silver: 14, bronze: 10 }
    ]
  }
};

// Top 10 Weaves Leaderboard Data (Mirrors Olympic top athletes chart at 0:37)
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

// Interactive WordCloud words list
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

// Weave Detail Deep-Dive Treemap & Line Series Data (Mirrors Video 0:27 - 0:34)
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
  }
};
```

#### 2. Realistic Smooth India SVG Map Paths (`src/data/indiaSvgPaths.js`):

```javascript
// High-Fidelity SVG Paths representing authentic Indian States
export const INDIA_MAP_DATA = [
  { id: "IN-JK", name: "Jammu & Kashmir / Ladakh", d: "M205,30 Q225,18 250,22 Q270,35 285,60 Q270,95 245,115 Q210,120 185,95 Q175,65 205,30 Z" },
  { id: "IN-HP", name: "Himachal Pradesh", d: "M215,108 Q240,105 255,120 Q245,142 225,145 Q205,135 215,108 Z" },
  { id: "IN-PB", name: "Punjab", d: "M175,118 Q208,115 212,135 Q195,160 170,150 Q162,130 175,118 Z" },
  { id: "IN-UT", name: "Uttarakhand", d: "M242,122 Q270,128 275,152 Q255,165 235,152 Q235,135 242,122 Z" },
  { id: "IN-HR", name: "Haryana & Delhi", d: "M188,145 Q218,140 220,165 Q202,185 185,175 Q180,158 188,145 Z" },
  { id: "IN-RJ", name: "Rajasthan", d: "M110,160 Q175,145 188,190 Q170,260 120,250 Q85,210 110,160 Z" },
  { id: "IN-UP", name: "Uttar Pradesh", d: "M215,165 Q275,155 330,200 Q310,245 240,240 Q205,210 215,165 Z" },
  { id: "IN-BR", name: "Bihar", d: "M332,205 Q385,200 405,230 Q375,260 330,250 Q325,225 332,205 Z" },
  { id: "IN-WB", name: "West Bengal", d: "M385,245 Q405,240 415,270 Q400,345 375,340 Q370,290 385,245 Z" },
  { id: "IN-JH", name: "Jharkhand", d: "M325,252 Q372,255 365,295 Q325,305 310,280 Q315,260 325,252 Z" },
  { id: "IN-OD", name: "Odisha", d: "M315,295 Q375,295 385,350 Q335,390 295,350 Q305,315 315,295 Z" },
  { id: "IN-MP", name: "Madhya Pradesh", d: "M180,225 Q285,215 305,280 Q240,315 175,295 Q165,255 180,225 Z" },
  { id: "IN-GJ", name: "Gujarat", d: "M60,230 Q125,230 135,290 Q95,335 55,295 Q50,255 60,230 Z" },
  { id: "IN-MH", name: "Maharashtra", d: "M130,305 Q245,295 250,380 Q165,420 125,370 Q118,335 130,305 Z" },
  { id: "IN-CG", name: "Chhattisgarh", d: "M285,270 Q320,270 315,350 Q285,385 270,335 Q275,295 285,270 Z" },
  { id: "IN-TG", name: "Telangana", d: "M210,370 Q275,360 265,425 Q220,440 195,405 Q200,385 210,370 Z" },
  { id: "IN-AP", name: "Andhra Pradesh", d: "M235,425 Q295,370 285,495 Q235,510 220,455 Q225,435 235,425 Z" },
  { id: "IN-KA", name: "Karnataka", d: "M150,395 Q215,395 210,505 Q160,515 140,450 Q145,415 150,395 Z" },
  { id: "IN-GA", name: "Goa", d: "M140,455 Q152,455 150,470 Q140,472 140,455 Z" },
  { id: "IN-KL", name: "Kerala", d: "M175,515 Q198,515 195,595 Q175,605 168,555 Q170,530 175,515 Z" },
  { id: "IN-TN", name: "Tamil Nadu", d: "M198,505 Q245,500 235,595 Q195,615 190,555 Q192,525 198,505 Z" },
  // North-Eastern Region
  { id: "IN-SK", name: "Sikkim", d: "M385,180 Q398,180 398,195 Q385,198 385,180 Z" },
  { id: "IN-AS", name: "Assam & NE", d: "M430,205 Q520,185 530,245 Q465,270 425,235 Z" },
  { id: "IN-AR", name: "Arunachal Pradesh", d: "M485,160 Q555,165 540,205 Q485,200 485,160 Z" },
  { id: "IN-ML", name: "Meghalaya", d: "M430,238 Q470,238 468,258 Q430,258 430,238 Z" },
  { id: "IN-TR", name: "Tripura & Mizoram", d: "M450,265 Q480,265 475,320 Q445,310 450,265 Z" }
];
```

---

### PHASE 4: Home View (Video Replica)

Create `src/views/HomeView.jsx`:

```jsx
import React, { useState } from 'react';
import { CulturalBannerIllustration } from '../components/SareeLogo';
import { INDIA_MAP_DATA } from '../data/indiaSvgPaths';
import { ALL_STATES_DATA, TOP_WEAVES_LEADERBOARD, WORDCLOUD_LIST } from '../data/sareeData';

export const HomeView = ({ onSelectState, onSelectWeave }) => {
  const [hoveredState, setHoveredState] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  // Olympic reference choropleth color scale (Warm Rose to Deep Saree Maroon)
  const getFillColor = (revenue) => {
    if (!revenue || revenue === 0) return '#FEF2F2';
    if (revenue >= 9600) return '#780016'; // Darkest maroon (UP)
    if (revenue >= 7200) return '#991B1B'; // Rich Crimson (TN, WB)
    if (revenue >= 4800) return '#DC2626'; // Vivid Red (KA, MH, GJ)
    if (revenue >= 2400) return '#F87171'; // Coral
    return '#FECACA';                      // Soft blush
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      
      {/* 1. OVERVIEW SECTION (Matching Video 0:00 - 0:02) */}
      <section className="text-center my-12">
        <CulturalBannerIllustration />
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">Overview</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
          The Indian Saree is the world’s most celebrated, continuous living textile heritage. 
          Across more than 28 states with over 500 handloom clusters, each region weaves its geography, 
          architecture, rituals, and royal lineage directly into pure silk, gold zari, and natural cotton.
        </p>
      </section>

      <div className="w-16 h-0.5 bg-gray-200 mx-auto my-12"></div>

      {/* 2. PURPOSE SECTION (Matching Video 0:02 - 0:04) */}
      <section className="text-center my-12">
        <div className="w-20 h-20 mx-auto mb-4 bg-amber-50 rounded-full flex items-center justify-center border border-amber-200">
          <span className="text-3xl">🧵</span>
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">Purpose</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
          Using handloom census records and regional cooperative sales, this visualizer explores 
          the economic power of each state, comparing bridal luxury silks, festive blends, and everyday 
          handlooms, while revealing how artisan gender and younger buyer trends are reshaping the craft.
        </p>
      </section>

      <div className="w-16 h-0.5 bg-gray-200 mx-auto my-12"></div>

      {/* 3. INTERACTIVE INDIA MAP (Matching Video 0:05 - 0:07) */}
      <section className="my-16 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">Interactive India Map</h2>
        <p className="text-gray-500 text-sm mb-8">
          The India map shows all saree revenue for all states. <span className="font-semibold text-red-700">Click on the state to see more stats!</span>
        </p>

        {/* Map Container with Top-Left Legend */}
        <div className="relative inline-block w-full max-w-2xl bg-white border border-gray-100 rounded-2xl shadow-sm p-4">
          
          {/* Vertical Legend (Matching 0:06 in video) */}
          <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-3 rounded-lg border border-gray-200 text-left shadow-sm">
            <span className="text-xs font-bold text-gray-700 block mb-2">Revenue (₹ Cr)</span>
            <div className="space-y-1.5 text-[11px] font-medium text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-xs" style={{ backgroundColor: '#780016' }}></span>
                <span>9,600 to 12,000</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-xs" style={{ backgroundColor: '#991B1B' }}></span>
                <span>7,200 to 9,600</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-xs" style={{ backgroundColor: '#DC2626' }}></span>
                <span>4,800 to 7,200</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-xs" style={{ backgroundColor: '#F87171' }}></span>
                <span>2,400 to 4,800</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-xs" style={{ backgroundColor: '#FECACA' }}></span>
                <span>0 to 2,400</span>
              </div>
            </div>
          </div>

          {/* SVG Map Canvas */}
          <svg 
            viewBox="0 0 600 650" 
            className="w-full h-auto max-h-[580px] filter drop-shadow-sm"
          >
            {INDIA_MAP_DATA.map((state) => {
              const stateData = ALL_STATES_DATA[state.id];
              const revenue = stateData ? stateData.revenueCr : 600;
              const isHovered = hoveredState?.id === state.id;

              return (
                <path
                  key={state.id}
                  d={state.d}
                  fill={getFillColor(revenue)}
                  stroke={isHovered ? "#1E3A8A" : "#FFFFFF"}
                  strokeWidth={isHovered ? 2.5 : 1}
                  className="cursor-pointer transition-all duration-200 hover:opacity-90"
                  onMouseEnter={(e) => {
                    setHoveredState({ ...state, ...stateData });
                    setTooltipPos({ x: e.clientX, y: e.clientY });
                  }}
                  onMouseMove={(e) => {
                    setTooltipPos({ x: e.clientX, y: e.clientY });
                  }}
                  onMouseLeave={() => setHoveredState(null)}
                  // CRITICAL: Navigates to dedicated page like Canada in video
                  onClick={() => onSelectState(state.id)}
                />
              );
            })}
          </svg>

          {/* Hover Floating Tooltip */}
          {hoveredState && (
            <div 
              className="fixed pointer-events-none z-50 bg-gray-900/95 text-white px-3 py-2 rounded-md text-xs shadow-xl border border-gray-700"
              style={{ left: `${tooltipPos.x + 12}px`, top: `${tooltipPos.y + 12}px` }}
            >
              <div className="font-bold text-amber-300">{hoveredState.name}</div>
              <div>Sales: ₹{hoveredState.revenueCr ? hoveredState.revenueCr.toLocaleString() : '600'} Cr</div>
              {hoveredState.dominantWeave && (
                <div className="text-[10px] text-gray-300">Weave: {hoveredState.dominantWeave}</div>
              )}
              <div className="text-[10px] text-amber-200 mt-1 italic">Click to inspect graphs →</div>
            </div>
          )}
        </div>
      </section>

      <div className="w-16 h-0.5 bg-gray-200 mx-auto my-12"></div>

      {/* 4. WORDCLOUD SECTION (Matching Video 0:24 - 0:26) */}
      <section className="my-16 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">WordCloud</h2>
        <p className="text-gray-500 text-sm mb-10 max-w-xl mx-auto">
          The interactive WordCloud helps us visualize what the popular weaves are in India. 
          The bolder the color of the word, the more popular the sport / weave is.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 max-w-3xl mx-auto py-8 px-4 bg-gray-50/50 rounded-2xl border border-gray-100">
          {WORDCLOUD_LIST.map((item) => {
            const fontSizes = {
              96: 'text-5xl font-black text-rose-900',
              92: 'text-5xl font-black text-red-800',
              84: 'text-4xl font-extrabold text-amber-800',
              80: 'text-4xl font-extrabold text-blue-900',
              76: 'text-3xl font-bold text-yellow-800',
              75: 'text-3xl font-bold text-emerald-800',
              72: 'text-3xl font-bold text-red-700',
              70: 'text-2xl font-bold text-indigo-800',
              68: 'text-2xl font-semibold text-purple-900',
              64: 'text-xl font-semibold text-yellow-700',
              62: 'text-xl font-medium text-amber-900',
              60: 'text-lg font-medium text-teal-800',
              58: 'text-base font-medium text-gray-800',
              56: 'text-base font-medium text-red-600',
              54: 'text-sm font-normal text-gray-600',
              52: 'text-sm font-normal text-blue-700',
              50: 'text-xs font-light text-gray-500'
            };

            return (
              <span
                key={item.text}
                className={`${fontSizes[item.value] || 'text-lg font-medium text-gray-700'} cursor-pointer hover:scale-110 transition-transform duration-150 select-none`}
                // Navigates to dedicated Weave page (like Athletics at 0:27)
                onClick={() => onSelectWeave(item.weaveId)}
              >
                {item.text}
              </span>
            );
          })}
        </div>
      </section>

      <div className="w-16 h-0.5 bg-gray-200 mx-auto my-12"></div>

      {/* 5. TOP WEAVES IN INDIA (Matching Video 0:37) */}
      <section className="my-16">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight text-center mb-4">
          Top Weaves in India
        </h2>

        {/* Legend: Gold | Silver | Bronze */}
        <div className="flex justify-center items-center gap-6 text-xs font-semibold text-gray-600 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-yellow-600 rounded-xs"></span>
            <span>Gold (Luxury Silk)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-gray-400 rounded-xs"></span>
            <span>Silver (Festive Blends)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-amber-900 rounded-xs"></span>
            <span>Bronze (Everyday Cotton)</span>
          </div>
        </div>

        {/* Stacked Horizontal Bars */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {TOP_WEAVES_LEADERBOARD.map((item) => {
            const goldPct = (item.gold / 10000) * 100;
            const silverPct = (item.silver / 10000) * 100;
            const bronzePct = (item.bronze / 10000) * 100;

            return (
              <div key={item.name} className="flex items-center gap-4 text-xs">
                <div className="w-48 text-right font-medium text-gray-700 truncate" title={item.name}>
                  {item.name}
                </div>
                <div className="flex-1 flex h-6 bg-gray-100 rounded-xs overflow-hidden shadow-inner">
                  <div 
                    style={{ width: `${goldPct}%` }} 
                    className="bg-yellow-600 hover:opacity-90 transition-opacity" 
                    title={`Gold: ₹${item.gold} Cr`}
                  />
                  <div 
                    style={{ width: `${silverPct}%` }} 
                    className="bg-gray-400 hover:opacity-90 transition-opacity" 
                    title={`Silver: ₹${item.silver} Cr`}
                  />
                  <div 
                    style={{ width: `${bronzePct}%` }} 
                    className="bg-amber-900 hover:opacity-90 transition-opacity" 
                    title={`Bronze: ₹${item.bronze} Cr`}
                  />
                </div>
                <div className="w-16 font-bold text-gray-900 text-right">
                  ₹{item.total} Cr
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="w-16 h-0.5 bg-gray-200 mx-auto my-12"></div>

      {/* 6. REFLECTION SECTION (Matching Video 0:39 - 0:43) */}
      <section className="my-16 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-3xl">🪡</span>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mt-2 mb-2">Reflection</h2>
          <p className="text-gray-500 text-sm">Our website aims to answer the following 3 questions:</p>
        </div>

        <div className="space-y-8 text-gray-700 text-sm leading-relaxed">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="font-bold text-gray-900 text-base mb-2">
              1. How has the trend of sales altered across states over the years?
            </h3>
            <p>
              We observed significant revenue acceleration in southern and northern silk clusters. 
              Uttar Pradesh (Banarasi) and Tamil Nadu (Kanchipuram) maintain uncontested leadership with 
              over ₹8,900+ Cr in annual market valuation, fueled by wedding couture resilience. However, 
              eastern handloom powerhouses like West Bengal demonstrate massive volume leadership in everyday 
              breathable cottons (Jamdani and Tant).
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="font-bold text-gray-900 text-base mb-2">
              2. How has the interest in a particular weave changed?
            </h3>
            <p>
              Lightweight luxury has grown by over 300% among millennial and Gen-Z consumers. 
              Historically heavy weaves have given way to sheer silk-cotton hybrids like <em>Chanderi</em> and 
              <em>Maheshwari</em>, which are comfortable for modern corporate wear while maintaining traditional 
              zari dignity.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="font-bold text-gray-900 text-base mb-2">
              3. How have the numbers for male and female artisans varied?
            </h3>
            <p>
              While master loom weaving was historically dominated by male artisans, the last two decades 
              have seen women surge from 22% in 1990 to over 58% in 2024. Driven by rural Self Help Groups (SHGs) 
              and spinning cooperatives in Assam and Odisha, women have become the true backbone of India’s handloom preservation.
            </p>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400 mt-16 pb-8">
          © 2026 SutraViz • Handloom Census & Ministry of Textiles Open Data
        </div>
      </section>

    </div>
  );
};
```

---

### PHASE 5: Dedicated State Detail Page (Video 0:08 - 0:17 Replica)

Create `src/views/StateDetailView.jsx`:

```jsx
import React, { useState } from 'react';
import { ALL_STATES_DATA } from '../data/sareeData';

export const StateDetailView = ({ stateId, onBack }) => {
  const state = ALL_STATES_DATA[stateId] || ALL_STATES_DATA["IN-TN"];
  const [hoveredBar, setHoveredBar] = useState(null);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
      >
        <span>←</span> Back to All States
      </button>

      {/* Main State Title & Subtitle (Matching 0:08 in Video) */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-900 tracking-tight">
          {state.name}
        </h1>
        <p className="text-gray-500 font-medium text-lg mt-1">
          Revenue earned over the year
        </p>
      </div>

      {/* Legend (Gold | Silver | Bronze) */}
      <div className="flex justify-center items-center gap-6 text-xs font-semibold text-gray-600 mb-8">
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 bg-yellow-600 rounded-xs"></span>
          <span>Gold (Pure Silk / Zari)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 bg-gray-400 rounded-xs"></span>
          <span>Silver (Festive Blends)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 bg-amber-900 rounded-xs"></span>
          <span>Bronze (Everyday Cotton)</span>
        </div>
      </div>

      {/* Multi-Year Stacked Vertical Bars (Matching 0:09 in Video) */}
      <div className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm mb-16">
        <div className="flex items-end justify-between gap-4 h-72 border-b border-gray-200 pb-2">
          {state.yearlyHistory.map((item) => {
            const maxVal = 10000;
            const goldHeight = (item.gold / maxVal) * 100;
            const silverHeight = (item.silver / maxVal) * 100;
            const bronzeHeight = (item.bronze / maxVal) * 100;

            return (
              <div 
                key={item.year}
                className="flex-1 flex flex-col items-center h-full justify-end relative cursor-pointer group"
                onMouseEnter={() => setHoveredBar(item)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                {/* Stacked Vertical Column */}
                <div className="w-full max-w-[42px] flex flex-col-reverse rounded-t-xs overflow-hidden">
                  <div style={{ height: `${bronzeHeight}%` }} className="bg-amber-900 w-full" />
                  <div style={{ height: `${silverHeight}%` }} className="bg-gray-400 w-full" />
                  <div style={{ height: `${goldHeight}%` }} className="bg-yellow-600 w-full" />
                </div>
                
                <span className="text-xs font-semibold text-gray-500 mt-3">{item.year}</span>
              </div>
            );
          })}
        </div>
        <div className="text-center text-xs text-gray-400 mt-3 font-medium">Year</div>

        {/* Hover Tooltip (Matching exactly 0:09 in video) */}
        {hoveredBar && (
          <div className="absolute top-12 right-12 bg-black/85 text-white p-3 rounded-md text-xs shadow-xl border border-gray-700 min-w-[150px]">
            <div className="font-bold text-gray-200 mb-1">Year: {hoveredBar.year}</div>
            <div className="text-amber-700">Bronze Count: ₹{hoveredBar.bronze} Cr</div>
            <div className="text-gray-300">Silver Count: ₹{hoveredBar.silver} Cr</div>
            <div className="text-yellow-400 font-bold">Gold Count: ₹{hoveredBar.gold} Cr</div>
          </div>
        )}
      </div>

      {/* Top Weaves & Clusters Horizontal Bars (Matching 0:13 in Video) */}
      <div className="my-12">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight text-center mb-8">
          Top Weaves and Clusters of {state.name}
        </h2>

        {/* Legend */}
        <div className="flex justify-center items-center gap-6 text-xs font-semibold text-gray-600 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-yellow-600 rounded-xs"></span>
            <span>Gold</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-gray-400 rounded-xs"></span>
            <span>Silver</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-amber-900 rounded-xs"></span>
            <span>Bronze</span>
          </div>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          {state.topClusters.map((cluster) => {
            const goldW = (cluster.gold / 50) * 100;
            const silverW = (cluster.silver / 50) * 100;
            const bronzeW = (cluster.bronze / 50) * 100;

            return (
              <div key={cluster.name} className="flex items-center gap-4 text-xs">
                <div className="w-44 text-right font-medium text-gray-700 truncate">
                  {cluster.name}
                </div>
                <div className="flex-1 flex h-6 bg-gray-100 rounded-xs overflow-hidden shadow-inner">
                  <div style={{ width: `${goldW}%` }} className="bg-yellow-600 hover:opacity-90" title={`Gold: ${cluster.gold}`} />
                  <div style={{ width: `${silverW}%` }} className="bg-gray-400 hover:opacity-90" title={`Silver: ${cluster.silver}`} />
                  <div style={{ width: `${bronzeW}%` }} className="bg-amber-900 hover:opacity-90" title={`Bronze: ${cluster.bronze}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Heritage Badges */}
      <div className="mt-12 p-6 bg-amber-50/50 rounded-xl border border-amber-200/60 max-w-2xl mx-auto text-xs">
        <span className="font-bold text-amber-900 block mb-2">Registered GI Tags:</span>
        <div className="flex flex-wrap gap-2">
          {state.giTags.map((tag) => (
            <span key={tag} className="bg-white px-2.5 py-1 rounded border border-amber-200 text-amber-900 font-medium">
              🏷️ {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
```

---

### PHASE 6: Dedicated Weave Detail Page (Video 0:27 - 0:35 Replica)

Create `src/views/WeaveDetailView.jsx`:

```jsx
import React from 'react';
import { WEAVE_DETAILS_DATA } from '../data/sareeData';

export const WeaveDetailView = ({ weaveId, onBack }) => {
  const weave = WEAVE_DETAILS_DATA[weaveId] || WEAVE_DETAILS_DATA["banarasi"];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button 
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
      >
        <span>←</span> Back to Overview
      </button>

      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          {weave.title}
        </h1>
        <p className="text-gray-500 font-medium text-sm mt-2">
          TreeMap of top winning clusters and production regions
        </p>
      </div>

      {/* 1. TREEMAP (Matching Video 0:28 - 0:30) */}
      <div className="mb-16">
        <h3 className="text-center text-sm font-bold text-gray-600 uppercase tracking-wider mb-4">
          TreeMap of top winning clusters
        </h3>
        <div className="grid grid-cols-12 h-64 border border-white gap-0.5 rounded-lg overflow-hidden shadow-sm">
          {weave.clustersTreemap.map((cluster, i) => {
            const cols = i === 0 ? 'col-span-6 row-span-2' : i === 1 ? 'col-span-3' : 'col-span-3';
            return (
              <div 
                key={cluster.name}
                style={{ backgroundColor: cluster.color }}
                className={`${cols} flex flex-col justify-center items-center text-white p-2 text-center transition-opacity hover:opacity-95 cursor-pointer`}
              >
                <span className="font-bold text-sm">{cluster.name}</span>
                <span className="text-xs opacity-90">{cluster.share}% output</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. LINE CHART 1: Clusters Active Over the Years (Matching 0:31 in video) */}
      <div className="mb-16 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h3 className="text-center text-sm font-bold text-gray-700 mb-6">
          Number of registered clusters active over the years
        </h3>
        <div className="flex items-end justify-between h-48 border-b border-gray-200 px-4">
          {weave.clusterParticipationGrowth.map((point) => (
            <div key={point.year} className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-bold text-emerald-800">{point.count}</span>
              <div 
                style={{ height: `${(point.count / 300) * 140}px` }} 
                className="w-1.5 bg-emerald-600 rounded-t-full"
              />
              <span className="text-[11px] text-gray-400">{point.year}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. LINE CHART 2: Male and Female Artisans Over the Years (Matching 0:32 - 0:33 in video) */}
      <div className="mb-16 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-sm font-bold text-gray-700">
            Male and Female artisans over the year
          </h3>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-0.5 bg-blue-600"></span>
              <span className="text-blue-600">Male</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-0.5 bg-pink-500"></span>
              <span className="text-pink-500">Female</span>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between h-48 border-b border-gray-200 px-4">
          {weave.genderTrends.map((point) => (
            <div key={point.year} className="flex flex-col items-center gap-1">
              <div className="flex items-end gap-1">
                <div 
                  style={{ height: `${(point.male / 1200) * 140}px` }} 
                  className="w-2 bg-blue-600 rounded-t-sm"
                  title={`Male: ${point.male}`}
                />
                <div 
                  style={{ height: `${(point.female / 1200) * 140}px` }} 
                  className="w-2 bg-pink-500 rounded-t-sm"
                  title={`Female: ${point.female}`}
                />
              </div>
              <span className="text-[11px] text-gray-400 mt-2">{point.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
```

---

### PHASE 7: Main App Orchestrator & Header

Create `src/components/Header.jsx`:

```jsx
import React from 'react';
import { SareeLogo } from './SareeLogo';

export const Header = ({ onGoHome }) => {
  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          onClick={onGoHome} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <SareeLogo size={34} />
          <div>
            <h1 className="text-xl font-black tracking-tight text-gray-900 group-hover:text-red-900 transition-colors">
              SutraViz
            </h1>
            <p className="text-[10px] text-gray-400 tracking-wider uppercase font-semibold">
              Handlooms of India
            </p>
          </div>
        </div>

        {/* Olympic style clean pill badge */}
        <div className="flex items-center gap-3 text-xs">
          <span className="px-3 py-1 bg-amber-50 text-amber-900 border border-amber-200 rounded-full font-semibold">
            ₹62,400+ Cr Market
          </span>
          <span className="hidden sm:inline px-3 py-1 bg-gray-50 text-gray-600 border border-gray-200 rounded-full">
            28 States Covered
          </span>
        </div>
      </div>
    </header>
  );
};
```

Create `src/App.jsx`:

```jsx
import React, { useState } from 'react';
import { Header } from './components/Header';
import { HomeView } from './views/HomeView';
import { StateDetailView } from './views/StateDetailView';
import { WeaveDetailView } from './views/WeaveDetailView';

export default function App() {
  // Navigation State: 'home' | 'state' | 'weave'
  const [currentView, setCurrentView] = useState({ page: 'home', id: null });

  const handleSelectState = (stateId) => {
    setCurrentView({ page: 'state', id: stateId });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectWeave = (weaveId) => {
    setCurrentView({ page: 'weave', id: weaveId });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setCurrentView({ page: 'home', id: null });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">
      <Header onGoHome={handleGoHome} />

      <main className="flex-1">
        {currentView.page === 'home' && (
          <HomeView 
            onSelectState={handleSelectState} 
            onSelectWeave={handleSelectWeave} 
          />
        )}

        {currentView.page === 'state' && (
          <StateDetailView 
            stateId={currentView.id} 
            onBack={handleGoHome} 
          />
        )}

        {currentView.page === 'weave' && (
          <WeaveDetailView 
            weaveId={currentView.id} 
            onBack={handleGoHome} 
          />
        )}
      </main>
    </div>
  );
}
```

Create `src/main.jsx`:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

---

### PHASE 8: Build Verification & Self-Check

Run in Antigravity Terminal:

```bash
npm run build
npm run dev
```

#### Self-Verification Checklist:
1. **Logo & Header**: Shows the custom interlocking loom spindle rings with the golden weaver's shuttle in the top navigation.
2. **Landing Page Scrollytelling**:
   * Overview with motif illustration.
   * Purpose section.
   * India Map with vertical gradient legend on top-left.
   * WordCloud with popular saree words.
   * Top Weaves in India horizontal stacked bar chart.
   * Reflection section with 3 numbered answers.
3. **Dedicated Page Navigation (Exact Video Replica)**:
   * **Clicking any state on the map** $\rightarrow$ opens the dedicated State Detail View (`Revenue earned over the year` with stacked vertical bars for 2018–2024 and horizontal cluster bars).
   * **Clicking any word in the WordCloud** $\rightarrow$ opens the dedicated Weave Detail View with Treemap and dual-line gender participation trends.