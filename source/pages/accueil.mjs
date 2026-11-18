/* Accueil : le dernier dossier, le manifeste du blog, les derniers dossiers, les rubriques, la série, l'auteur. */
import { html } from '../../outils/gabarit.mjs';
import { carte, couverture, deuxLignes, appel } from '../gabarits/composants.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'grok/accueil-ouverture-1280.webp' };

export default (c) => {
  const D = c.donnees.dossiers, visibles = D.liste.filter((d) => !d.discret);
  const une = visibles[0], derniers = visibles.slice(1, 7);
  const serie = D.liste.filter((d) => d.serie === 'alien-transcripts').reverse();
  const civ = D.rubriques.find((r) => r.cle === 'anciennes-civilisations');
  const apercu = (r) => visibles.find((d) => d.rubriques.includes(r.nom));
  return html`
<section class="une nuit ecran" id="debut">
  ${c.media({ nom: 'grok/accueil-ouverture', alt: c.s('accueil.une.alt'), cadrage: '70% 50%', cadrageMobile: '50% 70%', priorite: true, classe: 'une-fond', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}
  <span class="une-lueur" data-boucle-css data-audit-ignorer aria-hidden="true"></span>
  <div class="une-grille conteneur">
    <div class="une-texte">
      <p class="onglet" data-anime="gsap" data-effet="onglet"><span>${c.t('commun.dossierNumero')} ${une.numero}</span><span class="onglet-date">· ${une.dateTexte}</span></p>
      <h1 class="une-titre" data-anime="gsap" style="--car:${Math.max(9, ...deuxLignes(une.titre).map((l) => l.length))}">${deuxLignes(une.titre).map((l) => html`<span class="ligne-masque"><span class="une-ligne">${l}</span></span>`)}</h1>
      <p class="une-accroche depeche" data-anime="gsap">${une.accroche}</p>
      <p class="une-actions" data-anime="gsap">
        ${c.lien('dossier-' + une.slug, { classe: 'bouton', texte: c.t('commun.ouvrir'), attrs: 'data-action-principale data-survol="magnetique"' })}
        <span class="une-info" data-info-cle>${c.t('accueil.une.info', { total: D.total, rubriques: D.rubriques.length })}</span>
      </p>
    </div>
    <a class="une-couv" href="${c.url('dossier-' + une.slug)}" data-libelle="${une.titre}" data-iris-centre data-boucle-css tabindex="-1" aria-hidden="true">
      ${couverture(c, une, { sizes: '(max-width: 760px) 46vw, 26vw', priorite: true, naturel: true })}
    </a>
  </div>
</section>

<section class="manifeste" id="manifeste">
  <div class="conteneur manifeste-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('accueil.manifeste.surtitre')}</p>
      <h2 class="manifeste-titre" data-anime="lignes">${c.t('accueil.manifeste.titre')}</h2>
      <p class="manifeste-texte" data-effet="caviardage">${c.tb('accueil.manifeste.texte')}</p>
    </div>
    ${c.media({ nom: 'logo', alt: c.s('accueil.manifeste.logoAlt'), classe: 'manifeste-logo', ratio: '1 / 1', sizes: '(max-width: 760px) 50vw, 300px', attrs: 'data-fx="zoom" data-fx-force="10"' })}
  </div>
  <ul class="conteneur themes" data-anime="cascade">
    ${[1, 2, 3, 4].map((i) => html`<li><span class="themes-n">0${i}</span><h3>${c.t(`accueil.manifeste.t${i}`)}</h3><p>${c.t(`accueil.manifeste.p${i}`)}</p></li>`)}
  </ul>
</section>

<section class="derniers" id="derniers">
  <div class="conteneur section-tete">
    <h2 data-anime="lignes">${c.t('accueil.derniers.titre')}</h2>
    ${c.lien('dossiers', { classe: 'lien-fleche', texte: c.t('accueil.derniers.tous', { total: D.total }) })}
  </div>
  <div class="conteneur pile" data-effet="pile">
    ${derniers.map((d, i) => carte(c, d, { sizes: '(max-width: 760px) 44vw, 15vw', attrs: `style="--i:${i}"` }))}
  </div>
</section>

<section class="rubriques" id="rubriques">
  <div class="conteneur rubriques-grille">
    <div>
      <h2 data-anime="lignes">${c.t('accueil.rubriques.titre')}</h2>
      <p data-anime>${c.t('accueil.rubriques.texte')}</p>
      <ul class="rubriques-liste" data-anime="cascade">
        ${D.rubriques.map((r) => html`<li><a href="${c.url('dossiers', '', 'rubrique=' + r.cle)}" data-libelle="${c.libelle('dossiers')}" data-apercu="${apercu(r)?.numero || ''}"><span class="rubriques-nom">${r.nom}</span><span class="rubriques-compte"><span data-compteur="${r.nombre}">${r.nombre}</span> ${r.nombre > 1 ? c.t('accueil.rubriques.dossiers') : c.t('accueil.rubriques.dossier')}</span></a></li>`)}
      </ul>
    </div>
    <div class="rubriques-apercu" aria-hidden="true">
      ${D.rubriques.map((r, i) => { const d = apercu(r); return d ? html`<div class="rubriques-vue${i === 0 ? ' active' : ''}" data-vue="${d.numero}">${couverture(c, d, { sizes: '(max-width: 760px) 46vw, 24vw' })}</div>` : ''; })}
    </div>
  </div>
</section>

<section class="serie nuit" id="serie">
  ${c.media({ nom: 'grok/accueil-transcripts', alt: c.s('accueil.serie.alt'), cadrage: '75% 50%', classe: 'serie-fond', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}
  <div class="conteneur serie-tete">
    <p class="surtitre" data-anime>${c.t('accueil.serie.surtitre')}</p>
    <h2 data-anime="lettres">${c.t('accueil.serie.titre')}</h2>
    <p data-anime>${c.t('accueil.serie.texte')}</p>
  </div>
  <div class="serie-piste" data-effet="rangee" data-galerie tabindex="0" role="region" aria-label="${c.s('accueil.serie.region')}">
    ${serie.map((d, i) => carte(c, d, { sizes: '(max-width: 760px) 56vw, 18vw', attrs: `style="--i:${i}"` }))}
  </div>
</section>

<section class="civilisations nuit" id="civilisations" data-fx="plein-ecran" data-fx-depart="inset(22% 32% 22% 32% round 6px)">
  <div data-collant>
    ${c.media({ nom: 'grok/accueil-megalithes', alt: c.s('accueil.civilisations.alt'), cadrage: '60% 50%', sizes: '100vw' })}
    <h2 class="visuellement-cache">${c.t('accueil.civilisations.titre')}</h2>
    <p class="civilisations-mots" aria-hidden="true"><span data-fx-ecarte="g">${c.t('accueil.civilisations.mot1')}</span><span data-fx-ecarte="d">${c.t('accueil.civilisations.mot2')}</span></p>
    <div class="civilisations-legende" data-fx-apres>
      <p>${c.t('accueil.civilisations.legende', { nombre: civ.nombre })}</p>
      <a class="bouton" href="${c.url('dossiers', '', 'rubrique=' + civ.cle)}" data-libelle="${c.libelle('dossiers')}">${c.t('accueil.civilisations.action')}</a>
    </div>
  </div>
</section>

<section class="auteur-bloc" id="auteur">
  <div class="conteneur auteur-grille">
    <div>
      <p class="auteur-chiffre"><span class="auteur-nombre" data-compteur="40" data-superpose>40</span><span class="auteur-unite" data-superpose>${c.t('accueil.auteur.unite')}</span></p>
      <h2 class="auteur-titre" data-anime="lignes">${c.t('accueil.auteur.titre')}</h2>
      <p data-anime>${c.t('accueil.auteur.texte')}</p>
      <p data-anime>${c.lien('auteur', { classe: 'lien-fleche', texte: c.t('accueil.auteur.action') })}</p>
    </div>
    ${c.media({ nom: 'grok/auteur-ouverture', alt: c.s('accueil.auteur.alt'), cadrage: '50% 40%', classe: 'auteur-media', sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-anime="rideau"' })}
  </div>
</section>

${appel(c, { titre: c.t('accueil.appel.titre'), texte: c.t('accueil.appel.texte') })}
`;
};
