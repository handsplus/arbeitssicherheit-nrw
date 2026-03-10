import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT } from "@/lib/constants";

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
    const { thema, vorname, nachname, firma, email, telefon, nachricht } = body as {
      thema?: string;
      vorname?: string;
      nachname?: string;
      firma?: string;
      email?: string;
      telefon?: string;
      nachricht?: string;
    };

    if (!thema || !vorname || !nachname || !email) {
      return NextResponse.json(
        { error: "Bitte alle Pflichtfelder ausfüllen." },
        { status: 400 }
      );
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
      `<p><strong>Thema:</strong> ${thema}</p>`,
      `<p><strong>Name:</strong> ${vorname} ${nachname}</p>`,
      firma ? `<p><strong>Firma:</strong> ${firma}</p>` : "",
      `<p><strong>E-Mail:</strong> ${email}</p>`,
      telefon ? `<p><strong>Telefon:</strong> ${telefon}</p>` : "",
      nachricht ? `<p><strong>Nachricht / Wunschtermin:</strong></p><p>${nachricht.replace(/\n/g, "<br>")}</p>` : "",
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
      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Beratung API error:", e);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten." },
      { status: 500 }
    );
  }
}
