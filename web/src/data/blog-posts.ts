export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  /** ISO-Datum für strukturierte Daten */
  datePublished: string;
};

export const BLOG_POSTS: BlogPostMeta[] = [
  // --- März 2026 (2 pro Woche) ---
  {
    slug: "gefaehrdungsbeurteilung-unterschrift",
    title: "Muss die Gefährdungsbeurteilung unterschrieben werden?",
    description:
      "ArbSchG, Verantwortung des Arbeitgebers und GefStoffV: ob eine Unterschrift auf der Gefährdungsbeurteilung nötig ist – kompakt erklärt für Betriebe in NRW.",
    datePublished: "2026-03-02",
  },
  {
    slug: "getraenke-arbeitsplatz-arbeitgeber",
    title: "Muss der Arbeitgeber Getränke zur Verfügung stellen?",
    description:
      "Fürsorgepflicht, ArbStättV und ASR A3.5: Wann Getränke am Arbeitsplatz Pflicht sind – und was bei Hitze und Baustelle gilt.",
    datePublished: "2026-03-05",
  },
  {
    slug: "akteure-arbeitsschutz-ueberblick",
    title: "Akteure im Arbeitsschutz – wer kümmert sich um was?",
    description:
      "Arbeitgeber, FaSi, Sicherheitsbeauftragte, Betriebsarzt und Arbeitsschutzausschuss: Rollen und Zuständigkeiten im Überblick.",
    datePublished: "2026-03-09",
  },
  {
    slug: "ladestation-e-auto-garage-genehmigung",
    title: "Ladestation für E-Autos in Garagen genehmigungspflichtig?",
    description:
      "Einordnung zu Leitungsanlagen, Garage und Landesbauordnung NRW – ohne Rechtsberatung, mit Praxisbezug für Unternehmen.",
    datePublished: "2026-03-12",
  },
  {
    slug: "unterweisung-arbeitssicherheit-pflichtinhalte",
    title: "Unterweisung Arbeitssicherheit: Was muss wirklich drinstehen?",
    description:
      "Inhalte nach Gefährdungsbeurteilung und DGUV Vorschrift 2, Nachweise und Schnittstelle zu Brandschutz und FaSi.",
    datePublished: "2026-03-16",
  },
  {
    slug: "sigeko-und-betrieb-schnittstelle",
    title: "SiGeKo und Arbeitssicherheit im Betrieb – wie hängt das zusammen?",
    description:
      "Baustelle vs. Stammbetrieb: SiGeKo, ASiG und DGUV Vorschrift 2 sinnvoll verzahnen – für Bauvorhaben in Köln und NRW.",
    datePublished: "2026-03-19",
  },
  {
    slug: "externe-fachkraft-arbeitssicherheit-koeln",
    title: "Externe Fachkraft für Arbeitssicherheit in Köln: Worauf kommt es an?",
    description:
      "FaSi extern beauftragen: Branchenkenntnis, Dokumentation, Zusammenarbeit mit Betriebsarzt – Checkliste für die Auswahl.",
    datePublished: "2026-03-23",
  },
  {
    slug: "brandschutzbeauftragter-nrw-intern-extern",
    title: "Brandschutzbeauftragter (BSB) in NRW: intern oder extern?",
    description:
      "Wann interne Besetzung reicht und wann externer BSB entlastet – mit Blick auf Köln, mehrere Standorte und Auflagen.",
    datePublished: "2026-03-26",
  },
  {
    slug: "sigeko-nrw-orientierung-bauherren",
    title: "SiGeKo NRW: Erste Orientierung für Bauherren und Ausführende",
    description:
      "SiGePlan, Koordination auf der Baustelle, Pflichten und Schnittstelle zum Betrieb – kompakt für NRW und Köln.",
    datePublished: "2026-03-30",
  },

  // --- Mai 2026 (2 pro Woche) ---
  {
    slug: "verbandbuch-pflicht-betrieb-dokumentation",
    title: "Verbandbuch im Betrieb: Pflicht, Inhalt und Aufbewahrung",
    description:
      "ArbSchG § 10 und DGUV: Was im Verbandbuch dokumentiert werden muss, wie lange es aufbewahrt wird und wie Ersthelfer es führen – für NRW-Betriebe.",
    datePublished: "2026-05-28",
  },
  {
    slug: "psychische-belastung-gefaehrdungsbeurteilung",
    title: "Psychische Belastung: Was in die Gefährdungsbeurteilung gehört",
    description:
      "ArbSchG § 5: Psychische Belastungen beurteilen – typische Faktoren, Maßnahmen und Zusammenarbeit mit Betriebsarzt in Köln und NRW.",
    datePublished: "2026-05-24",
  },
  {
    slug: "sigeplan-inhalt-pflichten-baustelle",
    title: "SiGePlan: Inhalte, Pflichten und Anpassung auf der Baustelle",
    description:
      "BaustellV § 3: Was in den Sicherheits- und Gesundheitsschutzplan gehört – für Bauvorhaben in Köln und NRW verständlich erklärt.",
    datePublished: "2026-05-21",
  },
  {
    slug: "brandschutzordnung-teil-a-b-c",
    title: "Brandschutzordnung Teil A, B und C – was bedeutet das?",
    description:
      "Organisatorischer Brandschutz in NRW: Aufbau der Brandschutzordnung, Zuständigkeiten und Verzahnung mit Brandschutzhelfer und BSB.",
    datePublished: "2026-05-17",
  },
  {
    slug: "explosionsschutz-gefaehrdungsbeurteilung",
    title: "Explosionsschutz: Explosionsschutzdokument und Gefährdungsbeurteilung",
    description:
      "GefStoffV § 6: Wann ein Explosionsschutzdokument Pflicht ist, Zoneneinteilung und Maßnahmen – kompakt für Betriebe in NRW.",
    datePublished: "2026-05-14",
  },
  {
    slug: "arbeitsschutzausschuss-asa-pflichten",
    title: "Arbeitsschutzausschuss (ASA): Pflicht, Zusammensetzung, Sitzungen",
    description:
      "ASiG § 11: Ab 20 Beschäftigten ASA bilden – wer mitwirkt, wie oft getagt wird und typische Themen für Betriebe in NRW.",
    datePublished: "2026-05-10",
  },
  {
    slug: "homeoffice-gefaehrdungsbeurteilung-pflicht",
    title: "Homeoffice: Gefährdungsbeurteilung und Pflichten des Arbeitgebers",
    description:
      "Mobiles Arbeiten in Köln und NRW: Ergonomie, psychische Belastung, Unterweisung – was in die betriebliche Gefährdungsbeurteilung gehört.",
    datePublished: "2026-05-07",
  },
  {
    slug: "elektropruefung-dguv-vorschrift-3-fristen",
    title: "Elektroprüfung nach DGUV V3: Fristen, Pflichten, Dokumentation",
    description:
      "Elektrische Betriebsmittel und Anlagen prüfen: Wer ist verantwortlich, welche Intervalle gelten und wie VEFK und FaSi zusammenarbeiten.",
    datePublished: "2026-05-03",
  },

  // --- April 2026 (2 pro Woche) ---
  {
    slug: "hitzearbeit-schutz-massnahmen-nrw",
    title: "Hitzearbeit in NRW: Schutzmaßnahmen ab +26 °C und +30 °C",
    description:
      "ASR A3.5 und Gefährdungsbeurteilung: Getränke, Pausen, Arbeitszeitverlagerung und Hitzeaktionsplan für Betriebe in Köln und NRW.",
    datePublished: "2026-04-26",
  },
  {
    slug: "betriebsbegehung-was-wird-geprueft",
    title: "Betriebsbegehung: Was wird geprüft und wie bereiten Sie sich vor?",
    description:
      "ASiG § 6 und FaSi-Aufgaben: Typische Prüfpunkte bei Begehungen, Protokollierung und Maßnahmenverfolgung in NRW-Betrieben.",
    datePublished: "2026-04-23",
  },
  {
    slug: "ersthelfer-im-betrieb-pflichten",
    title: "Ersthelfer im Betrieb: Anzahl, Ausbildung und Organisation",
    description:
      "ArbSchG § 10: Wie viele Ersthelfer Sie brauchen, welche Kurse Pflicht sind und wie die Dokumentation in Köln und NRW aussieht.",
    datePublished: "2026-04-19",
  },
  {
    slug: "gefahrstoffe-lagern-betrieb-pflichten",
    title: "Gefahrstoffe lagern: Pflichten, Mengen und Explosionsschutz",
    description:
      "GefStoffV und TRGS: Sichere Lagerung im Betrieb, Kennzeichnung, Gefahrstoffverzeichnis und Brandgefahr – Praxisguide für NRW.",
    datePublished: "2026-04-16",
  },
  {
    slug: "fasi-bestellung-pflicht-fristen",
    title: "FaSi bestellen: Pflicht, Fristen und Folgen bei Versäumnis",
    description:
      "ASiG und DGUV Vorschrift 2: Wann die Bestellung der Fachkraft für Arbeitssicherheit Pflicht ist – für Unternehmen in Köln und NRW.",
    datePublished: "2026-04-12",
  },
  {
    slug: "sigeko-ab-wann-pflicht-baustelle",
    title: "SiGeKo: Ab wann Pflicht auf der Baustelle?",
    description:
      "BaustellV § 3: Wann ein SiGeKo bestellt werden muss, Ausnahmen und typische Grenzfälle bei Bauvorhaben in Köln und NRW.",
    datePublished: "2026-04-09",
  },
  {
    slug: "brandschutzhelfer-ausbildung-pflicht-nrw",
    title: "Brandschutzhelfer in NRW: Ausbildung, Pflicht und Organisation",
    description:
      "ASR A2.2 und DGUV 205-023: Wann Brandschutzhelfer nötig sind, Ausbildungsinhalt und Verzahnung mit BSB und Evakuierungsplan.",
    datePublished: "2026-04-05",
  },
  {
    slug: "gefaehrdungsbeurteilung-erstellen-schritt-fuer-schritt",
    title: "Gefährdungsbeurteilung erstellen: Schritt-für-Schritt-Anleitung",
    description:
      "ArbSchG § 5 und § 6: Gefährdungsbeurteilung in 4 Schritten – von der Erfassung bis zur Dokumentation für Betriebe in Köln und NRW.",
    datePublished: "2026-04-02",
  },
];

const bySlug = new Map(BLOG_POSTS.map((p) => [p.slug, p]));

export function getBlogPost(slug: string): BlogPostMeta | undefined {
  return bySlug.get(slug);
}

/** Neueste Artikel zuerst (Blog-Übersicht, Startseite) */
export function getBlogPostsSorted(): BlogPostMeta[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );
}
