/**
 * Makes logo background transparent (white or black).
 * Run: node scripts/logo-transparent.mjs [white|black] [input.png] [output.png]
 * Default: white, public/logo.png -> public/logo.png
 */
import sharp from "sharp";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const defaultInput = join(__dirname, "../public/logo.png");
const defaultOutput = join(__dirname, "../public/logo.png");

const mode = process.argv[2] === "black" ? "black" : "white";
const sourcePath = process.argv[3] || defaultInput;
const outPath = process.argv[4] || defaultOutput;

const WHITE_THRESHOLD = 252; // R,G,B all >= this -> transparent
const BLACK_THRESHOLD = 25;  // R,G,B all <= this -> transparent

function shouldBeTransparent(r, g, b) {
  if (mode === "white") {
    return r >= WHITE_THRESHOLD && g >= WHITE_THRESHOLD && b >= WHITE_THRESHOLD;
  }
  return r <= BLACK_THRESHOLD && g <= BLACK_THRESHOLD && b <= BLACK_THRESHOLD;
}

async function main() {
  const inputBuffer = readFileSync(sourcePath);
  const { data, info } = await sharp(inputBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const newData = Buffer.from(data);

  for (let i = 0; i < newData.length; i += channels) {
    const r = newData[i];
    const g = newData[i + 1];
    const b = newData[i + 2];
    if (shouldBeTransparent(r, g, b)) {
      newData[i + 3] = 0;
    }
  }

  await sharp(newData, {
    raw: { width, height, channels: 4 },
  })
    .png()
    .toFile(outPath);

  console.log("Done: transparent logo (" + mode + ") written to", outPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
