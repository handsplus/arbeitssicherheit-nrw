import Link from "next/link";
import { GESETZ, REGELWERK } from "@/lib/blog-gesetz-links";
import {
  BlogArticleShell,
  BlogDisclaimer,
  BlogGesetzesZitat,
  BlogH2,
  BlogH3,
  BlogLead,
  BlogLegalRef,
  BlogList,
  BlogRelated,
  BlogSteps,
  BlogTakeaway,
} from "../BlogShared";

export function BsbInternExtern() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Ob ein Brandschutzbeauftragter intern besetzt oder extern beauftragt werden sollte, ist für
        viele Unternehmen in NRW eine strategische Organisationsfrage. Gerade in Köln sehen wir oft,
        dass die Rolle zwar formal benannt ist, aber Zeit, Fachkenntnis oder die notwendige Stellung
        im Unternehmen fehlen.
      </BlogLead>
      <BlogLead>
        Die richtige Lösung hängt nicht von Ideologie ab, sondern von Risiko, Standortstruktur,
        Auflagenlage und verfügbaren Kapazitäten. Wer diese Entscheidung sauber trifft, verbessert
        nicht nur den vorbeugenden Brandschutz, sondern auch Evakuierung, Unterweisung und
        Behördenkommunikation.
      </BlogLead>

      <BlogH2>Wann ein Brandschutzbeauftragter sinnvoll oder erforderlich ist</BlogH2>
      <p>
        Ein Brandschutzbeauftragter kann sich aus behördlichen Auflagen, Brandschutzkonzepten,
        Versicherervorgaben oder der betrieblichen Gefährdungslage ergeben. Je komplexer Gebäude,
        Nutzung und organisatorische Abläufe sind, desto größer wird der Bedarf nach einer zentralen
        brandschutzfachlichen Koordination.
      </p>
      <BlogList
        items={[
          "Sonderbauten und größere gewerblich genutzte Gebäude",
          "Standorte mit erhöhter Brandlast oder komplexen technischen Anlagen",
          "Betriebe mit mehreren Gebäuden, Mietflächen oder wechselnden Nutzungen",
          "Objekte mit regelmäßigem Behördenkontakt, Feuerwehrabstimmungen oder Auflagen aus Konzepten",
        ]}
      />
      <BlogLegalRef>
        Die konkrete Pflicht ergibt sich oft aus dem Einzelfall, etwa aus Bauordnung, Auflagen oder
        organisatorischen Anforderungen. Für die operative Ausgestaltung ist die DGUV Information 205-003
        eine wichtige Orientierung.
      </BlogLegalRef>

      <BlogH2>Welche Aufgaben der BSB tatsächlich übernimmt</BlogH2>
      <p>
        Der Brandschutzbeauftragte ist keine reine Dokumentationsrolle. Er koordiniert den
        organisatorischen Brandschutz, begleitet technische und bauliche Fragestellungen, unterstützt
        bei Unterweisungen und wirkt als Ansprechpartner für interne Stellen, Behörden und externe
        Dienstleister.
      </p>
      <BlogH3>Typische Aufgabenbereiche</BlogH3>
      <BlogList
        items={[
          "Prüfung und Fortschreibung von Brandschutzordnung, Alarm- und Evakuierungsorganisation",
          "Begleitung von Umbauten, Nutzungsänderungen und Maßnahmen aus Brandschutzbegehungen",
          "Unterstützung bei Übungen, Unterweisungen und der Organisation von Brandschutzhelfern",
          "Kommunikation mit Eigentümer, Facility Management, Feuerwehr und Versicherern",
          "Nachverfolgung festgestellter Mängel und Priorisierung von Maßnahmen",
        ]}
      />
      <BlogGesetzesZitat
        paragraph="DGUV Information 205-003"
        quote="Können die erforderlichen Qualifikationen und die notwendige Zeit nicht im eigenen Betrieb aufgebracht werden, so sind externe Brandschutzbeauftragte vertraglich zu beauftragen."
        sourceLabel="DGUV Information 205-003"
        sourceHref={REGELWERK.dguv205003}
      />

      <BlogH2>Interne Besetzung: wann sie gut funktioniert</BlogH2>
      <p>
        Eine interne Lösung kann sehr stark sein, wenn die benannte Person ausreichend Zeit,
        Akzeptanz, Fachkenntnis und Zugang zu Entscheidungen hat. Das ist vor allem in Unternehmen mit
        stabiler Standortstruktur und klar geregelten Zuständigkeiten realistisch.
      </p>
      <BlogList
        items={[
          "Die Person ist fachlich qualifiziert und kann sich regelmäßig fortbilden.",
          "Brandschutz ist Teil ihres Arbeitsauftrags und nicht nur eine Zusatzaufgabe.",
          "Vertretungsregelungen bei Urlaub, Krankheit oder Stellenwechsel sind vorhanden.",
          "Die Person kann Themen gegenüber Geschäftsleitung und Führungskräften verbindlich platzieren.",
        ]}
      />

      <BlogH2>Externe Beauftragung: wann sie die bessere Wahl ist</BlogH2>
      <p>
        Extern ist besonders dann sinnvoll, wenn betriebsintern weder die Zeit noch die notwendige
        Tiefe dauerhaft vorhanden ist. Das betrifft häufig Unternehmen mit mehreren Standorten,
        komplexen Objekten, vielen Mieterschnittstellen oder erhöhtem Abstimmungsbedarf mit Behörden
        und Fachplanern.
      </p>
      <BlogSteps
        items={[
          "Externe Lösung prüfen, wenn intern keine belastbare Zeitreserve vorhanden ist.",
          "Leistungsumfang klar definieren: Begehungen, Dokumente, Übungen, Abstimmungen, Erreichbarkeit.",
          "Interne Ansprechpartner benennen, damit externe Beratung in Entscheidungen überführt wird.",
          "Schnittstellen zu Arbeitssicherheit, Technik und Facility Management verbindlich festlegen.",
        ]}
      />

      <BlogH2>Schnittstelle zu Arbeitssicherheit und Gefährdungsbeurteilung</BlogH2>
      <p>
        Brandschutz ist kein isoliertes Nebenthema. Er greift in Evakuierung, Unterweisung,
        Fremdfirmenkoordination, Elektrosicherheit und den Umgang mit Gefahrstoffen ein. Deshalb
        sollten BSB und{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          Arbeitssicherheit
        </Link>{" "}
        abgestimmt arbeiten, statt parallel voneinander getrennte Vorgaben zu erzeugen.
      </p>
      <BlogGesetzesZitat
        paragraph="GefStoffV § 6"
        quote="Im Rahmen der Gefährdungsbeurteilung hat der Arbeitgeber festzustellen, ob die Beschäftigten Tätigkeiten mit Gefahrstoffen ausüben oder ob bei Tätigkeiten Gefahrstoffe entstehen oder freigesetzt werden können."
        sourceLabel="GefStoffV § 6"
        sourceHref={GESETZ.gefStoffV6}
      />
      <BlogLegalRef>
        Bei Brand- und Explosionsgefährdungen ist die Verzahnung mit der{" "}
        <a href={GESETZ.gefStoffV6} target="_blank" rel="noopener noreferrer" className="font-medium text-nrw-gruen hover:underline">
          GefStoffV
        </a>{" "}
        besonders wichtig. Organisatorischer Brandschutz sollte deshalb immer auch in der
        Gefährdungsbeurteilung abgebildet sein.
      </BlogLegalRef>

      <BlogH2>Entscheidungshilfe für Unternehmen in Köln und NRW</BlogH2>
      <BlogList
        items={[
          "Intern, wenn Kompetenz, Zeit und Vertretung dauerhaft gesichert sind.",
          "Extern, wenn Fachwissen, Neutralität oder Standortabdeckung im Vordergrund stehen.",
          "Hybrid, wenn intern koordiniert und extern spezialisiert beraten wird.",
          "Immer ungeeignet: Benennung nur auf dem Papier ohne reale Aufgabenwahrnehmung.",
        ]}
      />
      <p>
        Viele Unternehmen kombinieren externe Unterstützung im{" "}
        <Link href="/leistungen/brandschutz" className="font-semibold text-nrw-gruen hover:underline">
          Brandschutz
        </Link>{" "}
        mit Schulungen oder regelmäßiger Arbeitsschutzbetreuung, damit Brandschutzorganisation und
        betriebliche Praxis zusammenpassen.
      </p>

      <BlogTakeaway>
        Ob intern oder extern: Ein Brandschutzbeauftragter ist nur dann wirksam, wenn Fachkunde, Zeit,
        Zuständigkeit und Schnittstellen im Unternehmen stimmen. Für viele Betriebe in Köln und NRW
        ist die externe oder hybride Lösung die belastbarere Variante, weil sie Fachwissen,
        Verfügbarkeit und organisatorische Klarheit besser verbindet.
      </BlogTakeaway>

      <BlogRelated
        links={[
          {
            href: "/blog/brandschutzhelfer-ausbildung-pflicht-nrw",
            label: "Brandschutzhelfer in NRW: Ausbildung und Organisation",
          },
          {
            href: "/blog/brandschutzordnung-teil-a-b-c",
            label: "Brandschutzordnung Teil A, B und C",
          },
          {
            href: "/blog/akteure-arbeitsschutz-ueberblick",
            label: "Akteure im Arbeitsschutz: Wer kümmert sich um was?",
          },
        ]}
      />

      <BlogDisclaimer />
    </BlogArticleShell>
  );
}
