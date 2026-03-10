# Lighthouse-Testergebnis (lokal)

**Datum:** 2026-03-08  
**URL:** http://localhost:3000/  
**Modus:** Mobile (Moto G Power Emulation)  
**Lighthouse-Version:** 13.0.3  

---

## Gesamt-Scores

| Kategorie        | Score | Bewertung |
|------------------|-------|-----------|
| **Performance**     | **97**  | Grün      |
| **Barrierefreiheit**| **97**  | Grün      |
| **Best Practices**  | **100** | Grün      |
| **SEO**             | **100** | Grün      |

*(Scores 0–100; Lighthouse speichert intern 0–1, hier als 0–100 angegeben.)*

---

## Performance – Kennzahlen

| Metrik | Wert | Bewertung |
|--------|------|-----------|
| **First Contentful Paint (FCP)** | 0,8 s | Grün |
| **Largest Contentful Paint (LCP)** | 2,5 s | Grün (Score 0,89) |
| **Total Blocking Time (TBT)** | 30 ms | Grün |
| **Cumulative Layout Shift (CLS)** | 0 | Grün |
| **Speed Index** | 0,8 s | Grün |

Hinweis: Lokal ist die Latenz gering. **Online** können LCP und FCP durch Netzwerk und Hosting etwas schlechter ausfallen – nach Go-Live erneut messen.

---

## Barrierefreiheit – gefundene Punkte (2)

Lighthouse meldet **2 Prüfungen mit Verbesserungspotenzial** (Accessibility-Score bleibt 97):

### 1. Kontrast (color-contrast)

- **Element:** Link „Kontakt aufnehmen“ (Intro-Bereich).
- **Problem:** Textfarbe `#009233` (NRW-Grün) auf Weiß → Kontrast **4,07:1**.
- **Anforderung:** Mindestens **4,5:1** für normalen Text.
- **Empfehlung:** Für diesen Link die dunklere Farbe `--nrw-gruen-hover` (#007a2a) verwenden oder den Link optisch stärker hervorheben (z. B. Unterstreichung), damit der Kontrast ausreicht.

### 2. Sichtbarer Text vs. zugänglicher Name (label-content-name-mismatch)

- **Elemente:**
  - Hero: Link mit sichtbarem Text „Anruf“, aber `aria-label="Telefon: 0152-28261619"` → Screenreader hört die Nummer, Nutzer sieht „Anruf“.
  - Cookie-Banner: Button mit Text „Verstanden“, aber `aria-label="Cookies akzeptieren"`.
- **Problem:** Wenn sichtbarer Text und „accessible name“ (z. B. durch `aria-label`) nicht übereinstimmen, kann das Nutzer verwirren.
- **Empfehlung:** Entweder `aria-label` entfernen (dann ist der sichtbare Text der Name) oder sichtbaren Text an den Namen anpassen. Für „Anruf“ reicht oft der sichtbare Text + `title` mit der Nummer; für den Cookie-Button kann „Verstanden“ der alleinige Name sein (ohne `aria-label`).

---

## Best Practices & SEO

- **Best Practices:** 100 – u. a. keine kritischen Sicherheits- oder UX-Warnungen. „Uses HTTPS“ wird lokal mit „nicht anwendbar“ bewertet (localhost); **online** mit HTTPS wird dieser Punkt grün.
- **SEO:** 100 – Titel, Meta-Description, Viewport, Crawlability etc. in Ordnung.

---

## So kannst du es selbst erneut testen

1. **Lokal:**  
   `npm run build` → `npm start` → im Projektordner:
   ```bash
   npx lighthouse http://localhost:3000 --view
   ```
   Öffnet den HTML-Report im Browser.

2. **Nach Go-Live:**  
   - [PageSpeed Insights](https://pagespeed.web.dev/) mit der Live-URL aufrufen.  
   - Oder in Chrome: F12 → Tab „Lighthouse“ → „Analyse ausführen“.

Die vollständigen Rohdaten liegen in `docs/lighthouse-report.json`.
