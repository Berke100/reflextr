// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-(--rx-ink) flex flex-col items-center justify-center px-6 text-center">
      <span className="text-(--rx-brass) text-xs uppercase tracking-widest">404</span>
      <h1 className="font-(--font-display) text-4xl text-(--rx-bone) uppercase mt-2 mb-4">
        Bu Sayfa Bulunamadı
      </h1>
      <p className="text-(--rx-bone)/60 text-sm mb-8 max-w-sm">
        Aradığın sayfa taşınmış ya da hiç var olmamış olabilir.
      </p>
      <Link href="/" className="bg-(--rx-ember) text-white text-sm px-6 py-3">
        Ana Sayfaya Dön
      </Link>
    </main>
  );
}