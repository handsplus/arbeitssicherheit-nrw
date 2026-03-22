/**
 * Erstellt ein quadratisches Logo in hoher Auflösung für Google Business Profile.
 * Speichert in: …/4. H&S+ Logos Bilder Vorträge/AS.NRW_Logo/
 */

import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

// Sehr hohe Auflösung + Qualitätspipeline für maximale Schärfe und Glanz
const SIZE = 2880;
const PADDING = 288;   // 10 % Rand
const MAX_LOGO = SIZE - 2 * PADDING;

const OUT_DIR = path.join(
  'C:\\Users\\akork\\OneDrive\\H&S+\\1. Verwaltung\\4. H&S+ Logos Bilder Vorträge\\AS.NRW_Logo'
);
const DEFAULT_LOGO = path.join(OUT_DIR, 'Logo_Original.png');

const OUT_FILE = path.join(OUT_DIR, 'Arbeitssicherheit-NRW_Google-Business_2880x2880.png');

async function main() {
  const logoPath = process.argv[2] || DEFAULT_LOGO;
  if (!fs.existsSync(logoPath)) {
    console.error('Logo nicht gefunden:', logoPath);
    console.error('Bitte legen Sie das Logo im Ordner AS.NRW_Logo als "Logo_Original.png" ab,');
    console.error('oder übergeben Sie den Pfad: node google-business-logo.mjs "C:\\Pfad\\zum\\logo.png"');
    process.exit(1);
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });

  const meta = await sharp(logoPath).metadata();
  const w = meta.width || 1;
  const h = meta.height || 1;
  const scale = Math.min(MAX_LOGO / w, MAX_LOGO / h, 1);
  const newW = Math.round(w * scale);
  const newH = Math.round(h * scale);
  const left = Math.round((SIZE - newW) / 2);
  const top = Math.round((SIZE - newH) / 2);

  const padded = await sharp(logoPath)
    .resize(newW, newH, { fit: 'inside' })
    .extend({
      top,
      bottom: SIZE - newH - top,
      left,
      right: SIZE - newW - left,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .normalize()
    .linear(1.08, 4)
    .modulate({ brightness: 1.05, saturation: 1.22 })
    .sharpen({ sigma: 3.5, m1: 0, m2: 4, x1: 1, y2: 14, y3: 28 })
    .sharpen({ sigma: 1.2, m1: 0, m2: 2, x1: 1, y2: 8, y3: 16 })
    .png({ compressionLevel: 2 })
    .toFile(OUT_FILE);

  console.log('Erstellt:', OUT_FILE);
  console.log('Größe:', padded.width, 'x', padded.height, 'px');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
