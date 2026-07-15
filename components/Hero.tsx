"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stats = [
  { label: "Yıllık Tecrübe", value: 24, suffix: "+" },
  { label: "Federasyon Delege Oyu", value: 118, suffix: "/119" },
  { label: "IFBB Başkan Yardımcılığı", value: 1, suffix: "" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      let start = 0;
      const step = Math.max(1, Math.floor(target / 40));
      const id = setInterval(() => {
        start += step;
        if (start >= target) {
          setN(target);
          clearInterval(id);
        } else {
          setN(start);
        }
      }, 25);
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, suffix]);

  return <span ref={ref} className="font-(--font-mono)">{n}{suffix}</span>;
}

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-end pb-16 overflow-hidden">
      {/* Tam ekran arka plan fotoğrafı, saydamlaştırma olmadan */}
      <Image
        src="/media/reflexwp.png"
        alt="Reflex Arka Plan"
        fill
        priority
        className="object-cover select-none pointer-events-none"
      />

      {/* Sadece alt kısımda, yazıların okunabilirliği için gradyan gölge */}
      <div className="absolute inset-0 bg-linear-to-t from-(--rx-ink) via-(--rx-ink)/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <h1 className="font-(--font-display) text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] text-(--rx-bone) uppercase">
  Gücünü <span className="text-(--rx-action)">Kanıtla</span>
</h1>
        <p className="text-(--rx-bone)/70 max-w-xl mt-4">
          Türkiye Vücut Geliştirme, Fitness ve Bilek Güreşi Federasyonu Başkanı
          Koray Girgin&apos;in kurduğu Reflex&apos;te antrenman yapıyorsun.
        </p>

        <div className="flex gap-10 mt-10 border-t border-white/10 pt-6">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl text-(--rx-brass)">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs text-(--rx-bone)/50 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}