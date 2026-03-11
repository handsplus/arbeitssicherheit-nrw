import { SITE, CONTACT, LEISTUNGEN } from "@/lib/constants";

const ORGANIZATION_ID = `${SITE.url}/#organization`;

/**
 * Strukturierte Daten (JSON-LD) für maximale Google-Sichtbarkeit:
 * WebSite (Sitelinks, Indexierung) + Organization (Knowledge Panel, lokale Suche) + Leistungen.
 */
export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORGANIZATION_ID,
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
      { "@type": "City", name: "Düsseldorf" },
      { "@type": "City", name: "Dortmund" },
      { "@type": "City", name: "Essen" },
      { "@type": "City", name: "Bonn" },
      { "@type": "City", name: "Wuppertal" },
      { "@type": "State", name: "Nordrhein-Westfalen" },
    ],
    sameAs: [
      CONTACT.linkedin,
      CONTACT.facebook,
      CONTACT.instagram,
      CONTACT.youtube,
    ],
    priceRange: "€€",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Leistungen Arbeitssicherheit, Brandschutz, SiGeKo, Schulungen, Elektrosicherheit",
      itemListElement: LEISTUNGEN.map((l) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: l.title,
          description: l.short,
          url: `${SITE.url}${l.href}`,
        },
      })),
    },
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "de-DE",
    potentialAction: {
      "@type": "ReadAction",
      target: { "@type": "EntryPoint", url: SITE.url },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
    </>
  );
}
