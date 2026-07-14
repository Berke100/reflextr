import Image from "next/image";
import { notFound } from "next/navigation";

type ClubDetail = {
  name: string;
  city: string;
  address: string;
  hours: string;
  img: string;
  features: string[];
};

const clubDetails: Record<string, ClubDetail> = {
  "yalova-merkez": {
    name: "Reflex Yalova Merkez",
    city: "Yalova",
    address: "Adres bilgisi eklenecek",
    hours: "Hafta içi 07:00–23:00, Hafta sonu 09:00–21:00",
    img: "/media/Reflex.jpg",
    features: ["Serbest ağırlık alanı", "Grup dersleri", "Bilek güreşi antrenman alanı"],
  },
  "yalova-gold-gym": {
    name: "Gold's Gym Yalova",
    city: "Yalova",
    address: "Adres bilgisi eklenecek",
    hours: "Hafta içi 07:00–23:00, Hafta sonu 09:00–21:00",
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

        <div className="relative w-full h-80 mb-8">
          <Image src={club.img} alt={club.name} fill className="object-cover" />
        </div>

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

        <h3 className="text-(--rx-bone) mt-8 mb-3 uppercase text-xs tracking-widest">Özellikler</h3>
        <ul className="text-sm text-(--rx-bone)/70 space-y-2">
          {club.features.map((f) => (
            <li key={f}>— {f}</li>
          ))}
        </ul>

        <a href="/bize-katil" className="inline-block mt-8 bg-(--rx-ember) text-white text-sm px-6 py-3">
          Bu Kulübe Katıl
        </a>
      </div>
    </main>
  );
}