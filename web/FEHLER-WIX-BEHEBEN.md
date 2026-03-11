# Domain zeigt Wix statt Vercel – Behebung

Wenn **arbeitssicherheit.nrw** eine Wix-Seite anzeigt ("This domain isn't connected to a website yet"), liegt es fast immer an einer dieser Ursachen.

---

## 1. Nameserver: Domain muss bei IONOS bleiben

Wenn die Domain **Wix-Nameserver** nutzt, werden die DNS-Einträge bei IONOS **ignoriert**. Dann zeigt die Domain immer auf Wix.

**Prüfen in IONOS:**
- **Domain** → **arbeitssicherheit.nrw** → Bereich **Nameserver** / **DNS**.
- Es müssen die **IONOS-Standard-Nameserver** eingetragen sein (z. B. `ns1.ionos.de`, `ns2.ionos.de` oder was IONOS für Sie anzeigt).
- Stehen dort **Wix-Nameserver** (z. B. `ns1.wix.com` o. Ä.) oder „Custom Nameserver“, müssen Sie zurück auf **IONOS-Nameserver** wechseln (Button „IONOS-Nameserver verwenden“ o. Ä.).

**Danach:** Die A-Records bei IONOS (76.76.21.21 für `@` und `www`) greifen wieder.

---

## 2. Verwendungsart: „Externer Dienst“ (nicht „Weiterleitung“)

Wenn die Domain auf **Weiterleitung** steht, werden die DNS-Einträge (A, CNAME) **nicht genutzt** – IONOS leitet dann selbst um (z. B. auf http://www...), und die Domain zeigt nicht auf Vercel.

**Prüfen in IONOS:**
- **Domain** → **arbeitssicherheit.nrw** → **„> Verwendungsart anpassen“**
- **Verwendungsart** muss **„Externer Dienst“** sein (bzw. „DNS verwenden“), **nicht** „Weiterleitung“.
- Von **„Weiterleitung“** auf **„Externer Dienst“** wechseln und speichern.

Erst dann greifen die A- und CNAME-Einträge für Vercel.

---

## 3. Weiterleitung / Forwarding auf Wix (oder andere Ziele)

Manchmal ist eine **Domain-Weiterleitung** auf Wix eingerichtet.

**Prüfen in IONOS:**
- **Domain** → **arbeitssicherheit.nrw** → nach **Weiterleitung**, **Redirect**, **Forwarding** oder **Ziel** suchen (falls Verwendungsart doch „Weiterleitung“ war).
- Ist eine Weiterleitung auf **Wix** oder eine Wix-URL eingetragen → **löschen** oder Verwendungsart auf **„Externer Dienst“** stellen (siehe Abschnitt 2).

---

## 4. Domain in Vercel eingetragen

Damit Vercel die Domain bedient, muss sie im Projekt hinterlegt sein.

**In Vercel:**
1. https://vercel.com/handsplus/web → **Settings** → **Domains**
2. **Add**:
   - `www.arbeitssicherheit.nrw`
   - `arbeitssicherheit.nrw` (ohne www)
3. Beide sollten nach ein paar Minuten **Valid** (grüner Haken) werden, sobald DNS auf 76.76.21.21 zeigt.

---

## 5. DNS-Cache leeren

Nach den Änderungen kann noch alter Eintrag (Wix) gecacht sein.

- **Browser:** Seite mit **Strg+Shift+R** (Hard Reload) neu laden oder **Inkognito-Fenster** öffnen und **www.arbeitssicherheit.nrw** testen.
- **DNS:** Verteilung kann 5–60 Minuten dauern. Unter https://www.whatsmydns.net können Sie prüfen, ob **arbeitssicherheit.nrw** und **www.arbeitssicherheit.nrw** weltweit auf **76.76.21.21** zeigen.

---

## Kurz-Checkliste

- [ ] IONOS: **Verwendungsart** = **Externer Dienst** (nicht „Weiterleitung“)
- [ ] IONOS: **Nameserver** = IONOS (nicht Wix)
- [ ] IONOS: **Keine Weiterleitung** auf Wix oder andere Ziele
- [ ] IONOS: **A-Record** für `@` und **CNAME** für `www` wie in IONOS-DNS-ANLEITUNG.md
- [ ] Vercel: **Domains** → `www.arbeitssicherheit.nrw` und `arbeitssicherheit.nrw` hinzugefügt, Status **Valid**
- [ ] Browser: Inkognito oder Hard Reload, dann **www.arbeitssicherheit.nrw** testen

Wenn das alles passt, sollte die Domain Ihre Vercel-Website anzeigen, keine Wix-Seite mehr.
