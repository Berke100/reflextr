import Link from "next/link";

const items = [
  { title: "Kulüpler", desc: "En yeni ekipmanlarla donatılmış salonlarda yerini al.", href: "/kulupler" },
  { title: "Online Koçluk", desc: "Uzman antrenörlerle birebir program ve takip.", href: "/kocluk" },
  { title: "Bilek Güreşi Akademisi", desc: "Federasyon onaylı eğitmenlerle bilek güreşine başla.", href: "/bilek-guresi-akademisi" },
];

export default function ValueProps() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid md:grid-cols-3 gap-6">
      {items.map((it) => (
        <Link
          key={it.title}
          href={it.href}
          className="group border border-white/10 p-8 hover:border-(--rx-ember) transition-colors block"
        >
          <h3 className="font-(--font-display) text-2xl text-(--rx-bone) uppercase">
            {it.title}
          </h3>
          <p className="text-(--rx-bone)/60 mt-3 text-sm">{it.desc}</p>
          <span className="inline-block mt-6 text-(--rx-ember) text-sm group-hover:translate-x-1 transition-transform">
            Keşfet →
          </span>
        </Link>
      ))}
    </section>
  );
}