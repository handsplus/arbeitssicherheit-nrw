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

export function BsbInternExtern() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Braucht Ihr Unternehmen einen Brandschutzbeauftragten (BSB) – und sollte die Rolle intern
        besetzt oder extern vergeben werden? Die Antwort hängt von Größe, Gefährdung, Auflagen und
        verfügbarer Fachkraft ab.
      </BlogLead>

      <BlogH2>Wann braucht ein Betrieb einen Brandschutzbeauftragten?</BlogH2>
      <p>
        Ein BSB kann aus gesetzlichen Vorgaben, behördlichen Auflagen, Versicherungsanforderungen
        oder betrieblicher Entscheidung erforderlich sein. Typische Auslöser in NRW:
      </p>
      <BlogList
        items={[
          "Sonderbauten und größere Gewerbeobjekte (Auflagen aus BauO NRW / Brandschutzkonzept)",
          "Betriebe mit erhöhtem Brandrisiko (Produktion, Lager, Veranstaltungen)",
          "Mehrere Standorte ohne zentrale Brandschutzkompetenz",
          "Vorgaben aus Brandschutzordnung, Evakuierungskonzept oder Versicherer",
        ]}
      />

      <BlogH2>Aufgaben des Brandschutzbeauftragten</BlogH2>
      <BlogList
        items={[
          "Organisatorischer Brandschutz: Flucht- und Rettungswege, Brandschutzordnung, Evakuierung",
          "Anlagentechnischer Brandschutz: Meldeanlagen, Löscheinrichtungen, Rauchwarnmelder",
          "Baulicher Brandschutz: Abstimmung bei Umbauten, Nutzungsänderungen, Instandhaltung",
          "Brandschutzunterweisungen und Schulungen (z. B. Brandschutzhelfer)",
          "Kommunikation mit Behörden, Feuerwehr und internen Stellen",
        ]}
      />
      <BlogGesetzesZitat
        paragraph="DGUV Information 205-003, Abschnitt 2.2"
        quote="Können die erforderlichen Qualifikationen und die notwendige Zeit nicht im eigenen Betrieb aufgebildet werden, so sind externe Brandschutzbeauftragte vertraglich zu beauftragen."
        source="205-003.pdf (Gesetze-Vorschriften)"
      />
      <BlogLegalRef>
        DGUV Information 205-003 (Bestellung von Brandschutzbeauftragten) und BHKG NRW – Rahmen für
        organisatorischen und vorbeugenden Brandschutz in Betrieben.
      </BlogLegalRef>

      <BlogH2>Intern besetzen – wann sinnvoll?</BlogH2>
      <BlogList
        items={[
          "Ausreichend Zeit und Qualifikation (Fortbildung Brandschutz)",
          "Klare Vertretungsregelung bei Urlaub und Krankheit",
          "Überschaubare Standortstruktur und moderate Komplexität",
          "Enge Verzahnung mit täglichen Betriebsabläufen nötig",
        ]}
      />

      <BlogH2>Extern beauftragen – wann die bessere Wahl?</BlogH2>
      <BlogList
        items={[
          "Keine interne Kapazität oder fehlende Fachtiefe",
          "Mehrere Standorte in Köln, NRW oder bundesweit",
          "Behördliche Auflagen, Genehmigungen oder komplexe Sonderbauten",
          "Kombination mit externer FaSi gewünscht – ein Ansprechpartner, konsistente Unterweisungen",
        ]}
      />

      <BlogH3>Schnittstelle zur Arbeitssicherheit</BlogH3>
      <p>
        Brandschutz und Arbeitssicherheit greifen ineinander: Evakuierung, Unterweisungen,
        Gefährdungsbeurteilung (Brand- und Explosionsgefährdung nach GefStoffV § 6 Abs. 4),
        Elektroprüfungen. Wer BSB und FaSi getrennt und unkoordiniert beauftragt, riskiert
        widersprüchliche Vorgaben.
      </p>

      <BlogTakeaway>
        Intern oder extern ist keine Ideologiefrage, sondern eine Kapazitäts- und
        Kompetenzentscheidung. In Köln und NRW begleiten wir beides – als{" "}
        <Link href="/leistungen/brandschutz" className="font-semibold text-nrw-gruen hover:underline">
          externer Brandschutzbeauftragter
        </Link>{" "}
        und in Verbindung mit{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          FaSi-Betreuung
        </Link>
        .
      </BlogTakeaway>

      <BlogDisclaimer />
    </BlogArticleShell>
  );
}
