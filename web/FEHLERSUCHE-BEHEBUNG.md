# Domain funktioniert nicht – Fehler erkennen und beheben

Kurz-Check: Was genau passiert, und was du wo prüfen musst.

---

## 1. Was passiert beim Aufruf?

| Du gibst ein …              | Erwartung                         | Wenn nicht: siehe Abschnitt |
|-----------------------------|-----------------------------------|-----------------------------|
| **www.arbeitssicherheit.nrw** | Deine Vercel-Seite (grün/rot)     | A                          |
| **arbeitssicherheit.nrw** (ohne www) | Weiterleitung zu www, dann deine Seite | B                          |
| Beides zeigt Wix / Fehlerseite / „nicht verbunden“ | –                                 | A + B + C                  |

---

## 2. Fehler A: www.arbeitssicherheit.nrw zeigt nicht auf deine Seite

**Ursache meist:** DNS für **www** zeigt noch auf IONOS (217.160.0.88) oder ist falsch.

**Prüfen:**

1. IONOS → **Domains** → **arbeitssicherheit.nrw**.
2. Reiter **DNS** (nicht „Subdomains“).
3. Oben **Filter zurücksetzen** klicken (damit alle Einträge sichtbar sind).
4. In der Liste suchen: Zeile mit **Hostname „www“** und **Typ A**.

**Richtig ist:**

- **Typ:** A  
- **Hostname:** www  
- **Wert:** **216.198.79.1** (Vercel)

**Falsch ist:** Wert **217.160.0.88** (IONOS).

**Beheben:** Auf **Stift (Bearbeiten)** bei dieser Zeile klicken, bei „Zeigt auf“ **216.198.79.1** eintragen, Speichern.

Falls du die **www**-Einträge nur unter **Subdomains → www → DNS** siehst: dort dieselbe Prüfung – A-Record für **www** muss **216.198.79.1** sein.

---

## 3. Fehler B: arbeitssicherheit.nrw (ohne www) funktioniert nicht

**Ursache meist:** Für die **Hauptdomain** fehlt ein A-Record auf Vercel oder er zeigt auf IONOS.

**Prüfen:**

1. IONOS → **Domains** → **arbeitssicherheit.nrw** → Reiter **DNS**.
2. Filter ggf. zurücksetzen.
3. Zeile suchen: **Hostname „@“** (oder leer), **Typ A**.

**Richtig ist:**

- **Typ:** A  
- **Hostname:** @ (Hauptdomain)  
- **Wert:** **216.198.79.1**

**Falsch:** Fehlt der Eintrag oder steht eine andere IP (z. B. 217.160.0.88).

**Beheben:** Entweder diesen A-Record auf **216.198.79.1** ändern (Stift) oder neuen A-Record anlegen: Typ A, Name @, Wert 216.198.79.1, speichern.

---

## 4. Fehler C: Domain nicht in Vercel zugewiesen

**Ursache:** Vercel weiß nicht, dass arbeitssicherheit.nrw zu deinem Projekt gehört.

**Prüfen:**

1. https://vercel.com → Projekt **web** (handsplus/web) öffnen.
2. **Settings** → **Domains**.

**Richtig:** In der Liste stehen:

- **www.arbeitssicherheit.nrw** – Status **Valid** (grüner Haken)
- **arbeitssicherheit.nrw** – Status **Valid**

**Beheben:** Fehlt eine der beiden → **Add** → Domain eintragen. Einige Minuten warten, bis Status „Valid“ ist.

---

## 5. Checkliste (alles der Reihe nach)

- [ ] **IONOS – Hauptdomain DNS:** A-Record **@** → **216.198.79.1**
- [ ] **IONOS – www:** A-Record **www** → **216.198.79.1** (in DNS oder unter Subdomains → www → DNS)
- [ ] **Vercel:** Beide Domains eingetragen, beide **Valid**
- [ ] **Warten:** 10–15 Minuten nach DNS-Änderungen
- [ ] **Test:** **Inkognito-Fenster** (Strg+Shift+N), **www.arbeitssicherheit.nrw** und **arbeitssicherheit.nrw** aufrufen

---

## 6. Typische Fehler im Überblick

| Fehler | Lösung |
|--------|--------|
| Nur **www** geändert, **@** (Hauptdomain) nicht | In IONOS DNS A-Record **@** → **216.198.79.1** anlegen oder anpassen |
| **www** zeigt noch auf 217.160.0.88 | In IONOS DNS (oder Subdomains → www → DNS) A-Record **www** auf **216.198.79.1** ändern |
| Domain in Vercel fehlt oder „Pending“ | In Vercel **Settings → Domains** beide Domains eintragen, bis **Valid** |
| Alter Inhalt (Wix/IONOS) im Browser | Inkognito testen; 10–15 Min warten; ggf. DNS-Cache (z. B. whatsmydns.net) prüfen |

Wenn du sagst, **was genau** passiert (z. B. „www geht, ohne www nicht“ oder „beides zeigt Wix“), kann man den Fehler genau zuordnen.
