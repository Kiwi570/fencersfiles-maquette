import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execFileSync } from "node:child_process";

const SOURCE = path.join(os.homedir(), "Downloads", "fencersfiles-recu", "articles.json");
const DOS = path.join(os.homedir(), "Downloads", "fencersfiles-couvertures");
const TMP = path.join(os.tmpdir(), "ff-couvertures-tmp");
if (!fs.existsSync(SOURCE)) { console.log(`ECHEC : ${SOURCE} introuvable`); process.exit(1); }
fs.mkdirSync(DOS, { recursive: true });
fs.mkdirSync(TMP, { recursive: true });
const { articles } = JSON.parse(fs.readFileSync(SOURCE, "utf8"));
const pause = (ms) => new Promise((r) => setTimeout(r, ms));
const lancer = (cmd, args) => execFileSync(cmd, args, { stdio: "ignore", timeout: 90000 });
const enJpg = (entree, sortie) => lancer("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "82", "-Z", "1280", entree, "--out", sortie]);

let driveActif = true, driveEchecs = 0;
async function parDrive(id, sortie) {
  for (const u of [`https://drive.google.com/thumbnail?id=${id}&sz=w1200`, `https://lh3.googleusercontent.com/d/${id}=w1200`]) {
    try {
      const r = await fetch(u, { redirect: "follow", signal: AbortSignal.timeout(30000) });
      const type = (r.headers.get("content-type") || "").split(";")[0];
      if (!r.ok || !/^image\/(png|jpeg|webp)$/.test(type)) continue;
      const donnees = Buffer.from(await r.arrayBuffer());
      if (donnees.length < 15000) continue;
      const brut = path.join(TMP, `brut.${type.split("/")[1]}`);
      fs.writeFileSync(brut, donnees);
      enJpg(brut, sortie);
      return true;
    } catch {}
  }
  return false;
}
async function parDropbox(lien, sortie) {
  const u = lien.replace(/&amp;/g, "&").replace(/([?&])dl=0/, "$1dl=1");
  const r = await fetch(u, { redirect: "follow", signal: AbortSignal.timeout(180000) });
  if (!r.ok) throw new Error(`reponse ${r.status}`);
  const donnees = Buffer.from(await r.arrayBuffer());
  if (donnees.subarray(0, 5).toString() !== "%PDF-") throw new Error("ce n est pas un PDF");
  const pdf = path.join(TMP, "dossier.pdf"), png = path.join(TMP, "dossier.pdf.png");
  fs.writeFileSync(pdf, donnees);
  fs.rmSync(png, { force: true });
  try { lancer("qlmanage", ["-t", "-s", "1600", "-o", TMP, pdf]); } catch {}
  if (fs.existsSync(png)) enJpg(png, sortie); else enJpg(pdf, sortie);
  fs.rmSync(pdf, { force: true });
  return Math.round(donnees.length / 1048576);
}

let ok = 0, echecs = 0, deja = 0;
const liste = [];
for (const a of articles) {
  const id = (a.html.match(/docs\.google\.com\/file\/d\/([\w-]+)\/preview/) || a.html.match(/drive\.google\.com\/file\/d\/([\w-]+)/) || [])[1];
  const dropbox = (a.html.match(/href="(https:\/\/www\.dropbox\.com\/[^"]+)"/) || [])[1];
  if (!id && !dropbox) { console.log(`SANS PDF  ${a.numero}-${a.slug}`); continue; }
  const fichier = `${a.numero}-${a.slug}.jpg`, sortie = path.join(DOS, fichier);
  for (const ext of ["png", "webp"]) {
    const ancien = path.join(DOS, `${a.numero}-${a.slug}.${ext}`);
    if (fs.existsSync(ancien)) { if (!fs.existsSync(sortie)) { try { enJpg(ancien, sortie); } catch {} } fs.rmSync(ancien, { force: true }); }
  }
  let source = "";
  if (fs.existsSync(sortie)) { deja++; source = "deja la"; }
  if (!source && driveActif && id) {
    if (await parDrive(id, sortie)) source = "Drive";
    else if (++driveEchecs >= 2) { driveActif = false; console.log("Drive refuse : la suite passe par les PDF Dropbox"); }
    await pause(400);
  }
  if (!source && dropbox) {
    try { const mo = await parDropbox(dropbox, sortie); source = `PDF Dropbox de ${mo} Mo`; } catch (e) { source = ""; console.log(`   Dropbox : ${e.message}`); }
  }
  if (source && fs.existsSync(sortie)) { ok++; liste.push({ numero: a.numero, slug: a.slug, fichier }); console.log(`OK        ${fichier} (${source})`); }
  else { echecs++; liste.push({ numero: a.numero, slug: a.slug, fichier: null }); console.log(`ECHEC     ${a.numero}-${a.slug}`); }
}
fs.writeFileSync(path.join(DOS, "couvertures.json"), JSON.stringify({ date: new Date().toISOString(), couvertures: liste }, null, 1));
fs.rmSync(TMP, { recursive: true, force: true });
console.log(`\n${ok} couvertures OK (dont ${deja} deja la), ${echecs} ECHEC`);
