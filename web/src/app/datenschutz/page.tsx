import Link from "next/link";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { CONTACT, SITE } from "@/lib/constants";
import { pageSocialMeta } from "@/lib/page-metadata";

const title = "Datenschutzerklärung";
const description =
  "Datenschutzerklärung von Arbeitssicherheit.nrw: Hosting, Formulare, Cookies und Ihre Rechte nach DSGVO.";

export const metadata = {
  title,
  description,
  alternates: { canonical: `${SITE.url}/datenschutz` },
  ...pageSocialMeta({ path: "/datenschutz", title, description }),
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
          2. Erhebung beim Besuch der Website (Hosting)
        </h2>
        <p>
          Beim Aufruf unserer Website werden durch Ihren Browser automatisch Informationen an den
          Server übermittelt (u. a. IP-Adresse, Datum, Uhrzeit, aufgerufene Seite, Browsertyp). Diese
          Daten werden zur Bereitstellung und Stabilität der Website verarbeitet.
        </p>
        <p>
          <strong>Hosting-Anbieter:</strong> Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723,
          USA. Vercel verarbeitet die genannten Zugriffsdaten als Auftragsverarbeiter. Rechtsgrundlage
          ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren Betrieb). Weitere
          Informationen:{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel Datenschutz
          </a>
          .
        </p>

        <h2 className="mt-10 text-lg font-semibold text-nrw-grau-900">
          3. Kontakt- und Beratungsformulare (E-Mail-Versand)
        </h2>
        <p>
          Wenn Sie uns über das Kontaktformular oder das Formular „Kostenlose Erstberatung anfragen“
          schreiben, verarbeiten wir die von Ihnen eingegebenen Daten (z. B. Name, E-Mail, Telefon,
          Nachricht, gewähltes Thema), um Ihre Anfrage zu bearbeiten und zu beantworten.
        </p>
        <p>
          Der Versand erfolgt über den Dienst <strong>Resend</strong> (Resend, Inc., USA) als
          Auftragsverarbeiter. Die Daten werden an uns per E-Mail zugestellt. Rechtsgrundlage ist Art.
          6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an der Bearbeitung von Anfragen). Weitere Informationen:{" "}
          <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            Resend Datenschutz
          </a>
          .
        </p>
        <p>
          <strong>Speicherdauer:</strong> Wir speichern Ihre Anfrage nur so lange, wie es für die
          Bearbeitung und etwaige Nachfolgekommunikation erforderlich ist, danach gemäß gesetzlichen
          Aufbewahrungsfristen oder nach Löschung, sofern kein Aufbewahrungsgrund mehr besteht.
        </p>
        <p>
          <em>
            Hinweis: Sofern in der Konfiguration Formspree-Formulare aktiv sind, gelten ergänzend die
            Datenschutzhinweise von Formspree (
            <a
              href="https://formspree.io/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Formspree Datenschutz
            </a>
            ).
          </em>
        </p>

        <h2 className="mt-10 text-lg font-semibold text-nrw-grau-900">
          4. Optionale Besuchsbenachrichtigung
        </h2>
        <p>
          Sofern diese Funktion serverseitig aktiviert ist (<code>VISIT_NOTIFY_ENABLED</code>), kann
          beim ersten Seitenaufruf pro Browsersitzung eine interne E-Mail-Benachrichtigung mit dem
          aufgerufenen Pfad und Zeitstempel versendet werden. Standardmäßig ist diese Funktion{" "}
          <strong>deaktiviert</strong>. Rechtsgrundlage bei Aktivierung: Art. 6 Abs. 1 lit. f DSGVO.
        </p>

        <h2 className="mt-10 text-lg font-semibold text-nrw-grau-900">5. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit und Widerspruch. Zur Geltendmachung wenden Sie sich an die oben
          genannte E-Mail-Adresse. Sie haben zudem das Recht, sich bei einer Aufsichtsbehörde zu
          beschweren.
        </p>

        <h2 id="cookie-einstellungen" className="mt-10 text-lg font-semibold text-nrw-grau-900">
          6. Cookies und lokale Speicherung
        </h2>
        <p>
          Wir setzen technisch notwendige Mechanismen ein, um die Website bereitzustellen. Ihre
          Einwilligung für optionale Funktionen speichern wir im <strong>localStorage</strong> Ihres
          Browsers (Cookie-Hinweisbanner). Es werden derzeit keine Analyse- oder Marketing-Cookies
          eingesetzt, die auf dieser Einwilligung basieren.
        </p>
        <p>
          <CookieSettingsButton />
        </p>

        <h2 className="mt-10 text-lg font-semibold text-nrw-grau-900">7. Weitere Informationen</h2>
        <p>
          Rechtliche Pflichtangaben finden Sie im{" "}
          <Link href="/impressum" className="font-medium text-nrw-gruen hover:underline">
            Impressum
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
