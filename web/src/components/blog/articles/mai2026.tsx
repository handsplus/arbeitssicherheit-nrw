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

export function ElektropruefungDguvV3() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Die Elektroprüfung nach DGUV Vorschrift 3 ist kein isolierter Techniktermin, sondern Teil der
        betrieblichen Organisationspflicht. Arbeitgeber müssen sicherstellen, dass elektrische Anlagen und
        Betriebsmittel vor der Verwendung und in festgelegten Abständen geprüft werden.
      </BlogLead>
      <BlogLead>
        In der Praxis entstehen die meisten Lücken nicht beim Messen selbst, sondern bei Zuständigkeiten,
        Fristenlogik, Inventarisierung und Dokumentation. Wer das sauber aufsetzt, reduziert Ausfälle,
        Haftungsrisiken und Diskussionen bei BG- oder Behördenbegehungen.
      </BlogLead>

      <BlogH2>Warum die DGUV V3 organisatorisch so wichtig ist</BlogH2>
      <p>
        Elektrische Gefährdungen betreffen nahezu jeden Betrieb: Büroarbeitsplätze, Ladegeräte, Maschinen,
        Verlängerungsleitungen, Produktionsanlagen, Baustromverteiler oder Werkstattgeräte. Deshalb reicht es
        nicht, nur einzelne Prüfungen zu beauftragen. Notwendig ist ein belastbares Prüfsystem mit
        Verantwortlichkeiten, Fristen, Gerätebestand und nachvollziehbaren Ergebnissen.
      </p>
      <BlogGesetzesZitat
        paragraph="DGUV Vorschrift 3 § 3 Abs. 1"
        quote="Der Unternehmer hat dafür zu sorgen, dass die elektrischen Anlagen und Betriebsmittel auf ihren ordnungsgemäßen Zustand geprüft werden."
        sourceLabel="DGUV Vorschrift 3"
        sourceHref={REGELWERK.dguv3}
      />
      <BlogGesetzesZitat
        paragraph="ArbSchG § 5 Abs. 1"
        quote="Der Arbeitgeber hat durch eine Beurteilung der für die Beschäftigten mit ihrer Arbeit verbundenen Gefährdung zu ermitteln, welche Maßnahmen des Arbeitsschutzes erforderlich sind."
        sourceLabel="Arbeitsschutzgesetz"
        sourceHref={GESETZ.arbSchG5}
      />

      <BlogH2>Was tatsächlich geprüft werden muss</BlogH2>
      <p>
        Prüfpflichtig sind nicht nur große Anlagen, sondern auch viele unscheinbare Betriebsmittel. Dazu
        gehören ortsveränderliche Geräte wie Monitore, Kaffeemaschinen, Bohrmaschinen, Netzteile, Ladegeräte
        und Verlängerungsleitungen ebenso wie ortsfeste Maschinen, Verteiler, Steckdosenstromkreise oder
        fest angeschlossene Produktionsanlagen.
      </p>
      <BlogList
        items={[
          "ortsveränderliche elektrische Betriebsmittel im Büro, Lager, Fahrzeug oder auf der Baustelle",
          "ortsfeste elektrische Betriebsmittel und Anlagen einschließlich Unterverteilungen und Maschinen",
          "Betriebsmittel nach Reparaturen, Änderungen oder außergewöhnlichen Ereignissen",
          "kritische Infrastruktur mit erhöhter Beanspruchung, Feuchtigkeit, Staub, Hitze oder mechanischer Belastung",
        ]}
      />

      <BlogH2>Wie Fristen wirklich festgelegt werden</BlogH2>
      <p>
        Es gibt in der Praxis typische Orientierungswerte, aber keine belastbare Rechtsorganisation ohne
        Gefährdungsbeurteilung. Fristen hängen davon ab, wie stark ein Betriebsmittel beansprucht wird, in
        welcher Umgebung es eingesetzt wird, wie hoch die Fehlerquote ist und ob sich aus den letzten Prüfungen
        ein Anpassungsbedarf ergibt.
      </p>
      <BlogGesetzesZitat
        paragraph="DGUV Vorschrift 3 § 5 Abs. 1"
        quote="Der Unternehmer hat dafür zu sorgen, dass die elektrischen Anlagen und Betriebsmittel auf ihren ordnungsgemäßen Zustand geprüft werden: 1. vor der ersten Inbetriebnahme und nach einer Änderung oder Instandsetzung vor der Wiederinbetriebnahme durch eine Elektrofachkraft oder unter Leitung und Aufsicht einer Elektrofachkraft und 2. in bestimmten Zeitabständen."
        sourceLabel="DGUV Vorschrift 3"
        sourceHref={REGELWERK.dguv3}
      />
      <p>
        Typische Fehlsteuerung: Alle Geräte bekommen pauschal dieselbe Frist. Das ist bequem, aber fachlich
        oft nicht sauber. Ein Gerät in der trockenen Verwaltung ist anders zu bewerten als ein Werkzeug im
        Baustellenbetrieb oder eine Maschine in staubiger, feuchter Umgebung.
      </p>

      <BlogH2>Wer prüfen darf und wie FaSi, VEFK und Führung zusammenarbeiten</BlogH2>
      <p>
        Die eigentliche Prüfung ist ein elektrotechnisches Thema. Die Arbeitgeberverantwortung bleibt aber eine
        Organisationsaufgabe. In vielen Betrieben arbeiten deshalb Führungskraft, Elektrofachkraft, externe
        Prüforganisation, VEFK und Fachkraft für Arbeitssicherheit zusammen: Die Elektroseite definiert das
        fachliche Prüfregime, die Arbeitsschutzorganisation sorgt für Bestandsklarheit, Fristenverfolgung,
        Unterweisung und Maßnahmenumsetzung.
      </p>
      <BlogLegalRef>
        Rechtsgrundlage in der Praxis sind vor allem DGUV Vorschrift 3, die Gefährdungsbeurteilung nach{" "}
        <a
          href={GESETZ.arbSchG5}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-nrw-gruen hover:underline"
        >
          ArbSchG § 5
        </a>{" "}
        sowie die sichere Verwendung von Arbeitsmitteln nach{" "}
        <a
          href={GESETZ.betrSichV}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-nrw-gruen hover:underline"
        >
          BetrSichV
        </a>
        . Die FaSi ersetzt keine Elektrofachkraft, ist aber wichtig für System, Nachweis und Schnittstellen.
      </BlogLegalRef>

      <BlogH2>Welche Dokumentation im Betrieb vorliegen sollte</BlogH2>
      <p>
        Gute Prüfdokumentation besteht nicht nur aus einem Prüfetikett. Für jedes relevante Betriebsmittel oder
        jede Anlage sollten Identität, Standort, Prüfanlass, Ergebnis, Mängel, Frist und Verantwortliche
        nachvollziehbar sein. So lassen sich Wiederholungsprüfungen planen und Mängel wirksam nachverfolgen.
      </p>
      <BlogList
        items={[
          "aktuelles Inventar der prüfpflichtigen elektrischen Anlagen und Betriebsmittel",
          "Prüfprotokolle mit Messwerten, Sichtprüfung, Bewertung und nächstem Prüftermin",
          "Maßnahmenliste für festgestellte Mängel mit Frist und Verantwortlichkeit",
          "klare Regelung für Neubeschaffungen, Reparaturen, Aussonderung und Standortwechsel",
        ]}
      />

      <BlogH2>Typische Fehler bei Audits und Begehungen</BlogH2>
      <p>
        Häufige Beanstandungen sind fehlende Inventarisierung, überfällige Fristen, unklare Prüfumfänge,
        Geräte ohne Zuordnung, nicht geschlossene Mängel oder die Annahme, dass ein externer Dienstleister die
        komplette Betreiberpflicht automatisch übernimmt. Entscheidend ist immer, ob der Arbeitgeber die Prüfung
        wirksam organisiert hat.
      </p>
      <p>
        Besonders kritisch wird es, wenn defekte Geräte trotz negativer Prüfung weiter genutzt werden oder wenn
        es keine Schnittstelle zwischen Instandhaltung, Einkauf, IT und Arbeitsschutz gibt.
      </p>

      <BlogTakeaway>
        Eine DGUV-V3-Prüfung ist erst dann belastbar, wenn Inventar, Fristen, fachliche Prüfung und
        Maßnahmenverfolgung zusammenpassen. Wir unterstützen mit{" "}
        <Link href="/leistungen/elektrosicherheit" className="font-semibold text-nrw-gruen hover:underline">
          Elektrosicherheit & VEFK
        </Link>{" "}
        sowie{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          externer FaSi-Betreuung
        </Link>{" "}
        bei der rechtsfesten Organisation.
      </BlogTakeaway>

      <BlogRelated
        links={[
          {
            href: "/blog/betriebsbegehung-was-wird-geprueft",
            label: "Betriebsbegehung: Was wird geprüft und wie bereiten Sie sich vor?",
          },
          {
            href: "/blog/unterweisung-arbeitssicherheit-pflichtinhalte",
            label: "Unterweisung Arbeitssicherheit: Was muss wirklich drinstehen?",
          },
          {
            href: "/blog/fasi-bestellung-pflicht-fristen",
            label: "FaSi bestellen: Pflicht, Fristen und Folgen bei Versäumnis",
          },
        ]}
      />

      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function HomeofficeGefaehrdungsbeurteilung() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Homeoffice und mobiles Arbeiten ändern den Arbeitsort, aber nicht die Arbeitgeberpflichten. Auch
        außerhalb des Betriebs bleiben Gefährdungsbeurteilung, Unterweisung, geeignete Arbeitsmittel und eine
        funktionierende Arbeitsorganisation Pflicht.
      </BlogLead>
      <BlogLead>
        Die größte Herausforderung liegt darin, den Einflussbereich realistisch zu definieren: nicht jede
        private Wohnsituation ist steuerbar, sehr wohl aber Arbeitsmittel, Kommunikationsregeln, Erreichbarkeit,
        ergonomische Mindeststandards und psychische Belastungsfaktoren.
      </BlogLead>

      <BlogH2>Warum Homeoffice in die Gefährdungsbeurteilung gehört</BlogH2>
      <p>
        Viele Unternehmen behandeln Homeoffice noch als Zusatzvereinbarung der Personalabteilung. Arbeitsschutzrechtlich
        genügt das nicht. Sobald Beschäftigte regelmäßig von zu Hause oder mobil arbeiten, müssen die damit
        verbundenen Gefährdungen bewertet und die erforderlichen Schutzmaßnahmen festgelegt werden.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 5 Abs. 1"
        quote="Der Arbeitgeber hat durch eine Beurteilung der für die Beschäftigten mit ihrer Arbeit verbundenen Gefährdung zu ermitteln, welche Maßnahmen des Arbeitsschutzes erforderlich sind."
        sourceLabel="Arbeitsschutzgesetz"
        sourceHref={GESETZ.arbSchG5}
      />
      <BlogGesetzesZitat
        paragraph="ArbSchG § 5 Abs. 3 Nr. 6"
        quote="Eine Gefährdung kann sich insbesondere ergeben durch psychische Belastungen bei der Arbeit."
        sourceLabel="Arbeitsschutzgesetz"
        sourceHref={GESETZ.arbSchG5}
      />

      <BlogH2>Welche Themen fachlich bewertet werden müssen</BlogH2>
      <p>
        Der Schwerpunkt liegt nicht nur auf Tisch und Stuhl. Eine gute Homeoffice-Gefährdungsbeurteilung
        betrachtet Arbeitsmittel, Arbeitsumgebung, Arbeitszeitgestaltung, Kommunikationsprozesse, Führung,
        Alleinarbeitstendenzen und Störungen im Wohnumfeld in einem Gesamtsystem.
      </p>
      <BlogList
        items={[
          "Bildschirmarbeitsplatz mit Monitor, Eingabegeräten, Beleuchtung und ergonomischer Grundausstattung",
          "Arbeitszeit, Pausen, Erreichbarkeit, Überstunden und Trennung von Arbeit und Privatleben",
          "Kommunikation mit Führungskraft und Team, Vertretung und Informationsfluss",
          "Datenschutz, sichere Arbeitsmittel und klare Meldewege bei Störungen oder Vorfällen",
          "psychische Belastungen durch Isolation, hoher Zeitdruck, ständige digitale Erreichbarkeit oder Doppelbelastungen",
        ]}
      />

      <BlogH2>Telearbeit, hybrides Arbeiten und mobiles Arbeiten unterscheiden</BlogH2>
      <p>
        In der Praxis werden diese Begriffe oft vermischt. Für die Gefährdungsbeurteilung ist die Unterscheidung
        wichtig, weil der Arbeitgeber bei fest eingerichteten Telearbeitsplätzen regelmäßig mehr Einfluss auf
        Ausstattung und Gestaltung hat als beim vollständig mobilen Arbeiten. Trotzdem bleibt auch bei mobilen
        Modellen eine organisatorische Beurteilung erforderlich.
      </p>
      <BlogLegalRef>
        Für fest eingerichtete Bildschirmarbeitsplätze im Privatbereich spielt zusätzlich die{" "}
        <a
          href={GESETZ.arbStättV}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-nrw-gruen hover:underline"
        >
          Arbeitsstättenverordnung
        </a>{" "}
        eine Rolle. Methodische Hilfen zur Umsetzung bietet außerdem die{" "}
        <a
          href={REGELWERK.bauaGefaehrdung}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-nrw-gruen hover:underline"
        >
          BAuA zur Gefährdungsbeurteilung
        </a>
        .
      </BlogLegalRef>

      <BlogH2>Wie die Beurteilung in der Praxis sinnvoll abläuft</BlogH2>
      <BlogSteps
        items={[
          "Tätigkeiten und Personengruppen erfassen: Wer arbeitet wie oft, mit welchen Arbeitsmitteln und unter welchen organisatorischen Rahmenbedingungen mobil?",
          "Mindeststandards definieren: Bildschirm, Ergonomie, Erreichbarkeit, Datenschutz, Arbeitszeit und Meldewege.",
          "Beschäftigte einbinden: kurze strukturierte Abfragen, Checklisten, Fotos nur bei klarer Freiwilligkeit und datenschutzkonformer Nutzung.",
          "Belastungen bewerten: fachlich differenzieren zwischen ergonomischen, organisatorischen und psychischen Themen.",
          "Maßnahmen festlegen: z. B. Monitorbereitstellung, Führungskräfte-Regeln, Meeting-Disziplin, Homeoffice-Vereinbarung und Unterweisung.",
          "Wirksamkeit prüfen: Rückmeldungen einholen, Beschwerden auswerten und die Beurteilung bei Änderungen aktualisieren.",
        ]}
      />

      <BlogH2>Unterweisung und Dokumentation sind keine Nebensache</BlogH2>
      <p>
        Homeoffice-Regeln müssen verständlich vermittelt und dokumentiert werden. Dazu gehören ergonomische
        Hinweise, Umgang mit Arbeitsunterbrechungen, Erreichbarkeitsregeln, Notfall- und Unfallmeldungen,
        Nutzung gestellter Arbeitsmittel und die Erwartung an Führungskräfte im hybriden Alltag.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 12 Abs. 1"
        quote="Der Arbeitgeber hat die Beschäftigten über Sicherheit und Gesundheitsschutz bei der Arbeit während ihrer Arbeitszeit ausreichend und angemessen zu unterweisen."
        sourceLabel="Arbeitsschutzgesetz"
        sourceHref={GESETZ.arbSchG12}
      />
      <BlogGesetzesZitat
        paragraph="ArbSchG § 6 Abs. 1"
        quote="Der Arbeitgeber muß über die je nach Art der Tätigkeiten und der Zahl der Beschäftigten erforderlichen Unterlagen verfügen, aus denen das Ergebnis der Gefährdungsbeurteilung, die von ihm festgelegten Maßnahmen des Arbeitsschutzes und das Ergebnis ihrer Überprüfung ersichtlich sind."
        sourceLabel="Arbeitsschutzgesetz"
        sourceHref={GESETZ.arbSchG6}
      />

      <BlogH2>Psychische Belastungen im Homeoffice nicht ausblenden</BlogH2>
      <p>
        Gerade hybride Arbeitsformen verschieben Belastungen: weniger spontane Abstimmung, mehr Selbstorganisation,
        mehr digitale Unterbrechungen und teilweise soziale Isolation. Wer Homeoffice beurteilt, ohne psychische
        Belastung mitzudenken, lässt einen wesentlichen Teil der Realität aus.
      </p>
      <p>
        Deshalb sollte die Homeoffice-Beurteilung eng mit der allgemeinen Bewertung psychischer Belastungen
        verknüpft werden. Vertiefend dazu:{" "}
        <Link
          href="/blog/psychische-belastung-gefaehrdungsbeurteilung"
          className="font-semibold text-nrw-gruen hover:underline"
        >
          Psychische Belastung: Was in die Gefährdungsbeurteilung gehört
        </Link>
        .
      </p>

      <BlogTakeaway>
        Homeoffice braucht kein starres Kontrollsystem, aber eine saubere Gefährdungsbeurteilung mit klaren
        Standards, Unterweisung und regelmäßiger Aktualisierung. Wir unterstützen Unternehmen mit{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          externer FaSi-Beratung
        </Link>{" "}
        bei hybriden Arbeitsmodellen.
      </BlogTakeaway>

      <BlogRelated
        links={[
          {
            href: "/blog/psychische-belastung-gefaehrdungsbeurteilung",
            label: "Psychische Belastung: Was in die Gefährdungsbeurteilung gehört",
          },
          {
            href: "/blog/gefaehrdungsbeurteilung-erstellen-schritt-fuer-schritt",
            label: "Gefährdungsbeurteilung erstellen: Schritt-für-Schritt-Anleitung",
          },
          {
            href: "/blog/unterweisung-arbeitssicherheit-pflichtinhalte",
            label: "Unterweisung Arbeitssicherheit: Was muss wirklich drinstehen?",
          },
        ]}
      />

      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function AsaSitzungPflichten() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Der Arbeitsschutzausschuss ist in Betrieben mit mehr als zwanzig Beschäftigten kein freiwilliges
        Abstimmungsformat, sondern gesetzlich vorgesehenes Steuerungsgremium. Hier werden Informationen aus
        Führung, Betriebsrat, Betriebsarzt, FaSi und Sicherheitsbeauftragten zusammengeführt.
      </BlogLead>
      <BlogLead>
        Ein guter ASA produziert nicht nur Protokolle, sondern Entscheidungen: Welche Risiken sind relevant,
        welche Maßnahmen laufen, wo gibt es Verzögerungen und welche Themen müssen in Unterweisung,
        Gefährdungsbeurteilung oder Begehung nachgezogen werden?
      </BlogLead>

      <BlogH2>Ab wann ein ASA gebildet werden muss</BlogH2>
      <p>
        Die Pflicht knüpft an die Beschäftigtenzahl an. Teilzeitkräfte werden dabei anteilig berücksichtigt.
        Für viele wachsende Unternehmen ist das der Punkt, an dem Arbeitsschutz von Einzelthemen in eine
        formalisierte Regelkommunikation übergeht.
      </p>
      <BlogGesetzesZitat
        paragraph="ASiG § 11 Abs. 1"
        quote="Soweit in einer sonstigen Rechtsvorschrift nichts anderes bestimmt ist, hat der Arbeitgeber in Betrieben mit mehr als zwanzig Beschäftigten einen Arbeitsschutzausschuß zu bilden; bei der Feststellung der Zahl der Beschäftigten sind Teilzeitbeschäftigte mit einer regelmäßigen wöchentlichen Arbeitszeit von nicht mehr als 20 Stunden mit 0,5 und nicht mehr als 30 Stunden mit 0,75 zu berücksichtigen."
        sourceLabel="Arbeitssicherheitsgesetz"
        sourceHref={GESETZ.asiG11}
      />

      <BlogH2>Wer teilnehmen muss und warum diese Mischung sinnvoll ist</BlogH2>
      <p>
        Der ASA bringt bewusst unterschiedliche Perspektiven zusammen: Unternehmensleitung, betriebliche
        Interessenvertretung, arbeitsmedizinische Sicht, sicherheitstechnische Sicht und Praxiserfahrung aus dem
        Betrieb. Gerade diese Mischung macht den Ausschuss wirksam, wenn er nicht auf eine reine Berichtsrunde
        reduziert wird.
      </p>
      <BlogList
        items={[
          "Arbeitgeber oder beauftragte Führungsperson mit Entscheidungskompetenz",
          "zwei vom Betriebsrat bestimmte Mitglieder",
          "Betriebsarzt als gesundheitliche und präventive Fachperspektive",
          "Fachkraft für Arbeitssicherheit für Systematik, Mängelbild und Maßnahmensteuerung",
          "Sicherheitsbeauftragte als Bindeglied zur betrieblichen Praxis",
        ]}
      />

      <BlogH2>Welche Rollen Betriebsarzt und FaSi im ASA haben</BlogH2>
      <p>
        Der ASA funktioniert nur dann gut, wenn Betriebsarzt und FaSi nicht als reine Protokollteilnehmer
        behandelt werden. Beide bringen fachliche Pflichtaufgaben mit und liefern die Grundlage für belastbare
        Entscheidungen, zum Beispiel zu Vorsorge, Unterweisungen, ergonomischen Themen, psychischer Belastung,
        Begehungsbefunden oder Unfallanalysen.
      </p>
      <BlogGesetzesZitat
        paragraph="ASiG § 5 Abs. 1"
        quote="Die Betriebsärzte haben die Aufgabe, den Arbeitgeber beim Arbeitsschutz und bei der Unfallverhütung in allen Fragen des Gesundheitsschutzes zu unterstützen."
        sourceLabel="Arbeitssicherheitsgesetz"
        sourceHref={GESETZ.asiG5}
      />
      <BlogGesetzesZitat
        paragraph="ASiG § 6 Abs. 1"
        quote="Die Fachkräfte für Arbeitssicherheit haben die Aufgabe, den Arbeitgeber beim Arbeitsschutz und bei der Unfallverhütung in allen Fragen der Arbeitssicherheit einschließlich der menschengerechten Gestaltung der Arbeit zu unterstützen."
        sourceLabel="Arbeitssicherheitsgesetz"
        sourceHref={GESETZ.asiG6}
      />

      <BlogH2>Welche Themen auf die Tagesordnung gehören</BlogH2>
      <p>
        Ein wirksamer ASA folgt nicht dem Zufallsprinzip. Sinnvoll ist eine feste Struktur, die wiederkehrende
        Kennzahlen mit aktuellen Projekten verbindet. So werden Pflichtinhalte nicht vergessen, ohne dass das
        Gremium in Routine erstarrt.
      </p>
      <BlogList
        items={[
          "Unfälle, Beinaheereignisse und auffällige Schadensmuster",
          "Stand der Gefährdungsbeurteilungen und offene Maßnahmen",
          "Unterweisungen, Schulungsbedarf und Wirksamkeit",
          "arbeitsmedizinische Erkenntnisse, Vorsorgethemen und Belastungsschwerpunkte",
          "Begehungsergebnisse, Behördenauflagen, Brandschutz- oder Gefahrstoffthemen",
          "anstehende Veränderungen wie Umbauten, neue Maschinen, Prozesse oder Arbeitsmodelle",
        ]}
      />

      <BlogH2>Wie oft getagt werden muss und wie Protokolle aussehen sollten</BlogH2>
      <p>
        Das Gesetz verlangt mindestens vierteljährliche Sitzungen. Inhaltlich sinnvoll sind kurze, klare
        Protokolle mit Entscheidung, Maßnahme, Frist und Verantwortlichkeit. Ein Protokoll ohne Nachverfolgung
        schafft keinen Mehrwert und überzeugt weder intern noch extern.
      </p>
      <BlogLegalRef>
        Der ASA ist kein Selbstzweck. Er ist die Schnittstelle zwischen den Pflichten nach{" "}
        <a
          href={GESETZ.arbSchG}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-nrw-gruen hover:underline"
        >
          ArbSchG
        </a>
        , den Beratungsaufgaben nach{" "}
        <a
          href={GESETZ.asiG}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-nrw-gruen hover:underline"
        >
          ASiG
        </a>{" "}
        und der praktischen Umsetzung im Betrieb.
      </BlogLegalRef>

      <BlogH2>Typische Schwächen in der ASA-Praxis</BlogH2>
      <p>
        Häufige Probleme sind fehlende Entscheidungskompetenz in der Sitzung, zu breite Themenlisten ohne
        Priorisierung, keine Maßnahmenverfolgung, fehlende Kennzahlen und die Vermischung mit allgemeinen
        Betriebsbesprechungen. Dann verliert der ASA seine Steuerungswirkung.
      </p>
      <p>
        Besonders hilfreich ist eine Vorbereitung durch FaSi und Betriebsarzt mit Ampelliste offener Themen,
        damit das Gremium auf Lösungen statt auf reine Lagebeschreibungen fokussiert bleibt.
      </p>

      <BlogTakeaway>
        Ein gut geführter ASA spart Zeit, weil er Arbeitsschutzthemen bündelt, priorisiert und verbindlich
        entscheidet. Wir unterstützen als{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          externe FaSi
        </Link>{" "}
        bei Agenda, Moderation und Maßnahmenverfolgung.
      </BlogTakeaway>

      <BlogRelated
        links={[
          {
            href: "/blog/akteure-arbeitsschutz-ueberblick",
            label: "Akteure im Arbeitsschutz – wer kümmert sich um was?",
          },
          {
            href: "/blog/fasi-bestellung-pflicht-fristen",
            label: "FaSi bestellen: Pflicht, Fristen und Folgen bei Versäumnis",
          },
          {
            href: "/blog/betriebsbegehung-was-wird-geprueft",
            label: "Betriebsbegehung: Was wird geprüft und wie bereiten Sie sich vor?",
          },
        ]}
      />

      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function ExplosionsschutzGefaehrdungsbeurteilung() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Explosionsschutz beginnt nicht mit der Zoneneinteilung, sondern mit der Frage, ob gefährliche
        explosionsfähige Gemische überhaupt entstehen können. Genau diese Ermittlung ist Teil der
        Gefährdungsbeurteilung und darf in staub-, gas- oder lösemittelbelasteten Prozessen nicht fehlen.
      </BlogLead>
      <BlogLead>
        Sobald eine Explosionsgefährdung möglich ist, braucht der Betrieb ein systematisches Schutzkonzept:
        Stoffe und Prozesse verstehen, Zündquellen bewerten, Bereiche klassifizieren, Schutzmaßnahmen festlegen
        und das Ergebnis in einem Explosionsschutzdokument nachvollziehbar dokumentieren.
      </BlogLead>

      <BlogH2>Wann Explosionsschutz überhaupt zum Thema wird</BlogH2>
      <p>
        Typische Anwendungsfälle sind Lackierprozesse, Lagerung und Verarbeitung brennbarer Flüssigkeiten,
        Gasversorgung, Mühlen, Holz- oder Metallstaub, Absauganlagen, Silos, Reinigungsprozesse sowie
        chemische Produktionsschritte. Entscheidend ist nicht die Branche, sondern ob eine gefährliche
        explosionsfähige Atmosphäre entstehen kann.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 5 Abs. 1"
        quote="Der Arbeitgeber hat durch eine Beurteilung der für die Beschäftigten mit ihrer Arbeit verbundenen Gefährdung zu ermitteln, welche Maßnahmen des Arbeitsschutzes erforderlich sind."
        sourceLabel="Arbeitsschutzgesetz"
        sourceHref={GESETZ.arbSchG5}
      />

      <BlogH2>Was das Explosionsschutzdokument rechtlich leisten muss</BlogH2>
      <p>
        Das Explosionsschutzdokument ist kein loses Anlagenblatt. Es muss nachvollziehbar zeigen, dass die
        Gefährdungen ermittelt, bewertet und mit geeigneten Schutzmaßnahmen adressiert wurden. Gerade an dieser
        Stelle scheitern viele Dokumente, weil nur Zonenpläne abgelegt werden, aber Prozessbeschreibung,
        Zündquellenbewertung und Maßnahmenlogik fehlen.
      </p>
      <BlogGesetzesZitat
        paragraph="GefStoffV § 6 Abs. 9"
        quote="Bei der Dokumentation hat der Arbeitgeber die Gefährdungen durch gefährliche explosionsfähige Gemische besonders auszuweisen (Explosionsschutzdokument). Daraus muss insbesondere hervorgehen, dass die Explosionsgefährdungen ermittelt und einer Bewertung unterzogen worden sind."
        sourceLabel="Gefahrstoffverordnung"
        sourceHref={GESETZ.gefStoffV6}
      />

      <BlogH2>Wie die Gefährdungsbeurteilung systematisch aufgebaut wird</BlogH2>
      <p>
        Fachlich sinnvoll ist ein Ablauf vom Stoff zum Prozess und dann zu den Zündquellen. Das heißt: erst
        Stoffeigenschaften und Freisetzungsmöglichkeiten verstehen, dann Betriebszustände betrachten und
        anschließend bewerten, wo und wie eine wirksame Zündquelle auf ein explosionsfähiges Gemisch treffen
        kann.
      </p>
      <BlogList
        items={[
          "gefährliche Stoffe, Stäube, Dämpfe oder Gase identifizieren",
          "Normalbetrieb, Anfahren, Störung, Reinigung und Instandhaltung getrennt betrachten",
          "Lüftung, Einhausung, Absaugung und Freisetzungsgrade bewerten",
          "mögliche Zündquellen wie heiße Oberflächen, Elektrostatik oder elektrische Betriebsmittel prüfen",
          "Ex-Zonen und betroffene Bereiche nachvollziehbar festlegen",
        ]}
      />

      <BlogH2>Schutzmaßnahmen: zuerst vermeiden, dann beherrschen</BlogH2>
      <p>
        Die beste Ex-Zone ist die, die gar nicht entsteht. Deshalb stehen Substitution, Mengenbegrenzung,
        geschlossene Systeme, Lüftung und Staubvermeidung fachlich vor organisatorischen Restmaßnahmen.
        Persönliche Schutzausrüstung allein löst kein Explosionsschutzproblem.
      </p>
      <BlogGesetzesZitat
        paragraph="GefStoffV § 7 Abs. 1"
        quote="Der Arbeitgeber darf eine Tätigkeit mit Gefahrstoffen erst aufnehmen lassen, nachdem eine Gefährdungsbeurteilung nach § 6 durchgeführt und die erforderlichen Schutzmaßnahmen ergriffen worden sind."
        sourceLabel="Gefahrstoffverordnung"
        sourceHref={GESETZ.gefStoffV7}
      />

      <BlogH2>Was in ein belastbares Explosionsschutzdokument gehört</BlogH2>
      <BlogList
        items={[
          "Beschreibung der Stoffe, Verfahren und Betriebszustände",
          "Bewertung, wo explosionsfähige Atmosphäre entstehen kann",
          "Zoneneinteilung mit Begründung und Bezug auf tatsächliche Prozesse",
          "getroffene technische, organisatorische und ggf. persönliche Schutzmaßnahmen",
          "Prüf-, Freigabe- und Instandhaltungsregeln für betroffene Bereiche",
          "Unterweisung, Verantwortlichkeiten und Aktualisierungsanlässe",
        ]}
      />

      <BlogH2>Wo Betriebe in der Praxis häufig scheitern</BlogH2>
      <p>
        Klassische Schwachstellen sind geänderte Stoffe ohne Aktualisierung, fehlende Betrachtung von
        Reinigungs- oder Störungszuständen, unklare Schnittstellen zwischen Produktion, Instandhaltung und
        Fremdfirmen sowie ein Dokument, das nur für die Akte geschrieben wurde. Explosionsschutz ist wirksam,
        wenn er im Betrieb verstanden und gelebt wird.
      </p>
      <BlogLegalRef>
        Ergänzend zu GefStoffV sind regelmäßig auch Anforderungen aus der{" "}
        <a
          href={GESETZ.betrSichV}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-nrw-gruen hover:underline"
        >
          BetrSichV
        </a>{" "}
        relevant. Methodische Orientierung zum Arbeitsschutzsystem bietet die{" "}
        <a
          href={REGELWERK.bauaGefaehrdung}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-nrw-gruen hover:underline"
        >
          BAuA
        </a>
        .
      </BlogLegalRef>

      <BlogTakeaway>
        Explosionsschutz ist kein Spezialanhang, sondern Teil einer fachkundigen Gefährdungsbeurteilung.
        Wir unterstützen Unternehmen mit{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          Gefahrstoff- und Arbeitsschutzberatung
        </Link>{" "}
        sowie{" "}
        <Link href="/leistungen/brandschutz" className="font-semibold text-nrw-gruen hover:underline">
          organisatorischem Brandschutz
        </Link>
        .
      </BlogTakeaway>

      <BlogRelated
        links={[
          {
            href: "/blog/gefahrstoffe-lagern-betrieb-pflichten",
            label: "Gefahrstoffe lagern: Pflichten, Mengen und Explosionsschutz",
          },
          {
            href: "/blog/brandschutzordnung-teil-a-b-c",
            label: "Brandschutzordnung Teil A, B und C – was bedeutet das?",
          },
          {
            href: "/blog/betriebsbegehung-was-wird-geprueft",
            label: "Betriebsbegehung: Was wird geprüft und wie bereiten Sie sich vor?",
          },
        ]}
      />

      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function BrandschutzordnungTeileAbc() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Die Brandschutzordnung ordnet das Verhalten vor, während und nach einem Brandereignis. Sie ist damit
        das zentrale Organisationsdokument, wenn Brandschutz im Betrieb nicht nur technisch, sondern auch im
        Alltag funktionieren soll.
      </BlogLead>
      <BlogLead>
        Teil A, B und C verfolgen unterschiedliche Ziele und richten sich an unterschiedliche Personengruppen.
        Genau deshalb reicht es nicht, irgendein Muster auszuhängen. Die Brandschutzordnung muss zum Gebäude,
        zu den Prozessen und zur betrieblichen Organisation passen.
      </BlogLead>

      <BlogH2>Wann eine Brandschutzordnung erforderlich oder sinnvoll ist</BlogH2>
      <p>
        Nicht jeder Betrieb braucht automatisch jeden Teil in derselben Tiefe. In vielen Unternehmen ergibt sich
        die Notwendigkeit aus Gefährdungsbeurteilung, Bau- oder Brandschutzauflagen, Versicherungsanforderungen,
        Sonderbaukonzepten oder der schlichten Komplexität des Gebäudes. Spätestens bei mehreren Nutzungen,
        Publikumsverkehr oder erhöhter Brandgefährdung ist eine strukturierte Brandschutzordnung regelmäßig
        sinnvoll.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 10 Abs. 1"
        quote="Der Arbeitgeber hat entsprechend der Art der Arbeitsstätte und der Tätigkeiten sowie der Zahl der Beschäftigten die Maßnahmen zu treffen, die zur Ersten Hilfe, Brandbekämpfung und Evakuierung der Beschäftigten erforderlich sind."
        sourceLabel="Arbeitsschutzgesetz"
        sourceHref={GESETZ.arbSchG10}
      />

      <BlogH2>Was Teil A leisten muss</BlogH2>
      <p>
        Teil A richtet sich an alle Personen im Gebäude. Er ist kurz, klar, gut sichtbar und auf den ersten
        Blick verständlich. Typische Inhalte sind Brandmeldung, Alarmierung, Verhalten im Gefahrenfall,
        Fluchtwege und Hinweise auf Sammelstellen. Teil A ist der Aushangteil, nicht das vollständige Konzept.
      </p>
      <p>
        Gute Teil-A-Aushänge sind sprachlich einfach, ortsbezogen und aktuell. Schlechte Aushänge wirken wie
        allgemeine Dekoration: formal vorhanden, praktisch aber wertlos.
      </p>

      <BlogH2>Was Teil B regelt</BlogH2>
      <p>
        Teil B richtet sich an Beschäftigte ohne besondere Brandschutzfunktion. Hier werden Verhaltensregeln
        für Brandverhütung, Meldung, Alarmierung, Erstreaktion und Evakuierung beschrieben. Teil B ist eng mit
        Unterweisungen verzahnt, denn Regeln entfalten nur Wirkung, wenn sie regelmäßig vermittelt werden.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 12 Abs. 1"
        quote="Der Arbeitgeber hat die Beschäftigten über Sicherheit und Gesundheitsschutz bei der Arbeit während ihrer Arbeitszeit ausreichend und angemessen zu unterweisen."
        sourceLabel="Arbeitsschutzgesetz"
        sourceHref={GESETZ.arbSchG12}
      />

      <BlogH2>Welche Aufgaben Teil C abbildet</BlogH2>
      <p>
        Teil C richtet sich an Personen mit besonderen Aufgaben, zum Beispiel Brandschutzbeauftragte,
        Brandschutzhelfer, Evakuierungshelfer, Haustechnik oder Leitungskräfte. Hier geht es um Alarmorganisation,
        Räumung, Einweisung der Feuerwehr, Kontrolle besonderer Gefahrenbereiche, Freischaltungen,
        Nachbereitung und Dokumentation.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 10 Abs. 2"
        quote="Der Arbeitgeber hat diejenigen Beschäftigten zu benennen, die Aufgaben der Ersten Hilfe, Brandbekämpfung und Evakuierung der Beschäftigten übernehmen."
        sourceLabel="Arbeitsschutzgesetz"
        sourceHref={GESETZ.arbSchG10}
      />

      <BlogH2>Wie Brandschutzordnung, Fluchtwegplan und Unterweisung zusammenhängen</BlogH2>
      <p>
        Eine Brandschutzordnung steht nie allein. Sie muss zu Flucht- und Rettungsplänen, Alarmierungswegen,
        Sammelstellen, technischen Brandschutzeinrichtungen und Unterweisungen passen. Wenn hier Widersprüche
        entstehen, verliert das System im Ernstfall seine Zuverlässigkeit.
      </p>
      <BlogH3>Praktische Mindestfragen</BlogH3>
      <BlogList
        items={[
          "Sind Meldewege und Notrufhinweise in allen Unterlagen identisch?",
          "Passen Teil A, B und C zu realen Fluchtwegen, Sammelstellen und Zuständigkeiten?",
          "Wissen Brandschutzhelfer und Führungskräfte, was konkret von ihnen erwartet wird?",
          "Wer aktualisiert die Unterlagen nach Umbauten, Nutzungsänderungen oder neuen Auflagen?",
        ]}
      />

      <BlogH2>Wer die Brandschutzordnung erstellt und aktualisiert</BlogH2>
      <p>
        Inhaltlich wird die Brandschutzordnung häufig durch den Brandschutzbeauftragten oder externe Fachleute
        vorbereitet, beschlossen werden muss sie aber in der betrieblichen Organisation. Wichtig ist eine feste
        Zuständigkeit für Pflege, Versionierung und Verteilung. Spätestens nach Umbauten, geänderten Prozessen
        oder neuen Behördenauflagen ist eine Aktualisierung erforderlich.
      </p>
      <BlogLegalRef>
        Für die praktische Ausgestaltung sind insbesondere die{" "}
        <a
          href={REGELWERK.asrA22}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-nrw-gruen hover:underline"
        >
          ASR A2.2
        </a>{" "}
        und die{" "}
        <a
          href={REGELWERK.dguv205003}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-nrw-gruen hover:underline"
        >
          DGUV Information 205-003
        </a>{" "}
        zentrale Orientierungspunkte.
      </BlogLegalRef>

      <BlogH2>Die häufigsten Fehler in Unternehmen</BlogH2>
      <p>
        Typisch sind veraltete Muster, fehlender Gebäudebezug, keine Abstimmung mit der tatsächlichen
        Alarmorganisation, unbekannte Aufgaben in Teil C und Aushänge, die nach Umbauten nie angepasst wurden.
        Im Ernstfall zeigt sich dann, dass das Dokument formal existiert, aber operativ nicht trägt.
      </p>

      <BlogTakeaway>
        Eine gute Brandschutzordnung verbindet Dokument, Unterweisung und reale Abläufe. Wir unterstützen mit{" "}
        <Link href="/leistungen/brandschutz" className="font-semibold text-nrw-gruen hover:underline">
          externem Brandschutzbeauftragten
        </Link>{" "}
        und abgestimmter Arbeitsschutzorganisation.
      </BlogTakeaway>

      <BlogRelated
        links={[
          {
            href: "/blog/brandschutzhelfer-ausbildung-pflicht-nrw",
            label: "Brandschutzhelfer in NRW: Ausbildung, Pflicht und Organisation",
          },
          {
            href: "/blog/brandschutzbeauftragter-nrw-intern-extern",
            label: "Brandschutzbeauftragter (BSB) in NRW: intern oder extern?",
          },
          {
            href: "/blog/verbandbuch-pflicht-betrieb-dokumentation",
            label: "Verbandbuch im Betrieb: Pflicht, Inhalt und Aufbewahrung",
          },
        ]}
      />

      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function SigeplanInhaltPflichten() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Der Sicherheits- und Gesundheitsschutzplan, kurz SiGePlan, ist das zentrale Koordinationsdokument für
        komplexe Baustellen mit mehreren Arbeitgebern. Er soll Gefährdungen an Schnittstellen sichtbar machen,
        Maßnahmen verbindlich regeln und die Ausführung vorausschauend strukturieren.
      </BlogLead>
      <BlogLead>
        Ein guter SiGePlan ist kein Textbaustein für die Akte, sondern ein Arbeitsinstrument für Planung,
        Vergabe und Bauausführung. Genau daran entscheidet sich, ob Koordination auf der Baustelle tatsächlich
        funktioniert.
      </BlogLead>

      <BlogH2>Wann ein SiGePlan erforderlich wird</BlogH2>
      <p>
        Der SiGePlan ist nicht bei jedem Bauvorhaben automatisch Pflicht, aber regelmäßig dort, wo Beschäftigte
        mehrerer Arbeitgeber aufeinandertreffen und besondere Gefährdungen oder relevante Schnittstellen
        bestehen. Die Pflicht ist eng mit der Bestellung eines geeigneten Koordinators verknüpft.
      </p>
      <BlogGesetzesZitat
        paragraph="BaustellV § 3 Abs. 1"
        quote="Für Baustellen, auf denen Beschäftigte mehrerer Arbeitgeber tätig werden, hat der nach § 4 Verantwortliche einen oder mehrere geeignete Koordinatoren zu bestellen."
        sourceLabel="Baustellenverordnung"
        sourceHref={GESETZ.baustellV3}
      />

      <BlogH2>Wer den SiGePlan erstellt und zu welchem Zeitpunkt</BlogH2>
      <p>
        Der entscheidende Punkt ist die Planungsphase. Der SiGePlan muss vor der Ausführung entstehen, damit
        Gefährdungen früh in Bauablauf, Ausschreibung und Vergabe einfließen können. Ein nachträglich
        zusammengestelltes Dokument hat deutlich weniger Steuerungswirkung.
      </p>
      <BlogGesetzesZitat
        paragraph="BaustellV § 3 Abs. 2 Nr. 2"
        quote="Während der Planung der Ausführung des Bauvorhabens hat der Koordinator einen Sicherheits- und Gesundheitsschutzplan auszuarbeiten oder ausarbeiten zu lassen."
        sourceLabel="Baustellenverordnung"
        sourceHref={GESETZ.baustellV3}
      />

      <BlogH2>Welche Inhalte ein belastbarer SiGePlan enthalten sollte</BlogH2>
      <p>
        Inhaltlich muss der Plan über allgemeine Appelle hinausgehen. Er beschreibt die konkreten Gefährdungen,
        die durch zeitliche, räumliche oder organisatorische Überschneidungen verschiedener Gewerke entstehen,
        und benennt die zugehörigen Schutz- und Koordinationsmaßnahmen.
      </p>
      <BlogList
        items={[
          "Projekt- und Baustellenbeschreibung mit Bauphasen und wesentlichen Gewerken",
          "Schnittstellengefahren zwischen gleichzeitig oder nacheinander tätigen Unternehmen",
          "Regeln für Verkehrswege, Lagerflächen, Rettungswege und Baustelleneinrichtung",
          "Schutzmaßnahmen für besondere Arbeiten wie Absturz, Abbruch, Tiefbau, Gefahrstoffe oder elektrische Gefährdungen",
          "Koordinationsregeln, Freigabeprozesse, Kommunikationswege und Verantwortlichkeiten",
          "Vorgaben zu Erster Hilfe, Notfallorganisation, Brandschutz und Unterweisung auf der Baustelle",
        ]}
      />

      <BlogH2>Warum der SiGePlan vor allem Schnittstellen beherrschen muss</BlogH2>
      <p>
        Einzelgewerke können ihre eigenen Gefährdungen oft selbst organisieren. Kritisch wird es dort, wo
        Tätigkeiten zusammenlaufen: Dachdecker über Fassadenbauern, Elektriker im Bereich laufender Logistik,
        Abbruch neben Ausbau, Hebezeuge über Verkehrswegen oder Umbau im laufenden Betrieb. Genau diese
        Schnittstellen sind der Kern des SiGePlans.
      </p>

      <BlogH2>Aktualisierung in der Ausführung ist Pflicht, nicht Kür</BlogH2>
      <p>
        Baustellen verändern sich. Terminverschiebungen, geänderte Bauabläufe, neue Nachunternehmer,
        geänderte Verfahren oder unerwartete Bestandsrisiken müssen in der Koordination und damit häufig auch
        im SiGePlan nachgeführt werden. Ein guter Plan ist versioniert und an den tatsächlichen Bauablauf
        gekoppelt.
      </p>
      <BlogLegalRef>
        Ergänzende Orientierung zu Baustellenkoordination, Planung und Unterlage bietet die{" "}
        <a
          href={REGELWERK.bauaBaustelle}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-nrw-gruen hover:underline"
        >
          BAuA zu Bauarbeiten und Baustellen
        </a>
        .
      </BlogLegalRef>

      <BlogH2>Typische Schwächen bei SiGePlänen</BlogH2>
      <p>
        Häufige Mängel sind zu allgemeine Texte ohne Bauwerksbezug, fehlende Phasenlogik, keine saubere
        Trennung zwischen Einzelgewerksrisiken und Koordinationsrisiken, nicht gepflegte Versionen und fehlende
        Rückkopplung in Baubesprechungen. Dann bleibt der SiGePlan formal vorhanden, aber praktisch folgenlos.
      </p>

      <BlogTakeaway>
        Ein guter SiGePlan entsteht früh, ist baustellenspezifisch und wird während der Ausführung aktiv
        genutzt. Wir unterstützen Bauherren und Ausführende mit{" "}
        <Link href="/leistungen/sigeko" className="font-semibold text-nrw-gruen hover:underline">
          SiGeKo-Leistungen
        </Link>{" "}
        und pragmatischer Baustellenkoordination.
      </BlogTakeaway>

      <BlogRelated
        links={[
          {
            href: "/blog/sigeko-ab-wann-pflicht-baustelle",
            label: "SiGeKo: Ab wann Pflicht auf der Baustelle?",
          },
          {
            href: "/blog/sigeko-nrw-orientierung-bauherren",
            label: "SiGeKo NRW: Erste Orientierung für Bauherren und Ausführende",
          },
          {
            href: "/blog/sigeko-und-betrieb-schnittstelle",
            label: "SiGeKo und Arbeitssicherheit im Betrieb – wie hängt das zusammen?",
          },
        ]}
      />

      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function PsychischeBelastungBeurteilung() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Die Gefährdungsbeurteilung psychischer Belastung ist kein Sonderprojekt für problematische Betriebe,
        sondern regulärer Bestandteil des Arbeitsschutzes. Sie soll sichtbar machen, wie Arbeitsorganisation,
        Führung, Kommunikation, Arbeitsumgebung und soziale Beziehungen auf die Gesundheit der Beschäftigten
        wirken.
      </BlogLead>
      <BlogLead>
        Viele Unternehmen vermeiden das Thema aus Sorge vor Unschärfe oder Konflikten. Genau deshalb ist eine
        saubere Methode so wichtig: Psychische Belastung wird nicht über Einzelmeinungen oder Diagnosen
        beurteilt, sondern über systematisch erfasste Arbeitsbedingungen und ihre gesundheitliche Relevanz.
      </BlogLead>

      <BlogH2>Warum psychische Belastung ausdrücklich Pflicht ist</BlogH2>
      <p>
        Seit der gesetzlichen Klarstellung gehört psychische Belastung ausdrücklich in die Gefährdungsbeurteilung.
        Es geht dabei nicht um die Beurteilung einzelner Personen, sondern um die Bewertung der Arbeitsbedingungen,
        unter denen Menschen arbeiten. Das macht den Ansatz präventiv und datenschutzrechtlich beherrschbar.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 5 Abs. 3 Nr. 6"
        quote="Eine Gefährdung kann sich insbesondere ergeben durch psychische Belastungen bei der Arbeit."
        sourceLabel="Arbeitsschutzgesetz"
        sourceHref={GESETZ.arbSchG5}
      />

      <BlogH2>Welche Belastungsfaktoren typischerweise betrachtet werden</BlogH2>
      <p>
        Inhaltlich geht es um die Arbeitsbedingungen, nicht um private Probleme oder medizinische Diagnosen.
        Typische Betrachtungsfelder sind Arbeitsinhalt, Arbeitsorganisation, soziale Beziehungen, Arbeitsumgebung
        und neue Formen digitaler Arbeit.
      </p>
      <BlogList
        items={[
          "hoher Zeitdruck, enge Taktung, dauernde Unterbrechungen und unrealistische Terminlagen",
          "unklare Aufgaben, widersprüchliche Anweisungen oder fehlende Entscheidungsspielräume",
          "Konflikte im Team, mangelnde Wertschätzung, schlechte Führung oder fehlendes Feedback",
          "Monotonie, dauerhafte Überforderung oder hohe emotionale Anforderungen",
          "Isolation, ständige digitale Erreichbarkeit und hybride Abstimmungsprobleme im Homeoffice",
        ]}
      />

      <BlogH2>So läuft eine Gefährdungsbeurteilung psychischer Belastung sinnvoll ab</BlogH2>
      <p>
        Die wirksamsten Verfahren kombinieren vorhandene Daten, strukturierte Beteiligung und klare
        Maßnahmensteuerung. Es geht nicht darum, möglichst viele Fragen zu stellen, sondern die Arbeitsrealität
        belastbar abzubilden und daraus konkrete Verbesserungen abzuleiten.
      </p>
      <BlogSteps
        items={[
          "Arbeitsbereiche und Tätigkeitsgruppen festlegen: sinnvoll nach vergleichbaren Arbeitsbedingungen clustern, nicht nur nach Organigramm.",
          "Methode auswählen: z. B. moderierte Workshops, standardisierte Kurzbefragungen, Interviews, Beobachtungen oder eine Kombination daraus.",
          "Belastungen ermitteln: auffällige Muster bei Arbeitsmenge, Störungen, Führung, Kommunikation, Handlungsspielraum und Zusammenarbeit sichtbar machen.",
          "Bewerten: Welche Faktoren sind arbeitsbedingt, relevant und für welche Gruppen besonders kritisch?",
          "Maßnahmen festlegen: zuerst an Organisation, Führung, Prozessen und Schnittstellen ansetzen, nicht sofort nur Verhaltenstrainings planen.",
          "Wirksamkeit überprüfen: Kennzahlen, Feedback und Folgebefragungen nutzen und die Beurteilung bei Veränderungen fortschreiben.",
        ]}
      />

      <BlogH2>Warum der Betriebsarzt wichtig ist</BlogH2>
      <p>
        Der Betriebsarzt bringt die gesundheitliche Perspektive ein und hilft, arbeitsbedingte Belastungen,
        Warnsignale und Präventionsmaßnahmen fachlich einzuordnen. Besonders wertvoll ist diese Rolle bei
        Schichtarbeit, hohen emotionalen Anforderungen, Wiedereingliederung, auffälligen Fehlzeiten oder
        Verdichtungsprozessen mit gesundheitlichen Folgen.
      </p>
      <BlogGesetzesZitat
        paragraph="ASiG § 5 Abs. 1"
        quote="Die Betriebsärzte haben die Aufgabe, den Arbeitgeber beim Arbeitsschutz und bei der Unfallverhütung in allen Fragen des Gesundheitsschutzes zu unterstützen."
        sourceLabel="Arbeitssicherheitsgesetz"
        sourceHref={GESETZ.asiG5}
      />
      <p>
        Wichtig ist: Der Betriebsarzt ersetzt weder Führung noch Organisationsentwicklung. Seine Stärke liegt in
        der fachlichen Bewertung gesundheitlicher Relevanz, der Prävention und der Verknüpfung zu Vorsorge,
        Wiedereingliederung und Gesundheitskommunikation.
      </p>

      <BlogH2>Welche Rolle FaSi, Führungskräfte und Beschäftigte spielen</BlogH2>
      <p>
        Die Fachkraft für Arbeitssicherheit sorgt für methodische Stringenz und Anschlussfähigkeit an die übrige
        Gefährdungsbeurteilung. Führungskräfte liefern reale Prozesskenntnis und müssen Maßnahmen später tragen.
        Beschäftigte wiederum kennen die tatsächlichen Belastungspunkte ihres Arbeitsalltags. Ohne ihre Beteiligung
        bleibt die Beurteilung oft zu abstrakt.
      </p>
      <BlogLegalRef>
        Gute methodische Orientierung bieten die{" "}
        <a
          href={REGELWERK.bauaGefaehrdung}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-nrw-gruen hover:underline"
        >
          BAuA zur Gefährdungsbeurteilung
        </a>{" "}
        sowie die BAuA-Themenseite zu{" "}
        <a
          href={REGELWERK.bauaPsy}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-nrw-gruen hover:underline"
        >
          Arbeitsorganisation und psychischer Belastung
        </a>
        . Sie helfen besonders bei der Auswahl geeigneter Verfahren und bei der Abgrenzung zwischen
        arbeitsbezogener Analyse und personenbezogenen Themen.
      </BlogLegalRef>

      <BlogH2>Welche Maßnahmen wirklich wirksam sind</BlogH2>
      <p>
        Nachhaltige Verbesserungen entstehen meist durch organisatorische Maßnahmen: Priorisierung, realistische
        Personaleinsatzplanung, weniger Störungen, klare Zuständigkeiten, bessere Führungskommunikation, saubere
        Meeting- und Erreichbarkeitsregeln, transparente Vertretungen und bessere Schnittstellen zwischen Teams.
      </p>
      <p>
        Reine Resilienztrainings ohne Veränderung der Arbeitsbedingungen greifen oft zu kurz. Sie können sinnvoll
        ergänzen, ersetzen aber keine Gefährdungsbeurteilung.
      </p>

      <BlogH2>Psychische Belastung im Homeoffice gesondert mitdenken</BlogH2>
      <p>
        Hybride und mobile Arbeitsformen verändern psychische Belastungen erheblich. Weniger soziale Einbindung,
        mehr digitale Unterbrechungen, diffuse Erreichbarkeit und erschwerte Abstimmung sind typische Risiken.
        Deshalb sollte die Beurteilung psychischer Belastung mit der allgemeinen Homeoffice-Regelung verzahnt
        werden.
      </p>
      <p>
        Vertiefend dazu:{" "}
        <Link
          href="/blog/homeoffice-gefaehrdungsbeurteilung-pflicht"
          className="font-semibold text-nrw-gruen hover:underline"
        >
          Homeoffice: Gefährdungsbeurteilung und Pflichten des Arbeitgebers
        </Link>
        .
      </p>

      <BlogH2>Dokumentation und Fortschreibung entscheiden über die Qualität</BlogH2>
      <p>
        Entscheidend ist am Ende nicht die schönste Befragung, sondern ob Ergebnis, Maßnahmen und Wirksamkeitsprüfung
        dokumentiert werden und bei Veränderungen fortgeschrieben werden. Gerade psychische Belastungen verändern
        sich bei Reorganisationen, Personalengpässen, Wachstum, Digitalisierung oder Schichtanpassungen schnell.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 6 Abs. 1"
        quote="Der Arbeitgeber muß über die je nach Art der Tätigkeiten und der Zahl der Beschäftigten erforderlichen Unterlagen verfügen, aus denen das Ergebnis der Gefährdungsbeurteilung, die von ihm festgelegten Maßnahmen des Arbeitsschutzes und das Ergebnis ihrer Überprüfung ersichtlich sind."
        sourceLabel="Arbeitsschutzgesetz"
        sourceHref={GESETZ.arbSchG6}
      />

      <BlogTakeaway>
        Die Gefährdungsbeurteilung psychischer Belastung wird dann wirksam, wenn sie methodisch sauber,
        beteiligungsorientiert und organisatorisch gedacht ist. Wir unterstützen gemeinsam mit{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          externer FaSi
        </Link>{" "}
        und betriebsärztlicher Perspektive bei einer praxisnahen Umsetzung.
      </BlogTakeaway>

      <BlogRelated
        links={[
          {
            href: "/blog/homeoffice-gefaehrdungsbeurteilung-pflicht",
            label: "Homeoffice: Gefährdungsbeurteilung und Pflichten des Arbeitgebers",
          },
          {
            href: "/blog/gefaehrdungsbeurteilung-erstellen-schritt-fuer-schritt",
            label: "Gefährdungsbeurteilung erstellen: Schritt-für-Schritt-Anleitung",
          },
          {
            href: "/blog/arbeitsschutzausschuss-asa-pflichten",
            label: "Arbeitsschutzausschuss (ASA): Pflicht, Zusammensetzung, Sitzungen",
          },
        ]}
      />

      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function VerbandbuchPflichtBetrieb() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Das Verbandbuch ist im Betrieb Pflicht: Es dokumentiert jede geleistete Erste Hilfe nach ArbSchG § 10
        und ist zentraler Nachweis für Unfälle, Spätfolgen und Behördenprüfungen. Ohne ordentliche Führung fehlt
        ein Baustein der Notfallorganisation — neben Ersthelfern, Erste-Hilfe-Material und Unterweisung.
      </BlogLead>
      <BlogLead>
        Gerade weil viele Einträge zunächst unspektakulär wirken, wird das Verbandbuch oft unterschätzt. Im
        Ernstfall kann genau diese Dokumentation entscheidend sein, wenn es um Spätfolgen, Anerkennung eines
        Arbeitsunfalls oder die Nachvollziehbarkeit betrieblicher Abläufe geht.
      </BlogLead>

      <BlogH2>Warum das Verbandbuch betrieblich notwendig ist</BlogH2>
      <p>
        Das Arbeitsschutzrecht verpflichtet Arbeitgeber, Erste Hilfe organisatorisch sicherzustellen. Dazu gehört
        nicht nur Material und Ersthelfer bereitzuhalten, sondern auch die Leistungserbringung nachvollziehbar zu
        dokumentieren. Das Verbandbuch ist dafür das klassische Instrument.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 10 Abs. 1"
        quote="Der Arbeitgeber hat entsprechend der Art der Arbeitsstätte und der Tätigkeiten sowie der Zahl der Beschäftigten die Maßnahmen zu treffen, die zur Ersten Hilfe, Brandbekämpfung und Evakuierung der Beschäftigten erforderlich sind."
        sourceLabel="Arbeitsschutzgesetz"
        sourceHref={GESETZ.arbSchG10}
      />
      <BlogGesetzesZitat
        paragraph="ArbSchG § 10 Abs. 2"
        quote="Der Arbeitgeber hat diejenigen Beschäftigten zu benennen, die Aufgaben der Ersten Hilfe, Brandbekämpfung und Evakuierung der Beschäftigten übernehmen."
        sourceLabel="Arbeitsschutzgesetz"
        sourceHref={GESETZ.arbSchG10}
      />

      <BlogH2>Welche Angaben in einen Eintrag gehören</BlogH2>
      <p>
        Ein Eintrag muss so konkret sein, dass der Vorfall später nachvollzogen werden kann, ohne unnötig
        ausufernd zu werden. Ziel ist eine belastbare Kurz-Dokumentation der geleisteten Ersten Hilfe.
      </p>
      <BlogList
        items={[
          "Datum und Uhrzeit des Ereignisses",
          "Ort des Vorfalls und betroffener Arbeitsbereich",
          "Name der betroffenen Person",
          "kurze Beschreibung von Hergang und Verletzung oder Gesundheitsbeeinträchtigung",
          "durchgeführte Erste-Hilfe-Maßnahmen",
          "Name der ersthelfenden oder dokumentierenden Person",
        ]}
      />

      <BlogH2>Warum auch vermeintlich kleine Vorfälle eingetragen werden sollten</BlogH2>
      <p>
        Viele Betriebe dokumentieren nur Ereignisse, die sofort als meldepflichtig erscheinen. Das ist riskant.
        Kleinere Schnittverletzungen, Augenreizungen, Stolperereignisse oder Prellungen können später relevant
        werden. Ohne zeitnahe Dokumentation fehlt dann ein wichtiger Nachweis.
      </p>
      <p>
        Das Verbandbuch ersetzt zwar nicht die Unfallanzeige bei meldepflichtigen Arbeitsunfällen, es ergänzt
        sie aber und schließt vor allem die zahlreichen Fälle unterhalb dieser Schwelle ab.
      </p>

      <BlogH2>Datenschutz und Zugriff richtig organisieren</BlogH2>
      <p>
        Verbandbucheinträge enthalten Gesundheitsdaten und müssen deshalb geschützt werden. Nicht jede Führungskraft
        oder jeder Kollegenkreis darf freien Zugriff haben. In der Praxis bewähren sich klare Zugriffsregelungen,
        geschützte Aufbewahrung und datenschutzkonforme digitale Lösungen mit Rollen- und Berechtigungskonzept.
      </p>
      <BlogLegalRef>
        Praktische Orientierung zu betrieblicher Erster Hilfe bietet die{" "}
        <a
          href={REGELWERK.bauaErsteHilfe}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-nrw-gruen hover:underline"
        >
          BAuA zum Thema Erste Hilfe
        </a>
        . Entscheidend ist, dass Organisation, Dokumentation und Vertraulichkeit zusammenpassen.
      </BlogLegalRef>

      <BlogH2>Wie lange das Verbandbuch aufbewahrt werden sollte</BlogH2>
      <p>
        In der Praxis wird das Verbandbuch typischerweise mehrere Jahre aufbewahrt, damit auch spätere
        gesundheitliche Folgen noch nachvollzogen werden können. Unternehmen sollten eine einheitliche,
        dokumentierte Aufbewahrungsregelung festlegen und diese sowohl analog als auch digital sauber umsetzen.
      </p>
      <p>
        Wichtig ist außerdem, dass Einträge lesbar, vollständig und gegen nachträgliche Manipulation geschützt
        sind. Digitale Systeme sind zulässig, wenn sie diese Anforderungen erfüllen.
      </p>

      <BlogH2>Was bei Audits und Begehungen häufig beanstandet wird</BlogH2>
      <p>
        Typische Schwächen sind fehlende Einträge trotz bekannter Erste-Hilfe-Leistungen, unvollständige Angaben,
        offener Zugriff auf sensible Daten, keine Vertretungsregelung für Ersthelfer und fehlende Verzahnung mit
        Meldewegen, Unfallanalyse und Unterweisung.
      </p>

      <BlogH2>Wie Verbandbuch, Ersthelfer und Notfallorganisation zusammenhängen</BlogH2>
      <p>
        Das Verbandbuch ist nur ein Baustein. Es funktioniert nur dann zuverlässig, wenn Ersthelfer benannt,
        ausgebildet und erreichbar sind, Material vorhanden ist, Notruf- und Meldewege bekannt sind und Vorfälle
        intern ausgewertet werden. Genau daraus entsteht eine belastbare Erste-Hilfe-Organisation.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 6 Abs. 1"
        quote="Der Arbeitgeber muß über die je nach Art der Tätigkeiten und der Zahl der Beschäftigten erforderlichen Unterlagen verfügen, aus denen das Ergebnis der Gefährdungsbeurteilung, die von ihm festgelegten Maßnahmen des Arbeitsschutzes und das Ergebnis ihrer Überprüfung ersichtlich sind."
        sourceLabel="Arbeitsschutzgesetz"
        sourceHref={GESETZ.arbSchG6}
      />

      <BlogTakeaway>
        Das Verbandbuch ist Pflichtbestandteil einer glaubwürdigen Erste-Hilfe-Organisation. Wir unterstützen bei
        der Verzahnung von{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          Arbeitsschutzorganisation
        </Link>
        , Ersthelferstruktur und sauberer Dokumentation.
      </BlogTakeaway>

      <BlogRelated
        links={[
          {
            href: "/blog/ersthelfer-im-betrieb-pflichten",
            label: "Ersthelfer im Betrieb: Anzahl, Ausbildung und Organisation",
          },
          {
            href: "/blog/betriebsbegehung-was-wird-geprueft",
            label: "Betriebsbegehung: Was wird geprüft und wie bereiten Sie sich vor?",
          },
          {
            href: "/blog/arbeitsschutzausschuss-asa-pflichten",
            label: "Arbeitsschutzausschuss (ASA): Pflicht, Zusammensetzung, Sitzungen",
          },
        ]}
      />

      <BlogDisclaimer />
    </BlogArticleShell>
  );
}
