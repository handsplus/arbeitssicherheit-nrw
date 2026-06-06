import { SITE, SIFA_PAGE_PATH } from "@/lib/constants";
import { SIFA_PAGE_FAQ } from "@/data/sifa-faq";

const pageUrl = `${SITE.url}${SIFA_PAGE_PATH}`;

export function SifaSchemas() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Externe Fachkraft für Arbeitssicherheit in Köln",
    alternateName: ["Externe SiFa Köln", "SiFa-Betreuung Köln", "Sicherheitsfachkraft Köln"],
    description:
      "Externe Fachkraft für Arbeitssicherheit (SiFa) in Köln: DGUV-konforme Arbeitsschutzbetreuung, Gefährdungsbeurteilungen, Unterweisungen, Begehungen und vollständige Dokumentation für Unternehmen in Köln und Umgebung.",
    serviceType: "Sicherheitstechnische Betreuung nach DGUV Vorschrift 2",
    url: pageUrl,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: [
      { "@type": "City", name: "Köln" },
      { "@type": "AdministrativeArea", name: "Rhein-Erft-Kreis" },
      { "@type": "AdministrativeArea", name: "Rhein-Sieg-Kreis" },
      { "@type": "City", name: "Leverkusen" },
      { "@type": "City", name: "Bonn" },
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Kleine und mittlere Unternehmen in Köln",
    },
    knowsAbout: [
      "Fachkraft für Arbeitssicherheit",
      "DGUV Vorschrift 2",
      "Arbeitssicherheitsgesetz",
      "Gefährdungsbeurteilung",
      "Sicherheitsunterweisung",
    ],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      areaServed: { "@type": "City", name: "Köln" },
      description: "Unverbindliches Erstgespräch und individuelles Angebot nach Betriebsgröße und Gefährdungsgruppe.",
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Externe Fachkraft für Arbeitssicherheit in Köln",
    description:
      "DGUV-konforme SiFa-Betreuung für Unternehmen in Köln: Gefährdungsbeurteilungen, Unterweisungen, Begehungen und vollständige Arbeitsschutz-Dokumentation.",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${pageUrl}#service` },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SIFA_PAGE_FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
