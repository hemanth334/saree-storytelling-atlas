# Product Requirements Document (PRD)
## Project: SutraViz — The Weaver's Atlas

---

### 1. Elevator Pitch & Objective
* **Product Name:** SutraViz: Handlooms & Heritage of India
* **Tagline:** An interactive scrollytelling atlas mapping handloom traditions, market metrics, and consumer demographics across all Indian states.
* **Objective:** Replace dense government census spreadsheets and fragmented e-commerce reports with a clean, high-whitespace scrollytelling dashboard. The platform enables textile researchers, fashion brands, students, and buyers to explore regional weaves, historical sales trends, target demographics, and craft preservation data across all 28 states and UTs of India.

---

### 2. User Personas & Problem Statement

#### Target Personas
1. **Apparel Merchandiser & Brand Strategist:** Wants to identify high-growth state craft clusters, assess price-tier distribution, and target specific consumer age cohorts (e.g., college-goers vs. bridal shoppers).
2. **Textile Scholar & Cultural Enthusiast:** Wants to trace Geographical Indication (GI) protected weaves, active handloom weaver counts, and native fabrication methods.
3. **Data Visualization Developer / General Visitor:** Wants an engaging, fluid storytelling experience modeled after editorial dashboards (e.g., Olympic historical visualizers) with seamless map and chart interactivity.

#### Problem Statement
Despite representing an annual market of ₹60,000+ Crores, Indian handloom and powerloom saree data is siloed across regional cooperatives, Ministry of Textiles census documents, and private retail indices. There is no unified, open-access visual platform that presents pan-India geographic coverage with interactive state-level drill-downs.

---

### 3. Core Feature Scope (MVP)

#### Section 1: Hero & Macro Industry Overview
* High-level industry statistics displayed cleanly:
  * **Total Market Valuation:** ₹62,400+ Cr
  * **Documented Handloom Weavers:** 31.4 Lakh+
  * **Registered GI Craft Tags:** 65+
  * **Geographic Coverage:** All 28 States & Major Union Territories
* Introductory editorial paragraph establishing the historical significance and modern transition of the Indian saree.

#### Section 2: Interactive Pan-India Choropleth Map (All States)
* SVG vector map rendering boundaries for all 28 Indian states.
* Sequential choropleth color scale based on state-level annual saree market revenue (`annual_revenue_cr`).
* **Hover Interaction:** Smooth tooltip showing state name, flagship weave, active weaver count, and annual revenue.
* **Click Interaction:** Selecting any state triggers the **State Deep Dive Panel** immediately adjacent to/underneath the map.

#### Section 3: State Deep Dive Panel (Dynamic on Click)
* **5-Year Revenue Trend:** Stacked bar chart (2020–2024) illustrating annual market trajectory.
* **Target Buyer Demographics:** Horizontal distribution bars segmented into 4 defined age brackets:
  * `18–25 years`: College, festive casual, wedding guest
  * `26–40 years`: Bridal, festive luxury, working professionals
  * `41–60 years`: Traditional silk, handloom patron, formal wear
  * `60+ years`: Pure cotton, lightweight heritage wear
* **Regional Identifiers:** Primary fabric type (Silk, Cotton, Mulberry, Tussar), active weaver census population, and registered GI Tag badges.

#### Section 4: Interactive Weave WordCloud
* Frequency-weighted visual cloud of prominent sarees (Banarasi, Kanchipuram, Chanderi, Paithani, Patola, Jamdani, Sambalpuri, Kasavu, etc.).
* Words sized according to national market share and search volume.
* **Interaction:** Clicking a weave word highlights its native origin state on the choropleth map and filters the leaderboard.

#### Section 5: Top 10 National Weaves Leaderboard (Horizontal Stacked Bar)
* Mirrors the Olympic reference stacked horizontal bar format.
* Ranks the top 10 handloom saree varieties by revenue, segmented into 3 pricing tiers:
  * **Tier 1 (Luxury / Pure Zari Silk):** Wedding & couture tier
  * **Tier 2 (Festive / Blended Silk):** Occasion & festive wear
  * **Tier 3 (Everyday / Pure Cotton & Linen):** Daily and office wear
* Hover tooltip on bar segments shows exact value in ₹ Crores.

#### Section 6: Industry Narrative & Analytical Reflection
* Scrollytelling Q&A section addressing 3 core thematic questions:
  1. *How has market revenue shifted across states over the past 5 years?*
  2. *Which states lead the revitalization of handloom among Gen-Z and millennial buyers?*
  3. *What is the gender ratio and livelihood stability among active artisan households?*

#### Section 7: In-Browser Dataset Explorer & One-Click CSV Export
* Interactive searchable data table rendering all state metrics.
* **"Download Dataset (.CSV)"** button triggering direct client-side CSV file download (`india_saree_data.csv`).

---

### 4. Explicitly Out-of-Scope (v1)
* User account registration, login, and password management.
* E-commerce checkout, payment processing, or order fulfillment.
* Weaver-level personal profile tracking or micro-loan processing.