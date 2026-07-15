// components/Header.tsx
"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Kulüpler", href: "/kulupler" },
  { label: "Üyelik Paketleri", href: "/uyelik-paketleri" },
  { label: "Koçluk", href: "/kocluk" },
];

const resources = [
  { label: "Bilek Güreşi Akademisi", href: "/bilek-guresi-akademisi" },
  { label: "Hesaplayıcılar", href: "/hesaplayicilar" },
  { label: "Rehberler", href: "/blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-(--rx-ink)/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        <Link href="/" className="font-(--font-display) text-xl tracking-wide text-(--rx-bone)">
          REFLEX<span className="text-(--rx-ember)">TR</span>
        </Link>

        {/* Masaüstü menü */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-(--rx-bone)/80">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-(--rx-bone) transition-colors">
              {l.label}
            </Link>
          ))}

          <div 
            className="relative" 
            onMouseEnter={() => setResourcesOpen(true)} 
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-(--rx-bone) transition-colors cursor-pointer">
              Kaynaklar <span className="text-xs">▾</span>
            </button>
            {resourcesOpen && (
              <div className="absolute top-full left-0 pt-3">
                <div className="bg-(--rx-steel) border border-white/10 min-w-[200px] py-2">
                  {resources.map((r) => (
                    <Link 
                      key={r.href} 
                      href={r.href} 
                      className="block px-4 py-2 text-sm hover:bg-white/5 hover:text-(--rx-bone) transition-colors"
                    >
                      {r.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/giris" className="text-sm text-(--rx-bone)/70 hidden sm:block hover:text-(--rx-bone) transition-colors">
            Üye Girişi
          </Link>
          {/* bg-(--rx-ember) yeni lacivert bg-(--rx-action) ile güncellendi */}
          <Link 
            href="/bize-katil" 
            className="bg-(--rx-action) text-white text-sm px-4 py-2 rounded-sm font-medium hover:bg-opacity-90 transition-all"
          >
            Bize Katıl
          </Link>

          {/* Hamburger - sadece mobilde */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menüyü aç/kapat"
          >
            <span className={`block w-5 h-0.5 bg-(--rx-bone) transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-(--rx-bone) ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-(--rx-bone) transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobil açılır menü */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-white/10 bg-(--rx-ink) px-6 py-4 flex flex-col gap-4 text-sm text-(--rx-bone)/80">
          {[...navLinks, ...resources].map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="hover:text-(--rx-bone) transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}