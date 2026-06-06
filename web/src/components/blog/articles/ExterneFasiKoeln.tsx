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

export function ExterneFasiKoeln() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Eine externe Fachkraft für Arbeitssicherheit ist für viele Unternehmen in Köln die
        wirtschaftlichste und fachlich sinnvollste Lösung. Das gilt vor allem für kleine und mittlere
        Betriebe, wachsende Organisationen, mehrere Standorte oder Unternehmen, die keine eigene
        sicherheitstechnische Kompetenz dauerhaft im Haus vorhalten möchten.
      </BlogLead>
      <BlogLead>
        Trotzdem sollte die Auswahl nicht allein nach Stundensatz erfolgen. Eine gute externe FaSi
        bringt nicht nur formale Bestellung und Protokolle mit, sondern Struktur, Branchenverständnis,
        klare Prioritäten und eine Zusammenarbeit, die Führungskräfte wirklich entlastet.
      </BlogLead>

      <BlogH2>Wann eine FaSi bestellt werden muss</BlogH2>
      <p>
        Arbeitgeber müssen Fachkräfte für Arbeitssicherheit und Betriebsärzte bestellen, soweit dies
        nach Betriebsart, Beschäftigtenzahl und Gefährdungslage erforderlich ist. In der Praxis ist
        das für Unternehmen kein optionales Beratungsthema, sondern eine gesetzlich verankerte
        Organisationspflicht.
      </p>
      <BlogGesetzesZitat
        paragraph="ASiG § 5"
        quote="Der Arbeitgeber hat Fachkräfte für Arbeitssicherheit schriftlich zu bestellen und ihnen die in § 6 genannten Aufgaben zu übertragen, soweit dies erforderlich ist."
        sourceLabel="ASiG § 5"
        sourceHref={GESETZ.asiG5}
      />
      <BlogGesetzesZitat
        paragraph="DGUV Vorschrift 2"
        quote="Der Unternehmer hat Betriebsärztinnen oder Betriebsärzte sowie Fachkräfte für Arbeitssicherheit zur Wahrnehmung der in den §§ 3 und 6 Arbeitssicherheitsgesetz bezeichneten Aufgaben schriftlich nach Maßgabe der nachfolgenden Bestimmungen zu bestellen."
        sourceLabel="DGUV Vorschrift 2"
        sourceHref={REGELWERK.dguv2}
      />
      <BlogLegalRef>
        Maßgeblich sind das{" "}
        <a href={GESETZ.asiG} target="_blank" rel="noopener noreferrer" className="font-medium text-nrw-gruen hover:underline">
          Arbeitssicherheitsgesetz
        </a>{" "}
        und die Betreuungslogik der{" "}
        <a href={REGELWERK.dguv2} target="_blank" rel="noopener noreferrer" className="font-medium text-nrw-gruen hover:underline">
          DGUV Vorschrift 2
        </a>
        .
      </BlogLegalRef>

      <BlogH2>Was eine gute externe FaSi leisten sollte</BlogH2>
      <p>
        Der Kern der externen Betreuung liegt nicht in einzelnen Begehungen, sondern in einer
        wirksamen, kontinuierlichen Beratung des Arbeitgebers. Dazu gehören Gefährdungsbeurteilung,
        Maßnahmenverfolgung, Unterweisungen, Beschaffungsberatung, Unfallauswertung und die
        Mitwirkung in der betrieblichen Organisation.
      </p>
      <BlogGesetzesZitat
        paragraph="ASiG § 6"
        quote="Die Fachkräfte für Arbeitssicherheit haben die Aufgabe, den Arbeitgeber beim Arbeitsschutz und bei der Unfallverhütung in allen Fragen der Arbeitssicherheit einschließlich der menschengerechten Gestaltung der Arbeit zu unterstützen."
        sourceLabel="ASiG § 6"
        sourceHref={GESETZ.asiG6}
      />
      <BlogH3>Woran man Qualität erkennt</BlogH3>
      <BlogList
        items={[
          "verständliche Priorisierung statt überladener Maßnahmenlisten",
          "solide Branchenkenntnis für Büro, Logistik, Handwerk, Bau oder Produktion",
          "kurze Reaktionswege für Begehungen, Unterweisungen und Rückfragen in Köln und NRW",
          "saubere Dokumentation mit erkennbarem Praxisbezug statt reiner Formularabgabe",
          "kontinuierliche Ansprechpartner statt ständig wechselnder Personen",
        ]}
      />

      <BlogH2>Grundbetreuung und betriebsspezifische Betreuung unterscheiden</BlogH2>
      <p>
        Seriöse Angebote trennen die gesetzliche Grundbetreuung von der betriebsspezifischen
        Betreuung. Das ist wichtig, weil Unternehmen sonst Leistungen schlecht vergleichen können.
        Gerade im Mittelstand werden Angebote oft unterschätzt, die formal günstig wirken, aber
        wesentliche Bausteine nur gegen Aufpreis enthalten.
      </p>
      <BlogLegalRef>
        Die Unterscheidung zwischen Grund- und betriebsspezifischer Betreuung ergibt sich aus der{" "}
        <a href={REGELWERK.dguv2} target="_blank" rel="noopener noreferrer" className="font-medium text-nrw-gruen hover:underline">
          DGUV Vorschrift 2
        </a>
        . Sie bestimmt, welche Einsatzzeiten und Zusatzanlässe berücksichtigt werden müssen.
      </BlogLegalRef>

      <BlogH2>Darauf sollten Unternehmen bei der Auswahl achten</BlogH2>
      <BlogSteps
        items={[
          "Prüfen, ob der Anbieter Erfahrung mit Ihrer Branche und Ihrer Organisationsgröße hat.",
          "Klare Leistungsbeschreibung verlangen: Begehungen, ASA, Unterweisungen, Dokumentation, Beratung.",
          "Rollen mit Betriebsarzt, Führungskräften und internen Beauftragten sauber abstimmen.",
          "Angebote nicht nur nach Preis, sondern nach Reaktionsfähigkeit und Umsetzungsqualität vergleichen.",
        ]}
      />

      <BlogH2>Typische Fehler bei der Beauftragung</BlogH2>
      <BlogList
        items={[
          "FaSi erst bestellen, wenn Behörde, BG oder Auftraggeber danach fragt",
          "Angebot annehmen, ohne Bestellung, Ansprechpartner und Zuständigkeiten intern festzulegen",
          "Nur Dokumente erwarten, aber keine regelmäßige fachliche Begleitung einplanen",
          "Betriebsarzt, Brandschutz und Schulungen nicht in ein gemeinsames System integrieren",
          "Standorte außerhalb des Hauptsitzes organisatorisch nicht mitbetreuen",
        ]}
      />

      <BlogH2>Warum regionale Nähe in Köln oft ein Vorteil ist</BlogH2>
      <p>
        Regionale Erreichbarkeit ist kein Muss, aber oft ein echter Qualitätsfaktor. Wer Betriebe in
        Köln, im Rheinland oder allgemein in NRW laufend betreut, kann kurzfristiger zu Begehungen,
        Einweisungen oder Abstimmungsterminen kommen und kennt typische Konstellationen regionaler
        Auftragsstrukturen. Das ist gerade bei mehreren Betriebsstätten oder häufigen Veränderungen
        spürbar.
      </p>
      <p>
        Viele Kunden kombinieren die externe FaSi daher mit weiteren Leistungen wie{" "}
        <Link href="/leistungen/schulungen" className="font-semibold text-nrw-gruen hover:underline">
          Schulungen
        </Link>
        ,{" "}
        <Link href="/leistungen/brandschutz" className="font-semibold text-nrw-gruen hover:underline">
          Brandschutz
        </Link>{" "}
        oder Managementunterstützung.
      </p>

      <BlogTakeaway>
        Eine gute externe FaSi erkennt man nicht an der Zahl der Vorlagen, sondern an wirksamer
        Betreuung: fachlich belastbar, organisatorisch klar, regional erreichbar und auf Ihren Betrieb
        zugeschnitten. Wenn Sie in Köln oder NRW eine externe Fachkraft für Arbeitssicherheit
        auswählen oder Ihre bestehende Betreuung verbessern möchten, unterstützen wir Sie mit einer
        strukturierten, praxisnahen Betreuung.
      </BlogTakeaway>

      <BlogRelated
        links={[
          {
            href: "/blog/fasi-bestellung-pflicht-fristen",
            label: "FaSi bestellen: Pflicht, Fristen und Folgen",
          },
          {
            href: "/blog/akteure-arbeitsschutz-ueberblick",
            label: "Akteure im Arbeitsschutz: Wer kümmert sich um was?",
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
