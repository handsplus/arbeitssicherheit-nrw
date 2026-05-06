import Link from "next/link";

/** Artikeltexte (Server Component) – slug kommt aus `blog-posts.ts` */
export function BlogPostBody({ slug }: { slug: string }) {
  switch (slug) {
    case "gefaehrdungsbeurteilung-unterschrift":
      return <GefaehrdungsbeurteilungUnterschrift />;
    case "getraenke-arbeitsplatz-arbeitgeber":
      return <GetraenkeArbeitsplatz />;
    case "akteure-arbeitsschutz-ueberblick":
      return <AkteureArbeitsschutz />;
    case "ladestation-e-auto-garage-genehmigung":
      return <LadestationGarage />;
    case "unterweisung-arbeitssicherheit-pflichtinhalte":
      return <UnterweisungArbeitssicherheit />;
    case "sigeko-und-betrieb-schnittstelle":
      return <SigekoBetrieb />;
    case "externe-fachkraft-arbeitssicherheit-koeln":
      return <ExterneFasiKoeln />;
    case "brandschutzbeauftragter-nrw-intern-extern":
      return <BsbInternExtern />;
    case "sigeko-nrw-orientierung-bauherren":
      return <SigekoNrwOrientierung />;
    default:
      return null;
  }
}

function GefaehrdungsbeurteilungUnterschrift() {
  return (
    <div className="space-y-6 text-nrw-grau-700 leading-relaxed">
      <p>
        In den Arbeitsschutzvorschriften gibt es keine Regel, die explizit festlegt, dass eine
        Gefährdungsbeurteilung unterschrieben werden muss. Laut Arbeitsschutzgesetz (§ 5 ArbSchG)
        ist der Arbeitgeber für die Umsetzung der Vorschriften verantwortlich, dazu gehört auch die
        Durchführung der Gefährdungsbeurteilung. Eine Unterschrift ist daher nicht nötig, da der
        Arbeitgeber immer in der Verantwortung bleibt – auch wenn er Aufgaben an andere Personen
        überträgt. Personen, die im Namen des Arbeitgebers handeln, gelten als dessen Vertreter,
        wodurch die Gefährdungsbeurteilung automatisch rechtsverbindlich ist. Tätigkeiten mit
        gefährlichen Stoffen dürfen ohne Gefährdungsbeurteilung nicht ausgeführt werden (§ 7 Abs. 1
        GefStoffV).
      </p>
      <p>
        Nach § 6 Abs. 11 GefStoffV darf eine Gefährdungsbeurteilung nur von fachkundigen Personen
        durchgeführt werden. Hat der Arbeitgeber selbst keine ausreichende Fachkenntnis, muss er
        sich beraten lassen, zum Beispiel von einer Fachkraft für Arbeitssicherheit.
      </p>
    </div>
  );
}

function GetraenkeArbeitsplatz() {
  return (
    <div className="space-y-6 text-nrw-grau-700 leading-relaxed">
      <p>
        Ein Glas Wasser kann im Arbeitsalltag wahre Wunder wirken: Es fördert die Konzentration,
        beugt Kopfschmerzen vor und ist entscheidend für das allgemeine Wohlbefinden. Doch wie sieht
        es rechtlich aus – ist der Arbeitgeber verpflichtet, seinen Beschäftigten Getränke
        bereitzustellen?
      </p>
      <h2 className="mt-8 text-xl font-bold text-nrw-grau-900">Die Fürsorgepflicht des Arbeitgebers</h2>
      <p>
        Grundsätzlich gilt: Arbeitgeber haben eine Fürsorgepflicht gegenüber ihren Beschäftigten.
        Das bedeutet, sie müssen für sichere, gesunde und zumutbare Arbeitsbedingungen sorgen. Dazu
        zählt unter anderem auch der Schutz vor gesundheitlichen Beeinträchtigungen am
        Arbeitsplatz.
      </p>
      <p>Aber heißt das auch, dass der Arbeitgeber kostenfreie Getränke bereitstellen muss?</p>
      <h2 className="mt-8 text-xl font-bold text-nrw-grau-900">
        Getränke am Arbeitsplatz: Nicht immer Pflicht
      </h2>
      <p>
        Unter normalen Arbeitsbedingungen – also etwa bei Bürotätigkeiten in Innenräumen bei
        moderaten Temperaturen – besteht keine gesetzliche Pflicht, Getränke zur Verfügung zu
        stellen. Arbeitnehmer müssen sich in diesem Fall selbst versorgen.
      </p>
      <h2 className="mt-8 text-xl font-bold text-nrw-grau-900">Ausnahme: Hohe Temperaturen</h2>
      <p>
        Die Arbeitsstättenverordnung (ArbStättV) sieht jedoch klare Vorgaben vor, wenn die
        Temperaturen steigen. In Verbindung mit der Technischen Regel ASR A4.1 gilt:
      </p>
      <ul className="list-inside list-disc space-y-2 pl-2">
        <li>
          Ab 26 °C Raumtemperatur sollten Arbeitgeber geeignete Getränke (z. B. Wasser, ungesüßter
          Tee) bereitstellen.
        </li>
        <li>
          Ab 30 °C müssen Getränke bereitgestellt werden – andernfalls kann das gesundheitliche
          Risiken für die Beschäftigten bedeuten.
        </li>
      </ul>
      <p>
        Die Auswahl der Getränke sollte dabei auf den Flüssigkeitsbedarf und die körperliche
        Belastung abgestimmt sein. Alkoholische Getränke sind selbstverständlich nicht erlaubt.
      </p>
      <h2 className="mt-8 text-xl font-bold text-nrw-grau-900">
        Besonderheit: Arbeiten im Freien und auf Baustellen
      </h2>
      <p>
        Bei Arbeiten im Freien – insbesondere auf Baustellen – ist die Regelung strenger. Hier
        müssen Arbeitgeber jederzeit für eine ausreichende Versorgung mit Trinkwasser oder anderen
        nicht-alkoholischen Getränken sorgen. Das gilt unabhängig von der Außentemperatur.
      </p>
    </div>
  );
}

