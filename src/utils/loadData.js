import Papa from 'papaparse';
import { useState, useEffect } from 'react';

export function useSareeData() {
  const [stateDataMap, setStateDataMap] = useState({});
  const [rawRows, setRawRows] = useState([]);
  const [geoJson, setGeoJson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadAll() {
      try {
        // Load CSV
        const csvResponse = await fetch('/data/india_saree_data.csv');
        const csvText = await csvResponse.text();
        const parsed = Papa.parse(csvText, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
        });
        const rows = parsed.data;
        const map = {};
        rows.forEach(row => {
          map[row.state_id] = row;
        });

        // Load GeoJSON
        const geoResponse = await fetch('/data/india_states.json');
        const geoData = await geoResponse.json();

        setRawRows(rows);
        setStateDataMap(map);
        setGeoJson(geoData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    loadAll();
  }, []);

  return { stateDataMap, rawRows, geoJson, loading, error };
}

