# Application Flow & Interactive States
## Project: SutraViz — The Weaver's Atlas

---

### 1. Visual Flow Diagram

```
+-------------------------------------------------------------+
|                     HEADER & BRANDING                       |
|   "SutraViz: Handlooms & Heritage of India" | Total Stats   |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|                     OVERVIEW & PURPOSE                      |
|         Narrative background on India's saree economy       |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|                 INTERACTIVE INDIA MAP SECTION               |
|                                                             |
|  [ SVG India Map - 28 States ]    [ Selected State Profile] |
|  - Hover: Quick Tooltip           - 5-Year Revenue Bars     |
|  - Click: Selects State   ------> - Demographic Bars       |
|                                   - GI Badges & Fabric Info |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|                  SAREE WEAVES WORDCLOUD                     |
|  - Word size = popularity                                   |
|  - Click word -> Selects corresponding state on map         |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|            TOP 10 WEAVES LEADERBOARD (STACKED BAR)          |
|  - Ranks Top 10 by Revenue                                  |
|  - Segments: Luxury Silk | Festive Blend | Everyday Cotton  |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|               ANALYTICAL REFLECTION SECTION                 |
|  - 3 Core Thematic Q&As explaining market evolution         |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|               DATA EXPLORER & CSV DOWNLOAD                  |
|  - Searchable State-by-State Data Table                     |
|  - [Download Full CSV Dataset] button                       |
+-------------------------------------------------------------+
```

---

### 2. Component State Management

#### Global Application State (`App.jsx` or Context)
```typescript
interface DashboardState {
  selectedStateId: string;       // Default: "IN-UP" (Uttar Pradesh)
  hoveredStateId: string | null; // For map tooltip positioning
  selectedWeave: string | null;  // For cross-filtering from WordCloud
  isCsvModalOpen: boolean;       // Modal visibility toggle
  searchFilter: string;          // State search filter query
}
```

---

### 3. Detailed Interaction Specifications

#### A. Map State Selection
1. **Initial State:** On first load, `selectedStateId` defaults to `"IN-UP"` (Uttar Pradesh) or `"IN-TN"` (Tamil Nadu) so the State Detail panel is never empty.
2. **Hover:** Moving cursor over any state path renders `<Tooltip>` positioned at `(event.clientX, event.clientY)` displaying state name and revenue.
3. **Click:**
   * Active state receives a 2.5px highlight border (`#2B6CB0`) and an elevation filter.
   * State Detail Panel smoothly refreshes with the active state's data.

#### B. WordCloud Interaction
1. **Hover:** Word scales up by 1.1x and changes color to dark indigo (`#1E3A8A`).
2. **Click:** 
   * Sets `selectedStateId` to the state linked to that weave (e.g., clicking *"Paithani"* sets `selectedStateId = "IN-MH"`).
   * Smoothly scrolls the user's viewport back up to the interactive map section.

#### C. Top 10 Leaderboard Tooltip
1. **Hover over segment:** Displays tooltip with segment name, amount in ₹ Crores, and percentage of that weave's total revenue.

#### D. CSV Export Action
1. User clicks **"Download Dataset (.CSV)"**.
2. Client creates an in-memory `Blob` from the loaded CSV string with MIME type `text/csv;charset=utf-8;`.
3. Triggers synthetic `<a download="india_saree_data.csv">` click to start instant browser download.