"use client";

import { useEffect } from "react";

const VISIT_SENT_KEY = "arbeitssicherheit-visit-sent";

export function VisitNotifier() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem(VISIT_SENT_KEY)) return;
      const path = window.location.pathname || "/";
      fetch(`/api/visit?path=${encodeURIComponent(path)}`, { method: "GET" })
        .then(() => sessionStorage.setItem(VISIT_SENT_KEY, "1"))
        .catch(() => {});
    } catch {
      // ignore
    }
  }, []);

  return null;
}
