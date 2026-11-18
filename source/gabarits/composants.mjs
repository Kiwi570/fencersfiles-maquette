/* Composants communs aux pages : couverture d'un dossier (jamais recadrée), carte de dossier, cachet, appel final. */
import { html, brut } from '../../outils/gabarit.mjs';

export const ratioCouv = (c, d) => { const x = c.donnees.couvertures.dimensions[d.numero]; return x ? `${x.l} / ${x.h}` : '1024 / 1449'; };

/* Dans les cartes, un cadre commun (15 / 23) pour que les rangées s'alignent : moins de 2 % de la couverture sort du cadre.
   En grand (ouverture, fiche), la couverture garde sa proportion exacte. */
export const couverture = (c, d, { sizes = '(max-width: 760px) 44vw, 22vw', priorite = false, classe = '', attrs = '', naturel = false } = {}) =>
  c.media({ nom: d.image, alt: `${c.s('commun.couverture')} « ${d.titre} »`, ratio: naturel ? ratioCouv(c, d) : '15 / 23', sizes, priorite, classe: `couv ${naturel ? 'couv--naturel' : ''} ${classe}`, attrs });

/* Titre coupé en deux lignes équilibrées pour les grands titres d'ouverture. */
export const deuxLignes = (titre) => {
  const mots = titre.split(' ');
  if (mots.length < 3) return [titre];
  let mieux = 1, ecart = Infinity;
  for (let i = 1; i < mots.length; i++) {
    const e = Math.abs(mots.slice(0, i).join(' ').length - mots.slice(i).join(' ').length);
    if (e < ecart) { ecart = e; mieux = i; }
  }
  return [mots.slice(0, mieux).join(' '), mots.slice(mieux).join(' ')];
};

export const meta = (c, d) => html`<p class="fiche-meta"><span>${d.rubriques[0] || c.t('commun.sansRubrique')}</span><span>${d.dateCourte}</span></p>`;

export const carte = (c, d, { niveau = 'h3', sizes, attrs = '' } = {}) => html`<article class="fiche"${brut(attrs ? ' ' + attrs : '')} data-rubriques="${d.rubriques.map((r) => c.donnees.dossiers.rubriques.find((x) => x.nom === r).cle).join(' ')}" data-cherche="${`${d.titre} ${d.accroche} ${d.rubriques.join(' ')}`}">
  <a class="fiche-lien" href="${c.url('dossier-' + d.slug)}" data-libelle="${d.titre}">
    <span class="fiche-onglet">${c.t('commun.numero')} ${d.numero}</span>
    ${couverture(c, d, { sizes })}
    ${meta(c, d)}
    ${brut(`<${niveau} class="fiche-titre">`)}${d.titre}${brut(`</${niveau}>`)}
  </a>
</article>`;

export const cachet = (c, texte) => html`<svg class="cachet" viewBox="0 0 200 200" data-superpose role="img" aria-label="${texte}" data-effet="tampon" data-visuel>
  <defs><path id="cachet-cercle" d="M100 100 m-74 0 a74 74 0 1 1 148 0 a74 74 0 1 1 -148 0"/></defs>
  <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" stroke-width="5"/>
  <circle cx="100" cy="100" r="58" fill="none" stroke="currentColor" stroke-width="2"/>
  <text class="cachet-tour"><textPath href="#cachet-cercle" startOffset="0" textLength="452">${`${texte} · ${texte} ·`.toUpperCase()}</textPath></text>
  <text class="cachet-centre" x="100" y="96" text-anchor="middle">FENCER’S</text>
  <text class="cachet-centre" x="100" y="122" text-anchor="middle">FILES</text>
</svg>`;

export const appel = (c, { titre, texte }) => html`<section class="appel nuit" id="ecrire-appel">
  <div class="conteneur appel-grille">
    ${cachet(c, c.s('accueil.appel.cachet'))}
    <div>
      <h2 data-anime="lignes">${titre}</h2>
      <p data-anime>${texte}</p>
      <p class="appel-actions" data-anime>
        ${c.lien('auteur', { ancre: 'ecrire', classe: 'bouton', texte: c.t('commun.actionEntete'), attrs: 'data-survol="magnetique"' })}
        <a class="lien-fleche" href="mailto:${c.site.contact.email}">${c.site.contact.email}</a>
      </p>
    </div>
  </div>
</section>`;
