"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { "Content-Type": "application/json" },
      });

      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-(--rx-brass) p-6 text-center bg-(--rx-steel)">
        <p className="text-(--rx-bone)">Mesajın alındı, teşekkürler.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input 
        name="name" 
        required 
        placeholder="Adın Soyadın" 
        className="w-full bg-(--rx-steel) border border-white/10 text-(--rx-bone) px-4 py-3 focus:outline-none focus:border-(--rx-ember) transition-colors" 
      />
      <input 
        name="email" 
        required 
        type="email" 
        placeholder="E-posta" 
        className="w-full bg-(--rx-steel) border border-white/10 text-(--rx-bone) px-4 py-3 focus:outline-none focus:border-(--rx-ember) transition-colors" 
      />
      <textarea 
        name="message" 
        required 
        placeholder="Mesajın" 
        rows={5} 
        className="w-full bg-(--rx-steel) border border-white/10 text-(--rx-bone) px-4 py-3 focus:outline-none focus:border-(--rx-ember) transition-colors" 
      />
      <button 
        type="submit" 
        disabled={status === "sending"} 
        className="w-full bg-(--rx-ember) text-white py-3 text-sm disabled:opacity-50 cursor-pointer uppercase tracking-wider font-medium hover:bg-opacity-90 transition-opacity"
      >
        {status === "sending" ? "Gönderiliyor..." : "Gönder"}
      </button>
      {status === "error" && (
        <p className="text-(--rx-ember) text-sm text-center">Bir hata oluştu, tekrar dene.</p>
      )}
    </form>
  );
}