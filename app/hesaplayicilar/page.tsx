import Link from "next/link";

type CalcItem = { label: string; href: string; desc: string; badge?: string };

const calcs: CalcItem[] = [
  { label: "1RM Hesaplama", href: "/1rm", desc: "Tek tekrar maksimum ağırlığını hesapla." },
  { label: "Yağ Oranı", href: "/yag-orani", desc: "ABD Donanması formülüyle tahmini yağ oranı." },
  { label: "Günlük Kalori İhtiyacı", href: "/gunluk-kalori-ihtiyaci", desc: "Mifflin-St Jeor formülüyle kalori ihtiyacın." },
  { label: "Vücut Kitle İndeksi", href: "/vucut-kitle-indeksi", desc: "Boy ve kilona göre VKİ hesapla." },
  { label: "Kas Kütlesi", href: "/kas-kutlesi", desc: "Boer formülüyle tahmini yağsız vücut kütlesi." },
  { label: "Kavrama Gücü Skoru", href: "/kavrama-gucu", desc: "Kavrama gücüne göre seviyeni öğren.", badge: "Reflex Özel" },
];

export default function CalculatorsIndexPage() {
  return (
    <main className="min-h-screen bg-(--rx-ink) pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-(--font-display) text-4xl text-(--rx-bone) uppercase mb-2">
          Hesaplayıcılar
        </h1>
        <p className="text-(--rx-bone)/60 text-sm mb-12">
          Antrenman ve beslenme hedeflerin için tüm hesaplama araçları burada.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {calcs.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="relative p-6 bg-(--rx-steel) hover:bg-white/5 transition-colors"
            >
              {c.badge && (
                <span className="absolute top-2 right-2 text-[10px] text-(--rx-brass)">{c.badge}</span>
              )}
              <h3 className="text-(--rx-bone) font-(--font-display) uppercase text-sm mb-2">{c.label}</h3>
              <p className="text-(--rx-bone)/50 text-xs">{c.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}