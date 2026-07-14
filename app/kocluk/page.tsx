import type { Metadata } from "next";
import CoachingPricing from "@/components/CoachingPricing";

export const metadata: Metadata = {
  title: "Online Koçluk | Reflex",
  description: "Uzman antrenörlerle birebir program, kişiselleştirilmiş beslenme desteği ve hedefine giden en hızlı yol.",
};

export default function CoachingPage() {
  return (
    <main className="min-h-screen bg-(--rx-ink) pt-32">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-(--font-display) text-4xl text-(--rx-bone) uppercase mb-2">
          Online Koçluk
        </h1>
        <p className="text-(--rx-bone)/60 text-sm">
          Uzman antrenörlerle birebir program, takip ve beslenme desteği.
        </p>
      </div>
      <CoachingPricing />
    </main>
  );
}