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

export function GetraenkeArbeitsplatz() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Muss der Arbeitgeber Getränke bereitstellen? Für viele Betriebe in Köln und NRW ist das vor
        allem im Sommer eine praktische Frage, rechtlich ist sie aber nicht pauschal mit Ja oder Nein
        zu beantworten. Maßgeblich sind Arbeitsumgebung, Temperatur, körperliche Belastung und die
        Ergebnisse der Gefährdungsbeurteilung.
      </BlogLead>
      <BlogLead>
        In normalen Bürobereichen ohne besondere thermische Belastung besteht meist keine allgemeine
        Pflicht zu kostenlosen Getränken. Bei Hitze, Arbeiten im Freien, Baustellen oder körperlich
        belastenden Tätigkeiten wird die Bereitstellung geeigneter Getränke dagegen schnell zu einer
        konkreten Arbeitsschutzmaßnahme.
      </BlogLead>

      <BlogH2>Arbeitsschutzrechtlicher Ausgangspunkt</BlogH2>
      <p>
        Der Arbeitgeber muss Arbeitsbedingungen so gestalten, dass Gesundheitsgefahren möglichst
        vermieden werden. Dazu zählt auch, Belastungen durch hohe Temperaturen zu erkennen und
        geeignete Gegenmaßnahmen festzulegen. Die Getränkeversorgung ist deshalb kein
        Wohlfühl-Benefit, sondern in bestimmten Situationen Teil eines wirksamen Hitzeschutzes.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 3 Abs. 1"
        quote="Der Arbeitgeber ist verpflichtet, die erforderlichen Maßnahmen des Arbeitsschutzes unter Berücksichtigung der Umstände zu treffen, die Sicherheit und Gesundheit der Beschäftigten bei der Arbeit beeinflussen."
        sourceLabel="ArbSchG § 3"
        sourceHref={GESETZ.arbSchG}
      />
      <BlogLegalRef>
        Maßstab ist die Gefährdungsbeurteilung nach{" "}
        <a href={GESETZ.arbSchG5} target="_blank" rel="noopener noreferrer" className="font-medium text-nrw-gruen hover:underline">
          ArbSchG § 5
        </a>
        : Wenn thermische Belastung vorliegt, müssen geeignete Maßnahmen festgelegt und umgesetzt
        werden.
      </BlogLegalRef>

      <BlogH2>Innenräume: ab wann Getränke zur Pflicht werden</BlogH2>
      <p>
        Die Arbeitsstättenverordnung wird bei Raumtemperaturen durch die ASR A3.5 konkretisiert. Sie
        enthält keine pauschale Gratisgetränke-Pflicht für jeden Arbeitsplatz, wohl aber klare
        Schwellenwerte für belastete Innenräume. Gerade in Produktionshallen, Werkstätten oder
        schlecht verschatteten Büroflächen ist das in NRW-Sommern hochrelevant.
      </p>
      <BlogGesetzesZitat
        paragraph="ASR A3.5, Abschnitt 4.4 (5)"
        quote="Bei Lufttemperaturen von mehr als +26 °C sollen, bei mehr als +30 °C müssen geeignete Getränke (z. B. Trinkwasser im Sinne der Trinkwasserverordnung) bereitgestellt werden."
        sourceLabel="ASR A3.5"
        sourceHref={REGELWERK.asrA35}
      />
      <BlogGesetzesZitat
        paragraph="ASR A3.5, Abschnitt 4.4 (2)"
        quote="Bei Überschreitung der Lufttemperatur im Raum von +30 °C müssen wirksame Maßnahmen gemäß Gefährdungsbeurteilung ergriffen werden, welche die Beanspruchung der Beschäftigten reduzieren."
        sourceLabel="ASR A3.5"
        sourceHref={REGELWERK.asrA35}
      />
      <BlogH3>Was das praktisch bedeutet</BlogH3>
      <BlogList
        items={[
          "Bei über 26 °C sind Getränke eine empfohlene, oft naheliegende Maßnahme.",
          "Bei über 30 °C müssen wirksame Maßnahmen umgesetzt werden; Getränke gehören regelmäßig dazu.",
          "Bei schwerer körperlicher Arbeit kann die Pflicht früher greifen als im reinen Büro.",
          "Getränkebereitstellung ersetzt keine technischen oder organisatorischen Maßnahmen wie Verschattung, Lüftung oder Arbeitszeitverlagerung.",
        ]}
      />

      <BlogH2>Baustellen und Arbeiten im Freien</BlogH2>
      <p>
        Für Arbeitsplätze im Freien und auf Baustellen sind die Anforderungen strenger. Beschäftigte
        müssen in der Nähe der Arbeitsplätze Zugang zu Trinkwasser oder anderen alkoholfreien
        Getränken haben. Das betrifft nicht nur eigene Mitarbeitende, sondern in der Praxis auch die
        Abstimmung mit Nachunternehmern und Fremdfirmen.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbStättV Anhang 5.1"
        quote="Beschäftigte müssen sich gegen Witterungseinflüsse geschützt an ihren Arbeitsplätzen aufhalten können und in der Nähe der Arbeitsplätze über Trinkwasser oder ein anderes alkoholfreies Getränk verfügen können."
        sourceLabel="ArbStättV"
        sourceHref={GESETZ.arbStättV}
      />
      <BlogLegalRef>
        Grundlage ist der Anhang zur{" "}
        <a href={GESETZ.arbStättV} target="_blank" rel="noopener noreferrer" className="font-medium text-nrw-gruen hover:underline">
          Arbeitsstättenverordnung
        </a>
        . Auf Baustellen sollte die Organisation zusätzlich mit der{" "}
        <Link href="/leistungen/sigeko" className="font-medium text-nrw-gruen hover:underline">
          SiGeKo-Koordination
        </Link>{" "}
        abgestimmt werden.
      </BlogLegalRef>

      <BlogH2>Welche Getränke und welche Organisation sinnvoll sind</BlogH2>
      <p>
        Das Regelwerk verlangt geeignete Getränke. In der Praxis bedeutet das in erster Linie
        hygienisch bereitgestelltes Trinkwasser oder vergleichbare alkoholfreie Getränke. Entscheidend
        ist weniger die Marke als die verlässliche Verfügbarkeit, die erreichbare Menge und die
        organisatorische Einbindung in den Arbeitsablauf.
      </p>
      <BlogSteps
        items={[
          "Temperatur- und Belastungssituation in der Gefährdungsbeurteilung bewerten.",
          "Geeignete Bereitstellung festlegen, zum Beispiel Wasserspender, Kanister, Kühlboxen oder feste Ausgabepunkte.",
          "Verantwortliche für Nachfüllung, Hygiene und Erreichbarkeit bestimmen.",
          "Beschäftigte zu Hitzesymptomen, Pausen und Trinkverhalten unterweisen.",
        ]}
      />

      <BlogH2>Typische Fehler in Unternehmen</BlogH2>
      <BlogList
        items={[
          "Getränke werden erst organisiert, wenn Beschäftigte sich bereits beschweren.",
          "Die Gefährdungsbeurteilung behandelt Hitze gar nicht oder nur oberflächlich.",
          "Es gibt Wasser, aber keine ausreichende Menge für Schichtbetrieb oder Außeneinsätze.",
          "Fremdfirmen, Leiharbeitnehmer oder Baustellenpersonal sind nicht mitgedacht.",
          "Die Verantwortung zwischen Standortleitung, Bauleitung und Einkauf ist unklar.",
        ]}
      />

      <BlogH2>Empfehlung für Betriebe in Köln und NRW</BlogH2>
      <p>
        Unternehmen sollten die Getränkeversorgung nicht isoliert betrachten, sondern als Baustein
        eines Hitzeschutzkonzepts. Dazu gehören auch Raumlüftung, Sonnenschutz, angepasste
        Arbeitszeiten, zusätzliche Pausen und eine klare Kommunikation an Führungskräfte. Für
        Baustellen ist zusätzlich eine saubere Abstimmung zwischen Bauherr, Bauleitung und
        ausführenden Unternehmen sinnvoll.
      </p>
      <p>
        Wenn Sie Hitze- und Sommerregelungen belastbar aufstellen möchten, unterstützen wir Sie in
        der{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          Arbeitssicherheit
        </Link>{" "}
        sowie bei Baustellen in der{" "}
        <Link href="/leistungen/sigeko" className="font-semibold text-nrw-gruen hover:underline">
          Sicherheits- und Gesundheitsschutzkoordination
        </Link>
        .
      </p>

      <BlogTakeaway>
        Getränke sind nicht immer Pflicht, bei Hitze, körperlicher Belastung sowie Arbeiten im Freien
        oder auf Baustellen aber oft eine klare Arbeitsschutzmaßnahme. Rechtssicher wird die
        Versorgung erst dann, wenn sie aus der Gefährdungsbeurteilung abgeleitet, organisatorisch
        geregelt und für alle betroffenen Beschäftigten verlässlich umgesetzt wird.
      </BlogTakeaway>

      <BlogRelated
        links={[
          {
            href: "/blog/hitzearbeit-schutz-massnahmen-nrw",
            label: "Hitzearbeit in NRW: Schutzmaßnahmen ab +26 °C und +30 °C",
          },
          {
            href: "/blog/sigeko-und-betrieb-schnittstelle",
            label: "SiGeKo und Arbeitssicherheit im Betrieb",
          },
          {
            href: "/blog/gefaehrdungsbeurteilung-erstellen-schritt-fuer-schritt",
            label: "Gefährdungsbeurteilung erstellen: Schritt für Schritt",
          },
        ]}
      />

      <BlogDisclaimer />
    </BlogArticleShell>
  );
}
