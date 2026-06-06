/**
 * Text aus Gesetzes-PDFs extrahieren (Blog-Recherche, Zitate).
 *
 * Beispiele:
 *   npm run extract-pdf -- "02_Empfohlen_Arbeitsschutz_Personal/09_ArbSchG.pdf"
 *   npm run extract-pdf -- "09_ArbSchG.pdf" --search "Gefährdungsbeurteilung"
 *   npm run extract-pdf -- "C:\voller\pfad\datei.pdf" --out arb.txt
 *   npm run extract-pdf -- "09_ArbSchG.pdf" --pages 1-3
 */
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PDFParse } from "pdf-parse";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WEB_ROOT = path.join(__dirname, "..");
const DEFAULT_GESETZE_ROOT = path.join(
  WEB_ROOT,
  "..",
  "..",
  "..",
  "..",
  "4. Gesetze-Vorschriften"
);

function printHelp() {
  console.log(`
PDF-Text extrahieren (pdf-parse v2)

Verwendung:
  npm run extract-pdf -- <pdf-pfad> [optionen]

Argumente:
  <pdf-pfad>    Absoluter Pfad oder relativer Pfad im Ordner
                "4. Gesetze-Vorschriften" (eine Ebene über web/)

Optionen:
  --out <datei>     Text in Datei speichern (sonst: Konsole)
  --search <begriff> Nur Zeilen mit Treffer ausgeben (Groß/Klein egal)
  --pages <bereich>  Nur Seiten, z. B. 1-3 oder 5
  --gesetze <ordner> Anderer Basisordner für relative Pfade
  --help             Diese Hilfe

Beispiele:
  npm run extract-pdf -- "02_Empfohlen_Arbeitsschutz_Personal/09_ArbSchG.pdf"
  npm run extract-pdf -- "09_ArbSchG.pdf" --search "Unterweisung"
  npm run extract-pdf -- "07_ASR_Alle/ASR-A4-2.pdf" --pages 1-5 --out asr-a4-2.txt
`);
}

function parseArgs(argv) {
  const positional = [];
  const options = {
    out: null,
    search: null,
    pages: null,
    gesetze: DEFAULT_GESETZE_ROOT,
    help: false,
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--help" || arg === "-h") {
      options.help = true;
      continue;
    }
    if (arg === "--out") {
      options.out = argv[++i];
      continue;
    }
    if (arg === "--search") {
      options.search = argv[++i];
      continue;
    }
    if (arg === "--pages") {
      options.pages = argv[++i];
      continue;
    }
    if (arg === "--gesetze") {
      options.gesetze = argv[++i];
      continue;
    }
    if (!arg.startsWith("-")) {
      positional.push(arg);
    }
  }

  return { positional, options };
}

function parsePageRange(spec) {
  if (!spec) return null;
  const pages = new Set();
  for (const part of spec.split(",")) {
    const trimmed = part.trim();
    if (trimmed.includes("-")) {
      const [startRaw, endRaw] = trimmed.split("-");
      const start = Number.parseInt(startRaw, 10);
      const end = Number.parseInt(endRaw, 10);
      if (Number.isNaN(start) || Number.isNaN(end) || start < 1 || end < start) {
        throw new Error(`Ungültiger Seitenbereich: "${trimmed}"`);
      }
      for (let p = start; p <= end; p++) pages.add(p);
    } else {
      const page = Number.parseInt(trimmed, 10);
      if (Number.isNaN(page) || page < 1) {
        throw new Error(`Ungültige Seitenzahl: "${trimmed}"`);
      }
      pages.add(page);
    }
  }
  return [...pages].sort((a, b) => a - b);
}

async function resolvePdfPath(input, gesetzeRoot) {
  if (!input) {
    throw new Error("Kein PDF-Pfad angegeben. Nutze --help für Beispiele.");
  }

  if (path.isAbsolute(input)) {
    return path.normalize(input);
  }

  const inGesetze = path.join(gesetzeRoot, input);
  const inCwd = path.resolve(process.cwd(), input);

  try {
    await readFile(inGesetze);
    return inGesetze;
  } catch {
    return inCwd;
  }
}

function filterBySearch(text, search) {
  if (!search) return text;
  const needle = search.toLowerCase();
  const hits = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && line.toLowerCase().includes(needle));

  if (hits.length === 0) {
    return `(Keine Treffer für "${search}")`;
  }

  return hits.join("\n");
}

async function main() {
  const { positional, options } = parseArgs(process.argv.slice(2));

  if (options.help || positional.length === 0) {
    printHelp();
    process.exit(positional.length === 0 && !options.help ? 1 : 0);
  }

  const pdfPath = await resolvePdfPath(positional[0], options.gesetze);
  const buffer = await readFile(pdfPath);
  const partial = parsePageRange(options.pages);

  const parser = new PDFParse({ data: buffer });
  let result;

  try {
    result = partial ? await parser.getText({ partial }) : await parser.getText();
  } finally {
    await parser.destroy();
  }

  let text = (result.text ?? "").replace(/\r\n/g, "\n").trim();
  text = filterBySearch(text, options.search);

  const header = [
    `# ${path.basename(pdfPath)}`,
    `# Quelle: ${pdfPath}`,
    options.pages ? `# Seiten: ${options.pages}` : null,
    options.search ? `# Suche: ${options.search}` : null,
    `# Zeichen: ${text.length}`,
    "",
  ]
    .filter(Boolean)
    .join("\n");

  const output = `${header}${text}\n`;

  if (options.out) {
    const outPath = path.isAbsolute(options.out)
      ? options.out
      : path.resolve(process.cwd(), options.out);
    await writeFile(outPath, output, "utf8");
    console.log(`Gespeichert: ${outPath} (${text.length} Zeichen)`);
    return;
  }

  const maxConsole = 12_000;
  if (text.length > maxConsole) {
    process.stdout.write(`${output.slice(0, maxConsole)}\n\n… (${text.length - maxConsole} weitere Zeichen – nutze --out datei.txt)\n`);
    return;
  }

  process.stdout.write(`${output}\n`);
}

main().catch((err) => {
  console.error("Fehler:", err.message ?? err);
  process.exit(1);
});
