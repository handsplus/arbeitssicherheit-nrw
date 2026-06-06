"use client";

import { useEffect } from "react";

const VISIT_SENT_KEY = "arbeitssicherheit-visit-sent";
const ENABLED = process.env.NEXT_PUBLIC_VISIT_NOTIFY_ENABLED === "true";

export function VisitNotifier() {
  useEffect(() => {
    if (!ENABLED || typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem(VISIT_SENT_KEY)) return;
      const path = window.location.pathname || "/";
      fetch(`/api/visit?path=${encodeURIComponent(path)}`, { method: "GET" })
        .then((res) => {
          if (res.ok) sessionStorage.setItem(VISIT_SENT_KEY, "1");
        })
        .catch(() => {});
    } catch {
      // ignore
    }
  }, []);

  return null;
}
