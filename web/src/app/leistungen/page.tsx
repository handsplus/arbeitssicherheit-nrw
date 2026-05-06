import Link from "next/link";
import { LEISTUNGEN, SITE } from "@/lib/constants";
import { ServiceCard } from "@/components/ServiceCard";
import { PrimaryCtaLink } from "@/components/PrimaryCtaLink";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { OfficialSourcesBlock } from "@/components/content/OfficialSourcesBlock";
import { RelatedOnSite } from "@/components/content/RelatedOnSite";
import { OFFICIAL_GENERAL } from "@/lib/officialSources";

export const metadata = {
  title: "Leistungen: Arbeitssicherheit, Brandschutz, SiGeKo – Köln & NRW",
  description:
    "Schwerpunkt Arbeitssicherheit (FaSi), Brandschutz und SiGeKo; dazu Schulungen sowie bei Bedarf Elektrosicherheit und Managementsysteme – aus einer Hand in Köln und NRW.",
  alternates: { canonical: `${SITE.url}/leistungen` },
  openGraph: {
    title: "Leistungen: Arbeitssicherheit, Brandschutz, SiGeKo | Köln & NRW",
    description:
      "Arbeitssicherheit, Brandschutz, SiGeKo zuerst; ergänzend Schulungen, VEFK und Managementsysteme. Partner in Köln und NRW.",
    url: `${SITE.url}/leistungen`,
  },
};

export default function LeistungenPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <BreadcrumbJsonLd items={[{ name: "Start", url: "/" }, { name: "Leistungen" }]} />
      <p className="text-sm font-semibold uppercase tracking-widest text-nrw-gruen">
        Unsere Leistungen
      </p>
      <h1 className="mt-2 text-4xl font-bold text-nrw-grau-900 md:text-5xl">
        Alles aus einer Hand
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-nrw-grau-600">
        Schwerpunkt Arbeitssicherheit, Brandschutz und SiGeKo; ergänzend Schulungen sowie bei Bedarf
        Elektrosicherheit und Managementsysteme – für Rechtssicherheit und weniger Aufwand in Ihrem
        Unternehmen.
      </p>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {LEISTUNGEN.map((l) => (
          <ServiceCard key={l.slug} title={l.title} short={l.short} href={l.href} icon={l.icon} />
        ))}
      </div>
      <div className="prose mt-16 max-w-none rounded-2xl border border-nrw-grau-200 bg-nrw-grau-50 p-6 md:p-8 prose-p:text-nrw-grau-700 prose-a:text-nrw-gruen">
        <h2 className="text-xl font-bold text-nrw-grau-900 md:text-2xl">Orientierung & Tiefgang</h2>
        <p>
          Unter{" "}
          <Link href="/wissen" className="font-semibold">
            Wissen
          </Link>{" "}
          bündeln wir FAQ, Glossar, Checklisten und Rechner. Im{" "}
          <Link href="/blog" className="font-semibold">
            Blog
          </Link>{" "}
          finden Sie längere Praxisartikel – sinnvoll ergänzend zu den Leistungsseiten und für die
          Einordnung typischer Fragestellungen in Köln und NRW.
        </p>
      </div>
      <OfficialSourcesBlock
        title="Staatliche Stellen & Gesetzestexte"
        intro="Seriöse externe Verlinkungen stärken Vertrauen und helfen Google sowie Leser:innen, Inhalte einzuordnen."
        links={OFFICIAL_GENERAL.slice(0, 4)}
      />
      <RelatedOnSite
        title="Weiterführend auf dieser Website"
        links={[
          { href: "/faq", label: "FAQ", description: "Kurzantworten zu Pflichten" },
          { href: "/blog", label: "Blog", description: "Vertiefende Artikel" },
          { href: "/wissen", label: "Wissen", description: "Glossar, Checklisten, Rechner" },
          { href: "/beratung-buchen", label: "Beratung buchen", description: "Direkter Kontakt" },
        ]}
      />
      <div className="mt-14 text-center">
        <PrimaryCtaLink
          theme="default"
          className="inline-flex items-center gap-2 rounded-full bg-nrw-rot px-8 py-4 font-semibold text-white hover:bg-nrw-rot-hover"
        />
      </div>
    </div>
  );
}
