import { notFound } from "next/navigation";
import ZoomableImage from "@/components/ZoomableImage";

type BlogPost = {
  title: string;
  category: string;
  img: string;
  content: string[];
};

const posts: Record<string, BlogPost> = {
  "bilek-guresine-baslangic": {
    title: "Bilek Güreşine Nasıl Başlanır?",
    category: "Bilek Güreşi",
    img: "/media/bilek-guresi.jpg",
    content: [
      "Bilek güreşi, ilk bakışta basit görünse de teknik, kuvvet ve stratejinin bir araya geldiği bir spordur.",
      "Yeni başlayanlar için en önemli adım, doğru teknik ve bilek/önkol kuvvetini federasyon onaylı bir eğitmen eşliğinde geliştirmektir.",
      "Reflex Bilek Güreşi Akademisi'nde bu süreç, yaralanma riskini en aza indirecek şekilde adım adım planlanır.",
    ],
  },
  "4-haftalik-program": {
    title: "Yeni Başlayanlar için 4 Haftalık Program",
    category: "Antrenman",
    img: "/media/antrenman-programi.jpg",
    content: [
      "Antrenmana yeni başlayanlar için haftalık bölge çalışması, hem toparlanmayı kolaylaştırır hem de tutarlı ilerleme sağlar.",
      "Örnek program: Salı sırt-ön kol, Çarşamba omuz-bacak, Perşembe göğüs-arka kol, Cuma sırt-ön kol, Cumartesi omuz-bacak.",
      "Programı kendi seviyene göre uyarlamak için Reflex koçluk ekibinden destek alabilirsin.",
    ],
  },
  "sporcu-beslenmesi": {
    title: "Sporcu Beslenmesinde Doğrular ve Yanlışlar",
    category: "Beslenme",
    img: "/media/beslenme.jpg",
    content: [
      "Antrenman kadar beslenme de sonuçları belirler. Yetersiz protein alımı, toparlanmayı ciddi şekilde yavaşlatır.",
      "Aşırı kısıtlayıcı diyetler kısa vadede kilo kaybı gösterse de uzun vadede performans düşüşüne yol açabilir.",
      "Kişiye özel beslenme planı için Reflex'in online koçluk paketlerine göz atabilirsin.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-(--rx-ink) pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <span className="text-(--rx-brass) text-xs uppercase tracking-widest">{post.category}</span>
        <h1 className="font-(--font-display) text-4xl text-(--rx-bone) uppercase mt-2 mb-8">
          {post.title}
        </h1>

        <ZoomableImage src={post.img} alt={post.title} />

        <div className="text-(--rx-bone)/70 text-sm leading-relaxed space-y-4">
          {post.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </main>
  );
}