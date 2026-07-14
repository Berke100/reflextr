"use client";
import { useState } from "react";
import CalculatorNav from "@/components/CalculatorNav";

const categories = [
  { max: 18.5, label: "Zayıf" },
  { max: 25, label: "Normal" },
  { max: 30, label: "Fazla Kilolu" },
  { max: Infinity, label: "Obez" },
];

export default function BmiPage() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const h = parseFloat(height) / 100;
  const w = parseFloat(weight);
  const bmi = h && w ? w / (h * h) : null;
  const category = bmi ? categories.find((c) => bmi <= c.max) : null;

  return (
    <main className="min-h-screen bg-(--rx-ink) pt-32 pb-24 px-6">
      <div className="max-w-md mx-auto">
        <CalculatorNav current="/vucut-kitle-indeksi" />

        <h1 className="font-(--font-display) text-3xl text-(--rx-bone) uppercase mb-2">
          Vücut Kitle İndeksi
        </h1>
        <p className="text-(--rx-bone)/60 text-sm mb-8">
          Boy ve kilona göre VKİ&apos;ni (BMI) hesapla.
        </p>

        <label className="block text-sm text-(--rx-bone)/70 mb-1">Boy (cm)</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)}
          className="w-full bg-(--rx-steel) border border-white/10 text-(--rx-bone) px-4 py-3 mb-4" />

        <label className="block text-sm text-(--rx-bone)/70 mb-1">Kilo (kg)</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)}
          className="w-full bg-(--rx-steel) border border-white/10 text-(--rx-bone) px-4 py-3 mb-8" />

        {bmi && (
          <div className="border border-(--rx-brass) p-6 text-center">
            <span className="text-xs text-(--rx-bone)/50 uppercase">VKİ</span>
            <div className="font-(--font-mono) text-4xl text-(--rx-ember) mt-2">{bmi.toFixed(1)}</div>
            <p className="text-(--rx-bone)/60 text-sm mt-3">{category?.label}</p>
          </div>
        )}
      </div>
    </main>
  );
}