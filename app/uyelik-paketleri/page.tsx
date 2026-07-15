import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Üyelik Paketleri | Reflex",
  description: "İhtiyacına uygun Reflex üyelik paketini seç, bütçene ve hedeflerine en uygun planla hemen antrenmana başla.",
};

const packages = [
  { name: "Aylık", price: "₺XXX", note: "Taahhütsüz" },
  { name: "6 Aylık", price: "₺XXX", note: "En popüler", highlight: true },
  { name: "Yıllık", price: "₺XXX", note: "En avantajlı" },
];

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-(--rx-ink) pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-(--font-display) text-4xl text-(--rx-bone) uppercase mb-2">
          Üyelik Paketleri
        </h1>
        <p className="text-(--rx-bone)/60 text-sm mb-12">
          İhtiyacına uygun üyelik paketini seç, hemen antrenmana başla.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`p-8 border rounded-sm transition-all duration-300 ${
                p.highlight 
                  ? "border-(--rx-brass) bg-(--rx-steel) shadow-lg shadow-(--rx-brass)/5" 
                  : "border-white/10 bg-transparent hover:border-white/20"
              }`}
            >
              <h3 className="text-(--rx-bone) font-(--font-display) text-xl uppercase">{p.name}</h3>
              {/* Fiyat alanlarının rengi yeşilden kırmızıya (rx-action) çekildi */}
              <div className="text-(--rx-action) font-(--font-mono) text-2xl my-4">{p.price}</div>
              <p className="text-(--rx-bone)/60 text-sm mb-6">{p.note}</p>
              {/* Buton arka planı kırmızı (rx-action) olmaya devam ediyor */}
              <button className="w-full bg-(--rx-action) text-white py-3 text-sm font-medium uppercase tracking-wider hover:bg-opacity-90 transition-opacity cursor-pointer">
                Üye Ol
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}