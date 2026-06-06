import { NextResponse } from "next/server";

/** HTML-Escaping für E-Mail-Inhalte */
export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function nl2brEscaped(text: string): string {
  return escapeHtml(text).replace(/\n/g, "<br>");
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(email: string): boolean {
  return email.length <= 254 && EMAIL_RE.test(email);
}

/** Trimmt und begrenzt; `null` wenn leer oder zu lang */
export function sanitizeField(value: unknown, maxLen: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > maxLen) return null;
  return trimmed;
}

/** Honeypot befüllt → Spam */
export function isHoneypotFilled(value: unknown): boolean {
  return typeof value === "string" && value.trim().length > 0;
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}

type RateBucket = Map<string, number[]>;
const rateGlobal = globalThis as typeof globalThis & { __formRateBuckets?: RateBucket };

function rateStore(): RateBucket {
  if (!rateGlobal.__formRateBuckets) rateGlobal.__formRateBuckets = new Map();
  return rateGlobal.__formRateBuckets;
}

/** Best-effort Rate-Limit (pro Serverless-Instanz); ergänzt Honeypot */
export function isRateLimited(key: string, maxRequests: number, windowMs: number): boolean {
  const store = rateStore();
  const now = Date.now();
  const recent = (store.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= maxRequests) return true;
  recent.push(now);
  store.set(key, recent);
  return false;
}

export function rateLimitResponse(): NextResponse {
  return NextResponse.json(
    { error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." },
    { status: 429 }
  );
}

/** Stille Erfolgsantwort bei erkanntem Spam (Honeypot) */
export function silentSpamOk(): NextResponse {
  return NextResponse.json({ success: true });
}

export function assertJsonRequest(request: Request): boolean {
  const ct = request.headers.get("content-type") ?? "";
  return ct.includes("application/json");
}
