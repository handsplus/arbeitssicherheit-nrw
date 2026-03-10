export const SITE = {
  name: "Arbeitssicherheit.nrw",
  title: "Arbeitssicherheit Köln | Arbeitssicherheit, Brandschutz, SiGeKo – Arbeitssicherheit.nrw",
  description:
    "Ihre Anlaufstelle in Köln und NRW: Arbeitssicherheit, Brandschutz, SiGeKo, Schulungen, Elektrosicherheit. Rechtssicher, entlastend.",
  url: "https://www.arbeitssicherheit.nrw",
} as const;

export const CONTACT = {
  company: "Arbeitssicherheit.nrw",
  address: "Barcelona Allee 12",
  zip: "51103",
  city: "Köln",
  phone: "0152-28261619",
  /** International format for reliable tel: link behavior across devices */
  phoneHref: "tel:+4915228261619",
  email: "kontakt@handsplus.de",
  emailHref: "mailto:kontakt@handsplus.de",
  whatsapp: "https://wa.me/message/7RRI5T7VDIYEL1",
  /** Platzhalter – echte URLs eintragen, sonst werden die Icons im Footer ausgeblendet */
  youtube: "https://www.youtube.com/@handsplus",
  linkedin: "https://www.linkedin.com/company/health-and-safety-plus/?viewAsMember=true",
  facebook: "https://www.facebook.com/profile.php?id=61565969362568",
  instagram: "https://www.instagram.com/healthandsafetyplus?igshid=YmMyMTA2M2Y%3D",
} as const;

export const NAV = [
  { label: "Start", href: "/" },
  {
    label: "Leistungen",
    href: "/leistungen",
    children: [
      { label: "Arbeitssicherheit", href: "/leistungen/arbeitssicherheit" },
      { label: "Brandschutz", href: "/leistungen/brandschutz" },
      { label: "SiGeKo", href: "/leistungen/sigeko" },
      { label: "Schulungen", href: "/leistungen/schulungen" },
      { label: "Elektrosicherheit", href: "/leistungen/elektrosicherheit" },
      { label: "Managementsysteme", href: "/leistungen/managementsysteme" },
    ],
  },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Wissen", href: "/wissen" },
  {
    label: "Über uns",
    href: "/ueber-uns",
    children: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
  },
  { label: "Beratung buchen", href: "/beratung-buchen" },
] as const;

export const LEISTUNGEN = [
  {
    title: "Arbeitssicherheit",
    slug: "arbeitssicherheit",
    icon: "shield" as const,
    short:
      "Grund- und betriebsspezifische Betreuung zur Arbeitssicherheit gemäß Arbeitssicherheitsgesetz (ASiG) und DGUV Vorschrift 2",
    href: "/leistungen/arbeitssicherheit",
  },
  {
    title: "Brandschutz",
    slug: "brandschutz",
    icon: "brandschutz" as const,
    short:
      "Externer Brandschutzbeauftragter, Beratung und Konzepte im baulichen, anlagentechnischen und organisatorischen Brandschutz",
    href: "/leistungen/brandschutz",
  },
  {
    title: "SiGeKo",
    slug: "sigeko",
    icon: "sigeko" as const,
    short:
      "Sicherheits- und Gesundheitsschutzkoordination auf der Baustelle: SiGeKo-Leistungen gemäß Baustellenverordnung – Planung, Koordination und Dokumentation.",
    href: "/leistungen/sigeko",
  },
  {
    title: "Schulungen",
    slug: "schulungen",
    icon: "academic" as const,
    short:
      "Schulungs- und Weiterbildungsangebote, die individuell auf Sie abgestimmt und zeitlich flexibel gestaltet werden – online oder vor Ort.",
    href: "/leistungen/schulungen",
  },
  {
    title: "Elektrosicherheit",
    slug: "elektrosicherheit",
    icon: "lightning" as const,
    short:
      "Externe verantwortliche Elektrofachkraft (VEFK) gemäß DIN VDE 1000-10 und Durchführung von Elektroprüfungen",
    href: "/leistungen/elektrosicherheit",
  },
  {
    title: "Managementsysteme",
    slug: "managementsysteme",
    icon: "chart" as const,
    short: "Einführung und Optimierung von Managementsystemen (z. B. ISO 45001, ISO 14001)",
    href: "/leistungen/managementsysteme",
  },
] as const;
