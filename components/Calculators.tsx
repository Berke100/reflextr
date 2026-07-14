import Link from "next/link";

type CalcItem = { label: string; href: string; badge?: string };

const calcs: CalcItem[] = [
  { label: "1RM Hesaplama", href: "/1rm" },
  { label: "Yağ Oranı", href: "/yag-orani" },
  { label: "Günlük Kalori İhtiyacı", href: "/gunluk-kalori-ihtiyaci" },
  { label: "Vücut Kitle İndeksi", href: "/vucut-kitle-indeksi" },
  { label: "Kas Kütlesi", href: "/kas-kutlesi" },
  { label: "Kavrama Gücü Skoru", href: "/kavrama-gucu", badge: "Reflex Özel" },
];

export default function Calculators() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-24">
      <h2 className="font-(--font-display) text-3xl text-(--rx-bone) uppercase mb-8">
        Hesaplayıcılar
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {calcs.map((c) => (
          <Link
            key={c.label}
            href={c.href}
            className="relative p-6 bg-(--rx-steel) hover:bg-white/5 text-center transition-colors rounded-sm flex items-center justify-center min-h-[100px]"
          >
            {c.badge && (
              <span className="absolute top-2 right-2 text-[10px] text-(--rx-brass) font-medium tracking-wider">
                {c.badge}
              </span>
            )}
            <span className="text-(--rx-bone) text-sm font-medium">{c.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}