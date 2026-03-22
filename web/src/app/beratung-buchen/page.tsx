import Link from "next/link";
import { BeratungForm } from "@/components/BeratungForm";
import { CONTACT, SITE } from "@/lib/constants";
import { IconPhone, IconMail } from "@/components/Icons";

export const metadata = {
  title: "Kostenlose Erstberatung – Arbeitssicherheit, Brandschutz, SiGeKo",
  description:
    "Unverbindliche kostenlose Erstberatung mit Schwerpunkt Arbeitssicherheit, Brandschutz und SiGeKo. Termin anfragen für Köln und NRW.",
  alternates: { canonical: `${SITE.url}/beratung-buchen` },
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
