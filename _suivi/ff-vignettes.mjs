import fs from "node:fs";
import path from "node:path";
import os from "node:os";

const DOS = path.join(os.homedir(), "Downloads", "fencersfiles-recu");
fs.mkdirSync(DOS, { recursive: true });
const FLUX = "https://fencersfiles.blogspot.com/feeds/posts/default?alt=json&max-results=150";

const entrees = [];
let total = 0;
for (let debut = 1; debut < 1500; debut += 150) {
  const r = await fetch(`${FLUX}&start-index=${debut}`);
  if (!r.ok) { console.log(`ECHEC du flux (${r.status})`); process.exit(1); }
  const j = await r.json();
  total = Number(j.feed?.["openSearch$totalResults"]?.["$t"] || 0);
  const lot = j.feed?.entry || [];
  entrees.push(...lot);
  if (!lot.length || entrees.length >= total) break;
}
console.log(`${entrees.length} articles lus dans le flux (${total} annonces)`);

const grand = (u, rw) => {
  const t = rw ? "s1600-rw" : "s1600";
  if (/\/[swh]\d+[^/]*\/[^/]+$/.test(u)) return u.replace(/\/[swh]\d+[^/]*\/([^/]+)$/, `/${t}/$1`);
  if (/=[swh]\d+[^/]*$/.test(u)) return u.replace(/=[swh]\d+[^/]*$/, `=${t}`);
  return u;
};
const EXT = { "image/webp": "webp", "image/png": "png", "image/jpeg": "jpg", "image/gif": "gif" };
async function telecharger(u) {
  for (const essai of [grand(u, true), grand(u, false), u]) {
    try {
      const r = await fetch(essai);
      const type = (r.headers.get("content-type") || "").split(";")[0];
      if (r.ok && EXT[type]) return { ext: EXT[type], donnees: Buffer.from(await r.arrayBuffer()) };
    } catch {}
  }
  return null;
}

entrees.sort((a, b) => String(a.published?.["$t"]).localeCompare(String(b.published?.["$t"])));
const articles = [];
let ok = 0, echecs = 0;
for (const [i, e] of entrees.entries()) {
  const numero = String(i + 1).padStart(3, "0");
  const lien = (e.link || []).find((l) => l.rel === "alternate")?.href || "";
  const slug = decodeURIComponent(lien.split("/").pop() || `article-${numero}`).replace(/\.html$/, "");
  const html = e.content?.["$t"] || e.summary?.["$t"] || "";
  let src = (html.match(/<img[^>]+src="([^"]+)"/i) || [])[1] || e["media$thumbnail"]?.url || "";
  if (src.startsWith("//")) src = "https:" + src;
  let image = null;
  if (src) {
    const t = await telecharger(src.replace(/&amp;/g, "&"));
    if (t) { image = `${numero}-${slug}.${t.ext}`; fs.writeFileSync(path.join(DOS, image), t.donnees); ok++; console.log(`OK     ${image} (${Math.round(t.donnees.length / 1024)} Ko)`); }
    else { echecs++; console.log(`ECHEC  ${numero}-${slug} : ${src}`); }
  } else { echecs++; console.log(`ECHEC  ${numero}-${slug} : aucune image dans cet article`); }
  articles.push({ numero, date: e.published?.["$t"] || "", lien, slug, titre_flux: e.title?.["$t"] || "", rubriques: (e.category || []).map((c) => c.term), image, image_origine: src, html });
}
fs.writeFileSync(path.join(DOS, "articles.json"), JSON.stringify({ site: "https://fencersfiles.blogspot.com/", date: new Date().toISOString(), total, articles }, null, 1));
console.log(`\n${ok} images OK, ${echecs} ECHEC, articles.json ecrit (${articles.length} articles)`);