function AkteureArbeitsschutz() {
  return (
    <div className="space-y-6 text-nrw-grau-700 leading-relaxed">
      <p>
        Ein sicheres Arbeitsumfeld entsteht nicht von selbst, es erfordert klare Verantwortlichkeiten.
        Doch wer trägt welche Aufgaben – wer sind die Akteure im Arbeitsschutz?
      </p>
      <h2 className="mt-8 text-xl font-bold text-nrw-grau-900">Arbeitgeber: Die Hauptverantwortung</h2>
      <p>
        Der Arbeitgeber ist laut Arbeitsschutzgesetz verpflichtet, Schutzmaßnahmen zu ergreifen,
        diese regelmäßig zu prüfen und anzupassen. Auch wenn er Aufgaben delegieren kann, bleibt die
        Gesamtverantwortung bei ihm.
      </p>
      <h2 className="mt-8 text-xl font-bold text-nrw-grau-900">
        Fachkraft für Arbeitssicherheit: Beratung &amp; Kontrolle
      </h2>
      <p>
        Sie unterstützt den Arbeitgeber und die Führungskräfte, achtet auf die Einhaltung der
        Arbeitsschutzvorschriften und berät in sicherheitsrelevanten Fragen. Weisungsbefugnis hat sie
        nicht, außer in akuten Gefahrensituationen.
      </p>
      <h2 className="mt-8 text-xl font-bold text-nrw-grau-900">
        Sicherheitsbeauftragte: Kollegen mit Verantwortung
      </h2>
      <p>
        Sicherheitsbeauftragte sind Mitarbeiter, die sich zusätzlich für die Sicherheit am
        Arbeitsplatz engagieren. Sie haben keine Weisungsbefugnis, unterstützen aber dabei, Risiken
        frühzeitig zu erkennen.
      </p>
      <h2 className="mt-8 text-xl font-bold text-nrw-grau-900">Betriebsarzt: Gesundheit im Fokus</h2>
      <p>
        Der Betriebsarzt berät Unternehmen zu Gesundheitsrisiken, führt Vorsorgeuntersuchungen durch
        und hilft, die Gesundheit der Beschäftigten langfristig zu schützen.
      </p>
      <h2 className="mt-8 text-xl font-bold text-nrw-grau-900">
        Arbeitsschutzausschuss: Pflicht ab 20 Mitarbeitern
      </h2>
      <p>
        Dieser Ausschuss, bestehend aus Arbeitgeber, Betriebsarzt, Fachkraft für Arbeitssicherheit
        und weiteren Vertretern, bespricht regelmäßig Maßnahmen zur Unfallverhütung und
        Arbeitssicherheit.
      </p>
      <h2 className="mt-8 text-xl font-bold text-nrw-grau-900">
        Spezialisten für bestimmte Bereiche
      </h2>
      <p>
        In manchen Betrieben gibt es zusätzliche Beauftragte, z. B. für Brandschutz oder Gefahrstoffe,
        die sich um spezielle Risiken kümmern und dazu beraten.
      </p>
    </div>
  );
}

