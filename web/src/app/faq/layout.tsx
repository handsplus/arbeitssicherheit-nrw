import { SITE } from "@/lib/constants";

export const metadata = {
  title: "FAQ Arbeitssicherheit Köln & NRW | externe FaSi, BSB, SiGeKo, Arbeitsschutz",
  description:
    "Häufige Fragen zu externer Fachkraft für Arbeitssicherheit (FaSi), Arbeitsschutz, Brandschutzbeauftragtem in Köln, SiGeKo auf Baustellen in NRW, Gefährdungsbeurteilung und Erstberatung – mit Links zu Leistungen, Blog und Checklisten.",
  alternates: { canonical: `${SITE.url}/faq` },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
