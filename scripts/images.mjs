import sharp from "sharp";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const OUT = "public/assets/photos";
// name -> { src, widths, aspect?: [w,h] (center crop), position? }
const jobs = {
  pour:       { src: "assets-src/editorial/pour-1440.jpg", widths: [640, 960, 1440] },
  bar:        { src: "assets-src/editorial/bar-1440.jpg", widths: [640, 960, 1440] },
  taps:       { src: "assets-src/editorial/taps-1280.jpg", widths: [640, 960, 1280] },
  food:       { src: "assets-src/editorial/food-1280.jpg", widths: [640, 960, 1280] },
  friends:    { src: "assets-src/editorial/friends-960.jpg", widths: [640, 960] },
  patio:      { src: "assets-src/editorial/patio-960.jpg", widths: [640, 960] },
  host:       { src: "assets-src/editorial/host-960.jpg", widths: [640, 960] },
  storefront: { src: "assets-src/editorial/storefront-960.jpg", widths: [640, 960] },
  entrance:   { src: "assets-src/editorial/entrance-960.jpg", widths: [640, 960] },
  vineyard:   { src: "assets-src/vineyard-bike.jpg", widths: [640, 1024, 1600], aspect: [16, 10], position: "south" },
  barrel:     { src: "assets-src/vineyard-bottles.jpg", widths: [640, 960], aspect: [4, 5], position: "south" },
  krany:      { src: "assets-src/krany.jpg", widths: [640, 960, 1440] },
};
// codex outputs, if present
const refined = {
  "snacks-clean": { src: "assets-src/retouched/snacks-clean.png", widths: [640, 960, 1280] },
  "taps-wide":    { src: "assets-src/retouched/taps-wide.png", widths: [768, 1280, 1920] },
  "pitcher-clean":{ src: "assets-src/retouched/pitcher-clean.png", widths: [640, 960, 1440] },
};
for (const [k, v] of Object.entries(refined)) if (existsSync(v.src)) jobs[k] = v;

const only = process.argv.slice(2);
await mkdir(OUT, { recursive: true });
const manifestPath = "src/photos.json";
const manifest = existsSync(manifestPath) ? JSON.parse(await readFile(manifestPath, "utf8")) : {};
for (const [name, job] of Object.entries(jobs)) {
  if (only.length && !only.includes(name)) continue;
  const base = sharp(job.src).rotate();
  const meta = await base.metadata();
  let w = meta.width, h = meta.height;
  let pipeline = base;
  if (job.aspect) {
    const [aw, ah] = job.aspect;
    const target = aw / ah;
    if (w / h > target) w = Math.round(h * target); else h = Math.round(w / target);
    pipeline = base.resize(w, h, { fit: "cover", position: job.position ?? "centre" });
  }
  const buf = await pipeline.toBuffer();
  manifest[name] = { w, h, widths: job.widths.filter((x) => x <= w) };
  if (process.env.MANIFEST_ONLY) { console.log(name, w, h, "(manifest only)"); continue; }
  for (const width of manifest[name].widths) {
    const r = sharp(buf).resize({ width });
    await r.clone().avif({ quality: 55 }).toFile(`${OUT}/${name}-${width}.avif`);
    await r.clone().webp({ quality: 78 }).toFile(`${OUT}/${name}-${width}.webp`);
    await r.clone().jpeg({ quality: 80, mozjpeg: true }).toFile(`${OUT}/${name}-${width}.jpg`);
  }
  console.log(name, w, h, manifest[name].widths.join("/"));
}
await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
// og image 1200x630 from pour
if (!process.env.MANIFEST_ONLY && (!only.length || only.includes("og"))) {
  await sharp(jobs.pour.src).resize(1200, 630, { fit: "cover", position: "centre" }).jpeg({ quality: 82 }).toFile(`${OUT}/og.jpg`);
  console.log("og 1200 630");
}
