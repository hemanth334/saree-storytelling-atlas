const REFLECTIONS = [
  {
    question: "Why does regional revenue hegemony persist in India's saree market?",
    badge: 'Regional Revenue Hegemony',
    answer:
      "South India — particularly Tamil Nadu and Andhra Pradesh — and North India's bridal belt anchored by Uttar Pradesh continue to command the largest saree market revenues. Kanchipuram and Banarasi silk remain the default bridal choices across caste and community lines, giving these states a structural first-mover advantage. Festival calendars, community gifting norms, and celebrity endorsements systematically redirect premium spend toward these geographies, widening the revenue gap with newer or lesser-known weaving clusters.",
  },
  {
    question: 'How is e-commerce reshaping youth adoption of traditional weaves?',
    badge: 'Youth & E-Commerce Adoption',
    answer:
      'Chanderi, Kota Doria, and Jamdani — all lightweight, breathable weaves — are seeing the sharpest growth in the 18–25 demographic cohort. Social commerce platforms and influencer styling have repositioned these weaves as "quiet luxury" everyday wear, decoupled from formal occasion-wear. Direct-to-consumer models pioneered by weaver collectives allow younger buyers to access authentic, competitively priced pieces without physical intermediaries, compressing the price gap that previously deterred youth buyers.',
  },
  {
    question: 'Can artisan households remain economically sustainable without mechanisation?',
    badge: 'Artisan Household Sustainability',
    answer:
      'GI certification provides a legal moat against mass-produced imitations, but the protected premium it commands is often captured by distributors rather than weaver households. Mechanisation of preparatory processes (warping, winding) can increase net take-home income without compromising the hand-interlacing at the loom that defines GI authenticity. The critical policy challenge is distinguishing permissible efficiency gains from the mechanisation that hollows out craft identity, and ensuring that productivity dividends flow to the 31+ lakh artisans, not merely to aggregators.',
  },
];

export default function ReflectionSection() {
  return (
    <div>
      <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 mb-8">
        Critical Reflections
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REFLECTIONS.map((r) => (
          <div
            key={r.badge}
            className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col gap-3"
          >
            <span className="text-xs font-bold text-red-700 uppercase tracking-wider">
              {r.badge}
            </span>
            <h3 className="text-sm font-bold text-gray-900 leading-snug">{r.question}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{r.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
