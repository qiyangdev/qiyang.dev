import sharp from "sharp";
import { writeFile } from "node:fs/promises";

const [input, output] = process.argv.slice(2);
if (!input || !output) throw new Error("Usage: node scripts/bezel-mask.mjs <bezel.png> <mask.png>");
const { data, info: { width, height } } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const visited = new Uint8Array(width * height);
const queue = new Uint32Array(width * height);
const start = Math.floor(height / 2) * width + Math.floor(width / 2);
if (data[start * 4 + 3] >= 128) throw new Error("The center of the bezel must be transparent.");
let head = 0, tail = 0, left = width, right = 0, top = height, bottom = 0;
queue[tail++] = start;
visited[start] = 1;
while (head < tail) {
  const p = queue[head++], x = p % width, y = Math.floor(p / width);
  left = Math.min(left, x); right = Math.max(right, x); top = Math.min(top, y); bottom = Math.max(bottom, y);
  for (const n of [x > 0 ? p - 1 : -1, x + 1 < width ? p + 1 : -1, y > 0 ? p - width : -1, y + 1 < height ? p + width : -1]) {
    if (n >= 0 && !visited[n] && data[n * 4 + 3] < 128) { visited[n] = 1; queue[tail++] = n; }
  }
}
if (left === 0 || top === 0 || right === width - 1 || bottom === height - 1) throw new Error("The transparent center connects to the exterior; cannot identify a closed screen.");
const mask = Buffer.alloc(width * height * 4);
for (let i = 0; i < visited.length; i++) if (visited[i]) { mask[i * 4] = mask[i * 4 + 1] = mask[i * 4 + 2] = 255; mask[i * 4 + 3] = 255 - data[i * 4 + 3]; }
await sharp(mask, { raw: { width, height, channels: 4 } }).png().toFile(output);
await writeFile(output.replace(/\.png$/i, ".json"), JSON.stringify({ left: left / width * 100, top: top / height * 100, width: (right - left + 1) / width * 100, height: (bottom - top + 1) / height * 100 }, null, 2) + "\n");
