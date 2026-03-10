# Arbeitssicherheit.nrw – Online bringen

**→ Schritt-für-Schritt-Anleitung:** [SCHRITT-FÜR-SCHRITT.md](./SCHRITT-FÜR-SCHRITT.md)

So bringst du die Seite online, erreichst sie unter **www.arbeitssicherheit.nrw** und wirst bei Besuchen per E-Mail benachrichtigt.

---

## 1. Seite online (Vercel)

1. **Kostenlosen Account anlegen:** [vercel.com](https://vercel.com) → Sign Up (z. B. mit GitHub).
2. **Projekt verbinden:**
   - Auf [vercel.com/new](https://vercel.com/new) gehen.
   - Repository auswählen (z. B. GitHub-Repo mit diesem Code) oder **„Import Git Repository“** nutzen.  
   Falls du noch kein Git-Repo hast: Projekt zuerst auf GitHub pushen, dann in Vercel importieren.
   - **Root Directory:** `web` (falls das Projekt in einem Unterordner `web` liegt).
   - **Framework:** Next.js wird automatisch erkannt.
   - Auf **Deploy** klicken.
3. Nach dem ersten Deploy hast du eine URL wie `dein-projekt.vercel.app`. Die Seite ist damit **online**.

---

## 2. Domain mit www (www.arbeitssicherheit.nrw)

1. In Vercel: **Projekt** → **Settings** → **Domains**.
2. Domain hinzufügen: **www.arbeitssicherheit.nrw** (und optional **arbeitssicherheit.nrw** für Weiterleitung).
3. Bei deinem **Domain-Anbieter** (wo du arbeitssicherheit.nrw gekauft hast) die DNS-Einträge so setzen, wie Vercel sie anzeigt, z. B.:
   - **Typ:** CNAME  
   - **Name:** www (oder der von Vercel angezeigte Wert)  
   - **Wert:** `cname.vercel-dns.com`
4. Optional: In Vercel unter Domains **arbeitssicherheit.nrw** (ohne www) hinzufügen und auf **www.arbeitssicherheit.nrw** weiterleiten. Dann funktioniert beides; Aufrufe ohne www landen bei www.

Damit ist die Seite unter **www.arbeitssicherheit.nrw** erreichbar.

---

## 3. Benachrichtigung bei Besuchen

Die Seite schickt dir **eine E-Mail**, wenn jemand die Seite besucht (max. **1 E-Mail pro Stunde**, um Spam zu vermeiden; pro Besuch/Session nur ein Ping).

**E-Mail-Versand einrichten (Resend):**

1. **Resend-Account:** [resend.com](https://resend.com) → Account anlegen.
2. **API-Key:** Resend Dashboard → API Keys → Create API Key → Key kopieren.
3. **Domain in Resend verifizieren** (damit Absender z. B. `Website <kontakt@arbeitssicherheit.nrw>` funktioniert), oder vorerst die Resend-Test-Adresse nutzen.
4. **In Vercel eintragen:**
   - Projekt → **Settings** → **Environment Variables**
   - Variable hinzufügen:
     - **Name:** `RESEND_API_KEY`  
     - **Value:** dein Resend-API-Key  
     - **Environment:** Production (und ggf. Preview)
   - Optional, falls du eine eigene Absender-Adresse nutzt:
     - **Name:** `RESEND_FROM`  
     - **Value:** z. B. `Arbeitssicherheit.nrw <kontakt@arbeitssicherheit.nrw>`
5. **Redeploy:** Nach dem Speichern der Variablen einmal **Deployments** → letztes Deployment → **Redeploy** ausführen.

E-Mails gehen an die in `src/lib/constants.ts` hinterlegte Adresse (`CONTACT.email`). Bei jedem Besuch (throttled auf 1× pro Stunde) erhältst du eine Mail mit Pfad und Zeit.

---

## Kurzüberblick

| Ziel | Wo / Was |
|------|----------|
| **Seite online** | Vercel, Projekt aus Git deployen |
| **Mit www erreichbar** | Vercel → Domains → **www.arbeitssicherheit.nrw** + DNS (CNAME) beim Domain-Anbieter |
| **Benachrichtigung bei Besuch** | Resend API-Key als `RESEND_API_KEY` in Vercel eintragen, optional `RESEND_FROM` |

Wenn du möchtest, können wir als Nächstes z. B. nur bestimmte Seiten für Benachrichtigungen einschränken oder das Throttling anpassen.
