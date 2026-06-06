import Link from "next/link";
import { BeratungForm } from "@/components/BeratungForm";
import { CONTACT, SITE } from "@/lib/constants";
import { IconPhone, IconMail } from "@/components/Icons";
import { pageSocialMeta } from "@/lib/page-metadata";

const title = "Kostenlose Erstberatung – Köln & NRW";
const description =
  "Unverbindliche Erstberatung zu FaSi, Brandschutz und SiGeKo – online Termin anfragen für Köln und NRW.";

export const metadata = {
  title,
  description,
  alternates: { canonical: `${SITE.url}/beratung-buchen` },
  ...pageSocialMeta({ path: "/beratung-buchen", title, description }),
};

export default function BeratungBuchenPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-nrw-rot">
        Kostenlose Erstberatung
      </p>
      <h1 className="mt-2 text-4xl font-bold text-nrw-grau-900 md:text-5xl">
        Jetzt Termin anfragen
      </h1>
      <p className="mt-6 text-lg text-nrw-grau-600">
        Füllen Sie das Formular aus – wir melden uns zeitnah für ein unverbindliches Gespräch.
        Alternativ:{" "}
        <a href={CONTACT.phoneHref} className="font-semibold text-nrw-gruen hover:underline">
          <IconPhone className="mr-1 inline h-4 w-4" aria-hidden />
          {CONTACT.phone}
        </a>{" "}
        oder{" "}
        <a href={CONTACT.emailHref} className="font-semibold text-nrw-gruen hover:underline">
          <IconMail className="mr-1 inline h-4 w-4" aria-hidden />
          E-Mail
        </a>
        .
      </p>
      <div className="mt-12 rounded-2xl border border-nrw-grau-200 bg-white p-8 shadow-sm">
        <BeratungForm />
      </div>
    </div>
  );
}
