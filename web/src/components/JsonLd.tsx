import { SITE, CONTACT } from "@/lib/constants";

/**
 * Strukturierte Daten (JSON-LD) für Suchmaschinen: LocalBusiness + angebotene Leistungen
 * (Arbeitssicherheit, Brandschutz, SiGeKo) – verbessert Auffindbarkeit in Köln/NRW.
 */
export function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: CONTACT.phoneHref.replace("tel:", ""),
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address,
      addressLocality: CONTACT.city,
      postalCode: CONTACT.zip,
      addressRegion: "NRW",
      addressCountry: "DE",
    },
    areaServed: [
      { "@type": "City", name: "Köln" },
      { "@type": "State", name: "Nordrhein-Westfalen" },
    ],
    priceRange: "€€",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Leistungen Arbeitssicherheit, Brandschutz, SiGeKo",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Arbeitssicherheit",
            description:
              "Externe Fachkraft für Arbeitssicherheit (FaSi), Gefährdungsbeurteilung, Betreuung nach ASiG und DGUV Vorschrift 2 in Köln und NRW.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brandschutz",
            description:
              "Externer Brandschutzbeauftragter, Brandschutzkonzepte, baulicher und organisatorischer Brandschutz in Köln und NRW.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SiGeKo",
            description:
              "Sicherheits- und Gesundheitsschutzkoordination auf der Baustelle gemäß Baustellenverordnung in Köln und NRW.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Schulungen",
            description: "Schulungen und Unterweisungen zu Arbeitssicherheit, Brandschutz und SiGeKo in Köln und NRW.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}
