# IONOS: Domain auf Vercel zeigen lassen

Folgen Sie **genau** diesen Schritten in IONOS.

---

## Schritt 0: Verwendungsart auf „Externer Dienst“ stellen (wichtig)

Wenn die Domain auf **Weiterleitung** steht, werden Ihre DNS-Einträge **nicht genutzt** – die Domain zeigt dann nicht auf Vercel.

**In IONOS:**
1. Domain **arbeitssicherheit.nrw** öffnen.
2. **„> Verwendungsart anpassen“** klicken.
3. Von **„Weiterleitung“** auf **„Externer Dienst“** (bzw. „DNS verwenden“) wechseln und speichern.

Erst danach greifen die A- und CNAME-Einträge in Schritt 2. Ohne diesen Schritt bleibt die Verbindung zu Vercel fehlerhaft.

---

## Schritt 1: DNS-Einstellungen öffnen

1. Auf der Domain-Detailseite **arbeitssicherheit.nrw**.
2. Klicken Sie auf **„> DNS-Einstellungen anpassen“** (unter „Ziel: a Third Party Service“ oder nach Schritt 0 unter „Externer Dienst“).

---

## Schritt 2: Einträge für Vercel anlegen

Sie brauchen **zwei Einträge** (bestehende Einträge für `www` oder `@` ggf. vorher löschen oder ersetzen).

### Eintrag 1 – für **www.arbeitssicherheit.nrw**

| In IONOS oft so bezeichnet | Wert eintragen |
|----------------------------|----------------|
| **Typ** / Record type      | **CNAME**      |
| **Name** / Host / Subdomain| **www**        |
| **Ziel** / Zielwert / Value| **aad057026f290f8b.vercel-dns-017.com** |
| **TTL** (falls gefragt)    | 3600 oder Standard lassen |

(Hinweis: Aktuell von Vercel empfohlener Wert. Altes Ziel `cname.vercel-dns.com` funktioniert weiterhin.)

Speichern.

### Eintrag 2 – für **arbeitssicherheit.nrw** (ohne www)

| In IONOS oft so bezeichnet | Wert eintragen |
|----------------------------|----------------|
| **Typ** / Record type      | **A**          |
| **Name** / Host            | **@** (oder leer lassen für Hauptdomain) |
| **Ziel** / Zielwert / Value| **216.198.79.1** |
| **TTL** (falls gefragt)     | 3600 oder Standard lassen |

(Vercel empfiehlt diese neue IP; die alte **76.76.21.21** funktioniert weiterhin.)

Speichern.

---

## Schritt 3: Vorher bei Vercel prüfen

Damit die Domain funktioniert, muss sie **zuerst in Vercel** eingetragen sein:

1. **Vercel:** https://vercel.com/handsplus/web → **Settings** → **Domains**
2. **Add** → `www.arbeitssicherheit.nrw` eingeben → Add
3. Optional: `arbeitssicherheit.nrw` (ohne www) hinzufügen
4. Vercel zeigt Ihnen die gewünschten DNS-Einträge – verwenden Sie **diese Werte**, falls IONOS andere Angaben zeigt (z. B. andere Ziel-Adresse). Dann oben in dieser Anleitung die Werte durch die von Vercel ersetzen.

---

## Schritt 4: Warten

- DNS-Ausbreitung: **ca. 5–60 Minuten**.
- In Vercel unter **Domains** wechselt der Status von „Pending“ zu **Valid** (grüner Haken).
- **SSL:** Vercel richtet HTTPS automatisch ein – in IONOS muss dafür **kein** SSL-Zertifikat aktiviert werden.

---

## Kurz-Checkliste

- [ ] IONOS: **Verwendungsart** = **Externer Dienst** (nicht „Weiterleitung“)
- [ ] In Vercel: Domain `www.arbeitssicherheit.nrw` (und ggf. `arbeitssicherheit.nrw`) unter **Domains** hinzugefügt
- [ ] In IONOS: **DNS-Einstellungen anpassen** geöffnet
- [ ] CNAME: **www** → **aad057026f290f8b.vercel-dns-017.com**
- [ ] A: **@** → **216.198.79.1**
- [ ] Gespeichert, 5–15 Min gewartet, in Vercel „Valid“ geprüft

Danach ist **www.arbeitssicherheit.nrw** live auf Ihrer Vercel-Seite.
