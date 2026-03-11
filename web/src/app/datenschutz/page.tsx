import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { CONTACT, SITE } from "@/lib/constants";

export const metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Arbeitssicherheit.nrw. Informationen zur Verarbeitung personenbezogener Daten.",
  alternates: { canonical: `${SITE.url}/datenschutz` },
};

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <h1 className="text-4xl font-bold text-nrw-grau-900">Datenschutzerklärung</h1>
      <div className="prose mt-10 max-w-none text-nrw-grau-600 prose-headings:text-nrw-grau-900 prose-a:text-nrw-gruen prose-strong:text-nrw-grau-800">
        <h2 className="text-lg font-semibold text-nrw-grau-900">1. Verantwortlicher</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          <br />
          {CONTACT.company}, {CONTACT.address}, {CONTACT.zip} {CONTACT.city}
          <br />
          E-Mail: <a href={CONTACT.emailHref}>{CONTACT.email}</a>
        </p>
        <h2 className="mt-10 text-lg font-semibold text-nrw-grau-900">
          2. Erhebung und Speicherung personenbezogener Daten
        </h2>
        <p>
          Beim Besuch unserer Website werden durch den Browser automatisch Informationen an unseren
          Server übermittelt (u. a. IP-Adresse, Datum, Uhrzeit, aufgerufene Seiten). Diese Daten
          werden ausschließlich zur Gewährleistung eines störungsfreien Betriebs ausgewertet und
          nicht an Dritte weitergegeben.
        </p>
        <h2 className="mt-10 text-lg font-semibold text-nrw-grau-900">3. Kontakt- und Beratungsformulare (Formspree)</h2>
        <p>
          Unsere Formulare („Nachricht senden“, „Kostenlose Erstberatung anfragen“) werden über den
          Anbieter Formspree (Formspree Inc., USA) verarbeitet. Die von Ihnen eingegebenen Daten
          (z. B. Name, E-Mail, Telefon, Nachricht) werden an Formspree übermittelt und uns per
          E-Mail zugestellt. Formspree speichert die Daten auf Servern, die auch außerhalb der EU
          liegen können. Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung bzw. zur
          Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. a, b DSGVO). Weitere
          Informationen:{" "}
          <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            Formspree Datenschutz
          </a>
          .
        </p>
        <h2 className="mt-10 text-lg font-semibold text-nrw-grau-900">4. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
          Verarbeitung, Datenübertragbarkeit und Widerspruch. Zur Geltendmachung wenden Sie sich an
          die oben genannte E-Mail-Adresse. Sie haben zudem das Recht, sich bei einer
          Aufsichtsbehörde zu beschweren.
        </p>
        <h2 id="cookie-einstellungen" className="mt-10 text-lg font-semibold text-nrw-grau-900">5. Cookies</h2>
        <p>
          Wir setzen ggf. technisch notwendige Cookies ein. Ihre Einwilligung für optionalere
          Cookies können Sie über unser Cookie-Hinweisbanner erteilen bzw. widerrufen.
        </p>
        <p>
          <CookieSettingsButton />
        </p>
        <h2 className="mt-10 text-lg font-semibold text-nrw-grau-900">6. Hosting</h2>
        <p>
          Diese Website wird bei einem Hosting-Anbieter betrieben. Dorthin können zum Betrieb der
          Seite u. a. IP-Adressen, Zugriffszeiten und gerätebezogene Daten übermittelt werden. Der
          Einsatz erfolgt auf Grundlage berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO). Details
          entnehmen Sie ggf. der Datenschutzerklärung des jeweiligen Anbieters.
        </p>
      </div>
    </div>
  );
}
