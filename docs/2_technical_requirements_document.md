# Technical Requirements Document (TRD)
## Project: SutraViz — The Weaver's Atlas

---

### 1. Technology Stack

| Layer | Selected Technology | Version / Specification | Rationale |
| :--- | :--- | :--- | :--- |
| **Runtime & Bundler** | Node.js + Vite | React 18+ (SPA) | Lightning-fast HMR and small bundle output |
| **Styling** | Tailwind CSS | v3.4+ | Utility-first, zero runtime overhead, responsive layout |
| **Typography** | Open Sans | Google Fonts (300, 400, 600, 700) | Matches the clean editorial aesthetic of the reference site |
| **Visualization Engine** | `@visx` suite | `@visx/geo`, `@visx/wordcloud`, `@visx/scale`, `@visx/tooltip`, `@visx/shape` | Performs direct SVG rendering in React virtual DOM without heavy canvas bloat |
| **Geo Projection** | `d3-geo` + TopoJSON | Standard India Mercator (`center: [78.96, 22.59]`) | Precise rendering of all 28 states |
| **Data Parsing** | `papaparse` | v5.4+ | Robust client-side CSV parsing |
| **Icons** | `lucide-react` | Latest | Minimalist, themeable line icons |

---

### 2. Architecture & Data Ingestion Pipeline

```
[ Static CSV / GeoJSON in public/data/ ]
                 │
                 ▼
       [ fetch() + PapaParse ]
                 │
                 ▼
     [ useSareeData() Hook ]
                 │
                 ├──► Global Macro Metrics -> <OverviewSection />
                 ├──► Normalized State Dictionary -> <IndiaMapSection /> & <StateDetailCard />
                 ├──► Weave Frequency Array -> <SareeWordCloud />
                 ├──► Tiered Ranking Array -> <TopWeavesLeaderboard />
                 └──► Raw Array -> <CsvExplorerModal />
```

1. **Client-Side Data Storage:**
   * `public/data/india_saree_data.csv`: Source of truth for 28 states and UTs.
   * `public/data/india_states.json`: Simplified GeoJSON feature collection of Indian state boundaries (< 300 KB).
2. **Zero Backend Requirement:** The entire application runs as a static Single Page Application (SPA), deployable to GitHub Pages, Vercel, or Netlify with no database dependencies.

---

### 3. Key Component Architecture

#### `IndiaMapSection.jsx`
* Implements `@visx/geo` with `<Mercator>` projection.
* Scales geometry dynamically to fit container width (`viewBox="0 0 600 650"`).
* Binds `onMouseEnter`, `onMouseLeave`, and `onClick` handlers to SVG `<path>` elements.
* Applies a `scaleThreshold` color scale based on state revenue.

#### `StateDetailCard.jsx`
* Listens to `selectedStateId` from parent state.
* Renders 5-year historical revenue bars (2020–2024).
* Computes horizontal proportional bars for target buyer demographics.
* Lists registered GI tags as styled badges.

#### `SareeWordCloud.jsx`
* Wraps `@visx/wordcloud` using a spiral layout algorithm.
* Uses logarithmic scaling (`scaleLog`) to map search volume / market share to font size (14px to 52px).

#### `TopWeavesLeaderboard.jsx`
* Horizontal stacked bar chart built with `@visx/shape` (`BarStackHorizontal`) or clean CSS flexbox/SVG.
* Displays 3 segments per bar: Luxury, Festive, Everyday.

---

### 4. Performance & Cross-Browser Requirements
* **Max Initial Bundle Size:** < 320 KB (gzipped).
* **Frame Rate:** 60 FPS transitions on state selection and tooltip tracking.
* **Browser Compatibility:** Chrome 90+, Safari 14+, Firefox 88+, Edge 90+.
* **Mobile Responsiveness:** Viewports `< 1024px` switch from two-column grid (Map + Detail) to a vertical stack.