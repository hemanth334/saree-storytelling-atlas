# Phased Implementation Plan
## Project: SutraViz — The Weaver's Atlas

---

### Phase 1: Environment & Dependency Setup
* **Goal:** Create a clean Vite + React app, install required packages, configure Tailwind CSS, and place static data files.
* **Tasks:**
  1. Initialize React app: `npm create vite@latest . -- --template react`
  2. Install dependencies:
     ```bash
     npm install @visx/geo @visx/wordcloud @visx/scale @visx/tooltip @visx/shape lucide-react papaparse topojson-client
     npm install -D tailwindcss postcss autoprefixer
     npx tailwindcss init -p
     ```
  3. Configure `tailwind.config.js` to support `'Open Sans'` font and custom color tokens.
  4. Create `public/data/` folder and place `india_saree_data.csv` and `india_states.json` inside.
* **Verification:** Run `npm run dev` and ensure localhost opens cleanly with zero console warnings.

---

### Phase 2: Data Ingestion & State Choropleth Map
* **Goal:** Load CSV and GeoJSON in React, render all 28 states on an SVG canvas, and configure hover/click interactions.
* **Tasks:**
  1. Build a custom React hook `useSareeData()` to fetch and parse both files on component mount.
  2. Create `src/components/IndiaMapSection.jsx`:
     * Instantiate `@visx/geo` `<Mercator>` projection centered at `[78.96, 22.59]`.
     * Bind state revenue to the 5-tier red/maroon `scaleThreshold`.
     * Implement tooltip tracking for mouse hover (`setHoveredState`).
     * Implement click listener (`setSelectedStateId(stateCode)`).
* **Verification:** Hovering over Karnataka or Uttar Pradesh highlights the state border and displays its name; clicking changes the selected state ID.

---

### Phase 3: Dynamic State Detail Panel
* **Goal:** Build the dynamic inspection panel that updates upon state selection.
* **Tasks:**
  1. Create `src/components/StateDetailCard.jsx`.
  2. Add **5-Year Revenue Bars** (2020–2024) showing growth in ₹ Crores.
  3. Add **Target Buyer Demographics** horizontal distribution bars (18–25, 26–40, 41–60, 60+).
  4. Display GI Tag badges, primary fabric type, and active census weaver figures.
* **Verification:** Clicking different states dynamically re-renders the bars and demographic values without layout shift.

---

### Phase 4: Weave WordCloud & Top 10 Leaderboard
* **Goal:** Replicate the interactive WordCloud and stacked bar chart from the reference Olympic dashboard.
* **Tasks:**
  1. Create `src/components/SareeWordCloud.jsx` using `@visx/wordcloud` with logarithmic font scaling.
  2. Wire word clicks to set `selectedStateId` and scroll viewport to map.
  3. Create `src/components/TopWeavesLeaderboard.jsx` rendering the Top 10 weaves in a horizontal stacked bar format (Luxury Silk, Festive Blends, Everyday Cotton) with interactive hover tooltips.
* **Verification:** Clicking *"Kanchipuram"* highlights Tamil Nadu; hovering over stacked bar segments reveals exact revenue numbers.

---

### Phase 5: Narrative Reflection & CSV Data Export
* **Goal:** Deliver analytical takeaways and provide full CSV data access.
* **Tasks:**
  1. Create `src/components/ReflectionSection.jsx` addressing market concentration, youth e-commerce adoption, and weaver welfare.
  2. Add the CSV Download button using `URL.createObjectURL` to trigger instant download of `india_saree_data.csv`.
  3. Assemble all sections in `src/App.jsx` with generous vertical spacing (`py-16`).
* **Verification:** Trigger full production build: `npm run build`. Verify bundle compiles with zero errors and download button exports valid CSV.