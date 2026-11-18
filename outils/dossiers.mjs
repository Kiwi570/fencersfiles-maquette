#!/usr/bin/env node
/* Fabrique donnees/dossiers.json à partir du flux du blog (recu/site2/articles.json).
   Une seule source par information : titres courts relus sur les couvertures (table TITRES),
   textes, rubriques, dates et liens PDF repris tels quels du blog. Usage : node outils/dossiers.mjs */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const racine = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { articles } = JSON.parse(readFileSync(join(racine, 'recu/site2/articles.json'), 'utf8'));

/* Titre court de chaque dossier, relu sur sa couverture (numéro du billet dans le flux). */
const TITRES = {
  '002': 'La généalogie des Annunaki', '003': 'Le triangle des Bermudes', '004': 'Les Antariens', '005': 'Le Sphinx',
  '006': 'Le projet Silverbug', '007': 'Les hommes en noir', '008': 'Les avions archéologiques', '009': 'Les Alpha Draconiens',
  '010': 'Les ruines sous-marines de Yonaguni', '011': 'L’incident de Zeta Reticuli', '012': 'Le cas Billy Meier',
  '013': 'Le crop circle de Chilbolton', '014': 'Les Gris', '015': 'Document d’étude sur les cas OVNI (1944-1976)',
  '016': 'Les Lyriens', '017': 'Le mystérieux Coral Castle', '018': 'Les mystères des Dogons',
  '019': 'Les Reptiliens : catalogue des espèces', '020': 'Les crop circles sont-ils créés par des sons ?', '021': 'Les Arcturiens',
  '022': 'La base de Nellis et les Tall Whites', '023': 'Le projet Redbook', '024': 'Les légendes du mont Kailash',
  '025': 'L’histoire des Hav-Musuvs', '026': 'L’étrange aventure de Betty Andreasson', '027': 'Les Gris : catalogue des espèces',
  '028': 'Le mystère de Mohenjo-Daro', '029': 'Le swastika, symbole millénaire', '030': 'Les énigmatiques statues Dogū',
  '031': 'Le groupe Nebu d’Orion', '032': 'Les secrets du mont Bucegi', '033': 'Les portes des dieux extraterrestres',
  '034': 'La Jason Society et le nouvel ordre mondial', '035': 'Les humanoïdes reptiliens : dossiers de cas',
  '036': 'Les programmes spatiaux secrets', '037': 'Les mystères du plateau d’Albion', '038': 'Peintures rupestres et extraterrestres',
  '039': 'L’opération Highjump', '040': 'Les momies tridactyles', '041': 'Le chupacabra', '042': 'La base de Pine Gap',
  '043': 'La bataille de Dulce', '044': 'Les Siriens', '045': 'Le reptilien de Pamela Hamilton', '046': 'Le projet Starchild',
  '047': 'Les descendants des Annunaki', '048': 'Les Pléiadiens', '049': 'La pyramide sous-marine des Açores', '050': 'Les pierres d’Ica',
  '051': 'Alien Transcripts 1 : contact et communication', '052': 'Les anciennes cités perdues du désert de Gobi',
  '053': 'La fraternité des sept rayons solaires', '054': 'Les bases extraterrestres aux États-Unis',
  '055': 'Bep-Kororoti et les anciens astronautes', '056': 'Alien Transcripts 2 : rencontre avec des extraterrestres',
  '057': 'Alien Transcripts 3 : l’interview de l’extraterrestre', '058': 'Le symbolisme du 11 septembre 2001', '059': 'L’empreinte des dieux',
  '060': 'Les bases extraterrestres en Amérique du Sud', '061': 'Document d’étude sur les cas OVNI (1980-1994)',
  '062': 'Baalbeck, une énigme colossale', '063': 'Les Andromédiens', '064': 'Fédérations et conseils galactiques',
  '065': 'Alien Transcripts 4 : première rencontre avec Riyah', '066': 'La technologie occulte derrière les ovnis', '067': 'Blue Planet Project',
  '068': 'L’Hadjar el Gouble', '069': 'Les groupes du nouvel ordre mondial', '070': 'Les bases extraterrestres au Mexique',
  '071': 'Blue Planet Project : Project Pulsar', '072': 'Les bases extraterrestres en Australie', '073': 'L’aéroport de Denver',
  '074': 'Alien Transcripts 5 : résumé des conclusions', '075': 'Les races extraterrestres insectoïdes', '076': 'Les anomalies lunaires',
  '077': 'La Terre creuse',
};
/* Dossiers gardés dans l'index mais jamais mis en avant à l'accueil (relevé, points de vigilance). */
const DISCRETS = new Set(['029', '034', '058', '069']);

