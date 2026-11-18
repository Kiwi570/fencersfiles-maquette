// Contrôle léger de toutes les fiches de dossier (même modèle) : débordement, console, images, h1, premier écran, lien PDF.
// node fiches.mjs <racine> <sortie.json>
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
const [racine, sortie] = process.argv.slice(2);
const require = createRequire(path.join(racine, '_biblio/'));
const { chromium } = require('playwright');
const { demarrerServeur } = await import(pathToFileURL(path.join(racine, '_audit/serveur.mjs')).href);
const s = await demarrerServeur(racine);
const { liste } = JSON.parse(fs.readFileSync(path.join(racine, 'donnees/dossiers.json'), 'utf8'));
const b = await chromium.launch();
const tailles = (process.env.TAILLES || "320x568,390x844,1366x768").split(",").map((t) => t.split("x").map(Number));
const defauts = [];
await Promise.all(tailles.map(async ([w, h]) => {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 700, hasTouch: w < 700 });
  const p = await ctx.newPage();
  await p.addInitScript(() => { try { sessionStorage.setItem('x', '1'); } catch {} });
  let erreurs = [];
  p.on('console', (m) => { if (m.type() === 'error') erreurs.push(m.text().slice(0, 120)); });
  p.on('pageerror', (e) => erreurs.push('page : ' + e.message.slice(0, 120)));
  p.on('response', (r) => { if (r.status() >= 400) erreurs.push(`${r.status()} ${r.url().slice(-60)}`); });
  for (const d of liste) {
    erreurs = [];
    await p.goto(`${s.adresse}/dossiers/${d.slug}`, { waitUntil: 'load' });
    await p.waitForTimeout(w === 1366 ? 3300 : 3000);
    const m = await p.evaluate(() => {
      const de = document.documentElement, vh = innerHeight, barre = document.querySelector('[data-barre-fixe]');
      const bas = vh - (barre && getComputedStyle(barre).display !== 'none' ? barre.getBoundingClientRect().height : 0);
      const r = (sel) => { const e = document.querySelector(sel); return e ? e.getBoundingClientRect() : null; };
      const h1 = r('h1'), bouton = r('[data-action-principale]'), info = r('[data-info-cle]'), couv = document.querySelector('.fiche-tete-couv img');
      const titre = document.querySelector('h1 .une-ligne');
      return {
        deborde: de.scrollWidth - de.clientWidth, h1s: document.querySelectorAll('h1').length,
        h1Hors: !h1 || h1.bottom > bas || h1.right > innerWidth + 1, boutonHors: !bouton || bouton.bottom > bas + 1, infoHors: !info || info.bottom > bas + 1,
        couvOk: !!couv && couv.complete && couv.naturalWidth > 0, titreLarge: titre ? titre.scrollWidth - titre.clientWidth : 0,
        pdf: (document.querySelector('[data-action-principale]') || {}).href || '',
      };
    });
    const pb = [];
    if (m.deborde > 1) pb.push(`débordement ${m.deborde}px`);
    if (m.h1s !== 1) pb.push(`${m.h1s} h1`);
    if (m.h1Hors) pb.push('titre hors du premier écran');
    if (m.boutonHors) pb.push('bouton hors du premier écran');
    if (m.infoHors) pb.push('information clé hors du premier écran');
    if (!m.couvOk) pb.push('couverture non chargée');
    if (m.titreLarge > 2) pb.push(`titre plus large que sa colonne (${m.titreLarge}px)`);
    if (!/^https:\/\/www\.dropbox\.com\/.+\.pdf\?/.test(m.pdf)) pb.push('lien PDF inattendu');
    if (erreurs.length) pb.push('console : ' + [...new Set(erreurs)].join(' | '));
    if (pb.length) defauts.push({ taille: `${w}x${h}`, dossier: d.numero, slug: d.slug, defauts: pb });
  }
  await ctx.close();
}));
await b.close(); await s.fermer();
fs.writeFileSync(sortie, JSON.stringify({ date: new Date().toISOString(), fiches: liste.length, tailles: tailles.map((t) => t.join('x')), defauts }, null, 1));
console.log(`${liste.length} fiches × ${tailles.length} tailles : ${defauts.length} défaut(s)`);
const parType = {};
for (const d of defauts) for (const x of d.defauts) { const k = `${d.taille} · ${x.replace(/\d+px/, 'N px').slice(0, 60)}`; (parType[k] = parType[k] || []).push(d.dossier); }
for (const [k, v] of Object.entries(parType)) console.log(`  ${k} : ${v.length} (${v.slice(0, 8).join(', ')}${v.length > 8 ? '…' : ''})`);
process.exit(0);
