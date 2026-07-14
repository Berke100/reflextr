import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "İletişim | Reflex",
  description: "Sorularını Reflex ekibine ilet, en kısa sürede dönüş alalım.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-(--rx-ink) pt-32 pb-24 px-6 flex items-center">
      <div className="max-w-md mx-auto w-full">
        <h1 className="font-(--font-display) text-4xl text-(--rx-bone) uppercase mb-2">
          İletişim
        </h1>
        <p className="text-(--rx-bone)/60 text-sm mb-8">
          Sorularını bize ilet, en kısa sürede dönüş yapalım.
        </p>
        <ContactForm />
      </div>
    </main>
  );
}