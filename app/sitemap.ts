// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://reflextr.com"; // Gerçek domainin bağlandığında burası hazır olacak
  const staticPages = [
    "", 
    "hakkimizda", 
    "iletisim", 
    "kulupler", 
    "uyelik-paketleri",
    "kocluk", 
    "bilek-guresi-akademisi", 
    "1rm", 
    "yag-orani",
    "gunluk-kalori-ihtiyaci", 
    "vucut-kitle-indeksi", 
    "kas-kutlesi", 
    "kavrama-gucu",
  ];
  return staticPages.map((path) => ({
    url: `${base}/${path}`,
    lastModified: new Date(),
  }));
}