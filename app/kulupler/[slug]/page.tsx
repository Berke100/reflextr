import { notFound } from "next/navigation";
import ZoomableImage from "@/components/ZoomableImage";

type ClubDetail = {
  name: string;
  city: string;
  address: string;
  hours: string;
  phone: string;
  img: string;
  features: string[];
};

const clubDetails: Record<string, ClubDetail> = {
  "yalova-merkez": {
    name: "Reflex Yalova Merkez",
    city: "Yalova",
    address: "Fevzi Çakmak Mahallesi, Cumhuriyet Cad, Gürkal Sk. No:6, 77100 Yalova Merkez/Yalova",
    hours: "Pazartesi–Cuma 08:00–23:00, Cumartesi 08:00–21:00, Pazar 11:00–18:00",
    phone: "(0226) 812 58 08",
    img: "/media/Reflex.jpg",
    features: ["Serbest ağırlık alanı", "Grup dersleri", "Bilek güreşi antrenman alanı"],
  },
  "yalova-gold-gym": {
    name: "Gold's Gym Yalova",
    city: "Yalova",
    address: "Royal Blue Sitesi, İsmet Paşa Mah. 125/2 Sok. No:37, 77200 Yalova Merkez/Yalova",
    hours: "Hafta içi 07:00–23:00, Hafta sonu 09:00–21:00",
    phone: "(0226) 503 07 77",
    img: "/media/GoldGym.jpg",
    features: ["Kardiyo alanı", "Personal training", "Duş ve soyunma odaları"],
  },
};

export function generateStaticParams() {
  return Object.keys(clubDetails).map((slug) => ({ slug }));
}

export default async function ClubDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const club = clubDetails[slug];
  if (!club) return notFound();

  return (
    <main className="min-h-screen bg-(--rx-ink) pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <span className="text-(--rx-brass) text-xs uppercase tracking-widest">{club.city}</span>
        <h1 className="font-(--font-display) text-4xl text-(--rx-bone) uppercase mt-2 mb-8">
          {club.name}
        </h1>

        <ZoomableImage src={club.img} alt={club.name} />

        <div className="grid md:grid-cols-2 gap-8 text-sm text-(--rx-bone)/70">
          <div>
            <h3 className="text-(--rx-bone) mb-2 uppercase text-xs tracking-widest">Adres</h3>
            <p>{club.address}</p>
          </div>
          <div>
            <h3 className="text-(--rx-bone) mb-2 uppercase text-xs tracking-widest">Çalışma Saatleri</h3>
            <p>{club.hours}</p>
          </div>
        </div>

        {club.phone && (
          <div className="mt-6 text-sm text-(--rx-bone)/70">
            <h3 className="text-(--rx-bone) mb-2 uppercase text-xs tracking-widest">Telefon</h3>
            <a href={`tel:${club.phone.replace(/[^\d+]/g, "")}`} className="hover:text-(--rx-ember) transition-colors">
              {club.phone}
            </a>
          </div>
        )}

        <h3 className="text-(--rx-bone) mt-8 mb-3 uppercase text-xs tracking-widest">Özellikler</h3>
        <ul className="text-sm text-(--rx-bone)/70 space-y-2">
          {club.features.map((f) => (
            <li key={f}>— {f}</li>
          ))}
        </ul>

        <a href="/bize-katil" className="inline-block mt-8 bg-(--rx-action) text-white text-sm px-6 py-3">
          Bu Kulübe Katıl
        </a>
      </div>
    </main>
  );
}