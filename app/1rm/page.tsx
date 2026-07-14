"use client";
import { useState } from "react";

export default function OneRepMaxPage() {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");

  const w = parseFloat(weight);
  const r = parseFloat(reps);
  const oneRM = w && r ? Math.round(w * (1 + r / 30)) : null;

  return (
    <main className="min-h-screen bg-(--rx-ink) pt-32 pb-24 px-6">
      <div className="max-w-md mx-auto">
        <h1 className="font-(--font-display) text-3xl text-(--rx-bone) uppercase mb-2">
          1RM Hesaplama
        </h1>
        <p className="text-(--rx-bone)/60 text-sm mb-8">
          Tek tekrar maksimum ağırlığını (1RM) Epley formülüyle hesapla.
        </p>

        <label className="block text-sm text-(--rx-bone)/70 mb-1">Kaldırdığın ağırlık (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full bg-(--rx-steel) border border-white/10 text-(--rx-bone) px-4 py-3 mb-4"
          placeholder="örn. 80"
        />

        <label className="block text-sm text-(--rx-bone)/70 mb-1">Tekrar sayısı</label>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          className="w-full bg-(--rx-steel) border border-white/10 text-(--rx-bone) px-4 py-3 mb-8"
          placeholder="örn. 5"
        />

        {oneRM && (
          <div className="border border-(--rx-brass) p-6 text-center">
            <span className="text-xs text-(--rx-bone)/50 uppercase">Tahmini 1RM</span>
            <div className="font-(--font-mono) text-4xl text-(--rx-ember) mt-2">{oneRM} kg</div>
          </div>
        )}
      </div>
    </main>
  );
}