"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type Club = { name: string; city: string; img: string; slug: string };

const clubs: Club[] = [
  { name: "Reflex Yalova", city: "Yalova", img: "/media/Reflex.jpg", slug: "yalova-merkez" },
  { name: "Gold's Gym Yalova", city: "Yalova", img: "/media/GoldGym.jpg", slug: "yalova-gold-gym" },
];

export default function ClubFinder() {
  const [city, setCity] = useState("Tümü");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const cities = ["Tümü", ...Array.from(new Set(clubs.map((c) => c.city)))];
  const filtered = city === "Tümü" ? clubs : clubs.filter((c) => c.city === city);

  function showPrev() {
    setOpenIndex((prev) => (prev === null ? null : (prev - 1 + filtered.length) % filtered.length));
  }
  function showNext() {
    setOpenIndex((prev) => (prev === null ? null : (prev + 1) % filtered.length));
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
  }, [openIndex, filtered.length]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-24">
      <h2 className="font-(--font-display) text-3xl text-(--rx-bone) uppercase mb-8">
        Kulübünü Bul
      </h2>
      <div className="flex gap-2 mb-8">
        {cities.map((c) => (
          <button
            key={c}
            onClick={() => { setCity(c); setOpenIndex(null); }}
            className={`px-4 py-2 text-sm border cursor-pointer transition-colors ${
              city === c ? "bg-(--rx-action) border-(--rx-action) text-white" : "border-white/20 text-(--rx-bone)/80"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((c, i) => (
          <div key={c.slug} className="bg-(--rx-steel) overflow-hidden rounded-sm">
            <button
              onClick={() => setOpenIndex(i)}
              className="relative w-full h-48 block group cursor-pointer"
            >
              <Image
                src={c.img}
                alt={c.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </button>
            <Link href={`/kulupler/${c.slug}`} className="block p-4 hover:bg-white/5 transition-colors">
              <h3 className="text-(--rx-bone) hover:text-(--rx-ember) transition-colors font-medium">{c.name}</h3>
              <span className="text-xs text-(--rx-bone)/50">{c.city}</span>
            </Link>
          </div>
        ))}
      </div>

      {openIndex !== null && filtered[openIndex] && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-6 cursor-pointer"
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
              src={filtered[openIndex].img}
              alt={filtered[openIndex].name}
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
            {filtered[openIndex].name}
          </p>
        </div>
      )}
    </section>
  );
}