const entites = (s) => s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const sansBalises = (s) => entites(s.replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, ''));
const propre = (s) => s.replace(/[\p{Extended_Pictographic}\u{FE0F}\u{200D}]/gu, '').replace(/\*\*/g, '').replace(/'/g, '’').replace(/\s+/g, ' ').trim();
const slug = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[’']/g, '-').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const COURTS = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

const dossiers = [];
const manques = [];
let n = 0;
for (const a of articles) {
  const pdf = (a.html.match(/href="(https:\/\/www\.dropbox\.com\/[^"]+)"/) || [])[1];
  if (!pdf) continue;                       // billet de bienvenue : pas un dossier
  n++;
  const titre = TITRES[a.numero];
  if (!titre) { manques.push(`titre absent pour le billet ${a.numero} (${a.slug})`); continue; }
  /* Paragraphes : blocs p et div du billet, sans l'image, les liens, les mots-dièse ni l'invitation finale. */
  const blocs = a.html.split(/<\/p>|<\/div>|<br\s*\/?>\s*<br\s*\/?>/i).map((b) => propre(sansBalises(b))).filter(Boolean)
    .filter((b) => !/^https?:\/\//.test(b) && !/^#\w/.test(b) && !/d[ée]couvrez le dossier complet/i.test(b) && !/fencersfiles\.blogspot/i.test(b) && !/dropbox\.com/i.test(b));
  const gras = [...a.html.matchAll(/<(strong|b)\b[^>]*>([\s\S]*?)<\/\1>/g)].map((m) => propre(sansBalises(m[2]))).filter(Boolean);
  const accroche = (gras[0] || '').replace(/\s*:\s*$/, '');
  const texte = blocs.map((b) => (accroche && b.includes(accroche) ? b.replace(accroche, '').replace(/^\s*:\s*/, '').trim() : b)).filter(Boolean)
    .map((t) => ({ t, fort: t === t.toUpperCase() && /[A-ZÀ-Ü]{4}/.test(t) }));
  const jour = Number(a.date.slice(8, 10)), mois = Number(a.date.slice(5, 7));
  dossiers.push({
    numero: String(n).padStart(3, '0'), billet: a.numero, slug: slug(titre.replace(/ \?$/, '')), titre, accroche, texte,
    rubriques: a.rubriques, date: a.date.slice(0, 10), dateTexte: `${jour === 1 ? '1er' : jour} ${MOIS[mois - 1]} ${a.date.slice(0, 4)}`,
    dateCourte: `${jour === 1 ? '1er' : jour} ${COURTS[mois - 1]}`,
    pdf: entites(pdf), drive: (a.html.match(/docs\.google\.com\/file\/d\/([\w-]+)\/preview/) || [])[1] || null,
    source: a.lien, image: `couv/d${String(n).padStart(3, '0')}`, discret: DISCRETS.has(a.numero),
    serie: /^Alien Transcripts/.test(titre) ? 'alien-transcripts' : null,
  });
}
const doublons = dossiers.map((d) => d.slug).filter((s, i, t) => t.indexOf(s) !== i);
if (doublons.length) manques.push(`adresses en double : ${doublons.join(', ')}`);
if (manques.length) { console.error('ÉCHEC :\n- ' + manques.join('\n- ')); process.exit(1); }

/* Rubriques : libellés du blog, avec leur compte réel. */
const compte = {};
for (const d of dossiers) for (const r of d.rubriques) compte[r] = (compte[r] || 0) + 1;
const rubriques = Object.entries(compte).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'fr')).map(([nom, nombre]) => ({ nom, cle: slug(nom), nombre }));
const sansRubrique = dossiers.filter((d) => !d.rubriques.length).length;

dossiers.reverse();                          // du plus récent au plus ancien
writeFileSync(join(racine, 'donnees/dossiers.json'), JSON.stringify({ total: dossiers.length, sansRubrique, rubriques, liste: dossiers }, null, 1));
console.log(`${dossiers.length} dossiers, ${rubriques.length} rubriques, ${sansRubrique} sans rubrique → donnees/dossiers.json`);
