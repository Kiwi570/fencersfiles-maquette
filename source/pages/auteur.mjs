/* L'auteur et contact : qui écrit, les chiffres réels du blog, le formulaire simulé. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'auteur', fichier: 'auteur', imagePartage: 'grok/auteur-ouverture-1280.webp' };

export default (c) => {
  const D = c.donnees.dossiers;
  return html`
<section class="auteur-tete nuit ecran" id="debut">
  ${c.media({ nom: 'grok/auteur-ouverture', alt: c.s('auteur.alt'), cadrage: '50% 30%', cadrageMobile: '50% 20%', priorite: true, classe: 'auteur-tete-fond', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="8" data-iris-centre' })}
  <div class="conteneur auteur-tete-texte">
    <p class="surtitre" data-anime="gsap">${c.t('auteur.surtitre')}</p>
    <h1 class="une-titre" data-anime="gsap"><span class="ligne-masque"><span class="une-ligne">${c.t('auteur.titre1')}</span></span><span class="ligne-masque"><span class="une-ligne">${c.t('auteur.titre2')}</span></span></h1>
    <p class="auteur-tete-intro masque-ecran-tres-bas" data-anime="gsap">${c.t('auteur.texte')}</p>
    <p class="une-actions" data-anime="gsap">
      <a class="bouton" href="#ecrire" data-action-principale data-sans-transition data-survol="magnetique">${c.t('auteur.action')}</a>
      <a class="une-info" href="mailto:${c.site.contact.email}" data-info-cle>${c.site.contact.email}</a>
    </p>
  </div>
</section>

<section class="bio" id="bio">
  <div class="conteneur bio-grille">
    ${c.media({ nom: 'logo', alt: c.s('auteur.logoAlt'), classe: 'bio-logo', ratio: '1 / 1', sizes: '(max-width: 760px) 60vw, 340px', attrs: 'data-anime="rideau"' })}
    <div>
      <h2 data-anime="lignes">${c.t('auteur.bioTitre')}</h2>
      <p data-anime>${c.t('auteur.bio1')}</p>
      <p data-anime>${c.t('auteur.bio2')}</p>
      <p data-anime>${c.t('auteur.bio3')}</p>
    </div>
  </div>
  <ul class="conteneur chiffres bio-chiffres" data-anime="cascade">
    <li><strong data-compteur="40" data-superpose>40</strong><span>${c.t('auteur.c1')}</span></li>
    <li><strong data-compteur="${D.total}" data-superpose>${D.total}</strong><span>${c.t('auteur.c2')}</span></li>
    <li><strong data-compteur="${D.rubriques.length}" data-superpose>${D.rubriques.length}</strong><span>${c.t('auteur.c3')}</span></li>
  </ul>
</section>

<section class="ecrire nuit" id="ecrire" data-masque-barre>
  <div class="conteneur ecrire-grille">
    <div class="ecrire-texte">
      <h2 data-anime="lignes">${c.t('auteur.ecrireTitre')}</h2>
      <p data-anime>${c.t('auteur.ecrireTexte')}</p>
      <p class="ecrire-email" data-anime><span class="depeche">${c.t('auteur.emailLibelle')}</span><a href="mailto:${c.site.contact.email}">${c.site.contact.email}</a></p>
      <svg class="ecrire-trait" viewBox="0 0 300 120" aria-hidden="true" data-fx="trace" data-visuel><path d="M6 100 C 60 20, 120 110, 170 50 S 260 10, 292 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="1 0"/><path d="M276 44 l16 16 l-20 8" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
    <form data-formulaire class="formulaire" action="#" novalidate data-anime>
      <div class="champ"><label for="f-nom">${c.t('auteur.nom')}</label><input id="f-nom" name="nom" autocomplete="name" required></div>
      <div class="champ"><label for="f-email">${c.t('auteur.email')}</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
      <div class="champ"><label for="f-sujet">${c.t('auteur.sujet')}</label>
        <select id="f-sujet" name="sujet">
          <option value="temoignage">${c.t('auteur.sujetTemoignage')}</option>
          <option value="question">${c.t('auteur.sujetQuestion')}</option>
          <option value="suggestion">${c.t('auteur.sujetSuggestion')}</option>
        </select></div>
      <div class="champ"><label for="f-message">${c.t('auteur.message')}</label><textarea id="f-message" name="message" rows="5" required></textarea></div>
      <p class="mention-donnees">${c.t('auteur.donnees')}</p>
      <button type="submit" class="bouton">${c.t('auteur.envoyer')}</button>
      <p data-message-envoi role="status" tabindex="-1" hidden></p>
    </form>
  </div>
</section>
`;
};
