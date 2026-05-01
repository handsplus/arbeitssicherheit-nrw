import { SITE, CONTACT, LEISTUNGEN, GEO, PRESS_MENTIONS } from "@/lib/constants";

const ORGANIZATION_ID = `${SITE.url}/#organization`;
const LOGO_URL = `${SITE.url}/icon`;
const SOCIAL_IMAGE_URL = `${SITE.url}/opengraph-image`;

/**
 * Strukturierte Daten (JSON-LD) für Google, Bing und KI-gestützte Antworten:
 * ProfessionalService + WebSite + Leistungen, Geo, knowsAbout.
 */
export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORGANIZATION_ID,
    name: SITE.name,
    alternateName: ["Arbeitssicherheit NRW", "AS NRW", "Health and Safety Plus"],
    description: SITE.description,
    url: SITE.url,
    logo: { "@type": "ImageObject", url: LOGO_URL, contentUrl: LOGO_URL },
    image: [SOCIAL_IMAGE_URL],
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    knowsAbout: [...SITE.knowsAbout],
    subjectOf: PRESS_MENTIONS.map((p) => ({
      "@type": "NewsArticle",
      headline: p.title,
      url: p.url,
      description: p.summary,
      publisher: {
        "@type": "NewsMediaOrganization",
        name: p.outlet,
      },
    })),
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
      name: "Leistungen: Schwerpunkt Arbeitssicherheit, Brandschutz, SiGeKo; ergänzend Schulungen, Elektrosicherheit, Managementsysteme",
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
    alternateName: SITE.name,
    description: SITE.description,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "de-DE",
    isAccessibleForFree: true,
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
