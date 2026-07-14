import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm text-(--rx-bone)/60">
        <div>
          <h4 className="text-(--rx-bone) mb-3">Kulüpler</h4>
          <ul className="space-y-2">
            <li><Link href="/kulupler/yalova-merkez">Yalova Merkez</Link></li>
            <li><Link href="/kulupler/yalova-gold-gym">Gold Gym Yalova</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-(--rx-bone) mb-3">Hesaplayıcılar</h4>
          <ul className="space-y-2">
            <li><Link href="/1rm">1RM</Link></li>
            <li><Link href="/yag-orani">Yağ Oranı</Link></li>
            <li><Link href="/gunluk-kalori-ihtiyaci">Günlük Kalori</Link></li>
            <li><Link href="/vucut-kitle-indeksi">Vücut Kitle İndeksi</Link></li>
            <li><Link href="/kas-kutlesi">Kas Kütlesi</Link></li>
            <li><Link href="/kavrama-gucu">Kavrama Gücü</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-(--rx-bone) mb-3">Kurumsal</h4>
          <ul className="space-y-2">
            <li><Link href="/hakkimizda">Hakkımızda</Link></li>
            <li><Link href="/iletisim">İletişim</Link></li>
            <li><Link href="/blog">Rehberler</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-(--rx-bone) mb-3">Bizi Takip Et</h4>
          {/* Dış bağlantı olduğu için standart <a> etiketi olarak kalması doğrudur */}
          <a href="https://www.instagram.com/reflextr/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>
      <p className="text-center text-xs text-(--rx-bone)/30 mt-12">
        © 2026 Reflex. Tüm hakları saklıdır.
      </p>
    </footer>
  );
}