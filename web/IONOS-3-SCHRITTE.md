# Domain arbeitssicherheit.nrw – nur 3 Schritte

Mach genau das, in dieser Reihenfolge.

---

## Schritt 1: Verwendungsart umstellen

**Was du wählen sollst (volle Bezeichnung):**  
**„Externer Dienst“**

1. Bei **IONOS** einloggen.
2. Zu **Domains** gehen und **arbeitssicherheit.nrw** anklicken.
3. Auf **„Verwendungsart anpassen“** klicken.
4. **Genau das wählen:**
   - **„Externer Dienst“**  
     **oder** (falls so angezeigt) **„Externe Nutzung“**  
     **oder** **„Nur Domain“** / **„Domain ohne Weiterleitung“**
   - **Nicht** wählen: **„Weiterleitung“**, **„Domain weiterleiten“**, **„Website weiterleiten“**
5. Speichern.

---

## Schritt 2: DNS prüfen

1. Auf der gleichen Domain-Seite auf **„DNS-Einstellungen anpassen“** klicken.
2. Es müssen **genau diese zwei Einträge** da sein (sonst anlegen oder ändern):

   | Typ   | Name/Host | Wert/Ziel                          |
   |-------|-----------|------------------------------------|
   | **A** | **@**     | **216.198.79.1**                   |
   | **CNAME** | **www** | **aad057026f290f8b.vercel-dns-017.com** |

3. Speichern.

---

## Schritt 3: Warten und testen

1. **10 Minuten** warten.
2. **Inkognito-Fenster** im Browser öffnen (Strg+Shift+N).
3. **www.arbeitssicherheit.nrw** eingeben und Enter.

Fertig. Wenn es dann noch nicht geht: in Vercel unter dem Projekt **Settings → Domains** prüfen, ob **www.arbeitssicherheit.nrw** und **arbeitssicherheit.nrw** eingetragen sind.
