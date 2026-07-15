import Link from "next/link";

type Package = {
  name: string;
  studentPrice: string;
  regularPrice: string;
  note: string;
  highlight?: boolean;
};

const packages: Package[] = [
  {
    name: "Aylık",
    studentPrice: "₺2.000",
    regularPrice: "₺2.500",
    note: "Taahhütsüz",
  },
  {
    name: "Yıllık",
    studentPrice: "₺20.000",
    regularPrice: "₺25.000",
    note: "En avantajlı",
    highlight: true,
  },
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

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`p-8 border rounded-sm transition-all duration-300 ${p.highlight ? "border-(--rx-brass) bg-(--rx-steel)" : "border-white/10"}`}
            >
              <h3 className="text-(--rx-bone) font-(--font-display) text-xl uppercase">{p.name}</h3>
              <p className="text-(--rx-bone)/60 text-sm mt-1 mb-4">{p.note}</p>

              <div className="border-t border-white/10 pt-4 space-y-3">
                <div>
                  <span className="text-(--rx-brass) text-xs uppercase tracking-widest">Öğrenci</span>
                  {/* Öğrenci fiyatı yeşilden (rx-ember) kırmızıya (rx-action) çekildi */}
                  <div className="text-(--rx-action) font-(--font-mono) text-2xl">{p.studentPrice}</div>
                </div>
                <div>
                  <span className="text-(--rx-bone)/50 text-xs uppercase tracking-widest">Normal</span>
                  <div className="text-(--rx-bone) font-(--font-mono) text-2xl">{p.regularPrice}</div>
                </div>
              </div>

              {/* Buton, Link yapısına dönüştürüldü ve kırmızı (rx-action) stili korundu */}
              <Link
                href={`/iletisim?paket=${p.name.toLowerCase()}`}
                className="block text-center w-full bg-(--rx-action) text-white py-3 text-sm mt-6 uppercase tracking-wider font-medium hover:bg-opacity-90 transition-opacity rounded-sm cursor-pointer"
              >
                Üye Ol
              </Link>
            </div>
          ))}
        </div>

        <p className="text-(--rx-bone)/40 text-xs mt-8">
          Öğrenci fiyatları için geçerli öğrenci belgesi gösterilmesi gerekmektedir.
        </p>
      </div>
    </main>
  );
}