# Vercel-Deployment – Schritt für Schritt

Mach genau das:

---

## Schritt 1: Code hochladen (falls noch nicht geschehen)

- Diesen Ordner **`Arbeitssicherheit.nrw`** (mit dem Unterordner **`web`**) in ein **GitHub-Repository** pushen.
- Wenn du schon ein Repo hast: einfach die neuesten Änderungen pushen.

---

## Schritt 2: Neues Projekt bei Vercel anlegen

1. Im Browser öffnen: **https://vercel.com/new**
2. Einloggen (gleicher Account wie für sigeko.koeln).
3. **„Import Git Repository“** – dein **Arbeitssicherheit.nrw**-Repo auswählen (oder zuerst GitHub verbinden, dann Repo wählen).
4. **Wichtig – bevor du auf Deploy klickst:**
   - Bei **„Root Directory“** auf **„Edit“** klicken.
   - **`web`** eintragen und bestätigen.
   - So weiß Vercel, dass die Next.js-App im Ordner **web** liegt.
5. **„Deploy“** klicken und warten (1–2 Minuten).

Fertig: Du bekommst eine Adresse wie **xxx.vercel.app**. Die Seite läuft.

---

## Schritt 3: E-Mails der Formulare aktivieren

1. Auf **https://resend.com** gehen, Account anlegen, unter **API Keys** einen Key erstellen und kopieren.
2. Bei Vercel: dein **neues Projekt** (Arbeitssicherheit.nrw) öffnen.
3. Oben: **„Settings“** → links **„Environment Variables“**.
4. **„Add New“**:
   - **Name:** `RESEND_API_KEY`
   - **Value:** den Key von Resend einfügen (z. B. `re_...`).
5. **Save**.
6. Oben im Projekt: **„Deployments“** → bei dem letzten Deployment auf die **drei Punkte (⋯)** → **„Redeploy“**, damit die Variable genutzt wird.

Ab dann gehen die Kontakt- und Erstberatungs-Formulare per E-Mail an **kontakt@handsplus.de**.

---

## Schritt 4: Eigene Domain (später möglich)

1. Im Vercel-Projekt: **„Settings“** → **„Domains“**.
2. Domain eintragen (z. B. **www.arbeitssicherheit.nrw**).
3. Die angezeigten DNS-Einträge bei deinem Domain-Anbieter eintragen (CNAME oder A-Record).

---

**Kurz:** Repo mit Ordner **web** bei Vercel importieren → Root Directory **`web`** setzen → Deploy → `RESEND_API_KEY` in Environment Variables eintragen → einmal Redeploy. Danach läuft die Seite und die Formulare versenden E-Mails.
