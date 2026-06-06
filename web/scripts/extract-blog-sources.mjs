/**
 * Extrahiert Gesetzestexte für alle Blog-Themen aus der lokalen Sammlung
 * „4. Gesetze-Vorschriften“ und speichert sie unter scripts/gesetz-extracts/.
 *
 * Ausführen: npm run extract-blog-sources
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PDFParse } from "pdf-parse";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WEB_ROOT = path.join(__dirname, "..");
const GESETZE_ROOT = path.join(WEB_ROOT, "..", "..", "..", "..", "4. Gesetze-Vorschriften");
const OUT_DIR = path.join(__dirname, "gesetz-extracts");

/** Blog-Slug → relevante PDF-Ausschnitte */
const BLOG_SOURCES = [
  {
    slug: "gefaehrdungsbeurteilung-unterschrift",
    extracts: [
      { file: "02_Empfohlen_Arbeitsschutz_Personal/09_ArbSchG.pdf", search: "§ 5 Beurteilung" },
      { file: "02_Empfohlen_Arbeitsschutz_Personal/09_ArbSchG.pdf", search: "§ 6 Dokumentation" },
      { file: "02_Empfohlen_Arbeitsschutz_Personal/12_GefStoffV.pdf", search: "fachkundigen Personen" },
      { file: "02_Empfohlen_Arbeitsschutz_Personal/12_GefStoffV.pdf", search: "Tätigkeit mit Gefahrstoffen erst" },
    ],
  },
  {
    slug: "getraenke-arbeitsplatz-arbeitgeber",
    extracts: [
      { file: "07_ASR_Alle/ASR-A3-5.pdf", pages: "7-8" },
      { file: "02_Empfohlen_Arbeitsschutz_Personal/10_ArbStättV.pdf", search: "Trinkwasser" },
      { file: "02_Empfohlen_Arbeitsschutz_Personal/10_ArbStättV.pdf", search: "Freien" },
    ],
  },
  {
    slug: "akteure-arbeitsschutz-ueberblick",
    extracts: [
      { file: "02_Empfohlen_Arbeitsschutz_Personal/09_ArbSchG.pdf", search: "§ 3 Grundpflichten" },
      { file: "05_DGUV_UV/37_DGUV-Vorschrift-2_Mustertext-2024.pdf", search: "§ 2 Bestellung" },
    ],
  },
  {
    slug: "ladestation-e-auto-garage-genehmigung",
    extracts: [
      { file: "02_Empfohlen_Arbeitsschutz_Personal/11_BetrSichV.pdf", search: "§ 18 Erlaubnispflicht" },
      { file: "11_Brandschutz-NRW/01_NRW_Landesrecht_Gesetze_VOs/01_BauO-NRW-2018.pdf", search: "Garagen" },
    ],
  },
  {
    slug: "unterweisung-arbeitssicherheit-pflichtinhalte",
    extracts: [
      { file: "02_Empfohlen_Arbeitsschutz_Personal/09_ArbSchG.pdf", search: "§ 12 Unterweisung" },
    ],
  },
  {
    slug: "externe-fachkraft-arbeitssicherheit-koeln",
    extracts: [
      { file: "05_DGUV_UV/37_DGUV-Vorschrift-2_Mustertext-2024.pdf", search: "Grundbetreuung" },
      { file: "05_DGUV_UV/37_DGUV-Vorschrift-2_Mustertext-2024.pdf", search: "schriftlich zu bestellen" },
    ],
  },
  {
    slug: "brandschutzbeauftragter-nrw-intern-extern",
    extracts: [
      { file: "11_Brandschutz-NRW/99_Hinweise und Bücher/205-003.pdf", search: "Externe Brandschutzbeauftragte" },
    ],
  },
];

function parsePageRange(spec) {
  if (!spec) return null;
  const pages = new Set();
  for (const part of spec.split(",")) {
    const trimmed = part.trim();
    if (trimmed.includes("-")) {
      const [a, b] = trimmed.split("-").map((n) => Number.parseInt(n, 10));
      for (let p = a; p <= b; p++) pages.add(p);
    } else {
      pages.add(Number.parseInt(trimmed, 10));
    }
  }
  return [...pages].sort((x, y) => x - y);
}

async function resolvePdf(relativeOrAbsolute) {
  const candidates = [
    path.isAbsolute(relativeOrAbsolute) ? relativeOrAbsolute : null,
    path.join(GESETZE_ROOT, relativeOrAbsolute),
  ].filter(Boolean);

  for (const candidate of candidates) {
    try {
      const { readFile } = await import("node:fs/promises");
      return { buffer: await readFile(candidate), resolved: candidate };
    } catch {
      /* try next */
    }
  }

  if (!path.isAbsolute(relativeOrAbsolute)) {
    const { readdir } = await import("node:fs/promises");
    const dir = path.dirname(path.join(GESETZE_ROOT, relativeOrAbsolute));
    const base = path.basename(relativeOrAbsolute).replace(/ä/g, "?");
    try {
      const files = await readdir(dir);
      const match = files.find((f) => f.toLowerCase().includes(base.toLowerCase().slice(0, 6)));
      if (match) {
        const full = path.join(dir, match);
        const { readFile } = await import("node:fs/promises");
        return { buffer: await readFile(full), resolved: full };
      }
    } catch {
      /* fall through */
    }
  }

  throw new Error(`PDF nicht gefunden: ${relativeOrAbsolute}`);
}

function filterSearch(text, search) {
  if (!search) return text;
  const needle = search.toLowerCase();
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const hits = [];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].toLowerCase().includes(needle)) {
      hits.push(...lines.slice(Math.max(0, i - 1), Math.min(lines.length, i + 8)));
      hits.push("---");
    }
  }
  return hits.length ? hits.join("\n") : `(Keine Treffer für "${search}")`;
}

async function extractOne(slug, idx, { file, search, pages }) {
  const { buffer, resolved } = await resolvePdf(file);
  const parser = new PDFParse({ data: buffer });
  let text;
  try {
    const partial = parsePageRange(pages);
    const result = partial ? await parser.getText({ partial }) : await parser.getText();
    text = (result.text ?? "").replace(/\r\n/g, "\n").trim();
  } finally {
    await parser.destroy();
  }

  text = filterSearch(text, search);
  const outName = `${slug}-${String(idx + 1).padStart(2, "0")}.txt`;
  const header = [
    `# Blog: ${slug}`,
    `# PDF: ${path.basename(resolved)}`,
    `# Pfad: ${resolved}`,
    search ? `# Suche: ${search}` : null,
    pages ? `# Seiten: ${pages}` : null,
    `# Zeichen: ${text.length}`,
    "",
  ]
    .filter(Boolean)
    .join("\n");

  await writeFile(path.join(OUT_DIR, outName), `${header}${text}\n`, "utf8");
  return outName;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  let count = 0;
  for (const topic of BLOG_SOURCES) {
    for (let i = 0; i < topic.extracts.length; i++) {
      const name = await extractOne(topic.slug, i, topic.extracts[i]);
      console.log(`✓ ${name}`);
      count++;
    }
  }
  console.log(`\n${count} Extrakte in ${OUT_DIR}`);
}

main().catch((err) => {
  console.error("Fehler:", err.message ?? err);
  process.exit(1);
});
