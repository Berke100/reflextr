"use client";
import { useState } from "react";
import CalculatorNav from "@/components/CalculatorNav";

export default function BodyFatPage() {
  const [gender, setGender] = useState<"erkek" | "kadın">("erkek");
  const [waist, setWaist] = useState("");
  const [neck, setNeck] = useState("");
  const [height, setHeight] = useState("");
  const [hip, setHip] = useState("");

  const w = parseFloat(waist);
  const n = parseFloat(neck);
  const h = parseFloat(height);
  const hp = parseFloat(hip);

  let result: number | null = null;
  if (gender === "erkek" && w && n && h) {
    result = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
  } else if (gender === "kadın" && w && n && h && hp) {
    result = 495 / (1.29579 - 0.35004 * Math.log10(w + hp - n) + 0.221 * Math.log10(h)) - 450;
  }

  return (
    <main className="min-h-screen bg-(--rx-ink) pt-32 pb-24 px-6">
      <div className="max-w-md mx-auto">
        <CalculatorNav current="/yag-orani" />

        <h1 className="font-(--font-display) text-3xl text-(--rx-bone) uppercase mb-2">
          Yağ Oranı Hesaplama
        </h1>
        <p className="text-(--rx-bone)/60 text-sm mb-8">
          ABD Donanması formülüyle tahmini vücut yağ oranını hesapla.
        </p>

        <div className="flex gap-2 mb-6">
          {(["erkek", "kadın"] as const).map((g) => (
            <button
              key={g}
              onClick={() => setGender(g)}
              className={`px-4 py-2 text-sm border cursor-pointer transition-colors rounded-sm font-medium ${
                gender === g 
                  ? "bg-(--rx-action) border-(--rx-action) text-white" 
                  : "border-white/20 text-(--rx-bone)/80 hover:border-white/40"
              }`}
            >
              {g === "erkek" ? "Erkek" : "Kadın"}
            </button>
          ))}
        </div>

        <label className="block text-sm text-(--rx-bone)/70 mb-1">Boy (cm)</label>
        <input 
          type="number" 
          value={height} 
          onChange={(e) => setHeight(e.target.value)}
          className="w-full bg-(--rx-steel) border border-white/10 text-(--rx-bone) px-4 py-3 mb-4 focus:outline-none focus:border-(--rx-ember) transition-colors rounded-sm" 
        />

        <label className="block text-sm text-(--rx-bone)/70 mb-1">Bel çevresi (cm)</label>
        <input 
          type="number" 
          value={waist} 
          onChange={(e) => setWaist(e.target.value)}
          className="w-full bg-(--rx-steel) border border-white/10 text-(--rx-bone) px-4 py-3 mb-4 focus:outline-none focus:border-(--rx-ember) transition-colors rounded-sm" 
        />

        <label className="block text-sm text-(--rx-bone)/70 mb-1">Boyun çevresi (cm)</label>
        <input 
          type="number" 
          value={neck} 
          onChange={(e) => setNeck(e.target.value)}
          className="w-full bg-(--rx-steel) border border-white/10 text-(--rx-bone) px-4 py-3 mb-4 focus:outline-none focus:border-(--rx-ember) transition-colors rounded-sm" 
        />

        {gender === "kadın" && (
          <>
            <label className="block text-sm text-(--rx-bone)/70 mb-1">Kalça çevresi (cm)</label>
            <input 
              type="number" 
              value={hip} 
              onChange={(e) => setHip(e.target.value)}
              className="w-full bg-(--rx-steel) border border-white/10 text-(--rx-bone) px-4 py-3 mb-4 focus:outline-none focus:border-(--rx-ember) transition-colors rounded-sm" 
            />
          </>
        )}

        {result && result > 0 && (
          <div className="border border-(--rx-brass) p-6 text-center mt-4 bg-(--rx-steel) rounded-sm">
            <span className="text-xs text-(--rx-bone)/50 uppercase tracking-wider">Tahmini Yağ Oranı</span>
            <div className="font-(--font-mono) text-4xl text-(--rx-ember) mt-2 font-bold">
              %{result.toFixed(1)}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}