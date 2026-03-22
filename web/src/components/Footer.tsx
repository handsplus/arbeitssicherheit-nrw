import Link from "next/link";
import { CONTACT, LEISTUNGEN } from "@/lib/constants";
import {
  IconPhone,
  IconMail,
  IconLocation,
  IconYouTube,
  IconLinkedIn,
  IconFacebook,
  IconInstagram,
  IconArrowRight,
} from "@/components/Icons";

/** Flache Liste der Hauptnavigationspunkte für den Footer (ohne Dropdown-Kinder) */
const FOOTER_NAV = [
  { label: "Start", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Wissen", href: "/wissen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Beratung buchen", href: "/beratung-buchen" },
] as const;

/** Verbund- und Partnerdomains (rechte Spalte unter „Rechtliches“) */
const PARTNER_VERBUND_LINKS = [
  { label: "sigeko.koeln", href: "https://sigeko.koeln" },
  { label: "handsplus.de", href: "https://www.handsplus.de" },
  { label: "brandschutzkoeln.com", href: "https://brandschutzkoeln.com" },
  { label: "arbeitssicherheitkoeln.de", href: "https://arbeitssicherheitkoeln.de" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-nrw-grau-200 bg-nrw-grau-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-5 lg:items-start">
          {/* Adresse inkl. Firmenname */}
          <div className="flex max-w-[340px] flex-col">
            <p className="flex items-start gap-3 text-sm text-nrw-grau-400">
              <IconLocation className="mt-0.5 h-5 w-5 shrink-0 text-nrw-gruen" aria-hidden />
              <span>
                <Link href="/" className="font-semibold text-white/95 hover:text-nrw-gruen">
                  Arbeitssicherheit.NRW
                </Link>
                <br />
                {CONTACT.address}
                <br />
                {CONTACT.zip} {CONTACT.city}
              </span>
            </p>
            <Link
              href="/beratung-buchen"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-nrw-gruen hover:text-nrw-gruen-hell"
            >
              Kostenlose Erstberatung
              <IconArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          {/* Schnellzugriff */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-nrw-grau-400">
              Schnellzugriff
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/90">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-nrw-gruen">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Leistungen */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-nrw-grau-400">
              Leistungen
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/90">
              {LEISTUNGEN.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-nrw-gruen">
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Kontakt */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-nrw-grau-400">
              Kontakt
            </p>
            <div className="mt-4 space-y-3">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-3 text-sm text-white/90 hover:text-nrw-gruen"
              >
                <IconPhone className="h-4 w-4 shrink-0" aria-hidden />
                {CONTACT.phone}
              </a>
              <a
                href={CONTACT.emailHref}
                className="flex items-center gap-3 text-sm text-white/90 hover:text-nrw-gruen"
              >
                <IconMail className="h-4 w-4 shrink-0" aria-hidden />
                {CONTACT.email}
              </a>
            </div>
          </div>
          {/* Rechtliches + Social */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-nrw-grau-400">
              Rechtliches
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/90">
              <li>
                <Link href="/impressum" className="hover:text-nrw-gruen">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-nrw-gruen">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/datenschutz?cookie-einstellungen=1#cookie-einstellungen" className="hover:text-nrw-gruen">
                  Cookie-Einstellungen
                </Link>
              </li>
            </ul>
            <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-nrw-grau-400">
              Verbund und Partner
            </p>
            <ul className="mt-4 space-y-2 text-sm text-nrw-grau-400">
              {PARTNER_VERBUND_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-nrw-gruen"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-nrw-grau-400">
              Folgen Sie uns
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={CONTACT.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-nrw-grau-800 text-white hover:bg-nrw-gruen"
                aria-label="YouTube"
              >
                <IconYouTube className="h-5 w-5" aria-hidden />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-nrw-grau-800 text-white hover:bg-nrw-gruen"
                aria-label="LinkedIn"
              >
                <IconLinkedIn className="h-5 w-5" aria-hidden />
              </a>
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-nrw-grau-800 text-white hover:bg-nrw-gruen"
                aria-label="Facebook"
              >
                <IconFacebook className="h-5 w-5" aria-hidden />
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-nrw-grau-800 text-white hover:bg-nrw-gruen"
                aria-label="Instagram"
              >
                <IconInstagram className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-nrw-grau-800 pt-12 md:flex-row">
          <p className="text-sm text-nrw-grau-400">
            © {new Date().getFullYear()} {CONTACT.company}. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-nrw-grau-400">
            Nordrhein-Westfalen · Köln
          </p>
        </div>
      </div>
    </footer>
  );
}
