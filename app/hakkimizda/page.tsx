import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-(--rx-ink) pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <span className="text-(--rx-brass) text-xs uppercase tracking-widest">Hakkımızda</span>
        <h1 className="font-(--font-display) text-4xl text-(--rx-bone) uppercase mt-2 mb-8">
          Reflex&apos;in Hikayesi
        </h1>

        <div className="relative w-full h-80 mb-8">
          <Image src="/media/koray-girgin.jpeg" alt="Koray Girgin" fill className="object-cover" />
        </div>

        <div className="text-(--rx-bone)/70 space-y-4 text-sm leading-relaxed">
          <p>
            Reflex, Türkiye Vücut Geliştirme, Fitness ve Bilek Güreşi Federasyonu
            Başkanı ve IFBB Başkan Yardımcısı Koray Girgin tarafından kuruldu.
          </p>
          <p>
            24 yılı aşkın spor tecrübesi, federasyon başkanlığı deneyimi ve
            uluslararası düzeyde edinilen bilgi birikimi, Reflex&apos;in her
            kulübünde ve her koçluk programında hissediliyor.
          </p>
          <p>
            Amacımız sadece bir spor salonu işletmek değil; bilimsel temelli
            antrenman, doğru beslenme ve federasyon standartlarında bir eğitim
            anlayışını herkese ulaştırmak.
          </p>
        </div>
      </div>
    </main>
  );
}