function LadestationGarage() {
  return (
    <div className="space-y-6 text-nrw-grau-700 leading-relaxed">
      <p>
        Ladestationen unterliegen keiner Genehmigungspflicht und führen auch nicht zu einer
        Nutzungsänderung der Garage. Auch nach der Verschiebung der Landesbauordnung
        Nordrhein-Westfalen bleibt die geltende Rechtslage unverändert.
      </p>
      <p>
        Ladestationen für E-Autos gelten als Teil der Leitungsanlagen und der technischen
        Gebäudeausstattung der Garage. Im Gegensatz zu Kraftstoffzapfsäulen unterliegen sie keinen
        zusätzlichen öffentlich-rechtlichen Anforderungen (Kraftstoffzapfsäulen sind nach § 18
        Abs. 1 Nr. 6 der Betriebssicherheitsverordnung genehmigungspflichtig).
      </p>
      <p>
        Leitungsanlagen sind in Nutzungseinheiten wie Garagen grundsätzlich erlaubt, im Gegensatz zu
        Rettungswegen. Da Ladestationen wie Steckdosen oder elektrische Verteiler bewertet werden,
        ist deren Installation in Garagen ebenso zulässig wie die Installation einer Steckdose.
      </p>
      <p>
        Es ist bekannt, dass Feuerwehren Ladestationen in Garagen kritisch sehen, da Brände, die durch
        lithiumbasierte Akkus entstehen, schwer zu löschen sind. Allerdings geht vom eigentlichen
        Ladevorgang keine Gefahr aus. Risiken bestehen eher bei defekten oder überladenen
        Batterien, sodass potenzielle Gefahren vom Elektrofahrzeug selbst und nicht von der
        Ladestation ausgehen.
      </p>
      <p>
        Die Sonderbauverordnung enthält zudem kein Verbot, Elektrofahrzeuge in Garagen abzustellen.
      </p>
      <p className="text-sm text-nrw-grau-500">
        (Praktische Folgen des Aufschiebens „Moratorium“ der Landesbauordnung in
        Nordrhein-Westfalen.)
      </p>
    </div>
  );
}

