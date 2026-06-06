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

export function ElektropruefungDguvV3() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Elektrische Anlagen und Betriebsmittel müssen geprüft werden – wer das organisiert, welche Fristen
        gelten und wie Sie in NRW-Betrieben Rechtssicherheit schaffen.
      </BlogLead>
      <BlogH2>Wer ist verantwortlich?</BlogH2>
      <p>
        Der Anlagenbetreiber (Arbeitgeber) trägt die Verantwortung für die elektrische Betriebssicherheit.
        Prüfungen nach DGUV Vorschrift 3 (bzw. VDE 0100-600 / 0105) durch elektrotechnisch unterwiesene
        Personen oder eine VEFK.
      </p>
      <BlogLegalRef>
        DGUV Vorschrift 3 – Prüfung ortsveränderlicher und ortsfester elektrischer Betriebsmittel und Anlagen.
      </BlogLegalRef>
      <BlogH2>Typische Prüfintervalle</BlogH2>
      <BlogList
        items={[
          "Ortsveränderliche Geräte (Büro, Werkstatt): oft jährlich, je nach Gefährdungsbeurteilung",
          "Ortsfeste Anlagen: nach Inbetriebnahme, nach Änderung, in festgelegten Abständen",
          "Baustellen-Elektroinstallation: besondere Anforderungen, häufigere Kontrollen",
          "Prüfprotokolle aufbewahren – Nachweis bei Audits und Behörden",
        ]}
      />
      <BlogH2>Schnittstelle Arbeitssicherheit / Elektrosicherheit</BlogH2>
      <p>
        Die FaSi achtet auf Organisation und Gefährdungsbeurteilung; die VEFK übernimmt fachlich die
        Elektrosicherheit. Beide Rollen sollten abgestimmt dokumentiert sein.
      </p>
      <BlogTakeaway>
        <Link href="/leistungen/elektrosicherheit" className="font-semibold text-nrw-gruen hover:underline">
          Elektrosicherheit & VEFK
        </Link>{" "}
        und{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          FaSi-Betreuung
        </Link>{" "}
        aus einer Quelle.
      </BlogTakeaway>
      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function HomeofficeGefaehrdungsbeurteilung() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Mobiles Arbeiten ist Alltag – aber kein Freifahrtschein für den Arbeitsschutz. Was Arbeitgeber bei
        Homeoffice und Telearbeit in der Gefährdungsbeurteilung beachten müssen.
      </BlogLead>
      <BlogH2>Arbeitgeberpflichten gelten weiter</BlogH2>
      <p>
        Auch außerhalb der Betriebsstätte bleibt der Arbeitgeber für Sicherheit und Gesundheit verantwortlich –
        soweit er Einfluss hat. Das betrifft Bildschirmarbeit, Ergonomie, psychische Belastung und
        Kommunikationswege.
      </p>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 5 Abs. 3 Nr. 6"
        quote="Eine Gefährdung kann sich insbesondere ergeben durch … psychische Belastungen bei der Arbeit."
        source="09_ArbSchG.pdf (Gesetze-Vorschriften)"
      />
      <BlogH2>Was in die Beurteilung gehört</BlogH2>
      <BlogList
        items={[
          "Arbeitsplatz zu Hause: Tisch, Stuhl, Monitor, Beleuchtung (ergonomische Grundanforderungen)",
          "Arbeitszeiten, Erreichbarkeit, Grenzen zwischen Arbeit und Freizeit",
          "Unterweisung zu Bildschirmarbeit (ArbStättV / Gefährdungsbeurteilung)",
          "Unfallversicherungsschutz und Meldewege bei Arbeitsunfällen im Homeoffice klären",
        ]}
      />
      <BlogH3>Dokumentation</BlogH3>
      <p>
        Homeoffice-Regelungen schriftlich festhalten, Beurteilung fortschreiben wenn sich Arbeitsmodelle
        ändern. Einmalige Pauschal-Aussagen reichen nicht.
      </p>
      <BlogTakeaway>
        Homeoffice gehört in die betriebliche Gefährdungsbeurteilung – nicht in eine Schublade.{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          FaSi-Beratung
        </Link>
        .
      </BlogTakeaway>
      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function AsaSitzungPflichten() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Ab 20 Beschäftigten ist ein Arbeitsschutzausschuss (ASA) Pflicht. Wer mitwirkt, wie oft getagt wird
        und welche Themen auf die Tagesordnung gehören.
      </BlogLead>
      <BlogH2>Wann muss ein ASA gebildet werden?</BlogH2>
      <BlogGesetzesZitat
        paragraph="ASiG § 11 Abs. 1"
        quote="… hat der Arbeitgeber in Betrieben mit mehr als zwanzig Beschäftigten einen Arbeitsschutzausschuß zu bilden; bei der Feststellung der Zahl der Beschäftigten sind Teilzeitbeschäftigte mit einer regelmäßigen wöchentlichen Arbeitszeit von nicht mehr als 20 Stunden mit 0,5 und nicht mehr als 30 Stunden mit 0,75 zu berücksichtigen."
        source="ASiG (gesetze-im-internet.de)"
      />
      <BlogH2>Zusammensetzung und Aufgaben</BlogH2>
      <BlogList
        items={[
          "Arbeitgeber (oder Beauftragter), 2 Betriebsratsmitglieder, Betriebsarzt, FaSi, Sicherheitsbeauftragte",
          "Beratung zu Anliegen des Arbeitsschutzes und der Unfallverhütung",
          "Mindestens vierteljährliche Sitzungen",
          "Protokoll mit Beschlüssen und Maßnahmenverfolgung",
        ]}
      />
      <BlogH2>Typische ASA-Themen</BlogH2>
      <p>
        Unfallstatistik, Fortschreibung Gefährdungsbeurteilungen, Unterweisungsplan, Begehungsergebnisse,
        neue Maschinen/Prozesse, Brandschutz und BSB-Bericht, arbeitsmedizinische Vorsorge.
      </p>
      <BlogTakeaway>
        Eine vorbereitete ASA entlastet Führung und Betriebsrat. Wir unterstützen als{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          externe FaSi
        </Link>{" "}
        bei Vorbereitung und Nachverfolgung.
      </BlogTakeaway>
      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function ExplosionsschutzGefaehrdungsbeurteilung() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Explosionsgefahr in Betrieben mit Gefahrstoffen, Staub oder Gasen: Was das Explosionsschutzdokument
        verlangt und wie Sie in NRW systematisch vorgehen.
      </BlogLead>
      <BlogH2>Wann ist Explosionsschutz Thema?</BlogH2>
      <p>
        Überall wo explosionsfähige Atmosphären entstehen können – Lackierereien, Mühlen, Chemie, Holzstaub,
        Tankanlagen. Die Gefährdungsbeurteilung nach GefStoffV muss Brand- und Explosionsgefahren ausweisen.
      </p>
      <BlogGesetzesZitat
        paragraph="GefStoffV § 6 Abs. 9"
        quote="Bei der Dokumentation … hat der Arbeitgeber … die Gefährdungen durch gefährliche explosionsfähige Gemische besonders auszuweisen (Explosionsschutzdokument). Daraus muss insbesondere hervorgehen, dass die Explosionsgefährdungen ermittelt und einer Bewertung unterzogen worden sind …"
        source="12_GefStoffV.pdf (Gesetze-Vorschriften)"
      />
      <BlogH2>Inhalt des Explosionsschutzdokuments</BlogH2>
      <BlogList
        items={[
          "Explosionsschutzkonzept und Zoneneinteilung (EX-Zonen)",
          "Technische und organisatorische Schutzmaßnahmen",
          "Geräte und Anlagen in Ex-Zonen (Zündschutzarten)",
          "Prüfintervalle nach BetrSichV / TRBS",
          "Unterweisung der Beschäftigten",
        ]}
      />
      <BlogTakeaway>
        Explosionsschutz ist Spezialthema – aber Pflicht, wenn die Gefährdung besteht.{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          FaSi mit Gefahrstoff-Erfahrung
        </Link>{" "}
        und{" "}
        <Link href="/leistungen/brandschutz" className="font-semibold text-nrw-gruen hover:underline">
          Brandschutz
        </Link>
        .
      </BlogTakeaway>
      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function BrandschutzordnungTeileAbc() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Die Brandschutzordnung (BSO) ist das zentrale Organisationsdokument im vorbeugenden Brandschutz.
        Was Teil A, B und C bedeuten und wann Sie sie in NRW-Betrieben brauchen.
      </BlogLead>
      <BlogH2>Die drei Teile im Überblick</BlogH2>
      <BlogList
        items={[
          "Teil A: Feuerverhütungsvorschriften für alle Beschäftigten (allgemeine Regeln)",
          "Teil B: Verhalten im Brandfall für Personen ohne besondere Brandschutzaufgaben",
          "Teil C: Aufgaben und Organisation für Brandschutzhelfer, BSB und Evakuierung",
        ]}
      />
      <BlogH2>Wer erstellt die BSO?</BlogH2>
      <p>
        Der Brandschutzbeauftragte erstellt oder aktualisiert die Brandschutzordnung in Abstimmung mit dem
        Arbeitgeber. Sie muss betriebsspezifisch sein – Muster nur als Ausgangspunkt nutzen.
      </p>
      <BlogLegalRef>
        DGUV Information 205-003 und ASR A2.2 – organisatorischer Brandschutz, Brandschutzordnung,
        Brandschutzhelfer.
      </BlogLegalRef>
      <BlogH2>Praxis in NRW</BlogH2>
      <p>
        Fluchtwegepläne, Sammelplätze, Alarmierungsablauf und Unterweisungen müssen zur BSO passen.
        Bei behördlichen Auflagen oder Sonderbauten ist die BSO oft explizit gefordert.
      </p>
      <BlogTakeaway>
        <Link href="/leistungen/brandschutz" className="font-semibold text-nrw-gruen hover:underline">
          Externer BSB
        </Link>{" "}
        erstellt und pflegt Ihre Brandschutzordnung – abgestimmt mit FaSi und Evakuierungsplanung.
      </BlogTakeaway>
      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function SigeplanInhaltPflichten() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Der SiGePlan ist das zentrale Planungsdokument für Sicherheit und Gesundheit auf der Baustelle.
        Welche Inhalte Pflicht sind und wie Bauherren in NRW vorbereitet in die Ausführung gehen.
      </BlogLead>
      <BlogH2>Wann entsteht der SiGePlan?</BlogH2>
      <p>
        Während der Planung der Ausführung erstellt der SiGeKo (oder lässt erstellen) den Sicherheits- und
        Gesundheitsschutzplan – bevor die Baustelle in die Ausführung geht.
      </p>
      <BlogGesetzesZitat
        paragraph="BaustellV § 3 Abs. 2 Nr. 2"
        quote="Während der Planung der Ausführung des Bauvorhabens hat der Koordinator … den Sicherheits- und Gesundheitsschutzplan auszuarbeiten oder ausarbeiten zu lassen …"
        source="Baustellenverordnung (gesetze-im-internet.de)"
      />
      <BlogH2>Typische Inhalte</BlogH2>
      <BlogList
        items={[
          "Baubeschreibung und Phasenplanung",
          "Gefährdungen nach Gewerken und Schnittstellen",
          "Schutzmaßnahmen, Koordinationsregeln zwischen Arbeitgebern",
          "Besondere Arbeiten (Höhenarbeit, Elektro, Abbruch, Wasser)",
          "Notfall- und Erste-Hilfe-Organisation auf der Baustelle",
        ]}
      />
      <BlogH2>Anpassung in der Ausführung</BlogH2>
      <p>
        Ändert sich das Bauvorhaben wesentlich, muss der SiGePlan angepasst werden. Der SiGeKo koordiniert
        die Umsetzung und dokumentiert Übergaben (Unterlage für spätere Arbeiten).
      </p>
      <BlogTakeaway>
        <Link href="/leistungen/sigeko" className="font-semibold text-nrw-gruen hover:underline">
          SiGeKo-Leistung
        </Link>{" "}
        ·{" "}
        <Link href="/blog/sigeko-nrw-orientierung-bauherren" className="font-semibold text-nrw-gruen hover:underline">
          SiGeKo-Orientierung
        </Link>
      </BlogTakeaway>
      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function PsychischeBelastungBeurteilung() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Psychische Belastung am Arbeitsplatz ist seit der ArbSchG-Novelle ausdrücklich Teil der
        Gefährdungsbeurteilung. Was das für Betriebe in Köln und NRW konkret bedeutet.
      </BlogLead>
      <BlogH2>Gesetzliche Verankerung</BlogH2>
      <BlogGesetzesZitat
        paragraph="ArbSchG § 5 Abs. 3 Nr. 6"
        quote="Eine Gefährdung kann sich insbesondere ergeben durch … psychische Belastungen bei der Arbeit."
        source="09_ArbSchG.pdf (Gesetze-Vorschriften)"
      />
      <BlogH2>Typische Belastungsfaktoren</BlogH2>
      <BlogList
        items={[
          "Hohe Zeitdruck, ständige Unterbrechungen, Schicht- und Überstundenarbeit",
          "Konflikte, Mobbing, unklare Zuständigkeiten",
          "Monotone Tätigkeit oder hohe Verantwortungsdichte",
          "Schlechte Führung, fehlende Rückmeldung, Isolation (auch im Homeoffice)",
        ]}
      />
      <BlogH2>Was tun – ohne Überforderung?</BlogH2>
      <p>
        Gefährdungsbeurteilung psychischer Belastung: Beteiligung der Beschäftigten, Betriebsarzt einbeziehen,
        Maßnahmen priorisieren (Organisation, Kommunikation, Arbeitsgestaltung). DGUV und BAuA bieten
        Orientierungshilfen – betriebsspezifisch anwenden.
      </p>
      <BlogTakeaway>
        Psychische Belastung ernst nehmen schützt Menschen und reduziert Ausfallzeiten.{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          FaSi & Betriebsarzt
        </Link>{" "}
        gemeinsam einbinden.
      </BlogTakeaway>
      <BlogDisclaimer />
    </BlogArticleShell>
  );
}

export function VerbandbuchPflichtBetrieb() {
  return (
    <BlogArticleShell>
      <BlogLead>
        Das Verbandbuch ist mehr als ein Regal-Inhalt – es dokumentiert Erste Hilfe und kann bei Unfällen
        und Prüfungen entscheidend sein. Pflichten für NRW-Betriebe im Überblick.
      </BlogLead>
      <BlogH2>Rechtliche Einordnung</BlogH2>
      <p>
        ArbSchG § 10 verlangt angemessene Erste-Hilfe-Maßnahmen. Das Verbandbuch dokumentiert die
        durchgeführte Erste Hilfe bei Arbeitsunfällen – Aufbewahrungspflicht, nicht Verbandskasten selbst.
      </p>
      <BlogLegalRef>
        DGUV Grundsatz 111 – Verbandbuch; UVV „Grundsätze der Prävention“ – Dokumentation von Erste-Hilfe-Leistungen.
      </BlogLegalRef>
      <BlogH2>Was muss dokumentiert werden?</BlogH2>
      <BlogList
        items={[
          "Datum, Zeit und Ort des Vorfalls",
          "Verletzte Person (Name, ggf. anonymisiert nach DSGVO-Konzept)",
          "Art der Verletzung / Unfallhergang kurz",
          "Durchgeführte Erste-Hilfe-Maßnahmen",
          "Name des Ersthelfers / Behandelnden",
        ]}
      />
      <BlogH2>Aufbewahrung</BlogH2>
      <p>
        In der Regel 5 Jahre aufbewahren (bei schweren Unfällen länger). Digitale Systeme sind zulässig,
        wenn Nachvollziehbarkeit und Datenschutz gewährleistet sind.
      </p>
      <BlogTakeaway>
        Verbandbuch, Ersthelfer und Unfallmeldung gehören zusammen. Wir helfen bei der{" "}
        <Link href="/leistungen/arbeitssicherheit" className="font-semibold text-nrw-gruen hover:underline">
          Notfallorganisation
        </Link>{" "}
        im Betrieb.
      </BlogTakeaway>
      <BlogDisclaimer />
    </BlogArticleShell>
  );
}
