"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Club = { name: string; city: string; img: string; slug: string };

const clubs: Club[] = [
  { name: "Reflex Yalova", city: "Yalova", img: "/media/Reflex.jpg", slug: "yalova-merkez" },
  { name: "Gold's Gym Yalova", city: "Yalova", img: "/media/GoldGym.jpg", slug: "yalova-gold-gym" },
];

export default function ClubFinder() {
  const [city, setCity] = useState("Tümü");
  const cities = ["Tümü", ...Array.from(new Set(clubs.map((c) => c.city)))];
  const filtered = city === "Tümü" ? clubs : clubs.filter((c) => c.city === city);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-24">
      <h2 className="font-(--font-display) text-3xl text-(--rx-bone) uppercase mb-8">
        Kulübünü Bul
      </h2>
      <div className="flex gap-2 mb-8">
        {cities.map((c) => (
          <button
            key={c}
            onClick={() => setCity(c)}
            className={`px-4 py-2 text-sm border ${
              city === c ? "bg-(--rx-ember) border-(--rx-ember) text-white" : "border-white/20 text-(--rx-bone)/80"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((c) => (
          <Link key={c.slug} href={`/kulupler/${c.slug}`} className="block bg-(--rx-steel) overflow-hidden group">
            <div className="relative w-full h-48">
              <Image
                src={c.img}
                alt={c.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-(--rx-bone)">{c.name}</h3>
              <span className="text-xs text-(--rx-bone)/50">{c.city}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}