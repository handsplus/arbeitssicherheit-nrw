import Link from "next/link";
import { IconArrowRight } from "@/components/Icons";
import { OfficialSourcesBlock } from "@/components/content/OfficialSourcesBlock";
import { RelatedOnSite } from "@/components/content/RelatedOnSite";
import { OFFICIAL_GENERAL, OFFICIAL_SIGEKO } from "@/lib/officialSources";
import { SITE } from "@/lib/constants";
import { BLOG_POSTS } from "@/data/blog-posts";

export const metadata = {
  title: "Blog: Arbeitssicherheit Köln, externe FaSi, Brandschutzbeauftragter & SiGeKo NRW",
  description:
    "Praxisartikel zu Arbeitssicherheit und Arbeitsschutz in Köln und NRW: externe Fachkraft für Arbeitssicherheit (FaSi), Brandschutzbeauftragter (BSB), SiGeKo auf der Baustelle, Gefährdungsbeurteilung und Unterweisung. Mit Links zu FAQ, Leistungen und Behördenquellen.",
  alternates: { canonical: `${SITE.url}/blog` },
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-nrw-gruen">Blog</p>
      <h1 className="mt-2 text-4xl font-bold text-nrw-grau-900">
        Blog: Arbeitssicherheit Köln, Brandschutz &amp; SiGeKo NRW
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-nrw-grau-600">
        Jeder Artikel hat eine eigene URL für bessere Auffindbarkeit in Google. Themen: FaSi, BSB,
        SiGeKo, Gefährdungsbeurteilung, Unterweisung und Arbeitsschutz in Köln und NRW. Ergänzend:{" "}
        <Link href="/faq" className="font-semibold text-nrw-gruen hover:underline">
          FAQ
        </Link>
        ,{" "}
        <Link href="/wissen" className="font-semibold text-nrw-gruen hover:underline">
          Wissen &amp; Ressourcen
        </Link>{" "}
        und die{" "}
        <Link href="/leistungen" className="font-semibold text-nrw-gruen hover:underline">
          Leistungsseiten
        </Link>
        .
      </p>

      <OfficialSourcesBlock
        title="Behörden & Gesetzestexte (für Ihre Einordnung)"
        intro="Unsere Artikel ersetzen keine Rechtsberatung. Für verbindliche Auslegung nutzen Sie die offiziellen Quellen – verlinkt auch auf den Leistungsseiten."
        links={[...OFFICIAL_GENERAL.slice(0, 4), ...OFFICIAL_SIGEKO]}
      />

      <h2 className="mt-14 text-2xl font-bold text-nrw-grau-900">Alle Artikel</h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {BLOG_POSTS.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="flex h-full flex-col rounded-2xl border border-nrw-grau-200 bg-white p-6 shadow-sm transition hover:border-nrw-gruen hover:shadow-md"
            >
              <span className="text-lg font-bold text-nrw-grau-900">{post.title}</span>
              <span className="mt-2 flex-1 text-sm text-nrw-grau-600">{post.description}</span>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-nrw-gruen">
                Weiterlesen
                <IconArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <RelatedOnSite
        className="mt-16"
        links={[
          { href: "/faq", label: "FAQ", description: "Arbeitssicherheit Köln & NRW" },
          { href: "/beratung-buchen", label: "Erstberatung", description: "Unverbindlich Termin" },
          { href: "/checklisten", label: "Checklisten", description: "Selbstbewertung" },
          { href: "/glossar", label: "Glossar", description: "Begriffe von ASiG bis VEFK" },
          { href: "/leistungen", label: "Leistungen", description: "FaSi, Brandschutz, SiGeKo & mehr" },
          { href: "/kontakt", label: "Kontakt", description: "Direkt Nachricht senden" },
        ]}
      />
    </div>
  );
}
