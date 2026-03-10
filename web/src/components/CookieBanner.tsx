"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const COOKIE_CONSENT_KEY = "arbeitssicherheit-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Hinweis"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-nrw-grau-200 bg-white p-4 shadow-xl md:px-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-nrw-grau-600">
          Wir verwenden Cookies für einen besseren Nutzerkomfort. Mit der Nutzung stimmen Sie unserer{" "}
          <Link href="/datenschutz" className="font-medium text-nrw-gruen underline hover:no-underline">
            Datenschutzerklärung
          </Link>{" "}
          zu.
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-full bg-nrw-gruen px-6 py-2.5 text-sm font-semibold text-white hover:bg-nrw-gruen-hover"
        >
          Verstanden
        </button>
      </div>
    </div>
  );
}
