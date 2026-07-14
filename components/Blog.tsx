"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type Post = { title: string; category: string; slug: string; img: string };

const posts: Post[] = [
  { title: "Bilek Güreşine Nasıl Başlanır?", category: "Bilek Güreşi", slug: "bilek-guresine-baslangic", img: "/media/bilek-guresi.jpg" },
  { title: "Yeni Başlayanlar için 4 Haftalık Program", category: "Antrenman", slug: "4-haftalik-program", img: "/media/antrenman-programi.jpg" },
  { title: "Sporcu Beslenmesinde Doğrular ve Yanlışlar", category: "Beslenme", slug: "sporcu-beslenmesi", img: "/media/beslenme.jpg" },
];

export default function Blog() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function showPrev() {
    setOpenIndex((prev) => (prev === null ? null : (prev - 1 + posts.length) % posts.length));
  }
  function showNext() {
    setOpenIndex((prev) => (prev === null ? null : (prev + 1) % posts.length));
  }

  useEffect(() => {
    if (openIndex === null) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openIndex]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-24">
      <h2 className="font-(--font-display) text-3xl text-(--rx-bone) uppercase mb-8">Rehberler</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <div key={p.slug}>
            <button
              onClick={() => setOpenIndex(i)}
              className="relative w-full h-48 bg-(--rx-steel) overflow-hidden block group"
            >
              <Image
                src={p.img}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </button>
            <Link href={`/blog/${p.slug}`} className="block mt-3">
              <span className="text-(--rx-brass) text-xs uppercase tracking-widest block">{p.category}</span>
              <h3 className="text-(--rx-bone) mt-1 hover:text-(--rx-ember) transition-colors">{p.title}</h3>
            </Link>
          </div>
        ))}
      </div>

      {openIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-6" onClick={() => setOpenIndex(null)}>
          <button onClick={(e) => { e.stopPropagation(); showPrev(); }} className="absolute left-4 md:left-8 text-white text-3xl px-3" aria-label="Önceki">‹</button>
          <div className="relative w-full max-w-2xl h-[70vh]" onClick={(e) => e.stopPropagation()}>
            <Image src={posts[openIndex].img} alt={posts[openIndex].title} fill className="object-contain" />
          </div>
          <button onClick={(e) => { e.stopPropagation(); showNext(); }} className="absolute right-4 md:right-8 text-white text-3xl px-3" aria-label="Sonraki">›</button>
          <button onClick={() => setOpenIndex(null)} className="absolute top-6 right-6 text-white text-xl" aria-label="Kapat">✕</button>
          <p className="absolute bottom-8 text-white/70 text-sm text-center w-full px-6">{posts[openIndex].title}</p>
        </div>
      )}
    </section>
  );
}