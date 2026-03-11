# Beide Domains gehen nicht – nur das hier tun

Vercel ist in Ordnung (Seite läuft). Das Problem ist **nur der DNS bei IONOS** – die Domain-Anfragen kommen bei Vercel nicht an.

---

## Zuerst testen (damit du siehst, dass die Seite geht)

Im Browser öffnen:

**https://web-3pvwgr9u9-handsplus.vercel.app**

Wenn dort deine Seite (grün/rot, Arbeitssicherheit.nrw) läuft, ist Vercel ok. Dann musst du nur noch unten die 2 DNS-Einträge bei IONOS richtig setzen.

---

## Bei IONOS: genau 2 Einträge prüfen/anlegen

1. **IONOS** → **Domains & SSL** → **arbeitssicherheit.nrw** anklicken (die Hauptdomain, nicht eine Subdomain).
2. Oben auf den Reiter **DNS** klicken.
3. Wenn oben steht „Ansicht gefiltert nach …“ → **Filter zurücksetzen** klicken.
4. In der Tabelle **zwei Einträge** haben oder anlegen:

### Eintrag 1 – Hauptdomain (arbeitssicherheit.nrw)

- **Typ:** A  
- **Hostname:** @ (oder leer)  
- **Wert:** **216.198.79.1**

Falls es schon einen A-Record mit Hostname **@** gibt: Stift klicken und den Wert auf **216.198.79.1** ändern.  
Falls nicht: **Neuer Eintrag** / **Record hinzufügen** → Typ A, Hostname @, Wert 216.198.79.1 → Speichern.

### Eintrag 2 – www (www.arbeitssicherheit.nrw)

- **Typ:** A  
- **Hostname:** www  
- **Wert:** **216.198.79.1**

Falls es schon einen A-Record mit Hostname **www** gibt: Stift klicken und den Wert auf **216.198.79.1** ändern (nicht 217.160.0.88).  
Falls nicht: **Neuer Eintrag** → Typ A, Hostname www, Wert 216.198.79.1 → Speichern.

5. **Speichern** nicht vergessen.

---

## Danach

- **15 Minuten** warten.
- **Inkognito-Fenster** (Strg+Shift+N) öffnen.
- **https://www.arbeitssicherheit.nrw** aufrufen.
- Dann **https://arbeitssicherheit.nrw** aufrufen.

Wenn es dann noch nicht geht: Screenshot von der **DNS-Tabelle** (nach Filter zurücksetzen) schicken – dann sehen wir, was noch falsch steht.
