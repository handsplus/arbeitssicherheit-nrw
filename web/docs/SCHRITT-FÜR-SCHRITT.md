# Seite online – Schritt für Schritt

Alles vorbereitet. Folge einfach den Schritten unten. Wenn dein Projekt in einem Ordner **`web`** liegt (z.B. im Repo `Arbeitssicherheit.nrw`), in Vercel unter **Root Directory** `web` eintragen.

---

## Schritt 1: Code auf GitHub (falls noch nicht geschehen)

1. Öffne [github.com/new](https://github.com/new).
2. Repository-Name z.B. **arbeitssicherheit-nrw**.
3. **Create repository**.
4. Lokal im Projektordner (dort wo `package.json` liegt) in der Konsole:
   ```bash
   git init
   git add .
   git commit -m "Initial: Arbeitssicherheit.nrw"
   git branch -M main
   git remote add origin https://github.com/DEIN-USERNAME/arbeitssicherheit-nrw.git
   git push -u origin main
   ```
   Ersetze **DEIN-USERNAME** mit deinem GitHub-Benutzernamen.  
   **Wichtig:** Wenn das Projekt im Unterordner `web` liegt, diese Befehle im **übergeordneten** Ordner ausführen (dort wo die `.git`-Ordner liegt), nicht nur im `web`-Ordner.

---

## Schritt 2: Vercel-Account & Projekt

1. Gehe zu [vercel.com](https://vercel.com) → **Sign Up** (mit GitHub anmelden).
2. Klicke **Add New…** → **Project**.
3. **Import Git Repository** → wähle dein Repository (z.B. arbeitssicherheit-nrw).
4. **Configure Project:**
   - **Root Directory:** Auf **Edit** klicken und **`web`** eintragen, wenn dein Next.js-Projekt im Ordner `web` liegt. Sonst leer lassen.
   - **Framework Preset:** Next.js (wird automatisch erkannt).
   - **Build Command:** `npm run build` (Standard).
   - **Output Directory:** leer (Standard).
5. **Deploy** klicken.
6. Warten, bis der Build durch ist. Danach hast du eine URL wie **`xyz.vercel.app`** – die Seite ist **online**.

---

## Schritt 3: E-Mails aktivieren (Resend)

Damit du E-Mails bei Kontakt-, Beratungs- und Besuch-Anfragen bekommst:

1. Gehe zu [resend.com](https://resend.com) → **Sign Up** (kostenlos).
2. Im Dashboard: **API Keys** → **Create API Key** → Name z.B. „Vercel“ → Key **kopieren**.
3. In **Vercel:** dein Projekt öffnen → **Settings** → **Environment Variables**.
4. Neue Variable:
   - **Key:** `RESEND_API_KEY`
   - **Value:** den kopierten Resend-API-Key einfügen
   - **Environment:** Production (und ggf. Preview) auswählen
   - **Save**.
5. Optional (eigener Absender): Noch eine Variable:
   - **Key:** `RESEND_FROM`
   - **Value:** `Arbeitssicherheit.nrw <kontakt@arbeitssicherheit.nrw>` (oder deine verifizierte Absender-Adresse)
   - **Save**.
6. **Redeploy:** **Deployments** → bei dem letzten Deployment auf die drei Punkte (**…**) → **Redeploy**.

Ab dann gehen Kontakt- und Beratungsanfragen sowie Besuch-Benachrichtigungen an die in `src/lib/constants.ts` hinterlegte E-Mail (**CONTACT.email**).

---

## Schritt 4: Eigene Domain mit www (www.arbeitssicherheit.nrw)

1. In **Vercel:** Projekt → **Settings** → **Domains**.
2. **Add** → **www.arbeitssicherheit.nrw** eintragen → **Add**.
3. Vercel zeigt dir, welche DNS-Einträge du brauchst (meist einen **CNAME** für `www`).
4. Beim **Anbieter deiner Domain** (wo du arbeitssicherheit.nrw verwaltest):
   - DNS / Nameserver / Zone bearbeiten.
   - Neuen Eintrag:
     - **Typ:** CNAME  
     - **Name/Host:** `www`  
     - **Wert/Ziel:** den von Vercel angezeigten Wert (z.B. `cname.vercel-dns.com`).
   - Speichern.
5. Optional – Aufruf ohne www auf www umleiten: In Vercel unter **Domains** zusätzlich **arbeitssicherheit.nrw** (ohne www) hinzufügen. Vercel leitet dann automatisch auf **www.arbeitssicherheit.nrw** weiter (siehe `vercel.json`).

DNS-Änderungen können einige Minuten bis Stunden dauern. Danach ist die Seite unter **www.arbeitssicherheit.nrw** erreichbar.

---

## Checkliste

| Schritt | Erledigt |
|--------|----------|
| 1. Code auf GitHub | ☐ |
| 2. Vercel: Projekt importieren, Root `web` falls nötig, Deploy | ☐ |
| 3. Resend: API-Key in Vercel als `RESEND_API_KEY`, Redeploy | ☐ |
| 4. Domain in Vercel hinzugefügt, CNAME beim Anbieter gesetzt | ☐ |

---

## Lokal testen (optional)

- **Build prüfen:** Im Ordner `web` im Terminal: `npm run build`
- **E-Mail-Variablen:** `.env.example` nach `.env` kopieren, echte Werte eintragen, dann `npm run dev`

Bei Fragen zu einem Schritt einfach den jeweiligen Schritt nennen.
