// components/CoachingPricing.tsx
import Link from "next/link";

type Plan = { name: string; price: string; features: string[]; highlight?: boolean; slug: string };

const plans: Plan[] = [
  { name: "Başlangıç", price: "₺2.500/ay", slug: "baslangic", features: ["Program", "Aylık takip"] },
  {
    name: "Federasyon Sporcusu",
    price: "₺4.500/ay",
    slug: "federasyon-sporcusu",
    features: ["Program", "Haftalık takip", "Beslenme planı"],
    highlight: true,
  },
  { name: "Elit", price: "₺7.500/ay", slug: "elit", features: ["Günlük mesajlaşma", "Video analiz", "Yarışma hazırlığı"] },
];

export default function CoachingPricing() {
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid md:grid-cols-3 gap-6">
      {plans.map((p) => (
        <div
          key={p.name}
          className={`p-8 border rounded-sm transition-all duration-300 ${
            p.highlight 
              ? "border-(--rx-brass) bg-(--rx-steel) shadow-lg shadow-(--rx-brass)/5" 
              : "border-white/10 bg-transparent hover:border-white/20"
          }`}
        >
          <h3 className="text-(--rx-bone) font-(--font-display) text-xl uppercase">{p.name}</h3>
          {/* Fiyat vurgusu yeşil (rx-ember) kalmaya devam ediyor */}
          <div className="text-(--rx-action) font-(--font-mono) text-2xl my-4">{p.price}</div>
          <ul className="text-sm text-(--rx-bone)/60 space-y-2 mb-6">
            {p.features.map((f) => (
              <li key={f}>— {f}</li>
            ))}
          </ul>
          {/* Buton arka planı yeşilden laciverte (rx-action) çekildi */}
          <Link
            href={`/iletisim?plan=${p.slug}`}
            className="block text-center w-full bg-(--rx-action) text-white py-3 text-sm font-medium uppercase tracking-wider hover:bg-opacity-90 transition-opacity cursor-pointer"
          >
            Koçluk Al
          </Link>
        </div>
      ))}
    </section>
  );
}