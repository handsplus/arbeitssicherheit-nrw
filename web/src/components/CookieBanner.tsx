"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export const COOKIE_CONSENT_KEY = "arbeitssicherheit-cookie-consent";

/** "all" = optional cookies accepted, "necessary-only" = only necessary cookies */
export type CookieConsent = "all" | "necessary-only";

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (raw === "all" || raw === "necessary-only") return raw;
  if (raw === "accepted") return "all"; // legacy
  return null;
}

export function hasOptionalCookieConsent(): boolean {
  return getCookieConsent() === "all";
}

export function CookieBanner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [visible, setVisible] = useState(false);
  const [isSettingsMode, setIsSettingsMode] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    const showForFirstVisit = !consent;
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const showForCookieSettings =
      pathname === "/datenschutz" && hash === "#cookie-einstellungen";
    const showForQuery = searchParams.get("cookie-einstellungen") === "1";

    if (showForCookieSettings || showForQuery) {
      setIsSettingsMode(true);
      setVisible(true);
    } else if (showForFirstVisit) {
      setIsSettingsMode(false);
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash === "#cookie-einstellungen") {
        setIsSettingsMode(true);
        setVisible(true);
      }
    };
    const onOpenCookieSettings = () => {
      setIsSettingsMode(true);
      setVisible(true);
    };
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("open-cookie-settings", onOpenCookieSettings);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("open-cookie-settings", onOpenCookieSettings);
    };
  }, []);

  const saveAndClose = (value: "all" | "necessary-only") => {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    setVisible(false);
    if (isSettingsMode && typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      params.delete("cookie-einstellungen");
      const cleanSearch = params.toString() ? `?${params.toString()}` : "";
      const cleanHash = window.location.hash === "#cookie-einstellungen" ? "" : window.location.hash;
      window.history.replaceState(null, "", window.location.pathname + cleanSearch + cleanHash);
    }
  };

  const acceptAll = () => saveAndClose("all");
  const rejectOptional = () => saveAndClose("necessary-only");

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Hinweis"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-nrw-grau-200 bg-white p-4 shadow-xl md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-nrw-grau-600">
            <p className="font-medium text-nrw-grau-900">
              {isSettingsMode ? "Cookie-Einstellungen anpassen" : "Cookie-Hinweis"}
            </p>
            <p className="mt-1">
              Wir setzen technisch notwendige Cookies ein. Optionale Cookies können Sie unten
              an- oder abwählen. Weitere Informationen finden Sie in unserer{" "}
              <Link
                href="/datenschutz#cookie-einstellungen"
                className="font-medium text-nrw-gruen underline hover:no-underline"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={rejectOptional}
              className="rounded-full border-2 border-nrw-grau-400 bg-white px-5 py-2.5 text-sm font-semibold text-nrw-grau-700 hover:border-nrw-grau-500 hover:bg-nrw-grau-100"
            >
              Nur notwendige
            </button>
            <button
              type="button"
              onClick={acceptAll}
              className="rounded-full bg-nrw-gruen px-6 py-2.5 text-sm font-semibold text-white hover:bg-nrw-gruen-hover"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
