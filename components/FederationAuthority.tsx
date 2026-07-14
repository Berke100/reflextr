import Link from "next/link";
import Image from "next/image";

export default function FederationAuthority() {
  return (
    <section className="bg-(--rx-steel) py-12 md:py-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
        {/* h-auto eklenerek Next.js aspect-ratio uyarıları tamamen giderildi */}
        <Image
          src="/media/koray-girgin.jpeg"
          alt="Koray Girgin"
          width={192} 
          height={192} 
          className="object-cover rounded-sm grayscale"
        />
        <div>
          <span className="text-(--rx-brass) text-xs uppercase tracking-widest">Kurucu</span>
          <h2 className="font-(--font-display) text-3xl text-(--rx-bone) uppercase mt-2">
            Koray Girgin
          </h2>
          <p className="text-(--rx-bone)/70 text-sm mt-4 max-w-xl">
            Türkiye Vücut Geliştirme, Fitness ve Bilek Güreşi Federasyonu Başkanı,
            IFBB Başkan Yardımcısı. Reflex, bu tecrübenin salona taşınmış hâli.
          </p>
          <Link href="/hakkimizda" className="inline-block mt-6 text-(--rx-ember) text-sm">
            Hikayeyi Oku →
          </Link>
        </div>
      </div>
    </section>
  );
}