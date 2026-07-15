export default function JoinPage() {
  return (
    <main className="min-h-screen bg-(--rx-ink) pt-32 pb-24 px-6">
      <div className="max-w-sm mx-auto text-center">
        <h1 className="font-(--font-display) text-3xl text-(--rx-bone) uppercase mb-4">
          Bize Katıl
        </h1>
        <p className="text-(--rx-bone)/60 text-sm mb-8">
          Üyelik başvurusu için bizimle iletişime geç, en kısa sürede seni arayalım.
        </p>
        <a href="/iletisim" className="inline-block bg-(--rx-action) text-white text-sm px-6 py-3">
          İletişime Geç
        </a>
      </div>
    </main>
  );
}