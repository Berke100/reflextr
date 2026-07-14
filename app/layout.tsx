import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reflex | Koray Girgin'in Kurduğu Spor Kulübü",
  description:
    "Türkiye Vücut Geliştirme, Fitness ve Bilek Güreşi Federasyonu Başkanı Koray Girgin'in kurduğu Reflex'te antrenman yap. Kulüpler, online koçluk ve bilek güreşi akademisi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}