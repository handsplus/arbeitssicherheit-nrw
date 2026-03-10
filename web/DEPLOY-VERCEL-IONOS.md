# Online mit Vercel + IONOS – Schritt für Schritt

Damit **www.arbeitssicherheit.nrw** live geht, folgen Sie genau dieser Reihenfolge.

---

## Teil 1: Code zu GitHub bringen (falls noch nicht geschehen)

1. **GitHub:** Auf [github.com](https://github.com) einloggen, neues Repository erstellen (z. B. `arbeitssicherheit-nrw`), **ohne** README/ .gitignore (leeres Repo).
2. **Lokal (im Ordner des gesamten Projekts, z. B. `Arbeitssicherheit.nrw`):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/IHR-USERNAME/arbeitssicherheit-nrw.git
   git push -u origin main
   ```
   Ersetzen Sie `IHR-USERNAME` durch Ihren GitHub-Benutzernamen.

---

## Teil 2: Projekt bei Vercel einrichten

1. **Vercel:** [vercel.com](https://vercel.com) → **Add New** → **Project**.
2. **Import:** „Import Git Repository“ wählen und Ihr **GitHub-Repo** verbinden (ggf. GitHub autorisieren).
3. **Konfiguration:**
   - **Root Directory:** auf **Edit** klicken und `web` eintragen (damit Vercel den Next.js-Ordner nutzt).
   - **Framework Preset:** Next.js (wird erkannt).
   - **Build Command:** `npm run build` (Standard).
   - **Output Directory:** leer lassen (Standard).
4. **Environment Variables** (wichtig für Formulare):
   - **Add** → Name: `NEXT_PUBLIC_FORMSPREE_BERATUNG_ID`, Value: `xdaweewk`
   - **Add** → Name: `NEXT_PUBLIC_FORMSPREE_KONTAKT_ID`, Value: `xdaweewk`
5. **Deploy** klicken. Nach 1–2 Minuten haben Sie eine URL wie `xxx.vercel.app` – die Seite läuft schon.

---

## Teil 3: Eigene Domain (IONOS) bei Vercel eintragen

1. In Vercel: Ihr **Projekt** öffnen → **Settings** → **Domains**.
2. **Add** → Domain eingeben: `www.arbeitssicherheit.nrw` → **Add**.
3. Zusätzlich (optional, für Redirect): `arbeitssicherheit.nrw` hinzufügen.
4. Vercel zeigt Ihnen jetzt an, was Sie bei IONOS eintragen sollen (z. B. **CNAME** für `www` und ggf. **A** für die Root-Domain).

---

## Teil 4: DNS bei IONOS einstellen

1. **IONOS:** Einloggen → **Domains** → Domain **arbeitssicherheit.nrw** auswählen → **DNS-Verwaltung** / **Verwaltung**.
2. **Einträge anlegen/ändern** (genau so, wie Vercel es unter „Domains“ anzeigt):

   **Für www (empfohlen zuerst):**
   - Typ: **CNAME**
   - Name/Host: `www` (oder `www.arbeitssicherheit.nrw` – je nach IONOS-Anzeige)
   - Ziel/Wert: `cname.vercel-dns.com` (steht bei Vercel unter Ihrer Domain)

   **Für die Root-Domain (arbeitssicherheit.nrw ohne www):**
   - Typ: **A**
   - Name: `@` oder leer (Hauptdomain)
   - Ziel: `76.76.21.21` (Vercel-IP – in Vercel unter Domain-Details prüfen)

3. Alte Einträge für `www` oder `@`, die woanders hinführen, **löschen oder ersetzen**.
4. **Speichern.** Die Verbreitung kann 5–60 Minuten dauern.

---

## Teil 5: Domain in Vercel bestätigen

1. Zurück in Vercel unter **Settings** → **Domains**.
2. Neben Ihrer Domain steht „Pending“ oder „Configuration“. Sobald IONOS die DNS-Einträge verteilt hat, wechselt der Status zu **Valid** (grüner Haken).
3. **SSL:** Vercel stellt automatisch ein Zertifikat aus (HTTPS). Nichts weiter nötig.

---

## Checkliste

- [ ] GitHub-Repo erstellt und Code gepusht
- [ ] Vercel-Projekt mit **Root Directory `web`** erstellt
- [ ] Env-Variablen `NEXT_PUBLIC_FORMSPREE_BERATUNG_ID` und `NEXT_PUBLIC_FORMSPREE_KONTAKT_ID` in Vercel gesetzt
- [ ] Domains `www.arbeitssicherheit.nrw` und ggf. `arbeitssicherheit.nrw` in Vercel hinzugefügt
- [ ] Bei IONOS CNAME für `www` → `cname.vercel-dns.com` und A für `@` → `76.76.21.21` eingetragen
- [ ] In Vercel unter Domains „Valid“ abgewartet

Danach ist **www.arbeitssicherheit.nrw** live.

---

**Hinweis:** Die genauen Bezeichnungen („Name“, „Ziel“, „Host“) können bei IONOS leicht abweichen. Orientieren Sie sich an dem, was Vercel unter **Domains** → Ihre Domain → **Configuration** anzeigt, und übernehmen Sie die dort genannten Werte 1:1 in die IONOS-DNS-Einträge.
