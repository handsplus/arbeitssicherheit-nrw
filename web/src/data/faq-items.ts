export type FaqItem = {
  category: string;
  q: string;
  a: string;
  related?: { href: string; label: string }[];
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: "Arbeitssicherheit",
    q: "Braucht unser Unternehmen eine Fachkraft für Arbeitssicherheit?",
    a: "Nach dem Arbeitssicherheitsgesetz (ASiG) und der DGUV Vorschrift 2 müssen Arbeitgeber Betriebe mit Beschäftigten durch eine Fachkraft für Arbeitssicherheit (FaSi) und einen Betriebsarzt betreiben lassen. Die Betreuung kann extern erfolgen – wir übernehmen das für Sie.",
    related: [
      { href: "/leistungen/arbeitssicherheit", label: "Leistung: Arbeitssicherheit & FaSi" },
      { href: "/faq", label: "Weitere FAQ" },
    ],
  },
  {
    category: "Arbeitssicherheit",
    q: "Was macht eine externe Fachkraft für Arbeitssicherheit?",
    a: "Die FaSi berät in allen Fragen der Arbeitssicherheit, unterstützt bei der Gefährdungsbeurteilung, bei Betriebsbegehungen, Unterweisungen und der Umsetzung von Maßnahmen. Sie arbeitet mit dem Betriebsarzt und dem Arbeitgeber zusammen.",
    related: [
      { href: "/blog", label: "Blog: Praxiswissen Arbeitssicherheit" },
      { href: "/checklisten", label: "Checklisten zur Selbstprüfung" },
    ],
  },
  {
    category: "Arbeitssicherheit",
    q: "Wie oft muss eine Gefährdungsbeurteilung aktualisiert werden?",
    a: "Das ArbSchG verlangt eine Gefährdungsbeurteilung vor Aufnahme der Tätigkeit und bei wesentlichen Änderungen der Arbeitsbedingungen. In der Praxis bedeutet das: regelmäßige Überprüfung, sobald sich Tätigkeiten, Arbeitsmittel, Organisation oder rechtliche Anforderungen relevant ändern – und in festen Abständen als Bestandteil Ihres Arbeitssicherheitssystems. Konkrete Intervalle hängen vom Betrieb ab; wir helfen Ihnen, ein nachvollziehbares Prüfintervall festzulegen und zu dokumentieren.",
    related: [
      { href: "/blog", label: "Blog: Gefährdungsbeurteilung" },
      { href: "/glossar", label: "Glossar" },
    ],
  },
  {
    category: "SiGeKo",
    q: "Was ist SiGeKo und wann wird sie benötigt?",
    a: "SiGeKo steht für Sicherheits- und Gesundheitsschutzkoordination. Auf Baustellen mit mehreren Arbeitgebern muss ein SiGeKo bestellt werden. Er koordiniert die Arbeitssicherheit, erstellt den SiGePlan und führt die Unternehmerübergabe durch.",
    related: [{ href: "/leistungen/sigeko", label: "Leistung: SiGeKo" }],
  },
  {
    category: "SiGeKo",
    q: "Wer erstellt den SiGePlan und wer ist verantwortlich?",
    a: "Der SiGeKo erstellt und pflegt den SiGePlan und koordiniert die Sicherheitsmaßnahmen zwischen den am Bau Beteiligten. Die Verantwortung für die Umsetzung der Arbeitssicherheit liegt weiterhin bei den jeweiligen Arbeitgebern und Bauherren; der SiGeKo sorgt für Abstimmung, Dokumentation und Übergaben – damit Informationslücken auf der Baustelle vermieden werden.",
    related: [
      { href: "/leistungen/sigeko", label: "Leistung: SiGeKo" },
      { href: "/rechner", label: "Rechner (Orientierung)" },
    ],
  },
  {
    category: "Brandschutz",
    q: "Wann brauchen wir einen Brandschutzbeauftragten?",
    a: "Die Bestellung eines Brandschutzbeauftragten kann sich aus Rechtsvorschriften, Auflagen oder betrieblicher Entscheidung ergeben. Wir beraten Sie, ob und in welchem Umfang ein Brandschutzbeauftragter erforderlich ist, und übernehmen die Rolle extern.",
    related: [{ href: "/leistungen/brandschutz", label: "Leistung: Brandschutz" }],
  },
  {
    category: "Brandschutz",
    q: "Was umfasst ein Brandschutzkonzept?",
    a: "Ein Brandschutzkonzept beschreibt die geplanten Maßnahmen im baulichen, anlagentechnischen und organisatorischen Brandschutz. Es wird oft bei Neubau, Umbau oder Sonderbauten von Behörden gefordert. Wir erstellen und begleiten solche Konzepte.",
    related: [
      { href: "/leistungen/brandschutz", label: "Leistung: Brandschutz" },
      { href: "/leistungen/schulungen", label: "Schulungen & Unterweisungen" },
    ],
  },
  {
    category: "Elektrosicherheit",
    q: "Wie oft müssen Elektrogeräte geprüft werden?",
    a: "Die Prüffristen hängen von der Art der Betriebsmittel und der Umgebung ab (z. B. DGUV Vorschrift 3). Ortsveränderliche Geräte werden oft in Abständen von 6–24 Monaten geprüft. Wir führen die Prüfungen durch und dokumentieren sie.",
    related: [{ href: "/leistungen/elektrosicherheit", label: "Leistung: Elektrosicherheit" }],
  },
  {
    category: "Arbeitssicherheit",
    q: "Was ist der Unterschied zwischen Unterweisung und Schulung?",
    a: "Unterweisungen im Arbeitsschutz sind häufig gesetzlich vorgeschrieben (z. B. bei Erstunterweisung, Wechsel der Tätigkeit, neuen Gefährdungen) und zielen auf konkrete betriebliche Regeln und Gefährdungen. Schulungen vertiefen Kompetenzen (z. B. Brandschutzhelfer, Führungskräfte) und können über die Mindestanforderungen hinausgehen. Wir kombinieren beides zeitlich sinnvoll, damit Nachweise vollständig sind und Ihre Teams wirklich profitieren.",
    related: [
      { href: "/leistungen/schulungen", label: "Leistung: Schulungen" },
      { href: "/schulungskalender", label: "Schulungskalender" },
    ],
  },
  {
    category: "Managementsysteme",
    q: "Lohnt sich ISO 45001 neben dem gesetzlichen Arbeitsschutz?",
    a: "ISO 45001 ersetzt keine gesetzlichen Pflichten, ergänzt sie aber sinnvoll: strukturierte Risikobewertung, Führung, Kommunikation und kontinuierliche Verbesserung schaffen Klarheit – besonders in größeren Organisationen oder bei Kundenanforderungen in Ausschreibungen. Wir unterstützen bei Einführung und Optimierung passend zu Ihrem Betrieb.",
    related: [{ href: "/leistungen/managementsysteme", label: "Leistung: Managementsysteme" }],
  },
];
