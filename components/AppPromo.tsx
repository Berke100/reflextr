import Image from "next/image";

export default function AppPromo() {
  return (
    <section className="bg-(--rx-steel) py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-(--rx-brass) text-xs uppercase tracking-widest font-medium">
            Mobil Uygulama
          </span>
          <h2 className="font-(--font-display) text-4xl text-(--rx-bone) uppercase mt-2">
            Reflex Cebinde
          </h2>
          <p className="text-(--rx-bone)/70 text-sm mt-4 max-w-xl">
            Antrenman programını takip et, kulübe giriş yaparken QR kodunu kullan ve
            topluluk etkinliklerinden anında haberdar ol. Çok yakında App Store ve
            Google Play&apos;de.
          </p>
          <div className="flex gap-4 mt-8">
            <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-sm text-xs text-(--rx-bone)/40 font-medium">
              App Store — Yakında
            </div>
            <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-sm text-xs text-(--rx-bone)/40 font-medium">
              Google Play — Yakında
            </div>
          </div>
        </div>

        {/* Telefon çerçevesi mockup */}
        <div className="relative h-[480px] w-full max-w-[260px] mx-auto">
          <div className="absolute inset-0 bg-gradient-to-tr from-(--rx-ember)/20 to-transparent rounded-[2.5rem] blur-2xl" />
          <div className="relative border-4 border-white/10 bg-(--rx-ink) rounded-[2.5rem] h-full overflow-hidden shadow-2xl">
            {/* Ekran çentiği */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-xl z-10" />

            {/* Gerçek ekran görüntüsü geldiğinde bu bloğu <Image src="/media/app-screenshot.jpg" fill className="object-cover" alt="Reflex Uygulaması" /> ile değiştir */}
            <div className="h-full w-full flex flex-col items-center justify-center gap-3 px-6 text-center">
              <span className="font-(--font-display) text-2xl text-(--rx-bone)/20 uppercase">
                REFLEX<span className="text-(--rx-ember)/40">TR</span>
              </span>
              <span className="text-xs text-(--rx-bone)/30 font-(--font-mono)">
                Uygulama Ekran Önizlemesi
              </span>
              <span className="text-[10px] text-(--rx-bone)/20 mt-2">Çok Yakında</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}