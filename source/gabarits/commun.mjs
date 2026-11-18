/* Gabarit commun : head, en-tête, menu, pied de page, barre fixe du téléphone, voile.
   Les conventions data-* sont celles que lisent le socle JavaScript et l'audit (voir le README). */
import { html, brut } from '../../outils/gabarit.mjs';

const navigation = (c) => c.site.navigation.filter((cle) => c.pages[cle] && (c.pages[cle].langues || c.langues).includes(c.l));

function tete(c) {
  const p = c.page, cle = p.cle;
  const titre = c.s(`pages.${cle}.titre`), description = c.s(`pages.${cle}.description`);
  const ici = c.abs(c.url(cle));
  const imagePartage = c.abs(`/assets/partage/${p.partage === false ? 'accueil' : cle}-${c.l}.jpg`);
  const autres = c.alternatives(cle);
  const structure = c.donnees.structure ? JSON.stringify(c.donnees.structure).replace(/</g, '\\u003c') : '';
  return html`<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${titre}</title>
<meta name="description" content="${description}">
<meta name="robots" content="noindex, nofollow">
<link rel="canonical" href="${ici}">
${autres.length > 1 ? autres.map((a) => html`<link rel="alternate" hreflang="${a.l}" href="${c.abs(a.url)}">\n`) : ''}${autres.length > 1 ? html`<link rel="alternate" hreflang="x-default" href="${c.abs(c.alternatives(cle)[0].url)}">` : ''}
<style>${brut(c.critique.css)}</style>
<script>${brut(c.critique.js)}</script>
${(c.site.polices || []).map((f) => html`<link rel="preload" href="${f}" as="font" type="font/woff2" crossorigin>\n`)}<link rel="stylesheet" href="${c.asset('css/socle.css')}">
<link rel="stylesheet" href="${c.asset('css/site.css')}">
<link rel="modulepreload" href="${c.asset('js/site.js')}">
<link rel="modulepreload" href="${c.asset('js/socle/index.js')}">
<script src="/assets/vendor/gsap.min.js" defer></script>
<script src="/assets/vendor/ScrollTrigger.min.js" defer></script>
<script src="/assets/vendor/SplitText.min.js" defer></script>
<script type="module" src="${c.asset('js/site.js')}"></script>
<meta name="theme-color" content="${c.site.couleurs.theme || c.site.couleurs.fond}">
<link rel="icon" href="/assets/images/favicon.png" type="image/png">
<link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${c.site.nom}">
<meta property="og:locale" content="${c.l === 'fr' ? 'fr_FR' : c.l === 'en' ? 'en_GB' : c.l}">
<meta property="og:title" content="${titre}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${ici}">
<meta property="og:image" content="${imagePartage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${c.s(`pages.${p.partage === false ? 'accueil' : cle}.partageAlt`)}">
<meta name="twitter:card" content="summary_large_image">
${structure ? html`<script type="application/ld+json">${brut(structure)}</script>` : ''}
</head>`;
}

/* Lien de navigation : « Les dossiers » reste signalé sur les fiches de dossier. */
const lienNav = (c, k, classe = '') => {
  const courant = k === c.page.cle || (k === 'dossiers' && c.page.modele === 'fiche');
  return html`<a href="${c.url(k)}"${classe ? brut(` class="${classe}"`) : ''} data-libelle="${c.libelle(k)}"${courant ? brut(' aria-current="page"') : ''}>${c.libelle(k)}</a>`;
};
const loupe = brut('<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/></svg>');

function entete(c) {
  return html`<header data-entete>
  <div class="entete-rangee">
    <a class="entete-logo" href="${c.url('accueil')}" data-libelle="${c.libelle('accueil')}"${c.page.cle === 'accueil' ? brut(' aria-current="page"') : ''}>
      <img src="/assets/images/logo-96.webp" alt="" width="44" height="44"><span>${c.site.nom}</span>
    </a>
    <nav data-nav aria-label="${c.s('commun.navigation')}">
      <ul>${navigation(c).filter((k) => k !== 'accueil').map((k) => html`<li>${lienNav(c, k)}</li>`)}</ul>
    </nav>
    <div class="entete-actions">
      <a class="entete-recherche" href="${c.url('dossiers', 'recherche')}" data-libelle="${c.libelle('dossiers')}" aria-label="${c.s('commun.rechercher')}">${loupe}</a>
      <a class="bouton" href="${c.url('auteur', 'ecrire')}" data-libelle="${c.libelle('auteur')}">${c.t('commun.actionEntete')}</a>
      <button type="button" data-menu-bouton aria-controls="menu" aria-expanded="false" data-libelle-ouvrir="${c.s('commun.menu')}" data-libelle-fermer="${c.s('commun.fermer')}"><span data-libelle-bouton>${c.t('commun.menu')}</span></button>
      <a class="menu-sansjs" href="#menu" data-menu-lien>${c.t('commun.menu')}</a>
    </div>
  </div>
</header>
<script>/* Avant le premier affichage : rangées de la navigation (même règle que ajusterNav dans assets/js/socle/entete.js)
   et hauteur réelle de l'en-tête, pour que rien ne saute quand le JavaScript du site prend la main. */
(function () {
  var h = document.documentElement, u = document.querySelector('[data-nav] ul'), e = document.querySelector('[data-entete]');
  if (u) {
    var deborde = function () { return u.scrollWidth > u.clientWidth + 1; }, c = deborde();
    if (c && window.matchMedia('(min-width: 900px)').matches) {
      h.classList.add('nav-deux-rangees'); c = deborde();
      if (c) { h.classList.add('nav-deux-lignes'); var a = u.querySelector('a'); c = !a || u.getBoundingClientRect().height > a.getBoundingClientRect().height * 2.5; }
      if (c) h.classList.remove('nav-deux-rangees', 'nav-deux-lignes');
    }
    if (c) h.classList.add('nav-compacte');
  }
  if (e) h.style.setProperty('--entete-h', Math.round(e.getBoundingClientRect().height) + 'px');
})();</script>
<span id="menu-ferme" aria-hidden="true"></span>
<div id="menu" data-menu role="dialog" aria-modal="true" aria-label="${c.s('commun.menu')}">
  <p class="menu-sansjs-fermer"><a href="#menu-ferme">${c.t('commun.fermer')}</a></p>
  <ul>${navigation(c).map((k, i) => html`<li style="--i:${i}">${lienNav(c, k, 'menu-lien')}</li>`)}</ul>
  <p><a class="bouton" href="${c.url('auteur', 'ecrire')}" data-libelle="${c.libelle('auteur')}">${c.t('commun.actionEntete')}</a></p>
  <p><a class="menu-email" href="mailto:${c.site.contact.email}">${c.site.contact.email}</a></p>
</div>`;
}

