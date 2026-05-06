export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  /** ISO-Datum für strukturierte Daten */
  datePublished: string;
};

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: "gefaehrdungsbeurteilung-unterschrift",
    title: "Muss die Gefährdungsbeurteilung unterschrieben werden?",
    description:
      "ArbSchG, Verantwortung des Arbeitgebers und GefStoffV: ob eine Unterschrift auf der Gefährdungsbeurteilung nötig ist – kompakt erklärt für Betriebe in NRW.",
    datePublished: "2024-03-01",
  },
  {
    slug: "getraenke-arbeitsplatz-arbeitgeber",
    title: "Muss der Arbeitgeber Getränke zur Verfügung stellen?",
    description:
      "Fürsorgepflicht, ArbStättV und ASR A4.1: Wann Getränke am Arbeitsplatz Pflicht sind – und was bei Hitze und Baustelle gilt.",
    datePublished: "2024-03-08",
  },
  {
    slug: "akteure-arbeitsschutz-ueberblick",
    title: "Akteure im Arbeitsschutz – wer kümmert sich um was?",
    description:
      "Arbeitgeber, FaSi, Sicherheitsbeauftragte, Betriebsarzt und Arbeitsschutzausschuss: Rollen und Zuständigkeiten im Überblick.",
    datePublished: "2024-03-15",
  },
  {
    slug: "ladestation-e-auto-garage-genehmigung",
    title: "Ladestation für E-Autos in Garagen genehmigungspflichtig?",
    description:
      "Einordnung zu Leitungsanlagen, Garage und Landesbauordnung NRW – ohne Rechtsberatung, mit Praxisbezug für Unternehmen.",
    datePublished: "2024-04-01",
  },
  {
    slug: "unterweisung-arbeitssicherheit-pflichtinhalte",
    title: "Unterweisung Arbeitssicherheit: Was muss wirklich drinstehen?",
    description:
      "Inhalte nach Gefährdungsbeurteilung und DGUV Vorschrift 2, Nachweise und Schnittstelle zu Brandschutz und FaSi.",
    datePublished: "2024-04-10",
  },
  {
    slug: "sigeko-und-betrieb-schnittstelle",
    title: "SiGeKo und Arbeitssicherheit im Betrieb – wie hängt das zusammen?",
    description:
      "Baustelle vs. Stammbetrieb: SiGeKo, ASiG und DGUV Vorschrift 2 sinnvoll verzahnen – für Bauvorhaben in Köln und NRW.",
    datePublished: "2024-04-18",
  },
  {
    slug: "externe-fachkraft-arbeitssicherheit-koeln",
    title: "Externe Fachkraft für Arbeitssicherheit in Köln: Worauf kommt es an?",
    description:
      "FaSi extern beauftragen: Branchenkenntnis, Dokumentation, Zusammenarbeit mit Betriebsarzt – Checkliste für die Auswahl.",
    datePublished: "2024-05-01",
  },
  {
    slug: "brandschutzbeauftragter-nrw-intern-extern",
    title: "Brandschutzbeauftragter (BSB) in NRW: intern oder extern?",
    description:
      "Wann interne Besetzung reicht und wann externer BSB entlastet – mit Blick auf Köln, mehrere Standorte und Auflagen.",
    datePublished: "2024-05-10",
  },
  {
    slug: "sigeko-nrw-orientierung-bauherren",
    title: "SiGeKo NRW: Erste Orientierung für Bauherren und Ausführende",
    description:
      "SiGePlan, Koordination auf der Baustelle, Pflichten und Schnittstelle zum Betrieb – kompakt für NRW und Köln.",
    datePublished: "2024-05-20",
  },
];

const bySlug = new Map(BLOG_POSTS.map((p) => [p.slug, p]));

export function getBlogPost(slug: string): BlogPostMeta | undefined {
  return bySlug.get(slug);
}
