import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bilek Güreşi Akademisi | Reflex",
  description: "Federasyon onaylı eğitmenlerle profesyonel bilek güreşi eğitimi, teknik geliştirme, kuvvet ve strateji dersleri.",
};

export default function ArmWrestlingAcademyPage() {
  return (
    <main className="min-h-screen bg-(--rx-ink) pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <span className="text-(--rx-brass) text-xs uppercase tracking-widest font-medium">Federasyon Onaylı</span>
        <h1 className="font-(--font-display) text-4xl text-(--rx-bone) uppercase mt-2 mb-6">
          Bilek Güreşi Akademisi
        </h1>
        <p className="text-(--rx-bone)/70 text-sm leading-relaxed mb-4">
          Türkiye Vücut Geliştirme, Fitness ve Bilek Güreşi Federasyonu
          standartlarında eğitim veren akademimizde, yeni başlayanlardan
          yarışma seviyesine kadar her aşamada eğitmen desteği alıyorsun.
        </p>
        <p className="text-(--rx-bone)/70 text-sm leading-relaxed mb-8">
          Teknik, kuvvet ve strateji eğitimleri federasyon onaylı eğitmenler
          eşliğinde veriliyor.
        </p>
        <a 
          href="/iletisim" 
          className="inline-block bg-(--rx-ember) text-white text-sm px-6 py-3 uppercase tracking-wider font-medium hover:bg-opacity-90 transition-opacity"
        >
          Akademiye Başvur
        </a>
      </div>
    </main>
  );
}