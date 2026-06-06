import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT } from "@/lib/constants";
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

const THEMEN = new Set([
  "Arbeitssicherheit",
  "Brandschutz",
  "Schulungen",
  "Elektrosicherheit",
  "SiGeKo",
  "Managementsysteme (ISO 45001, ISO 14001)",
  "Sonstiges",
]);

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
  if (isRateLimited(`beratung:${ip}`, 5, 15 * 60 * 1000)) {
    return rateLimitResponse();
  }

  try {
    const body = await request.json();
    if (isHoneypotFilled(body.website)) {
      return silentSpamOk();
    }

    const thema = sanitizeField(body.thema, 120);
    const vorname = sanitizeField(body.vorname, 80);
    const nachname = sanitizeField(body.nachname, 80);
    const firma = body.firma ? sanitizeField(body.firma, 120) : null;
    const email = sanitizeField(body.email, 254);
    const telefon = body.telefon ? sanitizeField(body.telefon, 40) : null;
    const nachricht = body.nachricht ? sanitizeField(body.nachricht, 3000) : null;

    if (!thema || !vorname || !nachname || !email) {
      return NextResponse.json({ error: "Bitte alle Pflichtfelder ausfüllen." }, { status: 400 });
    }

    if (!THEMEN.has(thema)) {
      return NextResponse.json({ error: "Bitte ein gültiges Thema wählen." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Bitte eine gültige E-Mail-Adresse angeben." }, { status: 400 });
    }

    const text = [
      `Thema: ${thema}`,
      `Name: ${vorname} ${nachname}`,
      firma ? `Firma: ${firma}` : null,
      `E-Mail: ${email}`,
      telefon ? `Telefon: ${telefon}` : null,
      nachricht ? `Nachricht / Wunschtermin:\n${nachricht}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const html = [
      `<p><strong>Thema:</strong> ${escapeHtml(thema)}</p>`,
      `<p><strong>Name:</strong> ${escapeHtml(vorname)} ${escapeHtml(nachname)}</p>`,
      firma ? `<p><strong>Firma:</strong> ${escapeHtml(firma)}</p>` : "",
      `<p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>`,
      telefon ? `<p><strong>Telefon:</strong> ${escapeHtml(telefon)}</p>` : "",
      nachricht
        ? `<p><strong>Nachricht / Wunschtermin:</strong></p><p>${nl2brEscaped(nachricht)}</p>`
        : "",
    ].join("");

    const { error } = await resend.emails.send({
      from: FROM,
      to: CONTACT.email,
      replyTo: email,
      subject: `Erstberatung angefragt: ${thema} – ${vorname} ${nachname}`,
      text,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "E-Mail konnte nicht gesendet werden." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Beratung API error:", e);
    return NextResponse.json({ error: "Ein Fehler ist aufgetreten." }, { status: 500 });
  }
}
