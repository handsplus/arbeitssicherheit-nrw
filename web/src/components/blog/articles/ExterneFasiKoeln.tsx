import Link from "next/link";
import {
  BlogArticleShell,
  BlogDisclaimer,
  BlogGesetzesZitat,
  BlogH2,
  BlogH3,
  BlogLead,
  BlogLegalRef,
  BlogList,
  BlogTakeaway,
} from "../BlogShared";

export function ExterneFasiKoeln() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Die meisten KMU in Köln und NRW beauftragen eine externe Fachkraft für Arbeitssicherheit –
        gesetzlich vorgesehen, praktisch oft die wirtschaftlichste Lösung. Woran erkennen Sie einen
        passenden Anbieter?
      </BlogLead>

      <BlogH2>Wann ist eine FaSi Pflicht?</BlogH2>
      <p>
        Arbeitgeber müssen Fachkräfte für Arbeitssicherheit und Betriebsärzte bestellen, soweit dies
        nach Betriebsart, Beschäftigtenzahl und Gefährdungen erforderlich ist. Der Umfang der
        Betreuung richtet sich nach der DGUV Vorschrift 2.
      </p>
      <BlogGesetzesZitat
        paragraph="DGUV Vorschrift 2, § 2 Abs. 1 (Mustertext 2024)"
        quote="Der Unternehmer hat Betriebsärztinnen oder Betriebsärzte sowie Fachkräfte für Arbeitssicherheit zur Wahrnehmung der in den §§ 3 und 6 Arbeitssicherheitsgesetz bezeichneten Aufgaben schriftlich nach Maßgabe der nachfolgenden Bestimmungen zu bestellen."
        source="37_DGUV-Vorschrift-2_Mustertext-2024.pdf (Gesetze-Vorschriften)"
      />

      <BlogH2>Checkliste: Worauf bei der Auswahl achten</BlogH2>
      <BlogList
        items={[
          "Branchenkenntnis: Produktion, Logistik, Büro, Handwerk, Baustelle?",
          "Regionale Erreichbarkeit: kurze Wege für Begehungen und Unterweisungen in Köln/NRW",
          "Klare Zuständigkeiten mit Betriebsarzt und Führungskräften",
          "Nachvollziehbare Dokumentation: Gefährdungsbeurteilung, Begehungsprotokolle, Unterweisungen",
          "Transparentes Leistungsmodell: Grundbetreuung vs. betriebsspezifische Zusatzleistungen",
          "Ansprechpartner mit Kontinuität – nicht nur wechselnde Subunternehmer",
        ]}
      />

      <BlogH3>Aufgaben einer guten externen FaSi</BlogH3>
      <p>
        Beratung des Arbeitgebers, Mitwirkung bei Gefährdungsbeurteilungen, Betriebsbegehungen,
        Unterstützung bei Unterweisungen, Vorschläge nach Arbeitsunfällen, Mitwirkung bei
        Beschaffung und Inbetriebnahme von Arbeitsmitteln – das sind Kernthemen nach ASiG § 6.
      </p>
      <BlogLegalRef>
        ASiG § 6: Beratung, sicherheitstechnische Überprüfung vor Inbetriebnahme, Begehungen,
        Unfalluntersuchung, Mitwirkung bei Unterweisungen.
      </BlogLegalRef>

      <BlogH2>Grund- vs. betriebsspezifische Betreuung</BlogH2>
      <BlogGesetzesZitat
        paragraph="DGUV Vorschrift 2 (Mustertext 2024, Auszug)"
        quote="Grundbetreuung und betriebsspezifische Betreuung bilden zusammen die Gesamtbetreuung … Die Grundbetreuung weist drei Betreuungsgruppen auf, für die jeweils feste Einsatzzeiten gelten."
        source="37_DGUV-Vorschrift-2_Mustertext-2024.pdf (Gesetze-Vorschriften)"
      />
      <p>
        Ein seriöses Angebot benennt Grund- und betriebsspezifische Betreuung getrennt – ohne versteckte
        Zusatzkosten bei Standardthemen wie Gefährdungsbeurteilung oder ASA-Vorbereitung.
      </p>

      <BlogH2>Typische Fehler bei der Beauftragung</BlogH2>
      <BlogList
        items={[
          "Nur den günstigsten Stundensatz vergleichen, nicht den Gesamtumfang",
          "FaSi erst beauftragen, wenn die BG oder Behörde nachfragt",
          "Keine schriftliche Bestellung und keine Festlegung der Zuständigkeiten",
          "Betriebsarzt und FaSi arbeiten isoliert – Doppelarbeit oder Lücken",
        ]}
      />

      <BlogTakeaway>
        Externe FaSi in Köln: Qualität zeigt sich in Branchenverständnis, Erreichbarkeit und
        belastbaren Nachweisen. Vereinbaren Sie ein unverbindliches Erstgespräch – wir klären Pflichten,
        Fristen und Zusammenarbeit mit Ihrem Setup.{" "}
        <Link href="/beratung-buchen" className="font-semibold text-nrw-gruen hover:underline">
          Erstberatung buchen
        </Link>{" "}
        ·{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          Leistungen
        </Link>
      </BlogTakeaway>

      <BlogDisclaimer />
    </BlogArticleShell>
  );
}
