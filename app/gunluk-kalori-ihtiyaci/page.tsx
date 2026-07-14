"use client";
import { useState } from "react";
import CalculatorNav from "@/components/CalculatorNav";

const activityLevels = [
  { label: "Hareketsiz", multiplier: 1.2 },
  { label: "Hafif Aktif (haftada 1-3 gün)", multiplier: 1.375 },
  { label: "Orta Aktif (haftada 3-5 gün)", multiplier: 1.55 },
  { label: "Çok Aktif (haftada 6-7 gün)", multiplier: 1.725 },
  { label: "Sporcu (günde 2 antrenman)", multiplier: 1.9 },
];

export default function CaloriePage() {
  const [gender, setGender] = useState<"erkek" | "kadın">("erkek");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState(activityLevels[2]);

  const a = parseFloat(age);
  const h = parseFloat(height);
  const w = parseFloat(weight);

  let bmr: number | null = null;
  if (a && h && w) {
    bmr = gender === "erkek"
      ? 10 * w + 6.25 * h - 5 * a + 5
      : 10 * w + 6.25 * h - 5 * a - 161;
  }
  const tdee = bmr ? Math.round(bmr * activity.multiplier) : null;

  return (
    <main className="min-h-screen bg-(--rx-ink) pt-32 pb-24 px-6">
      <div className="max-w-md mx-auto">
        <CalculatorNav current="/gunluk-kalori-ihtiyaci" />

        <h1 className="font-(--font-display) text-3xl text-(--rx-bone) uppercase mb-2">
          Günlük Kalori İhtiyacı
        </h1>
        <p className="text-(--rx-bone)/60 text-sm mb-8">
          Mifflin-St Jeor formülüyle günlük kalori ihtiyacını hesapla.
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

        <label className="block text-sm text-(--rx-bone)/70 mb-1">Yaş</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)}
          className="w-full bg-(--rx-steel) border border-white/10 text-(--rx-bone) px-4 py-3 mb-4" />

        <label className="block text-sm text-(--rx-bone)/70 mb-1">Boy (cm)</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)}
          className="w-full bg-(--rx-steel) border border-white/10 text-(--rx-bone) px-4 py-3 mb-4" />

        <label className="block text-sm text-(--rx-bone)/70 mb-1">Kilo (kg)</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)}
          className="w-full bg-(--rx-steel) border border-white/10 text-(--rx-bone) px-4 py-3 mb-4" />

        <label className="block text-sm text-(--rx-bone)/70 mb-1">Aktivite Seviyesi</label>
        <select
          value={activity.label}
          onChange={(e) => setActivity(activityLevels.find((l) => l.label === e.target.value)!)}
          className="w-full bg-(--rx-steel) border border-white/10 text-(--rx-bone) px-4 py-3 mb-8"
        >
          {activityLevels.map((l) => (
            <option key={l.label} value={l.label}>{l.label}</option>
          ))}
        </select>

        {tdee && (
          <div className="border border-(--rx-brass) p-6 text-center">
            <span className="text-xs text-(--rx-bone)/50 uppercase">Günlük Kalori İhtiyacın</span>
            <div className="font-(--font-mono) text-4xl text-(--rx-ember) mt-2">{tdee} kcal</div>
          </div>
        )}
      </div>
    </main>
  );
}