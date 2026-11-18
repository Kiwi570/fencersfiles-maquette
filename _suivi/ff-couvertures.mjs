import fs from "node:fs";
import path from "node:path";
import os from "node:os";

const SOURCE = path.join(os.homedir(), "Downloads", "fencersfiles-recu", "articles.json");
const DOS = path.join(os.homedir(), "Downloads", "fencersfiles-couvertures");
if (!fs.existsSync(SOURCE)) { console.log(`ECHEC : ${SOURCE} introuvable`); process.exit(1); }
fs.mkdirSync(DOS, { recursive: true });
const { articles } = JSON.parse(fs.readFileSync(SOURCE, "utf8"));
const pause = (ms) => new Promise((r) => setTimeout(r, ms));
const EXT = { "image/webp": "webp", "image/png": "png", "image/jpeg": "jpg" };

async function couverture(id) {
  const essais = [`https://drive.google.com/thumbnail?id=${id}&sz=w1200`, `https://lh3.googleusercontent.com/d/${id}=w1200`];
  for (let tour = 0; tour < 2; tour++) {
    for (const u of essais) {
      try {
        const r = await fetch(u, { redirect: "follow" });
        const type = (r.headers.get("content-type") || "").split(";")[0];
        if (r.ok && EXT[type]) {
          const donnees = Buffer.from(await r.arrayBuffer());
          if (donnees.length > 15000) return { ext: EXT[type], donnees };
        }
      } catch {}
    }
    await pause(3000);
  }
  return null;
}

let ok = 0, echecs = 0, sans = 0;
const liste = [];
for (const a of articles) {
  const id = (a.html.match(/docs\.google\.com\/file\/d\/([\w-]+)\/preview/) || a.html.match(/drive\.google\.com\/file\/d\/([\w-]+)/) || [])[1];
  if (!id) { sans++; console.log(`SANS PDF  ${a.numero}-${a.slug}`); continue; }
  const c = await couverture(id);
  if (c) {
    const fichier = `${a.numero}-${a.slug}.${c.ext}`;
    fs.writeFileSync(path.join(DOS, fichier), c.donnees);
    liste.push({ numero: a.numero, slug: a.slug, drive: id, fichier });
    ok++; console.log(`OK        ${fichier} (${Math.round(c.donnees.length / 1024)} Ko)`);
  } else { echecs++; liste.push({ numero: a.numero, slug: a.slug, drive: id, fichier: null }); console.log(`ECHEC     ${a.numero}-${a.slug} (${id})`); }
  await pause(300);
}
fs.writeFileSync(path.join(DOS, "couvertures.json"), JSON.stringify({ date: new Date().toISOString(), couvertures: liste }, null, 1));
console.log(`\n${ok} couvertures OK, ${echecs} ECHEC, ${sans} article sans PDF`);
