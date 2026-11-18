/* Les dossiers : index des 76 dossiers, filtres par rubrique (gardés dans l'adresse), recherche. */
import { html } from '../../outils/gabarit.mjs';
import { carte, appel } from '../gabarits/composants.mjs';

export const page = { cle: 'dossiers', fichier: 'dossiers', imagePartage: 'grok/dossiers-ouverture-1280.webp' };

export default (c) => {
  const D = c.donnees.dossiers;
  return html`
<section class="index-tete nuit" id="debut">
  <div class="conteneur index-tete-grille">
    <h1 class="index-titre" data-anime="gsap"><span class="index-nombre" data-effet="onglet" data-superpose>${D.total}</span><span class="ligne-masque"><span class="une-ligne">${c.t('dossiers.titre')}</span></span></h1>
    <div class="index-intro" data-anime="gsap">
      <p class="masque-ecran-tres-bas">${c.t('dossiers.texte')}</p>
      <p class="une-actions">
        <a class="bouton" href="#recherche" data-action-principale data-sans-transition data-survol="magnetique">${c.t('commun.rechercher')}</a>
        <span class="une-info" data-info-cle>${c.t('dossiers.info', { date: D.liste[0].dateTexte })}</span>
      </p>
    </div>
  </div>
  ${c.media({ nom: 'grok/dossiers-ouverture', alt: c.s('dossiers.alt'), cadrage: '50% 62%', cadrageMobile: '50% 60%', priorite: true, classe: 'index-bandeau', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="8" data-iris-centre' })}
</section>

<section class="index" id="index">
  <div class="conteneur">
    <div class="index-outils" id="recherche">
      <div class="index-filtres" role="group" aria-label="${c.s('dossiers.filtres')}" data-filtres>
        <a class="pastille active" href="${c.url('dossiers')}" data-filtre="" data-sans-transition aria-current="true">${c.t('dossiers.tout')} <span>${D.total}</span></a>
        ${D.rubriques.map((r) => html`<a class="pastille" href="${c.url('dossiers', '', 'rubrique=' + r.cle)}" data-filtre="${r.cle}" data-sans-transition>${r.nom} <span>${r.nombre}</span></a>`)}
        <a class="pastille" href="${c.url('dossiers', '', 'rubrique=sans')}" data-filtre="sans" data-sans-transition>${c.t('dossiers.sans')} <span>${D.sansRubrique}</span></a>
      </div>
      <div class="champ index-champ">
        <label for="q">${c.t('dossiers.recherche')}</label>
        <input id="q" name="q" type="search" autocomplete="off" placeholder="${c.s('dossiers.exemple')}" data-recherche>
      </div>
      <p class="index-compte depeche" role="status" data-compte data-gabarit="${c.s('dossiers.compte')}">${c.t('dossiers.compte', { n: D.total })}</p>
    </div>
    <div class="grille-dossiers" data-grille-dossiers>
      ${D.liste.map((d) => carte(c, d, { niveau: 'h2', sizes: '(max-width: 760px) 44vw, (max-width: 1100px) 22vw, 15vw', attrs: 'data-anime data-effet="rangs"' }))}
    </div>
    <p class="index-aucun" data-aucun hidden>${c.t('dossiers.aucun')}</p>
  </div>
</section>

${appel(c, { titre: c.t('dossiers.finTitre'), texte: c.t('dossiers.finTexte') })}
`;
};
