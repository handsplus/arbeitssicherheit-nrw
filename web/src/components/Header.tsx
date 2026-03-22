"use client";

import Link from "next/link";
import { useState } from "react";
import { CONTACT, NAV } from "@/lib/constants";
import { IconPhone } from "@/components/Icons";
import { PrimaryCtaLink } from "@/components/PrimaryCtaLink";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-nrw-grau-200 bg-white/98 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex shrink-0 items-center" aria-label={`${CONTACT.company} – Startseite`}>
          <img
            src="/logo.png"
            alt={CONTACT.company}
            className="h-[60px] w-auto max-w-[420px] object-contain"
            width={420}
            height={60}
          />
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-1" aria-label="Hauptnavigation">
          {NAV.map((item) =>
            "children" in item && item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-nrw-grau-700 hover:bg-nrw-grau-100 hover:text-nrw-gruen"
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <span className="text-nrw-grau-400" aria-hidden>▾</span>
                </button>
                {openDropdown === item.label && (
                  <ul className="absolute left-0 top-full mt-1 w-52 rounded-xl border border-nrw-grau-200 bg-white py-2 shadow-xl">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-nrw-grau-700 hover:bg-nrw-gruen-hell hover:text-nrw-gruen-hover"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-nrw-grau-700 hover:bg-nrw-grau-100 hover:text-nrw-gruen"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex md:items-center md:gap-3">
          <a
            href={CONTACT.phoneHref}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-nrw-gruen-hell text-nrw-gruen transition hover:bg-nrw-gruen hover:text-white focus:outline-none focus:ring-2 focus:ring-nrw-gruen focus:ring-offset-2"
            aria-label={`Anrufen: ${CONTACT.phone}`}
            title={CONTACT.phone}
          >
            <IconPhone className="h-5 w-5" aria-hidden />
          </a>
          <PrimaryCtaLink
            theme="header"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-nrw-rot px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-nrw-rot-hover hover:shadow focus:outline-none focus:ring-2 focus:ring-nrw-rot focus:ring-offset-2"
            iconClassName="h-4 w-4"
          />
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-nrw-grau-600 hover:bg-nrw-grau-100 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü öffnen"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <span className="text-xl font-bold" aria-hidden>×</span>
          ) : (
            <span className="text-xl" aria-hidden>☰</span>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-nrw-grau-200 bg-white px-4 py-6 md:hidden">
          <ul className="space-y-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg py-3 px-3 font-medium text-nrw-grau-800"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {"children" in item && item.children && item.children.length > 0 && (
                  <ul className="mt-1 space-y-0 pl-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-2 pl-4 text-sm text-nrw-grau-600"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <a
            href={CONTACT.phoneHref}
            className="mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-nrw-gruen-hell text-nrw-gruen transition hover:bg-nrw-gruen hover:text-white"
            aria-label={`Anrufen: ${CONTACT.phone}`}
            title={CONTACT.phone}
          >
            <IconPhone className="h-6 w-6" aria-hidden />
          </a>
          <PrimaryCtaLink
            theme="header"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-nrw-rot py-3 font-semibold text-white"
            iconClassName="h-5 w-5"
            onClick={() => setMobileOpen(false)}
          />
        </div>
      )}
    </header>
  );
}
