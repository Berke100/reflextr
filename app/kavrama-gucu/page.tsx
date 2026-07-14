"use client";
import { useState } from "react";

const levels = [
  { max: 30, label: "Başlangıç", desc: "Temel kavrama antrenmanına başla." },
  { max: 45, label: "Orta Seviye", desc: "İyi bir temel var, gelişime açık." },
  { max: 60, label: "İleri Seviye", desc: "Bilek güreşi akademisine hazırsın." },
  { max: Infinity, label: "Federasyon Sporcusu", desc: "Rekabetçi seviyeye çok yakınsın." },
];

export default function GripStrengthPage() {
  const [kg, setKg] = useState("");
  const value = parseFloat(kg);
  const level = value ? levels.find((l) => value <= l.max) : null;

  return (
    <main className="min-h-screen bg-(--rx-ink) pt-32 pb-24 px-6">
      <div className="max-w-md mx-auto">
        <span className="text-(--rx-brass) text-xs uppercase tracking-widest">Reflex Özel</span>
        <h1 className="font-(--font-display) text-3xl text-(--rx-bone) uppercase mt-2 mb-2">
          Kavrama Gücü Skoru
        </h1>
        <p className="text-(--rx-bone)/60 text-sm mb-8">
          El dinamometresiyle ölçtüğün kavrama gücünü (kg) gir, seviyeni öğren.
        </p>

        <label className="block text-sm text-(--rx-bone)/70 mb-1">Kavrama gücü (kg)</label>
        <input
          type="number"
          value={kg}
          onChange={(e) => setKg(e.target.value)}
          className="w-full bg-(--rx-steel) border border-white/10 text-(--rx-bone) px-4 py-3 mb-8"
          placeholder="örn. 42"
        />

        {level && (
          <div className="border border-(--rx-brass) p-6 text-center">
            <span className="text-xs text-(--rx-bone)/50 uppercase">Seviyen</span>
            <div className="font-(--font-display) text-2xl text-(--rx-ember) mt-2 uppercase">
              {level.label}
            </div>
            <p className="text-(--rx-bone)/60 text-sm mt-3">{level.desc}</p>
          </div>
        )}
      </div>
    </main>
  );
}