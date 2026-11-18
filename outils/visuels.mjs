#!/usr/bin/env node
/* Images propres au projet, hors pipeline de la bibliothèque : médaillon du client (logo, favicon, icône iPhone)
   et couvertures des 76 dossiers, jamais recadrées (assets/images/couv/dNNN-<largeur>.webp).
   Source d'une couverture : recu/couvertures/<billet>-*.jpg (première page du PDF) ; à défaut, la vignette du blog (128 px).
   Usage : node outils/visuels.mjs */
import { readFileSync, readdirSync, mkdirSync, existsSync, writeFileSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const racine = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sharp = createRequire(join(racine, '_biblio/'))('sharp');
const { liste } = JSON.parse(readFileSync(join(racine, 'donnees/dossiers.json'), 'utf8'));
const img = join(racine, 'assets/images');
mkdirSync(join(img, 'couv'), { recursive: true });

/* Médaillon du client. */
const medaillon = join(racine, 'recu/site2/001-a-tout-le-monde-bienvenue-sur-ce-blog.webp');
for (const w of [96, 192, 480]) await sharp(medaillon).resize(w, w).webp({ quality: 86 }).toFile(join(img, `logo-${w}.webp`));
await sharp(medaillon).resize(180, 180).png().toFile(join(img, 'apple-touch-icon.png'));
await sharp(medaillon).resize(64, 64).png().toFile(join(img, 'favicon.png'));

/* Couvertures. */
const dossierCouv = join(racine, 'recu/couvertures'), dossierVig = join(racine, 'recu/site2');
const couv = existsSync(dossierCouv) ? readdirSync(dossierCouv) : [], vig = readdirSync(dossierVig);
const etat = { couvertures: 0, vignettes: [], dimensions: {} };
const fFiche = join(racine, 'donnees/images.json');
const fiche = JSON.parse(readFileSync(fFiche, 'utf8'));
fiche.logo = { nom: 'logo', source: 'recu/site2/001-a-tout-le-monde-bienvenue-sur-ce-blog.webp', role: 'logo', alt: 'Médaillon Fencer’s Files', largeurs: [96, 192, 480] };
for (const d of liste) {
  const c = couv.find((f) => f.startsWith(`${d.billet}-`) && /\.(jpe?g|png|webp)$/i.test(f));
  const v = vig.find((f) => f.startsWith(`${d.billet}-`) && /\.(jpe?g|png|webp)$/i.test(f));
  const source = c ? join(dossierCouv, c) : join(dossierVig, v);
  /* Première page du PDF : les marges blanches de la page sont retirées, la couverture n'est jamais recadrée. */
  const rogne = c ? await sharp(source).trim({ threshold: 18 }).toBuffer().catch(() => null) : null;
  const base = rogne || source;
  const meta = await sharp(base).metadata();
  /* La plus grande taille est la largeur réelle de la couverture rognée (760 px environ) : nette sur un écran Retina. */
  const largeurs = c ? [...new Set([240, 480, Math.min(800, meta.width)])] : [meta.width];
  for (const w of largeurs) await sharp(base).resize({ width: w }).webp({ quality: 80 }).toFile(join(img, 'couv', `d${d.numero}-${w}.webp`));
  etat.dimensions[d.numero] = { l: meta.width, h: meta.height };
  /* Note de beauté lue par l'audit : couverture du client, 3 (tient en moyen, jamais en plein écran). */
  fiche[`couv/d${d.numero}`] = { nom: `couv/d${d.numero}`, source: `recu/couvertures/${c || v}`, role: 'produit', alt: `Couverture du dossier « ${d.titre} »`, beaute: c ? 3 : 2, largeurs };
  if (c) etat.couvertures++; else etat.vignettes.push(d.numero);
}
writeFileSync(join(racine, 'donnees/couvertures.json'), JSON.stringify(etat));
writeFileSync(fFiche, JSON.stringify(fiche, null, 1));
console.log(`${etat.couvertures} couvertures, ${etat.vignettes.length} vignettes de secours${etat.vignettes.length ? ' (à remplacer)' : ''}.`);
