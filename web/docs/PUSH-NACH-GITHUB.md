# Nach dem Anlegen des GitHub-Repos

1. Auf https://github.com/new ein **neues Repository** anlegen:
   - Name z.B. **arbeitssicherheit-nrw**
   - **Ohne** README, .gitignore oder Lizenz (wir haben schon alles)
   - **Create repository** klicken

2. Im Projektordner `web` in der Konsole (PowerShell) ausführen  
   (ersetze **DEIN-GITHUB-USERNAME** durch deinen GitHub-Benutzernamen):

```powershell
cd "c:\Users\akork\OneDrive\Desktop\Arbeitssicherheit.nrw\web"
git remote add origin https://github.com/DEIN-GITHUB-USERNAME/arbeitssicherheit-nrw.git
git push -u origin main
```

3. Bei Vercel: **Import** des neuen GitHub-Repos. **Root Directory** leer lassen (das Repo enthält bereits das Projekt im Root).
