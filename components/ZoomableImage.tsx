"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ZoomableImage({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <button onClick={() => setOpen(true)} className="relative w-full h-80 mb-8 block cursor-zoom-in">
        <Image src={src} alt={alt} fill className="object-cover" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-6"
          onClick={() => setOpen(false)}
        >
          <div className="relative w-full max-w-3xl h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <Image src={src} alt={alt} fill className="object-contain" />
          </div>
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white text-xl"
            aria-label="Kapat"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}