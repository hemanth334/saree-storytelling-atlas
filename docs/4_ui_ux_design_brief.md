# UI/UX Design Brief
## Project: SutraViz — The Weaver's Atlas

---

### 1. Aesthetic Direction: Museum-Grade Scrollytelling
* **Philosophy:** Minimalist, editorial, high-whitespace aesthetic inspired by modern scientific and cultural visualizers (mirroring the clean layout of `olympic.themagehub.com`).
* **Canvas:** Pure white background (`#FFFFFF`) with generous vertical padding (`py-16` to `py-20`) between sections to provide breathing room.
* **Depth & Borders:** Subdued, subtle borders (`1px solid #E2E8F0`) and soft shadows (`shadow-sm` / `shadow-md`) on cards. No heavy gradients or dark-mode toggles.

---

### 2. Color Palette & Thematic Tokens

#### Neutral Base
| Token | Hex Code | Usage |
| :--- | :--- | :--- |
| `bg-primary` | `#FFFFFF` | Global page background |
| `bg-card` | `#F8FAFC` | Card and panel container fills |
| `border-subtle` | `#E2E8F0` | Card borders, dividers, chart axes |
| `text-primary` | `#1A202C` | Headings, primary metrics, high-emphasis text |
| `text-secondary`| `#4A5568` | Body copy, section descriptions |
| `text-muted` | `#718096` | Axis labels, captions, metadata |

#### India Map Choropleth Scale (Monochromatic Heritage Ruby)
* **Tier 1 (< ₹1,000 Cr):** `#FFF5F5` (Very soft rose)
* **Tier 2 (₹1,000 – ₹3,000 Cr):** `#FED7D7` (Blush)
* **Tier 3 (₹3,000 – ₹5,000 Cr):** `#FEB2B2` (Light coral)
* **Tier 4 (₹5,000 – ₹7,500 Cr):** `#E53E3E` (Heritage crimson)
* **Tier 5 (₹7,500+ Cr):** `#9B2C2C` (Deep imperial maroon)
* **Active State Stroke:** `#2B6CB0` (Deep indigo) with `strokeWidth: 2.5px`

#### Leaderboard Stacked Bar Palette
* **Tier 1: Luxury Silk / Zari:** `#B7791F` (Antique Gold)
* **Tier 2: Festive / Blends:** `#C53030` (Rich Crimson)
* **Tier 3: Everyday Cotton:** `#2B6CB0` (Handloom Indigo)

#### Demographic Age Cohort Palette
* **18–25 yrs:** `#D97706` (Warm Amber)
* **26–40 yrs:** `#DC2626` (Bright Crimson)
* **41–60 yrs:** `#2563EB` (Cobalt Blue)
* **60+ yrs:** `#059669` (Heritage Emerald)

---

### 3. Typography System
* **Font Family:** `'Open Sans'`, sans-serif (imported from Google Fonts).
* **Type Hierarchy:**
  * **Hero Title:** `text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900`
  * **Section Headings:** `text-2xl lg:text-3xl font-bold tracking-tight text-gray-900`
  * **Card / Subheading:** `text-lg font-semibold text-gray-800`
  * **Body Text:** `text-sm lg:text-base text-gray-600 leading-relaxed max-w-3xl`
  * **Metric Numbers:** `text-2xl lg:text-3xl font-bold tracking-tight`
  * **Badges / Labels:** `text-xs uppercase font-bold tracking-wider`

---

### 4. Layout Specifications
* **Max Container Width:** `max-w-6xl` (1152px) centered with `mx-auto px-4 sm:px-6 lg:px-8`.
* **Map Section Layout:**
  * Desktop (`lg:`): 12-column grid. Left 7 columns = Map canvas; Right 5 columns = State Profile Panel.
  * Mobile / Tablet: 1-column stack. Map on top, State Profile directly below.