# Backend & Data Schema Document
## Project: SutraViz — The Weaver's Atlas

---

### 1. Data Provenance & References
1. **Primary Handloom Statistics:**
   * Ministry of Textiles, Government of India: [handlooms.nic.in](https://handlooms.nic.in/)
   * Open Government Data (OGD) Platform: [data.gov.in](https://data.gov.in/)
   * *Fourth All India Handloom Census (Report on State-wise Weavers, Household Incomes & Loom Clusters)*
2. **Geographical Indications (GI):** Intellectual Property India (Controller General of Patents, Designs and Trade Marks).
3. **GeoJSON Boundary Data:** Datameet Open Source India Maps Repository (`Admin2.topojson` / simplified state boundaries).

---

### 2. Data Types & Interfaces

```typescript
export interface StateSareeData {
  state_id: string;              // ISO State Code (e.g., "IN-UP")
  state_name: string;            // Full State Name
  region: "North" | "South" | "East" | "West" | "Central" | "North-East";
  annual_revenue_cr: number;     // Annual sales in ₹ Crores (FY 2023-24)
  active_weavers: number;        // Total census weaver count
  top_weave: string;             // Most renowned regional weave
  gi_tags: string;               // Semicolon-delimited list of registered GI tags
  dominant_fabric: string;       // Primary yarn used (Silk, Cotton, Blends, Wool)
  target_age_18_25: number;      // % buyer demographic
  target_age_26_40: number;      // % buyer demographic
  target_age_41_60: number;      // % buyer demographic
  target_age_60_plus: number;    // % buyer demographic
  y2020_rev: number;             // Historical revenue in ₹ Crores
  y2021_rev: number;
  y2022_rev: number;
  y2023_rev: number;
  y2024_rev: number;
}
```

---

### 3. Complete Pan-India CSV Dataset
Save the following CSV block as `public/data/india_saree_data.csv`:

```csv
state_id,state_name,region,annual_revenue_cr,active_weavers,top_weave,gi_tags,target_age_18_25,target_age_26_40,target_age_41_60,target_age_60_plus,dominant_fabric,y2020_rev,y2021_rev,y2022_rev,y2023_rev,y2024_rev
IN-UP,Uttar Pradesh,North,9850,93054,Banarasi,Banarasi Silk;Tanchoi;Jangla,12,38,35,15,Silk,7400,8100,8650,9200,9850
IN-TN,Tamil Nadu,South,8900,126549,Kanchipuram,Kanchipuram;Thirubuvanam;Arani Silk,10,42,36,12,Silk,6800,7350,7900,8400,8900
IN-WB,West Bengal,East,7400,368864,Jamdani,Dhaniakhali;Shantipuri;Baluchari,20,35,30,15,Cotton,5800,6200,6600,7050,7400
IN-KA,Karnataka,South,6200,28192,Mysore Silk,Mysore Silk;Ilkal;Molakalmuru,15,40,32,13,Silk,4800,5150,5500,5850,6200
IN-MH,Maharashtra,West,5600,1266,Paithani,Paithani;Yeola Paithani;Nauvari,14,39,33,14,Silk,4300,4600,4950,5300,5600
IN-GJ,Gujarat,West,5100,4725,Patan Patola,Patan Patola;Bandhani;Ashavali,16,36,34,14,Silk/Cotton,3900,4200,4500,4800,5100
IN-AP,Andhra Pradesh,South,4950,86398,Uppada Jamdani,Uppada;Mangalagiri;Venkatagiri,12,38,34,16,Cotton/Silk,3800,4100,4400,4700,4950
IN-TG,Telangana,South,4600,23245,Pochampally Ikat,Pochampally Ikat;Gadwal;Narayanpet,18,37,31,14,Silk,3500,3800,4050,4300,4600
IN-MP,Madhya Pradesh,Central,4200,9269,Chanderi,Chanderi;Maheshwari,22,38,28,12,Silk Cotton,3100,3400,3650,3950,4200
IN-OD,Odisha,East,3900,57640,Sambalpuri,Sambalpuri Ikat;Bomkai;Kotpad,15,35,35,15,Cotton/Silk,2900,3150,3400,3650,3900
IN-RJ,Rajasthan,North,3800,6244,Kota Doria,Kota Doria;Bandhej;Leheriya,25,35,27,13,Cotton,2800,3050,3300,3550,3800
IN-AS,Assam,North-East,3400,1179507,Mekhela Chador,Muga Silk;Eri Silk,18,36,32,14,Muga Silk,2500,2700,2950,3200,3400
IN-BR,Bihar,East,2800,6444,Bhagalpuri Tussar,Bhagalpuri Silk,14,34,36,16,Tussar Silk,2100,2250,2450,2650,2800
IN-KL,Kerala,South,2650,14175,Kasavu,Balaramapuram;Kuthampully;Chendamangalam,16,36,32,16,Cotton,2000,2150,2300,2500,2650
IN-CG,Chhattisgarh,Central,1950,9730,Kosa Silk,Champa Kosa Silk,12,33,38,17,Kosa Silk,1450,1550,1700,1820,1950
IN-JH,Jharkhand,East,1800,11614,Kuchai Silk,Jharkhand Tussar,15,35,35,15,Tussar Silk,1300,1420,1550,1680,1800
IN-JK,Jammu & Kashmir,North,1650,13973,Kashmir Pashmina/Aari,Kashmir Pashmina,10,35,38,17,Silk/Wool,1200,1300,1420,1540,1650
IN-MN,Manipur,North-East,1400,211327,Inaphi,Wangkhei Phee;Moirang Phee,18,37,31,14,Cotton,1050,1150,1220,1310,1400
IN-HR,Haryana,North,1200,14078,Panipat Handloom,Panipat Tweed,20,35,30,15,Cotton Blend,900,980,1050,1120,1200
IN-PB,Punjab,North,1150,332,Phulkari,Phulkari,24,36,26,14,Embroidered Cotton,850,920,1000,1080,1150
IN-HP,Himachal Pradesh,North,950,10059,Kullu Shawl weave,Kullu Weave,15,35,35,15,Woolen Silk,700,760,820,890,950
IN-TR,Tripura,North-East,850,93589,Pachra,Tripura Rignai,20,38,28,14,Cotton,620,680,740,790,850
IN-ML,Meghalaya,North-East,780,30320,Ryndia Silk,Meghalaya Eri Silk,16,36,34,14,Eri Silk,580,630,680,730,780
IN-UT,Uttarakhand,North,720,8595,Panchachuli Weave,Almora Tweed,18,34,32,16,Wool/Silk,520,570,620,670,720
IN-NL,Nagaland,North-East,690,37142,Naga Shawl Weave,Chakhesang Shawl,22,36,28,14,Cotton,500,550,600,640,690
IN-MZ,Mizoram,North-East,580,22083,Puan,Puan Weaves,20,38,28,14,Cotton,410,450,490,540,580
IN-GA,Goa,West,420,25,Kunbi,Kunbi Saree,25,40,24,11,Cotton,300,330,360,390,420
IN-SK,Sikkim,East,310,673,Lepcha Weave,Bhutia Weave,18,35,32,15,Wool/Cotton,210,230,260,285,310
IN-AR,Arunachal Pradesh,North-East,280,73871,Gale Weave,Apatani Weave,20,37,28,15,Cotton,190,210,230,255,280
```