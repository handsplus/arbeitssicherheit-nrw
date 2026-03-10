import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT } from "@/lib/constants";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const FROM = process.env.RESEND_FROM ?? "Website <onboarding@resend.dev>";

/** Throttle: max one notification per hour per serverless instance */
const THROTTLE_MS = 60 * 60 * 1000;
const globalCache = globalThis as typeof globalThis & { __visitLastSent?: number };

export async function GET(request: Request) {
  if (!resend) {
    return NextResponse.json({ ok: true }); // silent skip if not configured
  }

  const { searchParams } = new URL(request.url);
  const path = searchParams.get("path") ?? "/";

  const now = Date.now();
  const lastSent = globalCache.__visitLastSent ?? 0;
  if (now - lastSent < THROTTLE_MS) {
    return NextResponse.json({ ok: true, throttled: true });
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: CONTACT.email,
      subject: `Arbeitssicherheit.nrw – Seite besucht`,
      text: `Seite wurde besucht.\nPfad: ${path}\nZeit: ${new Date().toLocaleString("de-DE")}`,
      html: `<p>Seite wurde besucht.</p><p><strong>Pfad:</strong> ${path}</p><p><strong>Zeit:</strong> ${new Date().toLocaleString("de-DE")}</p>`,
    });

    if (error) {
      console.error("Resend visit notification error:", error);
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    globalCache.__visitLastSent = now;
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Visit API error:", e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
