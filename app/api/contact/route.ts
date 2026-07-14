import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    await resend.emails.send({
      from: "Reflex Site <onboarding@resend.dev>", // kendi doğrulanmış domainin olunca değişecek
      to: "info@reflextr.com", // gerçek e-posta adresinle değiştir
      subject: `Yeni İletişim Formu: ${name}`,
      text: `İsim: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}