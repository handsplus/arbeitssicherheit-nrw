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

export function LadestationGarage() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Dürfen Unternehmen in einer Garage oder Tiefgarage ohne Weiteres eine Wallbox oder
        Ladestation für E-Fahrzeuge installieren? In Köln und NRW begegnet uns diese Frage häufig bei
        Verwaltungsgebäuden, Wohn- und Gewerbemischobjekten, Fuhrparks sowie Betriebsstandorten mit
        Tiefgarage. Unsicherheiten entstehen vor allem an der Schnittstelle von Bauordnung,
        Brandschutz und Elektrosicherheit.
      </BlogLead>
      <BlogLead>
        Die kurze Orientierung lautet: Eine Ladestation ist rechtlich nicht wie eine klassische
        Tankstelle zu behandeln. Trotzdem ist die Installation kein reines Komfortthema. Gerade in
        Garagen müssen Planung, Ausführung, Prüforganisation und betriebliche Regelungen sauber
        aufeinander abgestimmt sein.
      </BlogLead>

      <BlogH2>Genehmigungspflicht: keine Gleichsetzung mit Tankstellen</BlogH2>
      <p>
        Immer wieder wird angenommen, eine Wallbox in der Garage sei genehmigungsrechtlich ähnlich zu
        behandeln wie eine Anlage zum Betanken mit Kraftstoffen. Diese Gleichsetzung greift zu kurz.
        Die Betriebssicherheitsverordnung nennt für Erlaubnispflichten bestimmte überwachungsbedürftige
        Anlagen, darunter ortsfeste Tankstellen für entzündbare Flüssigkeiten. Elektrische
        Ladeeinrichtungen fallen in diese Kategorie regelmäßig nicht.
      </p>
      <BlogGesetzesZitat
        paragraph="BetrSichV § 18 Abs. 1 Nr. 6"
        quote="Die Errichtung und der Betrieb … folgender Anlagen bedürfen der Erlaubnis der zuständigen Behörde: … ortsfeste Anlagen für die Betankung von Land-, Wasser- und Luftfahrzeugen mit entzündbaren Flüssigkeiten."
        sourceLabel="BetrSichV"
        sourceHref={GESETZ.betrSichV}
      />
      <BlogLegalRef>
        Die Vorschrift zur Erlaubnispflicht in der{" "}
        <a href={GESETZ.betrSichV} target="_blank" rel="noopener noreferrer" className="font-medium text-nrw-gruen hover:underline">
          BetrSichV
        </a>{" "}
        betrifft typischerweise Tankstellen mit entzündbaren Flüssigkeiten, nicht die übliche
        elektrische Ladeinfrastruktur in Garagen.
      </BlogLegalRef>

      <BlogH2>Bauordnungsrecht in NRW: Garage bleibt Garage</BlogH2>
      <p>
        Nach der Landesbauordnung NRW ist die Stromzuleitung zur Aufladung von Batterien in der
        Garagennutzung ausdrücklich mitgedacht. Das spricht gegen die verbreitete Annahme, dass schon
        die Installation einer einzelnen Wallbox automatisch eine Nutzungsänderung auslöst. Bei
        Standardfällen ist das regelmäßig nicht der Fall.
      </p>
      <BlogGesetzesZitat
        paragraph="BauO NRW"
        quote="Garagen sind Gebäude oder Gebäudeteile zum Abstellen von Kraftfahrzeugen. Dazu gehören Stellplätze und Garagen mit und ohne einer Stromzuleitung für die Aufladung von Batterien."
        sourceLabel="BauO NRW"
        sourceHref={GESETZ.bauONrw}
      />
      <BlogH3>Wann eine Einzelfallprüfung trotzdem sinnvoll ist</BlogH3>
      <BlogList
        items={[
          "bei Sonderbauten oder genehmigungsrechtlich sensiblen Nutzungen",
          "bei größeren Ladeparks mit erheblichem zusätzlichem Leistungsbedarf",
          "bei baulichen Änderungen an Brandabschnitten, Kabeltrassen oder Technikräumen",
          "wenn behördliche Auflagen, Versicherervorgaben oder Brandschutzkonzepte betroffen sind",
        ]}
      />

      <BlogH2>Brandschutz: nicht nur auf die Wallbox schauen</BlogH2>
      <p>
        Der brandschutzfachliche Fokus liegt nicht ausschließlich auf der Ladeeinrichtung. Entscheidend
        sind die Gesamtsituation in der Garage, die Qualität der elektrischen Ausführung, die
        Leitungsführung, die Zugänglichkeit für Einsatzkräfte und die betriebliche Organisation. Bei
        E-Fahrzeugen kommt hinzu, dass Ereignisse an Hochvoltbatterien besondere Einsatzszenarien
        auslösen können.
      </p>
      <BlogH3>Praxisfragen im vorbeugenden Brandschutz</BlogH3>
      <BlogList
        items={[
          "Passt die Leitungsführung zu bestehenden Brandabschnitten und Abschottungen?",
          "Sind Ladebereiche, Fluchtwege und Feuerwehrzugänge konfliktfrei organisiert?",
          "Gibt es Vorgaben zu beschädigten Fahrzeugen, Störungen oder Abschaltungen?",
          "Sind Brandschutzordnung, Unterweisung und Meldestruktur auf die Ladeinfrastruktur abgestimmt?",
        ]}
      />
      <p>
        Bei größeren Projekten ist die Abstimmung mit{" "}
        <Link href="/leistungen/brandschutz" className="font-semibold text-nrw-gruen hover:underline">
          Brandschutz
        </Link>{" "}
        und Facility Management sinnvoll, damit technische Planung und organisatorische Maßnahmen
        zusammenpassen.
      </p>

      <BlogH2>Elektrosicherheit ist der eigentliche Schlüssel</BlogH2>
      <p>
        Auch wenn meist keine besondere Erlaubnis wie bei Tankstellen erforderlich ist, bleibt die
        elektrische Anlage voll prüf- und betreiberpflichtig. Einspeisung, Lastmanagement,
        Schutzkonzept, Abschaltmöglichkeiten und wiederkehrende Prüfungen müssen fachgerecht
        organisiert sein. Gerade bei mehreren Ladepunkten oder in älteren Bestandsgebäuden ist eine
        strukturierte Prüfung unverzichtbar.
      </p>
      <BlogLegalRef>
        Für Betreiber ist die Schnittstelle zur{" "}
        <Link href="/leistungen/elektrosicherheit" className="font-medium text-nrw-gruen hover:underline">
          Elektrosicherheit
        </Link>{" "}
        zentral: Planung, Prüfung und Verantwortlichkeiten sollten früh geklärt werden.
      </BlogLegalRef>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 3 Abs. 1"
        quote="Der Arbeitgeber ist verpflichtet, die erforderlichen Maßnahmen des Arbeitsschutzes unter Berücksichtigung der Umstände zu treffen, die Sicherheit und Gesundheit der Beschäftigten bei der Arbeit beeinflussen."
        sourceLabel="ArbSchG"
        sourceHref={GESETZ.arbSchG}
      />

      <BlogH2>Empfohlener Ablauf für Unternehmen in Köln und NRW</BlogH2>
      <BlogSteps
        items={[
          "Nutzung und Anzahl der Ladepunkte definieren: Dienstwagen, Mitarbeitende, Besucher oder Fuhrpark.",
          "Bauliche und elektrische Bestandssituation prüfen, insbesondere Netzanschluss und Leitungswege.",
          "Brandschutz, Feuerwehrbelange und organisatorische Regeln früh mitdenken.",
          "Installation, Prüfungen und Betriebsanweisungen als Gesamtprozess dokumentieren.",
        ]}
      />

      <BlogH2>Typische Fehlannahmen in der Praxis</BlogH2>
      <BlogList
        items={[
          "Wallbox gleich Tankstelle: Diese Gleichsetzung führt häufig zu unnötiger Verunsicherung.",
          "Nur der Elektriker ist zuständig: Tatsächlich sind auch Betreiberorganisation und Brandschutz betroffen.",
          "Nach der Montage ist alles erledigt: Prüfungen, Unterweisung und Störungsprozesse werden oft vergessen.",
          "Tiefgarage bedeutet automatisch Verbot: So pauschal ist die Rechtslage nicht.",
        ]}
      />

      <BlogTakeaway>
        Eine Ladestation in der Garage ist in NRW regelmäßig nicht wie eine genehmigungspflichtige
        Tankstelle zu behandeln und führt typischerweise nicht automatisch zu einer Nutzungsänderung.
        Entscheidend sind vielmehr eine fachgerechte elektrische Planung, ein abgestimmtes
        Brandschutzkonzept und klare Betreiberprozesse. Genau an dieser Schnittstelle unterstützen wir
        Unternehmen mit Beratung zu Elektrosicherheit und Brandschutz.
      </BlogTakeaway>

      <BlogRelated
        links={[
          {
            href: "/blog/elektropruefung-dguv-vorschrift-3-fristen",
            label: "Elektroprüfung nach DGUV V3: Fristen und Pflichten",
          },
          {
            href: "/blog/brandschutzbeauftragter-nrw-intern-extern",
            label: "Brandschutzbeauftragter in NRW: intern oder extern?",
          },
          {
            href: "/blog/betriebsbegehung-was-wird-geprueft",
            label: "Betriebsbegehung: Was wird geprüft?",
          },
        ]}
      />

      <BlogDisclaimer />
    </BlogArticleShell>
  );
}
