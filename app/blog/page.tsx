import Link from "next/link";
import Image from "next/image";

type Post = { title: string; category: string; slug: string; img: string };

const posts: Post[] = [
  { title: "Bilek Güreşine Nasıl Başlanır?", category: "Bilek Güreşi", slug: "bilek-guresine-baslangic", img: "/media/bilek-guresi.jpg" },
  { title: "Yeni Başlayanlar için 4 Haftalık Program", category: "Antrenman", slug: "4-haftalik-program", img: "/media/antrenman-programi.jpg" },
  { title: "Sporcu Beslenmesinde Doğrular ve Yanlışlar", category: "Beslenme", slug: "sporcu-beslenmesi", img: "/media/beslenme.jpg" },
];

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-(--rx-ink) pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-(--font-display) text-4xl text-(--rx-bone) uppercase mb-2">
          Rehberler
        </h1>
        <p className="text-(--rx-bone)/60 text-sm mb-12">
          Antrenman, beslenme ve bilek güreşi hakkında Reflex rehberleri.
        </p>

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
              <h3 className="text-(--rx-bone) mt-1 group-hover:text-(--rx-ember) transition-colors">
                {p.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}