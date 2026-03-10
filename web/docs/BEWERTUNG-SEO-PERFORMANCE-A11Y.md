# Bewertung: SEO, Leistung, Best Practices, Barrierefreiheit

Diese Checkliste dient zur Bewertung der Live-Seite (z. B. mit **Google Lighthouse** in Chrome: F12 → Lighthouse → Analyse ausführen). Zusätzlich ist eine **Code-basierte Einschätzung** aufgeführt.

---

## 1. SEO (Suchmaschinenoptimierung)

### Bereits umgesetzt (Code)
- **Title & Description:** Zentral in `layout.tsx` mit `metadataBase`, Template `%s | Arbeitssicherheit.nrw`, sinnvolle Beschreibung
- **Open Graph:** `title`, `description`, `url`, `siteName`, `locale: "de_DE"`
- **Robots:** `index: true`, `follow: true`
- **Sprache:** `<html lang="de">`
- **Struktur:** Klare H1 pro Seite, logische H2-Hierarchie
- **Semantik:** `<main>`, `<header>`, `<footer>`, `<nav>`, `<section>`

### Wenn die Seite online ist – prüfen
- [ ] **Lighthouse SEO-Score** (Ziel: 90+)
- [ ] **Google Search Console:** Sitemap einreichen (siehe unten)
- [ ] **Rich Results Test:** https://search.google.com/test/rich-results (optional: strukturierte Daten z. B. LocalBusiness, Organization ergänzen)

### Empfohlene Ergänzungen
| Thema | Empfehlung |
|-------|------------|
| **Sitemap** | Dynamische Sitemap unter `/sitemap.xml` (Next.js: `app/sitemap.ts`) anlegen und in der Search Console eintragen |
| **OG/Twitter-Bild** | `openGraph.images` und optional `twitter.card` in `metadata` setzen, damit Vorschauen in Social Media ansprechend aussehen |
| **Canonical** | Bei mehreren Domains/Subdomains ggf. `alternates.canonical` nutzen (mit `metadataBase` oft schon abgedeckt) |

---

## 2. Leistung (Performance)

### Bereits positiv (Code)
- **Next.js 16** mit App Router: automatisches Code-Splitting, Server Components
- **next/image** für Bilder auf der Startseite (Logos) – optimierte Formate und Lazy Loading
- **Google Font:** Plus Jakarta Sans mit `display: "swap"` – vermeidet unsichtbaren Text (FOIT)
- **Sharp** als devDependency – Bildoptimierung beim Build

### Zu prüfen, sobald die Seite online ist
- [ ] **Lighthouse Performance** (Ziel: 90+ auf Desktop, 80+ auf Mobile)
- [ ] **LCP (Largest Contentful Paint):** z. B. Hero-Bereich – große Bilder vermeiden oder mit `priority` nur für Above-the-fold
- [ ] **CLS (Cumulative Layout Shift):** Bilder mit `width`/`height` (bereits gesetzt) – gut
- [ ] **Header-Logo:** Aktuell `<img>` – Wechsel auf `next/image` würde Caching und Optimierung verbessern

### Empfehlungen
- Header/Footer: Logo über `next/image` mit festen Maßen einbinden
- Keine übermäßig großen Bilder unoptimiert einbinden
- Vercel/Netlify nutzen: Edge-Caching und Kompression sind meist vorkonfiguriert

---

## 3. Best Practices

### Bereits umgesetzt
- **HTTPS:** Bei Deployment auf Vercel o. Ä. Standard
- **Redirect:** `vercel.json` – arbeitssicherheit.nrw → www.arbeitssicherheit.nrw (301)
- **Externe Links:** `rel="noopener noreferrer"` bei `target="_blank"`
- **Formulare:** Labels mit `htmlFor` verknüpft, `required` gesetzt
- **Keine unsicheren oder veralteten APIs** erkennbar

### Wenn die Seite online ist
- [ ] **Lighthouse Best Practices** (Ziel: 95+)
- [ ] **Console:** Keine Fehler oder kritischen Warnungen
- [ ] **Cookies:** Cookie-Banner mit Link zur Datenschutzerklärung – rechtlich prüfen (DSGVO)

### Optional
- **Content Security Policy (CSP)** über Header setzen, falls später Skripte von Drittanbietern genutzt werden

---

## 4. Barrierefreiheit (Accessibility)

### Bereits umgesetzt
- **Skip-Link:** „Zum Inhalt springen“ mit fokussierbarem Stil (`#main-content`)
- **Main mit ID:** `<main id="main-content" tabIndex={-1}>` für Fokus nach Skip
- **Sprache:** `lang="de"` am `<html>`
- **Fokus:** `:focus-visible` mit sichtbarem Outline (Grün, 2px)
- **Reduzierte Bewegung:** `@media (prefers-reduced-motion: no-reduce)` für Button-Animationen
- **Semantik:** Überschriften-Hierarchie (H1 → H2), Listen (`<ul>`/`<li>`), `<nav aria-label="Hauptnavigation">`
- **Buttons/Links:** `aria-label` wo nötig (Telefon, E-Mail, WhatsApp, Icons), `aria-hidden` auf dekorativen Icons
- **Dropdown:** `aria-expanded`, `aria-haspopup="true"` am Menü-Button
- **Mobile Menü:** `aria-label="Menü öffnen"`, `aria-expanded`
- **Cookie-Dialog:** `role="dialog"`, `aria-label="Cookie-Hinweis"`
- **Formulare:** Alle Eingaben mit sichtbarem `<label>` und `id`/`htmlFor`
- **Bilder:** Sinnvolle `alt`-Texte (z. B. TÜV Rheinland, VdS, DEKRA, Firma)

### Wenn die Seite online ist
- [ ] **Lighthouse Accessibility** (Ziel: 95+)
- [ ] **Tastatur:** Komplette Bedienung nur mit Tab und Enter (inkl. Menü, Dropdown, Cookie-Banner)
- [ ] **Kontrast:** Prüfung mit z. B. [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) – NRW-Grün/Rot auf Weiß prüfen
- [ ] **Screenreader:** Kurztest mit NVDA/JAWS oder VoiceOver

### Kleine Verbesserungen (Code)
- **Formular-Feedback:** Erfolgs- und Fehlermeldungen mit `role="status"` und `aria-live="polite"` versehen, damit Screenreader sie vorlesen
- **Submit-Button:** Bei `disabled={status === "sending"}` optional `aria-busy="true"` setzen

---

## Kurzüberblick: Erwartete Lighthouse-Scores (wenn optimiert)

| Kategorie      | Realistisches Ziel | Anmerkung |
|----------------|--------------------|-----------|
| **Performance**  | 85–95              | Abhängig von Hosting und Bildgrößen |
| **Accessibility**| 90–100             | Gute Basis, kleine Anpassungen möglich |
| **Best Practices** | 90–100          | Wenig Drittanbieter, sauberer Code |
| **SEO**          | 90–100             | Sitemap + OG-Bild ergänzen |

---

## Tools für die Bewertung nach dem Go-Live

1. **Chrome DevTools → Lighthouse** (F12 → Lighthouse-Tab)
2. **PageSpeed Insights:** https://pagespeed.web.dev/
3. **WebAIM WAVE:** https://wave.webaim.org/ (Barrierefreiheit)
4. **Google Search Console:** Sitemap, Abdeckung, mobile Usability

Sobald die Domain **www.arbeitssicherheit.nrw** erreichbar ist, diese Tools mit der echten URL ausführen und die Ergebnisse mit dieser Checkliste abgleichen.
