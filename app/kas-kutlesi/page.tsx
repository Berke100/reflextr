"use client";
import { useState } from "react";
import CalculatorNav from "@/components/CalculatorNav";

export default function LeanMassPage() {
  const [gender, setGender] = useState<"erkek" | "kadın">("erkek");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const h = parseFloat(height);
  const w = parseFloat(weight);

  let lbm: number | null = null;
  if (h && w) {
    // Boer formülü
    lbm = gender === "erkek"
      ? 0.407 * w + 0.267 * h - 19.2
      : 0.252 * w + 0.473 * h - 48.3;
  }
  const fatMass = lbm && w ? w - lbm : null;

  return (
    <main className="min-h-screen bg-(--rx-ink) pt-32 pb-24 px-6">
      <div className="max-w-md mx-auto">
        <CalculatorNav current="/kas-kutlesi" />

        <h1 className="font-(--font-display) text-3xl text-(--rx-bone) uppercase mb-2">
          Tahmini Kas Kütlesi
        </h1>
        <p className="text-(--rx-bone)/60 text-sm mb-8">
          Boer formülüyle yağsız vücut kütleni (LBM) tahmin et. Kesin sonuç için
          BIA/DEXA ölçümü gerekir, bu bir tahmindir.
        </p>

        <div className="flex gap-2 mb-6">
          {(["erkek", "kadın"] as const).map((g) => (
            <button
              key={g}
              onClick={() => setGender(g)}
              className={`px-4 py-2 text-sm border ${
                gender === g ? "bg-(--rx-ember) border-(--rx-ember) text-white" : "border-white/20 text-(--rx-bone)/80"
              }`}
            >
              {g === "erkek" ? "Erkek" : "Kadın"}
            </button>
          ))}
        </div>

        <label className="block text-sm text-(--rx-bone)/70 mb-1">Boy (cm)</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)}
          className="w-full bg-(--rx-steel) border border-white/10 text-(--rx-bone) px-4 py-3 mb-4" />

        <label className="block text-sm text-(--rx-bone)/70 mb-1">Kilo (kg)</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)}
          className="w-full bg-(--rx-steel) border border-white/10 text-(--rx-bone) px-4 py-3 mb-8" />

        {lbm && lbm > 0 && (
          <div className="border border-(--rx-brass) p-6 text-center">
            <span className="text-xs text-(--rx-bone)/50 uppercase">Tahmini Yağsız Kütle</span>
            <div className="font-(--font-mono) text-4xl text-(--rx-ember) mt-2">{lbm.toFixed(1)} kg</div>
            {fatMass && (
              <p className="text-(--rx-bone)/60 text-sm mt-3">
                Tahmini yağ kütlesi: {fatMass.toFixed(1)} kg
              </p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}