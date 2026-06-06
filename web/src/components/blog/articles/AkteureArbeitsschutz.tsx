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

export function AkteureArbeitsschutz() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Arbeitsschutz funktioniert nur mit klaren Rollen. Wer trägt welche Verantwortung – und wo
        endet Beratung, wo beginnt Weisungsbefugnis? Ein Überblick für Betriebe in Köln und NRW.
      </BlogLead>

      <BlogH2>Arbeitgeber: zentrale Verantwortung</BlogH2>
      <p>
        Der Arbeitgeber ist für Sicherheit und Gesundheit der Beschäftigten verantwortlich. Er muss
        Gefährdungen beurteilen, Maßnahmen umsetzen, unterweisen und den Arbeitsschutz organisieren.
        Delegation an Führungskräfte oder Fachkräfte ändert nichts an der Gesamtverantwortung.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 3 Abs. 1"
        quote="Der Arbeitgeber ist verpflichtet, die erforderlichen Maßnahmen des Arbeitsschutzes unter Berücksichtigung der Umstände zu treffen, die Sicherheit und Gesundheit der Beschäftigten bei der Arbeit beeinflussen. Er hat die Maßnahmen auf ihre Wirksamkeit zu überprüfen und erforderlichenfalls sich ändernden Gegebenheiten anzupassen."
        source="09_ArbSchG.pdf (Gesetze-Vorschriften)"
      />

      <BlogH2>Fachkraft für Arbeitssicherheit (FaSi)</BlogH2>
      <p>
        Die FaSi berät den Arbeitgeber in allen Fragen der Arbeitssicherheit, wirkt bei der
        Gefährdungsbeurteilung mit, führt Betriebsbegehungen durch und unterstützt bei Unterweisungen.
        Sie hat grundsätzlich keine Weisungsbefugnis – außer in akuten Gefahrensituationen.
      </p>
      <BlogLegalRef>
        ASiG § 5: Bestellung der FaSi nach Betriebsart, Beschäftigtenzahl und Gefährdungen. § 6:
        Aufgaben – Beratung, Begehungen, Mitwirkung bei Gefährdungsbeurteilung und Unterweisung.
      </BlogLegalRef>
      <BlogGesetzesZitat
        paragraph="DGUV Vorschrift 2, § 2 Abs. 2–3 (Mustertext 2024)"
        quote="Bei Betrieben mit bis zu 20 Beschäftigten richtet sich der Umfang der betriebsärztlichen und sicherheitstechnischen Betreuung nach Anlage 1. Bei Betrieben mit mehr als 20 Beschäftigten gelten die Bestimmungen nach Anlage 2."
        source="37_DGUV-Vorschrift-2_Mustertext-2024.pdf (Gesetze-Vorschriften)"
      />

      <BlogH2>Betriebsarzt</BlogH2>
      <p>
        Der Betriebsarzt berät zu arbeitsbedingten Gesundheitsrisiken, arbeitsmedizinischer Vorsorge
        und arbeitswissenschaftlichen Erkenntnissen. FaSi und Betriebsarzt arbeiten eng zusammen –
        etwa bei Gefährdungsbeurteilungen, Vorsorge und ASA-Sitzungen.
      </p>
      <BlogLegalRef>
        ASiG §§ 2–4: Bestellung, Aufgaben und Anforderungen an Betriebsärzte; § 10: Zusammenarbeit
        mit der FaSi.
      </BlogLegalRef>

      <BlogH2>Sicherheitsbeauftragte</BlogH2>
      <p>
        Sicherheitsbeauftragte sind Beschäftigte, die den Arbeitgeber bei der Unfallverhütung
        unterstützen. Sie haben keine Weisungsbefugnis, können aber Gefährdungen früh ansprechen und
        die Kommunikation zwischen Belegschaft und Arbeitsschutzorganisation verbessern.
      </p>
      <BlogLegalRef>
        SGB VII § 22: Bestellung von Sicherheitsbeauftragten; Mitwirkung bei Unfallverhütung.
      </BlogLegalRef>

      <BlogH2>Arbeitsschutzausschuss (ASA)</BlogH2>
      <p>
        In Betrieben mit mehr als 20 Beschäftigten (unter Berücksichtigung von Teilzeit) ist ein
        Arbeitsschutzausschuss zu bilden. Er berät zu Anliegen des Arbeitsschutzes und der
        Unfallverhütung und tagt mindestens vierteljährlich.
      </p>
      <BlogLegalRef>
        ASiG § 11: Zusammensetzung aus Arbeitgeber, Betriebsrat, Betriebsarzt, FaSi und
        Sicherheitsbeauftragten.
      </BlogLegalRef>

      <BlogH2>Weitere Beauftragte – Brandschutz, Gefahrstoffe, SiGeKo</BlogH2>
      <BlogList
        items={[
          "Brandschutzbeauftragter (BSB): organisatorischer, baulicher und anlagentechnischer Brandschutz",
          "Gefahrstoffbeauftragter: bei umfangreichem Umgang mit Gefahrstoffen",
          "SiGeKo: Koordination von Sicherheit und Gesundheitsschutz auf Baustellen (BaustellV)",
          "VEFK: Elektrosicherheit nach DIN VDE 0100-100 ff.",
        ]}
      />
      <BlogH3>Schnittstellen sauber regeln</BlogH3>
      <p>
        In vielen NRW-Betrieben überlappen sich Themen: Brandschutzunterweisung und
        Arbeitsschutzunterweisung, Baustelle und Stammbetrieb, interne und externe FaSi. Klare
        Zuständigkeiten und abgestimmte Dokumentation vermeiden Lücken bei Audits und Behörden.
      </p>

      <BlogTakeaway>
        Der Arbeitgeber bleibt verantwortlich – FaSi, Betriebsarzt und Beauftragte entlasten und
        beraten. Wir unterstützen Betriebe in Köln und NRW bei der Rollenklärung und der praktischen
        Umsetzung – von der{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          externen FaSi
        </Link>{" "}
        bis zum{" "}
        <Link href="/leistungen/brandschutz" className="font-semibold text-nrw-gruen hover:underline">
          Brandschutzbeauftragten
        </Link>
        .
      </BlogTakeaway>

      <BlogDisclaimer />
    </BlogArticleShell>
  );
}
