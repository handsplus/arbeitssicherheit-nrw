import { FAQ_ITEMS } from "@/data/faq-items";
import { SITE } from "@/lib/constants";
import { pageSocialMeta } from "@/lib/page-metadata";

const title = "FAQ Arbeitssicherheit Köln & NRW";
const description =
  "Häufige Fragen zu externer FaSi, Arbeitsschutz, Brandschutzbeauftragtem, SiGeKo, Gefährdungsbeurteilung und Erstberatung in Köln und NRW.";

export const metadata = {
  title,
  description,
  alternates: { canonical: `${SITE.url}/faq` },
  ...pageSocialMeta({ path: "/faq", title, description }),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
