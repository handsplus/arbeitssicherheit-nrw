import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT } from "@/lib/constants";
import { escapeHtml, getClientIp, isRateLimited, sanitizeField } from "@/lib/api-form";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const FROM = process.env.RESEND_FROM ?? "Website <onboarding@resend.dev>";

/** Nur aktiv wenn VISIT_NOTIFY_ENABLED=true (Standard: aus) */
const ENABLED = process.env.VISIT_NOTIFY_ENABLED === "true";

export async function GET(request: Request) {
  if (!ENABLED || !resend) {
    return NextResponse.json({ ok: true, disabled: true });
  }

  const ip = getClientIp(request);
  if (isRateLimited(`visit:${ip}`, 3, 60 * 60 * 1000)) {
    return NextResponse.json({ ok: true, throttled: true });
  }

  const { searchParams } = new URL(request.url);
  const rawPath = searchParams.get("path") ?? "/";
  const path = sanitizeField(rawPath, 200) ?? "/";

  try {
    const time = new Date().toLocaleString("de-DE");
    const { error } = await resend.emails.send({
      from: FROM,
      to: CONTACT.email,
      subject: "Arbeitssicherheit.nrw – Seite besucht",
      text: `Seite wurde besucht.\nPfad: ${path}\nZeit: ${time}`,
      html: `<p>Seite wurde besucht.</p><p><strong>Pfad:</strong> ${escapeHtml(path)}</p><p><strong>Zeit:</strong> ${escapeHtml(time)}</p>`,
    });

    if (error) {
      console.error("Resend visit notification error:", error);
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Visit API error:", e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
