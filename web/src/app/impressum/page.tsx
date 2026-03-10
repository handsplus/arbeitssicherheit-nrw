import { CONTACT } from "@/lib/constants";

export const metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Angaben von Arbeitssicherheit.nrw.",
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <h1 className="text-4xl font-bold text-nrw-grau-900">Impressum</h1>
      <div className="prose mt-10 max-w-none text-nrw-grau-600 prose-headings:text-nrw-grau-900 prose-a:text-nrw-gruen prose-strong:text-nrw-grau-800">
        <p>
          <strong>Angaben gemäß § 5 TMG</strong>
        </p>
        <p className="mt-4">
          {CONTACT.company}
          <br />
          {CONTACT.address}
          <br />
          {CONTACT.zip} {CONTACT.city}
        </p>
        <p className="mt-6">
          <strong>Kontakt</strong>
          <br />
          Telefon: <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
          <br />
          E-Mail: <a href={CONTACT.emailHref}>{CONTACT.email}</a>
        </p>
        <p className="mt-6">
          <strong>Umsatzsteuer-ID</strong>
          <br />
          Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE 72 436 085 016
        </p>
        <p className="mt-6">
          <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</strong>
          <br />
          Amin Korkae
          <br />
          {CONTACT.address}
          <br />
          {CONTACT.zip} {CONTACT.city}
        </p>
        <h2 className="mt-10 text-lg font-semibold text-nrw-grau-900">Haftungsausschluss</h2>
        <h3 className="mt-4 font-medium text-nrw-grau-800">Haftung für Inhalte</h3>
        <p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
        </p>
        <h3 className="mt-4 font-medium text-nrw-grau-800">Haftung für Links</h3>
        <p>
          Unser Angebot enthält Links zu externen Webseiten. Auf die Inhalte dieser verlinkten
          Seiten haben wir keinen Einfluss; für die Inhalte ist der jeweilige Anbieter
          verantwortlich.
        </p>
      </div>
    </div>
  );
}
