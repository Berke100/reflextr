"use client";
import Link from "next/link";

export const calculatorList = [
  { label: "1RM", href: "/1rm" },
  { label: "Yağ Oranı", href: "/yag-orani" },
  { label: "Günlük Kalori", href: "/gunluk-kalori-ihtiyaci" },
  { label: "Vücut Kitle İndeksi", href: "/vucut-kitle-indeksi" },
  { label: "Kas Kütlesi", href: "/kas-kutlesi" },
  { label: "Kavrama Gücü", href: "/kavrama-gucu" },
];

export default function CalculatorNav({ current }: { current: string }) {
  const index = calculatorList.findIndex((c) => c.href === current);
  const prev = calculatorList[(index - 1 + calculatorList.length) % calculatorList.length];
  const next = calculatorList[(index + 1) % calculatorList.length];

  return (
    <div className="mb-10">
      <div className="flex flex-wrap gap-2 mb-4">
        {calculatorList.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className={`whitespace-nowrap px-3 py-1.5 text-xs border transition-colors ${
              c.href === current
                ? "bg-(--rx-ember) border-(--rx-ember) text-white"
                : "border-white/20 text-(--rx-bone)/70 hover:border-white/40"
            }`}
          >
            {c.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-white/10 pt-4">
        <Link href={prev.href} className="text-(--rx-bone)/60 text-sm hover:text-(--rx-bone)">
          ‹ {prev.label}
        </Link>
        <Link href={next.href} className="text-(--rx-bone)/60 text-sm hover:text-(--rx-bone)">
          {next.label} ›
        </Link>
      </div>
    </div>
  );
}