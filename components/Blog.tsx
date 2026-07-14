import Link from "next/link";
import Image from "next/image";

type Post = { title: string; category: string; slug: string; img: string };

const posts: Post[] = [
  { title: "Bilek Güreşine Nasıl Başlanır?", category: "Bilek Güreşi", slug: "bilek-guresine-baslangic", img: "/media/bilek-guresi.jpg" },
  { title: "Yeni Başlayanlar için 4 Haftalık Program", category: "Antrenman", slug: "4-haftalik-program", img: "/media/antrenman-programi.jpg" },
  { title: "Sporcu Beslenmesinde Doğrular ve Yanlışlar", category: "Beslenme", slug: "sporcu-beslenmesi", img: "/media/beslenme.jpg" },
];

export default function Blog() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-24">
      <h2 className="font-(--font-display) text-3xl text-(--rx-bone) uppercase mb-8">
        Rehberler
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
            <div className="relative w-full h-48 bg-(--rx-steel) overflow-hidden">
              <Image
                src={p.img}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="text-(--rx-brass) text-xs uppercase tracking-widest mt-4 block">
              {p.category}
            </span>
            <h3 className="text-(--rx-bone) mt-1">{p.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}