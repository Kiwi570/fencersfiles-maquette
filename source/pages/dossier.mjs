/* Fiche d'un dossier : un seul modèle, une page par dossier (collection lue par outils/generer.mjs). */
import { html } from '../../outils/gabarit.mjs';
import { carte, couverture, appel } from '../gabarits/composants.mjs';

const resume = (d) => {
  const t = (d.texte.find((x) => !x.fort) || { t: d.titre }).t;
  return t.length > 150 ? t.slice(0, 150).replace(/\s+\S*$/, '') + '…' : t;
};

export const collection = (donnees) => donnees.dossiers.liste.map((d) => ({
  cle: 'dossier-' + d.slug, fichier: 'dossiers/' + d.slug, modele: 'fiche', partage: false, numero: d.numero,
  textes: { titre: `${d.titre} : dossier n° ${d.numero} de Fencer’s Files`, description: resume(d), nav: d.titre, partageAlt: d.titre, accroche: d.titre },
}));

export default (c) => {
  const D = c.donnees.dossiers, liste = D.liste;
  const i = liste.findIndex((x) => x.numero === c.page.numero), d = liste[i];
  const cleRub = (nom) => D.rubriques.find((r) => r.nom === nom).cle;
  const voisins = liste.filter((x) => x !== d && !x.discret && d.rubriques.length && x.rubriques.includes(d.rubriques[0])).slice(0, 4);
  const memes = voisins.length >= 2;
  const autres = memes ? voisins : liste.filter((x) => x !== d && !x.discret).slice(0, 4);
  const suivant = liste[i - 1], precedent = liste[i + 1];
  return html`
<div data-barre-lecture aria-hidden="true"></div>
<section class="fiche-tete" id="debut">
  <div class="conteneur fiche-tete-grille">
    <div class="fiche-tete-texte">
      <p class="fil depeche" data-anime="gsap">${c.lien('dossiers', { texte: c.t('fiche.fil') })}${d.rubriques.map((r) => html`<span aria-hidden="true">/</span><a href="${c.url('dossiers', '', 'rubrique=' + cleRub(r))}" data-libelle="${c.libelle('dossiers')}">${r}</a>`)}</p>
      <p class="fiche-numero" data-anime="gsap" data-effet="onglet" data-superpose aria-hidden="true">${c.t('commun.numero')} ${d.numero}</p>
      <h1 class="fiche-h1" data-anime="gsap" style="--car:${Math.max(13, Math.ceil(d.titre.length / 2) + 2)}"><span class="ligne-masque"><span class="une-ligne">${d.titre}</span></span></h1>
      <p class="depeche fiche-accroche masque-ecran-tres-bas" data-anime="gsap">${d.accroche}</p>
      <p class="une-actions" data-anime="gsap">
        <a class="bouton" href="${d.pdf}" target="_blank" rel="noopener" data-action-principale data-survol="magnetique">${c.t('fiche.pdf')}</a>
        <span class="une-info" data-info-cle>${c.t('fiche.publie', { date: d.dateTexte })}</span>
      </p>
    </div>
    <div class="fiche-tete-couv" data-iris-centre>${couverture(c, d, { sizes: '(max-width: 760px) 60vw, 30vw', priorite: true, naturel: true, attrs: 'data-fx="vitesse" data-fx-force="2"' })}</div>
  </div>
</section>

<section class="fiche-corps" id="presentation">
  <div class="conteneur fiche-corps-grille">
    <div class="fiche-texte" data-anime="cascade">
      <h2 class="surtitre">${c.t('fiche.resume')}</h2>
      ${d.texte.map((x) => (x.fort ? html`<p class="fiche-fort depeche">${x.t}</p>` : html`<p>${x.t}</p>`))}
    </div>
    <aside class="encart" data-anime>
      <span class="fiche-onglet">${c.t('commun.numero')} ${d.numero}</span>
      <h2>${c.t('fiche.encart')}</h2>
      <p>${c.t('fiche.encartTexte')}</p>
      <a class="bouton" href="${d.pdf}" target="_blank" rel="noopener">${c.t('fiche.pdf')}</a>
      <p class="encart-note">${c.t('fiche.pdfNote')}</p>
    </aside>
  </div>
</section>

<section class="fiche-suite" id="suite">
  <div class="conteneur section-tete">
    <h2 data-anime="lignes">${memes ? c.t('fiche.memeRubrique') : c.t('fiche.autres')}</h2>
    ${c.lien('dossiers', { classe: 'lien-fleche', texte: c.t('commun.tous'), params: memes ? 'rubrique=' + cleRub(d.rubriques[0]) : '' })}
  </div>
  <div class="conteneur grille-dossiers grille-dossiers--4" data-anime="cascade">
    ${autres.map((x) => carte(c, x, { sizes: '(max-width: 760px) 44vw, 20vw' }))}
  </div>
  <nav class="conteneur fiche-voisins" aria-label="${c.s('fiche.autres')}">
    ${precedent ? html`<a class="voisin" href="${c.url('dossier-' + precedent.slug)}" data-libelle="${precedent.titre}"><span class="depeche">${c.t('fiche.precedent')} · ${c.t('commun.numero')} ${precedent.numero}</span><strong>${precedent.titre}</strong></a>` : html`<span></span>`}
    ${suivant ? html`<a class="voisin voisin--suivant" href="${c.url('dossier-' + suivant.slug)}" data-libelle="${suivant.titre}"><span class="depeche">${c.t('fiche.suivant')} · ${c.t('commun.numero')} ${suivant.numero}</span><strong>${suivant.titre}</strong></a>` : html`<span></span>`}
  </nav>
</section>

${appel(c, { titre: c.t('accueil.appel.titre'), texte: c.t('accueil.appel.texte') })}
`;
};