function UnterweisungArbeitssicherheit() {
  return (
    <div className="space-y-6 text-nrw-grau-700 leading-relaxed">
      <p>
        Unterweisungen sind ein Kernelement des betrieblichen Arbeitsschutzes: Sie machen
        Beschäftigte auf konkrete Gefährdungen und Verhaltensregeln aufmerksam. Inhaltlich
        orientieren sich sinnvolle Programme an Ihrer Gefährdungsbeurteilung und an den Vorgaben
        der DGUV Vorschrift 2 – angepasst an Rollen (Führungskraft, Büro, Produktion, Baustelle).
      </p>
      <p>
        Praxisnah sollten Sie Themen wie Unfallmeldeketten, persönliche Schutzausrüstung, Ordnung
        und Sauberkeit, ergonomische Leitlinien sowie branchenspezifische Risiken abdecken. Wichtig
        ist die Nachweisführung: Datum, Inhalt, Dauer, Zielgruppe und Referent dokumentieren.
        Kombinieren Sie Pflichtunterweisungen mit gezielten Vertiefungen (z. B. Brandschutzhelfer) –
        so bleiben Inhalte konsistent mit Ihrer{" "}
        <Link href="/leistungen/brandschutz" className="font-semibold text-nrw-gruen hover:underline">
          Brandschutzorganisation
        </Link>{" "}
        und Ihrer{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          FaSi-Betreuung
        </Link>
        .
      </p>
    </div>
  );
}

function SigekoBetrieb() {
  return (
    <div className="space-y-6 text-nrw-grau-700 leading-relaxed">
      <p>
        Die SiGeKo wirkt auf der Baustelle: Sie koordiniert Sicherheit und Gesundheitsschutz
        zwischen den am Bau beteiligten Unternehmen, dokumentiert Übergaben und begleitet kritische
        Phasen. Parallel bleibt Ihr Stammbetrieb in der Pflicht nach ASiG und DGUV Vorschrift 2 –
        Gefährdungsbeurteilungen, Unterweisungen und Betreuung durch FaSi und Betriebsarzt laufen
        dort weiter.
      </p>
      <p>
        Sinnvoll ist eine klare Schnittstelle: Welche Informationen fließen vom Bauvorhaben in den
        Betrieb zurück (z. B. neue Arbeitsmittel, eingesetzte Gefahrstoffe), und welche betrieblichen
        Regeln müssen Subunternehmer auf der Baustelle kennen? Wer das abstimmt, vermeidet Lücken in
        Nachweisen und reduziert Reibung zwischen Projektteam und Arbeitssicherheitsorganisation.
        Mehr zur{" "}
        <Link href="/leistungen/sigeko" className="font-semibold text-nrw-gruen hover:underline">
          SiGeKo-Leistung
        </Link>{" "}
        und zu typischen Fragen in der{" "}
        <Link href="/faq" className="font-semibold text-nrw-gruen hover:underline">
          FAQ
        </Link>
        .
      </p>
    </div>
  );
}

function ExterneFasiKoeln() {
  return (
    <div className="space-y-6 text-nrw-grau-700 leading-relaxed">
      <p>
        Eine externe Fachkraft für Arbeitssicherheit (FaSi) sollte Ihre Branche und Ihre Standorte
        verstehen – ob Produktion, Logistik, Büro oder Baustelle. Entscheidend sind klare
        Zuständigkeiten mit Betriebsarzt und Führung, nachvollziehbare Dokumentation der
        Gefährdungsbeurteilung und Unterweisungen sowie pragmatische Priorisierung von Maßnahmen. In
        Köln und NRW profitieren viele Betriebe davon, dass externe Betreuung Kapazität freisetzt
        und Fachfragen nicht an internen Alleingängen hängen bleiben.
      </p>
      <p>
        Vor der Beauftragung lohnt sich ein Kurzgespräch: Welche gesetzlichen Pflichten treffen Sie,
        welche Fristen stehen an, und wie soll die Zusammenarbeit mit Ihrem bestehenden
        Arbeitsschutz-Setup aussehen? Unsere{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          Leistungsseite Arbeitssicherheit
        </Link>{" "}
        und die{" "}
        <Link href="/faq" className="font-semibold text-nrw-gruen hover:underline">
          FAQ
        </Link>{" "}
        geben erste Orientierung; für Ihr konkretes Szenario vereinbaren Sie gern eine{" "}
        <Link href="/beratung-buchen" className="font-semibold text-nrw-gruen hover:underline">
          kostenlose Erstberatung
        </Link>
        .
      </p>
    </div>
  );
}

function BsbInternExtern() {
  return (
    <div className="space-y-6 text-nrw-grau-700 leading-relaxed">
      <p>
        Ein Brandschutzbeauftragter unterstützt den Arbeitgeber bei organisatorischem, baulichen und
        anlagentechnischen Fragen – von Fluchtwegen über Unterweisungen bis zu Abstimmung mit
        Brandschutzkonzepten. Interne Besetzung kann sinnvoll sein, wenn ausreichend Zeit,
        Qualifikation und Vertretungsregelungen vorhanden sind. Externe Beauftragung ist oft die
        stabilere Lösung, wenn Kapazitäten fehlen, mehrere Standorte betreut werden oder Fachtiefe
        bei Auflagen und Behördenkommunikation nötig ist.
      </p>
      <p>
        In Köln und bundesweit in NRW kombinieren wir die Rolle des BSB dort sinnvoll mit Ihrer{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          FaSi-Betreuung
        </Link>
        , damit Unterweisungen, Gefährdungsbeurteilung und Brandschutzordnung zusammenpassen.
        Details zu Leistungen und typischen Fragen finden Sie unter{" "}
        <Link href="/leistungen/brandschutz" className="font-semibold text-nrw-gruen hover:underline">
          Brandschutz
        </Link>
        .
      </p>
    </div>
  );
}

function SigekoNrwOrientierung() {
  return (
    <div className="space-y-6 text-nrw-grau-700 leading-relaxed">
      <p>
        Die SiGeKo (Sicherheits- und Gesundheitsschutzkoordination) sorgt dafür, dass
        Arbeitssicherheit auf der Baustelle zwischen den beteiligten Unternehmen abgestimmt wird –
        mit SiGePlan, Übergaben und Dokumentation. Für Bauvorhaben in NRW und Köln ist entscheidend,
        früh zu klären, ob und ab wann ein SiGeKo erforderlich ist, wer die Schnittstellen zum
        Betrieb hält und wie Informationen an Nachunternehmer fließen.
      </p>
      <p>
        Parallel bleibt Ihr Stammbetrieb in der Pflicht nach ASiG und DGUV Vorschrift 2; deshalb
        sollten Baustelle und Betrieb nicht als getrennte Welten geführt werden. Mehr zur{" "}
        <Link href="/leistungen/sigeko" className="font-semibold text-nrw-gruen hover:underline">
          SiGeKo-Leistung
        </Link>
        , zu Pflichtfragen in der{" "}
        <Link href="/faq" className="font-semibold text-nrw-gruen hover:underline">
          FAQ
        </Link>{" "}
        und zu Orientierungswerten im{" "}
        <Link href="/rechner" className="font-semibold text-nrw-gruen hover:underline">
          Rechner
        </Link>
        .
      </p>
    </div>
  );
}
