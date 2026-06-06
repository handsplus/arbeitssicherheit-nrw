import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  assertJsonRequest,
  escapeHtml,
  getClientIp,
  isHoneypotFilled,
  isRateLimited,
  isValidEmail,
  nl2brEscaped,
  rateLimitResponse,
  sanitizeField,
  silentSpamOk,
} from "@/lib/api-form";

const CONTACT_FORM_TO = process.env.CONTACT_FORM_EMAIL ?? "a.korkae@handsplus.de";
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const FROM = process.env.RESEND_FROM ?? "Website <onboarding@resend.dev>";

export async function POST(request: Request) {
  if (!assertJsonRequest(request)) {
    return NextResponse.json({ error: "Ungültiger Content-Type." }, { status: 415 });
  }

  if (!resend) {
    return NextResponse.json(
      { error: "E-Mail-Versand nicht konfiguriert (RESEND_API_KEY fehlt)." },
      { status: 503 }
    );
  }

  const ip = getClientIp(request);
  if (isRateLimited(`contact:${ip}`, 5, 15 * 60 * 1000)) {
    return rateLimitResponse();
  }

  try {
    const body = await request.json();
    if (isHoneypotFilled(body.website)) {
      return silentSpamOk();
    }

    const vorname = sanitizeField(body.vorname, 80);
    const nachname = sanitizeField(body.nachname, 80);
    const email = sanitizeField(body.email, 254);
    const mitteilung = sanitizeField(body.mitteilung, 5000);

    if (!vorname || !nachname || !email || !mitteilung) {
      return NextResponse.json(
        { error: "Alle Pflichtfelder müssen ausgefüllt sein." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Bitte eine gültige E-Mail-Adresse angeben." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: FROM,
      to: CONTACT_FORM_TO,
      replyTo: email,
      subject: `Kontaktanfrage von ${vorname} ${nachname}`,
      text: `Von: ${vorname} ${nachname}\nE-Mail: ${email}\n\nNachricht:\n${mitteilung}`,
      html: `<p><strong>Von:</strong> ${escapeHtml(vorname)} ${escapeHtml(nachname)}<br><strong>E-Mail:</strong> ${escapeHtml(email)}</p><p><strong>Nachricht:</strong></p><p>${nl2brEscaped(mitteilung)}</p>`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "E-Mail konnte nicht gesendet werden." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json({ error: "Ein Fehler ist aufgetreten." }, { status: 500 });
  }
}
