# Arbeitssicherheit.nrw – Next.js Website

Nachbildung der Website [arbeitssicherheit.nrw](https://www.arbeitssicherheit.nrw/) als vollständiges Next.js-Projekt mit gleicher Struktur und erweiterten Funktionen für Arbeitssicherheit, SiGeKo und Brandschutz.

## Technologie

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Eigenes Favicon & Apple-Touch-Icon** (NRW-Grün, generiert via `app/icon.tsx` und `app/apple-icon.tsx`)

## Schnellstart

```bash
cd web
npm install
npm run dev
```

Die Anwendung läuft unter [http://localhost:3000](http://localhost:3000).

**Deployment auf Vercel:** Siehe [docs/DEPLOY-VERCEL.md](docs/DEPLOY-VERCEL.md) (Schritte, Root Directory `web`, Umgebungsvariablen für E-Mail). Weitere Anleitungen: [docs/](docs/).

## Projektstruktur

```
src/
├── app/                    # App-Router-Seiten
│   ├── page.tsx            # Startseite
│   ├── leistungen/         # Leistungsübersicht + Unterseiten
│   ├── kontakt/
│   ├── wissen/
│   ├── ueber-uns/
│   ├── impressum/
│   ├── datenschutz/
│   ├── beratung-buchen/    # Zusatz: Erstberatung buchen
│   ├── checklisten/        # Zusatz: Selbstbewertung
│   ├── faq/                # Zusatz: Häufige Fragen
│   └── schulungskalender/  # Schulungstermine auf Anfrage (Weiterleitung zu Beratung)
├── components/             # Header, Footer, Formulare, Cookie-Banner
└── lib/
    └── constants.ts        # Kontakt, Navigation, Leistungen
```

## Umgesetzte Inhalte (1:1 zum Original)

- **Startseite:** Hero, Intro, „Alles aus einer Hand“, Unsere Leistungen, Kontakt inkl. Formular
- **Leistungen:** Arbeitssicherheit, Brandschutz, Schulungen, Elektrosicherheit, Managementsysteme
- **Kontakt:** Adresse, Telefon, E-Mail, Kontaktformular (Vorname, Nachname, E-Mail, Mitteilung)
- **Über uns, Impressum, Datenschutz** mit Platzhaltern für rechtliche Angaben
- **Navigation:** Start, Leistungen (Dropdown), Kontakt, Wissen, Über uns, Beratung buchen
- **Cookie-Hinweis** mit Verlinkung zur Datenschutzerklärung

## Zusätzliche Funktionen (für Arbeitssicherheit, SiGeKo, Brandschutz)

| Funktion | Beschreibung |
|----------|--------------|
| **Beratung buchen** | Formular für kostenlose Erstberatung mit Themenauswahl (Arbeitssicherheit, Brandschutz, Schulungen, Elektro, SiGeKo, Managementsysteme) |
| **Checklisten** | Interaktive Checklisten: Gefährdungsbeurteilung, Brandschutz, SiGeKo (Baustelle) – zur groben Selbstbewertung |
| **FAQ** | Häufige Fragen zu FaSi, SiGeKo, Brandschutz, Elektrosicherheit mit aufklappbaren Antworten |
| **Schulungstermine** | Termine auf Anfrage, CTA „Schulungstermine anfragen“ → Beratung buchen |
| **Cookie-Banner** | DSGVO-relevanter Hinweis mit Speicherung der Einwilligung in `localStorage` |

## Weitere sinnvolle Erweiterungen (Vorschläge)

1. ~~**API-Route für Formulare**~~  
   Erledigt: Kontakt- und Erstberatungsformulare senden per Resend an `CONTACT.email`. Siehe Abschnitt „E-Mail-Versand“ oben.

2. **SiGeKo-Landing**  
   Eigene Seite „SiGeKo / Baustellensicherheit“ mit Ablauf, Gesetzgebung (z. B. RAB 30) und CTA.

3. **Download-Bereich**  
   Merkblätter, Vorlagen (z. B. Gefährdungsbeurteilung, Unterweisungsnachweis) als PDF nach E-Mail-Eintrag oder direkt.

4. **Newsletter**  
   Anmeldung für Updates zu Vorschriften (DGUV, Gesetze), mit Hinweis auf Datenschutz und Widerruf.

5. **Zertifikate / Referenzen**  
   Sektion mit Logos (z. B. TÜV Rheinland), Zertifikaten und kurzen Referenztexten.

6. **Blog / Wissen-Artikel**  
   Unter „Wissen“ Artikel zu Themen wie Gefährdungsbeurteilung, Brandschutzordnung, Prüffristen mit SEO-Metadaten.

7. **Terminbuchung**  
   Integration z. B. Calendly/Cal.com für feste Slots zur Erstberatung.

8. **Prüffristen-Reminder**  
   Optional: Hinweis oder Tool „Nächste Prüftermine“ (Elektro, Feuerlöscher etc.) mit Erinnerung per E-Mail.

9. **Mehrsprachigkeit**  
   Falls Zielgruppe auch international: i18n (z. B. next-intl) für DE/EN.

10. **Analytics & Cookie-Einwilligung**  
    Nur nach Einwilligung (Cookie-Banner) z. B. Google Analytics oder Matomo laden.

---

**Build & Produktion**

```bash
npm run build
npm run start
```

### E-Mail-Versand (Kontaktformular & Erstberatung)

Die Formulare senden E-Mails über [Resend](https://resend.com). Für den Live-Betrieb:

1. Account bei Resend anlegen und Domain verifizieren (z. B. `arbeitssicherheit.nrw` oder `handsplus.de`).
2. API-Key erstellen und in `.env` eintragen (siehe `.env.example`):
   - `RESEND_API_KEY=re_...`
   - Optional: `RESEND_FROM="Arbeitssicherheit.nrw <kontakt@ihredomain.de>"`
3. Ohne `RESEND_API_KEY` antwortet die API mit 503; die Formulare zeigen dann „Fehler beim Senden“.

Empfänger ist die in `src/lib/constants.ts` hinterlegte E-Mail (`CONTACT.email`).

---

Impressum: USt-ID bei Bedarf eintragen oder den Absatz entfernen. Datenschutz enthält Verantwortlicher, Kontaktformular, Rechte, Cookies, Speicherdauer und Hosting.
