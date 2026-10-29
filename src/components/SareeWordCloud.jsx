import { useMemo } from 'react';
import { scaleLog } from 'd3-scale';
import Wordcloud from '@visx/wordcloud/lib/Wordcloud';

const WEAVE_STATE_MAP = {
  'Banarasi': 'IN-UP',
  'Kanchipuram': 'IN-TN',
  'Jamdani': 'IN-WB',
  'Mysore Silk': 'IN-KA',
  'Paithani': 'IN-MH',
  'Patola': 'IN-GJ',
  'Pochampally': 'IN-TG',
  'Chanderi': 'IN-MP',
  'Sambalpuri': 'IN-OD',
  'Kota Doria': 'IN-RJ',
  'Mekhela Chador': 'IN-AS',
  'Kasavu': 'IN-KL',
  'Gadwal': 'IN-TG',
  'Baluchari': 'IN-WB',
};

const WEAVE_WEIGHTS = {
  'Banarasi': 100,
  'Kanchipuram': 95,
  'Jamdani': 80,
  'Mysore Silk': 75,
  'Paithani': 70,
  'Patola': 65,
  'Pochampally': 60,
  'Chanderi': 58,
  'Sambalpuri': 55,
  'Kota Doria': 52,
  'Mekhela Chador': 50,
  'Kasavu': 48,
  'Gadwal': 42,
  'Baluchari': 40,
};

const COLORS = [
  '#9B2C2C', '#C53030', '#E53E3E', '#B7791F',
  '#744210', '#276749', '#2C7A7B', '#2B6CB0',
  '#553C9A', '#702459',
];

export default function SareeWordCloud({ onWeaveSelect }) {
  const words = useMemo(
    () =>
      Object.entries(WEAVE_WEIGHTS).map(([text, value]) => ({ text, value })),
    []
  );

  const fontScale = useMemo(
    () =>
      scaleLog()
        .domain([Math.min(...words.map((w) => w.value)), Math.max(...words.map((w) => w.value))])
        .range([14, 52]),
    [words]
  );

  const handleWordClick = (word) => {
    const stateId = WEAVE_STATE_MAP[word.text];
    if (stateId && onWeaveSelect) {
      onWeaveSelect(stateId);
      const el = document.getElementById('map-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 flex flex-col items-center">
      <p className="text-xs text-gray-400 mb-4 italic">
        Click a weave name to highlight its state on the map
      </p>
      <div style={{ width: '100%', maxWidth: 700 }}>
        <Wordcloud
          words={words}
          width={700}
          height={320}
          font={() => 'Open Sans, sans-serif'}
          fontSize={(w) => fontScale(w.value)}
          rotate={() => 0}
          spiral="archimedean"
          padding={5}
        >
          {(cloudWords) =>
            cloudWords.map((w, i) => (
              <text
                key={w.text}
                transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
                fontSize={w.size}
                fontFamily={w.font}
                fontWeight="700"
                fill={COLORS[i % COLORS.length]}
                textAnchor="middle"
                style={{ cursor: 'pointer', userSelect: 'none' }}
                onClick={() => handleWordClick(w)}
              >
                {w.text}
              </text>
            ))
          }
        </Wordcloud>
      </div>
    </div>
  );
}

