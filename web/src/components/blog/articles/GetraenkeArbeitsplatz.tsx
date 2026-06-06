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

export function GetraenkeArbeitsplatz() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Trinkwasser am Arbeitsplatz ist mehr als Komfort – bei Hitze, körperlicher Belastung und auf
        Baustellen kann die Bereitstellung von Getränken eine konkrete Arbeitsschutzpflicht sein.
      </BlogLead>

      <BlogH2>Ausgangspunkt: Fürsorgepflicht des Arbeitgebers</BlogH2>
      <p>
        Der Arbeitgeber muss Beschäftigte vor Gesundheitsgefahren am Arbeitsplatz schützen. Dazu
        gehört auch, thermische Belastungen zu erkennen und geeignete Maßnahmen zu treffen –
        einschließlich der Versorgung mit Getränken, wenn die Arbeitsbedingungen es erfordern.
      </p>

      <BlogH2>Büro und Innenräume: abhängig von der Temperatur</BlogH2>
      <p>
        Unter normalen Bedingungen – moderate Temperaturen, überwiegend sitzende oder leichte
        Bürotätigkeit – besteht keine allgemeine Pflicht, kostenfreie Getränke bereitzustellen.
        Beschäftigte versorgen sich in der Regel selbst.
      </p>
      <p>
        Anders bei thermischer Belastung: Die Technische Regel ASR A3.5 (Raumtemperatur) konkretisiert
        die Arbeitsstättenverordnung und nennt klare Schwellenwerte für die Lufttemperatur im Raum:
      </p>
      <BlogGesetzesZitat
        paragraph="ASR A3.5, Abschnitt 4.4 (5)"
        quote="Bei Lufttemperaturen von mehr als +26 °C sollen, bei mehr als +30 °C müssen geeignete Getränke (z. B. Trinkwasser im Sinne der Trinkwasserverordnung) bereitgestellt werden."
        source="ASR-A3-5.pdf (Gesetze-Vorschriften)"
      />
      <BlogGesetzesZitat
        paragraph="ASR A3.5, Abschnitt 4.4 (2)"
        quote="Bei Überschreitung der Lufttemperatur im Raum von +30 °C müssen wirksame Maßnahmen gemäß Gefährdungsbeurteilung ergriffen werden, welche die Beanspruchung der Beschäftigten reduzieren. Dabei gehen technische und organisatorische gegenüber personenbezogenen Maßnahmen vor."
        source="ASR-A3-5.pdf (Gesetze-Vorschriften)"
      />

      <BlogH2>Arbeiten im Freien und auf Baustellen: strenger</BlogH2>
      <p>
        Auf Baustellen und bei Arbeiten im Freien gelten verschärfte Anforderungen. Hier muss der
        Arbeitgeber jederzeit für ausreichende Trinkwasser- oder sonstige nicht-alkoholische
        Getränkeversorgung sorgen – unabhängig von der aktuellen Außentemperatur. Das betrifft
        viele Bauvorhaben in Köln und NRW, bei denen wir parallel als SiGeKo tätig sind.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbStättV, Anhang (Auszug)"
        quote="… in der Nähe der Arbeitsplätze über Trinkwasser oder ein anderes alkoholfreies Getränk verfügen können."
        source="10_ArbStättV.pdf (Gesetze-Vorschriften)"
      />
      <BlogLegalRef>
        ArbStättV Anhang Nr. 5.1 – Arbeitsplätze im Freien und auf Baustellen: Waschgelegenheiten und
        Versorgung mit Trinkwasser bzw. alkoholfreien Getränken.
      </BlogLegalRef>

      <BlogH3>Hitzeaktionspläne in der Praxis</BlogH3>
      <p>
        In Hitzewellen empfiehlt sich ein betrieblicher Hitzeaktionsplan: Pausenregelungen,
        Schattenplätze, leichtere Arbeiten zu Tageszeiten, Getränkebereitstellung und Sensibilisierung
        der Führungskräfte. Die Gefährdungsbeurteilung sollte thermische Belastungen ausdrücklich
        berücksichtigen – insbesondere in Produktion, Logistik, Außendienst und auf Baustellen.
      </p>

      <BlogH2>Typische Fehler in Betrieben</BlogH2>
      <BlogList
        items={[
          "Nur im Sommer an Getränke denken, nicht in beheizten Produktionshallen",
          "Keine dokumentierte Regelung in der Gefährdungsbeurteilung",
          "Wasserflaschen vorhanden, aber nicht ausreichend oder nicht hygienisch bereitgestellt",
          "Leiharbeitnehmer und Subunternehmer auf Baustellen nicht einbezogen",
        ]}
      />

      <BlogTakeaway>
        Getränke sind nicht immer Pflicht – aber bei Hitze und auf Baustellen sehr wohl. Prüfen Sie
        Ihre Gefährdungsbeurteilung und Ihre Baustellenorganisation. Wir unterstützen Stammbetriebe
        und Bauvorhaben in NRW bei{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          Arbeitssicherheit
        </Link>{" "}
        und{" "}
        <Link href="/leistungen/sigeko" className="font-semibold text-nrw-gruen hover:underline">
          SiGeKo
        </Link>
        .
      </BlogTakeaway>

      <BlogDisclaimer />
    </BlogArticleShell>
  );
}