function pied(c) {
  const rubriques = c.donnees.dossiers.rubriques.slice(0, 5);
  return html`<footer class="pied nuit" id="pied" data-masque-barre>
  <div class="conteneur pied-grille">
    <div class="pied-marque">
      <img src="/assets/images/logo-192.webp" alt="" width="88" height="88" loading="lazy">
      <p><strong>${c.site.nom}</strong><br>${c.t('commun.devise')}</p>
      <p>${c.t('commun.piedTexte')}</p>
      <p><a href="mailto:${c.site.contact.email}">${c.site.contact.email}</a></p>
    </div>
    <nav aria-label="${c.s('commun.sommaire')}">
      <p class="pied-titre">${c.t('commun.sommaire')}</p>
      <ul>${navigation(c).map((k) => html`<li>${lienNav(c, k)}</li>`)}<li><a href="${c.url('auteur', 'ecrire')}" data-libelle="${c.libelle('auteur')}">${c.t('commun.actionEntete')}</a></li></ul>
    </nav>
    <nav aria-label="${c.s('commun.rubriques')}">
      <p class="pied-titre">${c.t('commun.rubriques')}</p>
      <ul>${rubriques.map((r) => html`<li><a class="pied-rubrique" href="${c.url('dossiers', '', 'rubrique=' + r.cle)}" data-libelle="${c.libelle('dossiers')}">${r.nom}</a></li>`)}</ul>
    </nav>
    <div>
      <p class="pied-titre">${c.t('commun.legal')}</p>
      <ul class="pied-legal">
        <li>${c.t('commun.legalLigne')}</li>
        <li>${c.t('commun.confidentialiteLigne')}</li>
        <li><a href="#haut" data-sans-transition>${c.t('commun.retourHaut')}</a></li>
      </ul>
    </div>
  </div>
  <div class="conteneur pied-bas"><p>${c.t('commun.maquette')}</p><p>© ${c.site.nom}</p></div>
</footer>`;
}

function barre(c) {
  return html`<div data-barre-fixe>
  <a class="bouton bouton--contour" href="${c.url('dossiers')}" data-libelle="${c.libelle('dossiers')}">${c.libelle('dossiers')}</a>
  <a class="bouton" href="${c.url('auteur', 'ecrire')}" data-libelle="${c.libelle('auteur')}">${c.t('commun.ecrire')}</a>
</div>`;
}

/* Voile : deux pans encre nuit qui se referment comme une chemise (formeVoile « rideau »), même couleur partout. */
const FORMES_VOILE = ['glisse', 'iris', 'vague', 'rideau'];
function voile(c) {
  const forme = FORMES_VOILE.includes(c.site.formeVoile) ? c.site.formeVoile : 'glisse';
  return html`<div data-voile data-forme="${forme}" aria-hidden="true"><div class="voile-contenu"><img src="/assets/images/logo-192.webp" alt="" width="72" height="72"><span data-voile-libelle>${c.libelle(c.page.cle)}</span></div></div>`;
}

export function page(c, contenu) {
  const lettres = [...c.site.nom.toUpperCase()].map((x) => (x === ' ' ? brut('<span class="ouverture-espace"> </span>') : html`<span class="ouverture-lettre">${x}</span>`));
  return html`<!doctype html>
<html lang="${c.l}" data-v="${c.v}"${c.site.curseur ? brut(' data-curseur') : ''}>
${tete(c)}
<body id="haut" class="page-${c.page.modele || c.page.cle}">
${voile(c)}
<div class="ouverture-panneau" data-ouverture aria-hidden="true">
  <img class="ouverture-logo" src="/assets/images/logo-192.webp" alt="" width="96" height="96" data-ouverture-objet>
  <p class="ouverture-nom">${lettres}</p>
  <span class="ouverture-trait"></span>
  <p class="ouverture-ligne"><span class="cachet-texte">${c.t('commun.introLigne')}</span></p>
</div>
<a class="evitement" href="#contenu">${c.t('commun.evitement')}</a>
${entete(c)}
<main id="contenu" tabindex="-1"${c.page.sansAction ? brut(' data-sans-action') : ''}${c.page.sansEffet ? brut(' data-sans-effet') : ''}>
${contenu}
</main>
${pied(c)}
${barre(c)}
</body>
</html>`;
}
