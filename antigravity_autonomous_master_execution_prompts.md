# SutraViz: Autonomous Antigravity Execution Instructions
## Master Execution Prompt File for Antigravity Agent

---

### INSTRUCTIONS FOR ANTIGRAVITY AGENT
> **System Directive:** You are acting as an autonomous Full-Stack Data Visualization Engineer.
> Read this file sequentially from **Phase 1** through **Phase 5**.
> Execute all terminal commands, create the respective project directories and component files, verify each step using automated checks, and proceed automatically to the next phase until the application is fully running.
> 
> Reference documents are located in: `docs/`
> - `docs/PRD.md`
> - `docs/TRD.md`
> - `docs/APP_FLOW.md`
> - `docs/DESIGN_BRIEF.md`
> - `docs/SCHEMA_DATASET.md`
> - `docs/IMPLEMENTATION_PLAN.md`

---

## EXECUTION SEQUENCE

### PHASE 1: Scaffolding, Tooling & Asset Preparation

#### Agent Directive:
1. Initialize a modern React application using Vite in the current root directory:
   ```bash
   npm create vite@latest . -- --template react --yes
   ```
2. Install all visualization, styling, and utility dependencies:
   ```bash
   npm install @visx/geo @visx/wordcloud @visx/scale @visx/tooltip @visx/shape @visx/responsive lucide-react papaparse topojson-client
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
3. Configure `tailwind.config.js`:
   * Set `content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]`
   * Extend font family `sans` to include `'Open Sans', sans-serif`.
4. Update `index.html`:
   * Inject Google Font link for `Open Sans` (`300, 400, 600, 700`).
   * Set page title to: `"SutraViz — Handlooms & Heritage of India"`.
5. Populate static assets in `public/data/`:
   * Create `public/data/india_saree_data.csv` with the complete 28-state dataset defined in `docs/SCHEMA_DATASET.md`.
   * Create or verify `public/data/india_states.json` containing valid TopoJSON/GeoJSON polygons for all Indian states.
6. Verify Phase 1:
   * Run `npm run build` or start `npm run dev` to confirm zero compilation errors.

---

### PHASE 2: Data Ingestion & Pan-India Choropleth Map

#### Agent Directive:
1. Build `src/utils/loadData.js`:
   * Implement a reusable data loading utility that uses `Papa.parse` to parse `/data/india_saree_data.csv` into typed objects, and fetches `/data/india_states.json`.
   * Structure a custom React hook `useSareeData()` exposing `{ stateDataMap, rawRows, geoJson, loading, error }`.
2. Build `src/components/IndiaMapSection.jsx`:
   * Use `@visx/geo` with a `<Mercator>` projection centered at longitude `78.96` and latitude `22.59` with viewBox `0 0 600 650`.
   * Implement a sequential choropleth color scale (`scaleThreshold`):
     * `< ₹1,000 Cr`: `#FFF5F5`
     * `₹1,000 - ₹3,000 Cr`: `#FED7D7`
     * `₹3,000 - ₹5,000 Cr`: `#FEB2B2`
     * `₹5,000 - ₹7,500 Cr`: `#E53E3E`
     * `₹7,500+ Cr`: `#9B2C2C`
   * Bind interactive SVG mouse events:
     * `onMouseEnter`: Show floating tooltip with state name and annual revenue.
     * `onClick`: Select state and trigger active stroke highlight (`#2B6CB0`, 2.5px width).
3. Verify Phase 2:
   * Render the map in `App.jsx` and confirm all 28 state boundaries render cleanly without visual clipping.

---

### PHASE 3: Dynamic State Detail Panel

#### Agent Directive:
1. Build `src/components/StateDetailCard.jsx`:
   * Connect to the selected state ID (defaulting to `"IN-UP"` on initial mount).
   * **5-Year Revenue Trend:** Render stacked or vertical growth bars (2020–2024) with hover labels displaying revenue in ₹ Crores.
   * **Target Demographics:** Render horizontal percentage bars for the 4 buyer age brackets:
     * `18–25 yrs` (College / Guest)
     * `26–40 yrs` (Bridal / Professional)
     * `41–60 yrs` (Traditional / Silk)
     * `60+ yrs` (Everyday Cotton)
   * **Cluster Metadata:** Render badges for registered GI Tags, active handloom weaver counts, and dominant fabric types.
2. Layout pairing:
   * In `IndiaMapSection.jsx`, place the Map in an editorial 12-column grid (`col-span-7` for Map, `col-span-5` for Detail Card).
   * Ensure mobile responsiveness collapses to a single stacked column below 1024px.
3. Verify Phase 3:
   * Clicking different states (e.g., Karnataka, Tamil Nadu, West Bengal) updates metrics, revenue bars, and demographic percentages instantaneously.

---

### PHASE 4: Weave WordCloud & Top 10 Leaderboard

#### Agent Directive:
1. Build `src/components/SareeWordCloud.jsx`:
   * Integrate `@visx/wordcloud` using logarithmic font scaling based on national weave popularity.
   * Include top weaves: *Banarasi, Kanchipuram, Chanderi, Paithani, Patola, Sambalpuri, Jamdani, Kasavu, Kota Doria, Mekhela Chador, Pochampally, Gadwal, Baluchari*.
   * **Cross-filtering interaction:** Clicking any word selects its originating state on the map and scrolls the viewport smoothly to the map section.
2. Build `src/components/TopWeavesLeaderboard.jsx`:
   * Construct a horizontal stacked bar chart ranking the top 10 national weaves by revenue.
   * Divide each bar into 3 distinct tiers:
     * **Tier 1 (Luxury / Pure Zari Silk):** `#B7791F`
     * **Tier 2 (Festive / Occasion Blends):** `#C53030`
     * **Tier 3 (Everyday / Cotton & Linen):** `#2B6CB0`
   * Add interactive tooltips revealing tier values on hover.
3. Verify Phase 4:
   * Confirm word click updates state selection and that leaderboard bars accurately reflect segment splits.

---

### PHASE 5: Scrollytelling Narrative, CSV Export & Production Verification

#### Agent Directive:
1. Build `src/components/Header.jsx` & `src/components/OverviewSection.jsx`:
   * Display macro indicators: Total Market Value (₹62,400+ Cr), Active Weavers (31.4 Lakh+), and GI Weaves (65+).
   * Editorial introduction explaining the craft transition from royal patronage to modern e-commerce.
2. Build `src/components/ReflectionSection.jsx`:
   * Provide structured narrative answers for the 3 key industry questions:
     1. *Regional Revenue Hegemony* (South & North bridal dominance).
     2. *Youth & E-Commerce Adoption* (Lightweight Chanderi, Kota Doria, and Jamdani growth).
     3. *Artisan Household Sustainability* (Mechanization vs. GI authenticity).
3. Build `src/components/CsvExplorerModal.jsx`:
   * Searchable and filterable data table displaying all 28 state rows.
   * "Download Dataset (.CSV)" button creating an in-memory CSV blob for instant download.
4. Orchestrate `src/App.jsx`:
   * Assemble all components in a scrollytelling vertical stack with generous spacing (`py-16` / `space-y-20`).
   * Preserve the pure white (`#FFFFFF`) museum-grade layout specified in `docs/DESIGN_BRIEF.md`.
5. Final Verification & Build:
   * Run automated production build check:
     ```bash
     npm run build
     ```
   * Ensure exit code is 0 with no linting errors or broken references.