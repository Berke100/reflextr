"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const posts = [
  { img: "/media/community-1.jpg", caption: "Federasyon sporcuları antrenmanda" },
  { img: "/media/community-2.jpg", caption: "Bilek güreşi akademisi" },
  { img: "/media/community-3.jpg", caption: "Kulüp içi turnuva" },
  { img: "/media/community-4.jpg", caption: "Koçluk seansı" },
];

export default function Community() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function showPrev() {
    setOpenIndex((prev) => (prev === null ? null : (prev - 1 + posts.length) % posts.length));
  }

  function showNext() {
    setOpenIndex((prev) => (prev === null ? null : (prev + 1) % posts.length));
  }

  // Klavye kontrolü: Bağımlılık zincirini sadeleştirerek en güvenli hale getirdik
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

  // TypeScript 'null' index hatasını engellemek için güvenli daraltma yapıyoruz
  const activePost = openIndex !== null ? posts[openIndex] : null;

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-24">
      <h2 className="font-(--font-display) text-3xl text-(--rx-bone) uppercase mb-2">Topluluk</h2>
      <p className="text-(--rx-bone)/60 text-sm mb-8">
        Reflex ailesinden anlar — Instagram&apos;da bizi takip et.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {posts.map((p, i) => (
          <button
            key={p.img}
            onClick={() => setOpenIndex(i)}
            className="relative aspect-square bg-(--rx-steel) overflow-hidden group cursor-pointer"
          >
            <Image
              src={p.img}
              alt={p.caption}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </button>
        ))}
      </div>

      {/* Eksik olan <a açılış etiketi buraya eklendi */}
      <a
        href="https://www.instagram.com/reflextr/"
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-6 text-(--rx-ember) text-sm"
      >
        Instagram&apos;da Gör →
      </a>

      {/* Lightbox - activePost kontrolü ile tamamen güvenli hale getirildi */}
      {activePost !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-6"
          onClick={() => setOpenIndex(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            className="absolute left-4 md:left-8 text-white text-3xl px-3 cursor-pointer select-none"
            aria-label="Önceki"
          >
            ‹
          </button>

          <div className="relative w-full max-w-2xl h-[70vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={activePost.img}
              alt={activePost.caption}
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            className="absolute right-4 md:right-8 text-white text-3xl px-3 cursor-pointer select-none"
            aria-label="Sonraki"
          >
            ›
          </button>

          <button
            onClick={() => setOpenIndex(null)}
            className="absolute top-6 right-6 text-white text-xl cursor-pointer"
            aria-label="Kapat"
          >
            ✕
          </button>

          <p className="absolute bottom-8 text-white/70 text-sm text-center w-full px-6">
            {activePost.caption}
          </p>
        </div>
      )}
    </section>
  );
}