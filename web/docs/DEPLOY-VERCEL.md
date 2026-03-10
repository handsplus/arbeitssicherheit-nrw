# Deployment auf Vercel

## 1. Vercel-Account

Falls noch nicht geschehen: [vercel.com](https://vercel.com) → Sign up (z. B. mit GitHub).

## 2. Projekt deployen

### Option A: Über die Vercel-Website (empfohlen)

1. Auf [vercel.com/new](https://vercel.com/new) gehen.
2. Repository verbinden (GitHub/GitLab/Bitbucket) und das Projekt **Arbeitssicherheit.nrw** auswählen.
3. **Root Directory:** auf `web` setzen (weil die Next.js-App im Ordner `web` liegt).
4. **Build Command:** `npm run build` (Standard).
5. **Output Directory:** leer lassen (Next.js-Standard).
6. **Deploy** klicken.

### Option B: Über die Vercel-CLI

```bash
cd web
npx vercel
```

Fragen beantworten (z. B. Link zu bestehendem Projekt oder neues Projekt). Für Produktion:

```bash
npx vercel --prod
```

## 3. Umgebungsvariablen (wichtig für Formulare)

In Vercel: **Project → Settings → Environment Variables**:

| Name | Wert | Hinweis |
|------|------|--------|
| `RESEND_API_KEY` | `re_...` | Von [resend.com](https://resend.com) (API Keys). |
| `RESEND_FROM` | (optional) | z. B. `Arbeitssicherheit.nrw <kontakt@ihredomain.de>` sobald Domain bei Resend verifiziert. |

Ohne `RESEND_API_KEY` bauen die Kontaktformulare weiter, senden aber keine E-Mails (API antwortet mit 503).

## 4. Eigene Domain (optional)

Unter **Project → Settings → Domains** die Domain eintragen (z. B. `www.arbeitssicherheit.nrw`) und die bei deinem Anbieter angezeigten DNS-Einträge (CNAME/A) setzen.

---

Nach dem ersten Deploy wird bei jedem Push ins verbundene Git-Repo automatisch neu gebaut und ausgerollt.
