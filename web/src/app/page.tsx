import Link from "next/link";
import Image from "next/image";
import { CONTACT, LEISTUNGEN, SITE } from "@/lib/constants";
import { BLOG_POSTS } from "@/data/blog-posts";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { PrimaryCtaLink } from "@/components/PrimaryCtaLink";
import {
  IconPhone,
  IconMail,
  IconWhatsApp,
  IconArrowRight,
  IconLocation,
} from "@/components/Icons";

export const metadata = {
  title: "Arbeitssicherheit Köln | Externe FaSi, Brandschutzbeauftragter & SiGeKo NRW",
  description:
    "Fachkraft für Arbeitssicherheit & Arbeitsschutz in Köln: externe FaSi, BSB und SiGeKo. Beratung, Gefährdungsbeurteilung, Baustelle. Unverbindlich Termin vereinbaren.",
  alternates: { canonical: SITE.url },
  openGraph: {
    title: "Arbeitssicherheit Köln | Externe FaSi, Brandschutz & SiGeKo NRW",
    description:
      "Externe Fachkraft für Arbeitssicherheit, Brandschutzbeauftragter und SiGeKo – für Betriebe und Bauprojekte in Köln und NRW. Schnelle, klare Beratung.",
    url: SITE.url,
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-x-hidden bg-nrw-grau-900 py-20 md:py-28 lg:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--nrw-grau-900)_0%,var(--nrw-grau-800)_50%,#0d2818_100%)] opacity-95" />
        <div className="relative mx-auto max-w-6xl px-4 text-left">
          <p className="text-sm font-medium uppercase tracking-widest text-white/80">
            Rechtssicher. Entlastet. Ihr Partner in NRW.
          </p>
          <h1 className="mt-4 max-w-full text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl md:text-5xl md:leading-[1.12] lg:text-6xl">
            <span className="flex flex-wrap items-baseline gap-x-2 gap-y-2 sm:gap-x-3">
              <span className="shrink-0 text-nrw-gruen">Arbeitssicherheit</span>
              <span className="shrink-0 text-nrw-grau-400" aria-hidden>
                ·
              </span>
              <span className="shrink-0 text-nrw-rot">Brandschutz</span>
              <span className="shrink-0 text-nrw-grau-400" aria-hidden>
                ·
              </span>
              <span className="shrink-0 text-white">SiGeKo</span>
            </span>
            <span className="mt-2 block break-words">
              in NRW für Ihr Unternehmen und Bauvorhaben
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-nrw-grau-200">
            Professionelle Arbeitssicherheit, Brandschutz und SiGeKo für Ihr Unternehmen und Ihre Bauvorhaben in NRW:
            externe Fachkraft für Arbeitssicherheit (FaSi), Gefährdungsbeurteilung, Brandschutzbeauftragter und
            Sicherheits- und Gesundheitsschutzkoordination auf Baustellen – rechtssicher, praxisnah und entlastend.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-start gap-4">
            <PrimaryCtaLink
              theme="default"
              className="btn-primary inline-flex items-center gap-2 rounded-full bg-nrw-rot px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-nrw-rot-hover"
              iconClassName="w-5 h-5"
            />
            <Link
              href="/leistungen"
              className="btn-secondary inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur hover:border-nrw-gruen hover:bg-white/15"
            >
              Leistungen ansehen
            </Link>
          </div>
          <div className="mt-12 border-t border-white/20 pt-6">
            <div className="flex flex-wrap gap-10 text-sm text-nrw-grau-200">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-3 hover:text-white"
                title={CONTACT.phone}
                rel="noopener noreferrer"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-nrw-gruen">
                  <IconPhone className="w-5 h-5" aria-hidden />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-white/60">Telefon</span>
                  <span className="text-sm text-white/90">{CONTACT.phone}</span>
                </span>
              </a>
              <a
                href={CONTACT.emailHref}
                className="flex items-center gap-3 hover:text-white"
                aria-label={`E-Mail: ${CONTACT.email}`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-nrw-gruen">
                  <IconMail className="w-5 h-5" aria-hidden />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-white/60">E-Mail</span>
                  <span className="text-sm text-white/90">{CONTACT.email}</span>
                </span>
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white"
                aria-label="WhatsApp"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-nrw-gruen">
                  <IconWhatsApp className="w-5 h-5" aria-hidden />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-white/60">WhatsApp</span>
                  <span className="text-sm text-white/90">Chat starten</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar – Partner- und Zertifizierungslogos (einheitliche Größe im Corporate Design) */}
      <section className="border-b border-nrw-grau-200 bg-nrw-grau-50 py-8">
        <div className="mx-auto max-w-6xl px-4">
          <ul className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-8 items-stretch justify-items-center">
            <li className="flex items-center justify-center w-full min-h-[3.5rem] max-h-[3.5rem] [&_img]:max-h-[3.5rem] [&_img]:w-auto [&_img]:object-contain">
              <Image
                src="/logos/tuev-rheinland.png"
                alt="TÜV Rheinland"
                width={180}
                height={72}
                priority
                className="max-h-14 w-auto object-contain"
              />
            </li>
            <li className="flex items-center justify-center w-full min-h-[3.5rem] max-h-[3.5rem] [&_img]:max-h-[3.5rem] [&_img]:w-auto [&_img]:object-contain">
              <Image
                src="/logos/uio-transparent.png"
                alt="UIO"
                width={220}
                height={72}
                className="max-h-14 w-auto object-contain"
                unoptimized
              />
            </li>
            <li className="flex items-center justify-center w-full min-h-[3.5rem] max-h-[3.5rem] [&_img]:max-h-[3.5rem] [&_img]:w-auto [&_img]:object-contain">
              <Image
                src="/logos/vds.png"
                alt="VdS"
                width={180}
                height={72}
                className="max-h-14 w-auto object-contain"
              />
            </li>
            <li className="flex items-center justify-center w-full min-h-[3.5rem] max-h-[3.5rem] [&_img]:max-h-[3.5rem] [&_img]:w-auto [&_img]:object-contain">
              <Image
                src="/logos/dekra.svg"
                alt="DEKRA"
                width={180}
                height={72}
                className="max-h-14 w-auto object-contain"
              />
            </li>
            <li className="flex items-center justify-center w-full min-h-[3.5rem] max-h-[3.5rem] [&_img]:max-h-[3.5rem] [&_img]:w-auto [&_img]:object-contain">
              <Image
                src="/logos/hochschule-rhein-waal.svg"
                alt="Hochschule Rhein-Waal"
                width={180}
                height={72}
                className="max-h-14 w-auto object-contain"
              />
            </li>
            <li className="flex items-center justify-center w-full min-h-[3.5rem] max-h-[3.5rem] [&_img]:max-h-[3.5rem] [&_img]:w-auto [&_img]:object-contain">
              <Image
                src="/logos/bew.png"
                alt="BEW – Das Bildungszentrum für die Ver- und Entsorgungswirtschaft"
                width={180}
                height={72}
                className="max-h-14 w-auto object-contain"
              />
            </li>
          </ul>
        </div>
      </section>

      <section className="border-b border-nrw-grau-200 bg-white py-12 md:py-16" aria-labelledby="start-blog-teaser">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-nrw-gruen">Praxiswissen</p>
              <h2 id="start-blog-teaser" className="mt-2 text-2xl font-bold text-nrw-grau-900 md:text-3xl">
                Aus dem Blog
              </h2>
              <p className="mt-2 max-w-xl text-nrw-grau-600">
                Kurze Artikel zu FaSi, Brandschutz und SiGeKo – jedes Thema mit eigener Seite für
                bessere Auffindbarkeit.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex shrink-0 items-center gap-2 font-semibold text-nrw-gruen hover:underline"
            >
              Alle Artikel
              <IconArrowRight className="h-5 w-5" aria-hidden />
            </Link>
          </div>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block h-full rounded-2xl border border-nrw-grau-200 bg-nrw-grau-50 p-5 transition hover:border-nrw-gruen hover:bg-white hover:shadow-sm"
                >
                  <span className="font-semibold text-nrw-grau-900">{post.title}</span>
                  <span className="mt-2 line-clamp-2 block text-sm text-nrw-grau-600">{post.description}</span>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-nrw-gruen">
                    Lesen
                    <IconArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Erweiterter Fließtext: H1-Begriffe, mehr Tiefe (SEO-Check: Länge & Abdeckung) */}
      <section className="border-b border-nrw-grau-200 bg-white py-16 md:py-20" aria-labelledby="startseite-einordnung">
        <div className="mx-auto max-w-3xl px-4">
          <h2 id="startseite-einordnung" className="text-2xl font-bold tracking-tight text-nrw-grau-900 md:text-3xl">
            Arbeitssicherheit, Brandschutz und SiGeKo für Unternehmen und Bauvorhaben in NRW
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-nrw-grau-700 md:text-lg">
            <p>
              Unternehmen in Nordrhein-Westfalen stehen vor denselben Pflichten: Gefährdungen
              bewerten, Unterweisungen planen, Brandschutz organisieren und auf Baustellen die
              Schnittstellen zwischen Gewerken sauber abstimmen. Genau hier setzt unsere Beratung an:
              Wir bündeln Arbeitssicherheit, vorbeugenden Brandschutz und SiGeKo so, dass Führung,
              Betriebsrat und ausführende Teams dieselbe Sprache sprechen.
            </p>
            <p>
              Für Bauvorhaben begleiten wir Planungs- und Ausführungsphase: vom SiGePlan über
              Abstimmung mit Nachunternehmern bis zu Übergaben an den Bauherrn. Im Stammbetrieb
              kümmern wir uns parallel um die betriebliche Fachkraft für Arbeitssicherheit, die
              Fortschreibung Ihrer Gefährdungsbeurteilungen und die sinnvolle Verzahnung mit Ihrem
              Brandschutzbeauftragten – damit Nachweise vollständig bleiben und Audits oder
              Behördengespräche vorbereitet sind.
            </p>
            <p>
              Ob Produktion, Logistik, Verwaltung oder Baustelle: Wir priorisieren Maßnahmen nach
              Risiko und Aufwand, dokumentieren nachvollziehbar und unterstützen bei der Umsetzung
              vor Ort in Köln, im Rheinland und im Ruhrgebiet. Schulungen und Elektroprüfungen
              ergänzen wir dort, wo sie betrieblich Sinn ergeben – ohne unnötige Doppelarbeit.
            </p>
            <p>
              Ziel bleibt ein belastbares System aus Regeln, Prüfungen und Kommunikation: weniger
              Reibung zwischen Projektleitung und Arbeitssicherheit, klare Zuständigkeiten bei
              Brandschutz und eine SiGeKo, die Baustellenkonflikte früh entschärft. Sprechen Sie uns
              an, wenn Sie Ihr Unternehmen oder Ihr nächstes Bauvorhaben in NRW rechtssicher aufstellen
              möchten.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-nrw-grau-900 md:text-4xl">
              Alles aus einer Hand – für Ihr sicheres Unternehmen
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-nrw-grau-600">
              Ob einmalige Begleitung bei Behördenterminen, Gefährdungsbeurteilungen und
              Brandschutzkonzepte oder langfristige Betreuung: Wir sind Ihr fester Partner für
              Arbeitssicherheit, Brandschutz und SiGeKo in NRW. Maßgeschneidert, rechtssicher,
              entlastend.
            </p>
            <Link
              href="/kontakt"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-nrw-gruen-hover hover:text-nrw-gruen"
            >
              Kontakt aufnehmen
              <IconArrowRight className="w-5 h-5" aria-hidden />
            </Link>
            <nav
              className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 border-t border-nrw-grau-200 pt-8 text-sm text-nrw-grau-600"
              aria-label="Schwerpunkte Arbeitssicherheit Köln und NRW"
            >
              <Link href="/leistungen/arbeitssicherheit" className="font-medium hover:text-nrw-gruen">
                Externe FaSi
              </Link>
              <span className="text-nrw-grau-300" aria-hidden>
                ·
              </span>
              <Link href="/leistungen/brandschutz" className="font-medium hover:text-nrw-gruen">
                Brandschutz Köln
              </Link>
              <span className="text-nrw-grau-300" aria-hidden>
                ·
              </span>
              <Link href="/leistungen/sigeko" className="font-medium hover:text-nrw-gruen">
                SiGeKo NRW
              </Link>
              <span className="text-nrw-grau-300" aria-hidden>
                ·
              </span>
              <Link href="/faq" className="font-medium hover:text-nrw-gruen">
                FAQ
              </Link>
              <span className="text-nrw-grau-300" aria-hidden>
                ·
              </span>
              <Link href="/blog" className="font-medium hover:text-nrw-gruen">
                Blog
              </Link>
              <span className="text-nrw-grau-300" aria-hidden>
                ·
              </span>
              <Link href="/beratung-buchen" className="font-medium hover:text-nrw-gruen">
                Beratung
              </Link>
            </nav>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="bg-nrw-grau-50 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-nrw-gruen">
              Unsere Leistungen
            </p>
            <h2 className="mt-2 text-3xl font-bold text-nrw-grau-900 md:text-4xl">
              Arbeitssicherheit, Brandschutz und SiGeKo
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-nrw-grau-600">
              Arbeitssicherheit (FaSi), Brandschutz (Brandschutzbeauftragter), SiGeKo sowie
              Schulungen und Elektroprüfungen – alles aus einer Quelle.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {LEISTUNGEN.slice(0, 4).map((l) => (
              <ServiceCard key={l.slug} title={l.title} short={l.short} href={l.href} icon={l.icon} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 rounded-full border-2 border-nrw-grau-800 bg-transparent px-6 py-3 font-semibold text-nrw-grau-800 hover:bg-nrw-grau-800 hover:text-white"
            >
              Alle Leistungen
              <IconArrowRight className="w-5 h-5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-nrw-rot py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Kostenlose Erstberatung – unverbindlich und konkret
          </h2>
          <p className="mt-4 text-white/90">
            Wir rufen Sie gerne zurück und besprechen Ihre Fragen zu Arbeitssicherheit, Brandschutz
            oder SiGeKo.
          </p>
          <Link
            href="/beratung-buchen"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-nrw-rot hover:bg-nrw-grau-50"
          >
            Jetzt Termin anfragen
            <IconArrowRight className="w-5 h-5" aria-hidden />
          </Link>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-nrw-gruen">
                Kontakt
              </p>
              <h2 className="mt-2 text-3xl font-bold text-nrw-grau-900">
                Schreiben Sie uns – wir antworten zeitnah
              </h2>
              <p className="mt-4 text-nrw-grau-600">
                {CONTACT.company}
                <br />
                {CONTACT.address}, {CONTACT.zip} {CONTACT.city}
              </p>
              <div className="mt-8 space-y-4">
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-3 text-nrw-grau-800 hover:text-nrw-gruen"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-nrw-gruen-hell text-nrw-gruen">
                    <IconPhone className="w-6 h-6" aria-hidden />
                  </span>
                  {CONTACT.phone}
                </a>
                <a
                  href={CONTACT.emailHref}
                  className="flex items-center gap-3 text-nrw-grau-800 hover:text-nrw-gruen"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-nrw-gruen-hell text-nrw-gruen">
                    <IconMail className="w-6 h-6" aria-hidden />
                  </span>
                  {CONTACT.email}
                </a>
                <div className="flex items-center gap-3 text-nrw-grau-800">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-nrw-grau-100 text-nrw-grau-600">
                    <IconLocation className="w-6 h-6" aria-hidden />
                  </span>
                  {CONTACT.address}, {CONTACT.zip} {CONTACT.city}
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-nrw-grau-200 bg-nrw-grau-50 p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
