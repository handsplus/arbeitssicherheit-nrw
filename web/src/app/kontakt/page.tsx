import { CONTACT } from "@/lib/constants";
import { ContactForm } from "@/components/ContactForm";
import { IconPhone, IconMail, IconLocation, IconWhatsApp, IconLinkedIn } from "@/components/Icons";

export const metadata = {
  title: "Kontakt – Arbeitssicherheit, Brandschutz, SiGeKo",
  description: "Kontakt für Beratung zu Arbeitssicherheit, Brandschutz und SiGeKo in Köln und NRW. Schnelle Antwort.",
};

export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-nrw-gruen">Kontakt</p>
      <h1 className="mt-2 text-4xl font-bold text-nrw-grau-900 md:text-5xl">
        Wir freuen uns auf Ihre Nachricht
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-nrw-grau-600">
        Egal ob Frage zu Arbeitssicherheit, Brandschutz oder SiGeKo – wir antworten zeitnah
        und unverbindlich.
      </p>
      <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-lg font-bold text-nrw-grau-900">{CONTACT.company}</p>
          <p className="mt-4 flex items-start gap-3 text-nrw-grau-600">
            <IconLocation className="mt-0.5 h-5 w-5 shrink-0 text-nrw-gruen" aria-hidden />
            <span>
              {CONTACT.address}
              <br />
              {CONTACT.zip} {CONTACT.city}
            </span>
          </p>
          <p className="mt-6 flex items-center gap-3">
            <IconPhone className="h-5 w-5 shrink-0 text-nrw-gruen" aria-hidden />
            <a href={CONTACT.phoneHref} className="font-medium text-nrw-gruen hover:underline">
              {CONTACT.phone}
            </a>
          </p>
          <p className="flex items-center gap-3">
            <IconMail className="h-5 w-5 shrink-0 text-nrw-gruen" aria-hidden />
            <a href={CONTACT.emailHref} className="font-medium text-nrw-gruen hover:underline">
              {CONTACT.email}
            </a>
          </p>
          <div className="mt-8 flex gap-2">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-nrw-grau-100 text-nrw-grau-600 hover:bg-nrw-gruen-hell hover:text-nrw-gruen"
              aria-label="WhatsApp"
            >
              <IconWhatsApp className="h-5 w-5" aria-hidden />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-nrw-grau-100 text-nrw-grau-600 hover:bg-nrw-gruen-hell hover:text-nrw-gruen"
              aria-label="LinkedIn"
            >
              <IconLinkedIn className="h-5 w-5" aria-hidden />
            </a>
          </div>
        </div>
        <div className="rounded-2xl border border-nrw-grau-200 bg-nrw-grau-50 p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
