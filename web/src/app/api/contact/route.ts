import { NextResponse } from "next/server";
import { Resend } from "resend";

/** Empfänger der Kontaktformular-Nachrichten (z. B. a.korkae@handsplus.de) */
const CONTACT_FORM_TO = process.env.CONTACT_FORM_EMAIL ?? "a.korkae@handsplus.de";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const FROM = process.env.RESEND_FROM ?? "Website <onboarding@resend.dev>";

export async function POST(request: Request) {
  if (!resend) {
    return NextResponse.json(
      { error: "E-Mail-Versand nicht konfiguriert (RESEND_API_KEY fehlt)." },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const { vorname, nachname, email, mitteilung } = body as {
      vorname?: string;
      nachname?: string;
      email?: string;
      mitteilung?: string;
    };

    if (!vorname || !nachname || !email || !mitteilung) {
      return NextResponse.json(
        { error: "Alle Pflichtfelder müssen ausgefüllt sein." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: FROM,
      to: CONTACT_FORM_TO,
      replyTo: email,
      subject: `Kontaktanfrage von ${vorname} ${nachname}`,
      text: `Von: ${vorname} ${nachname}\nE-Mail: ${email}\n\nNachricht:\n${mitteilung}`,
      html: `<p><strong>Von:</strong> ${vorname} ${nachname}<br><strong>E-Mail:</strong> ${email}</p><p><strong>Nachricht:</strong></p><p>${mitteilung.replace(/\n/g, "<br>")}</p>`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten." },
      { status: 500 }
    );
  }
}
