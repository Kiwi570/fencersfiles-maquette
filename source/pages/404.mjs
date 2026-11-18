/* Page 404 : « Dossier introuvable », le tiroir où il manque une chemise, et le cachet. */
import { html } from '../../outils/gabarit.mjs';
import { cachet } from '../gabarits/composants.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="introuvable nuit ecran" id="debut">
  <div class="conteneur introuvable-grille">
    <div class="introuvable-texte">
      <h1 class="une-titre" data-anime="gsap"><span class="ligne-masque"><span class="une-ligne">${c.t('introuvable.titre')}</span></span></h1>
      <p data-anime="gsap">${c.t('introuvable.texte')}</p>
      <p class="une-actions" data-anime="gsap">${c.lien('dossiers', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
    </div>
    <div class="introuvable-visuel" data-iris-centre>
      ${c.media({ nom: 'grok/commun-404', alt: c.s('introuvable.alt'), priorite: true, classe: 'introuvable-media', sizes: '(max-width: 760px) 80vw, 36vw', attrs: 'data-fx="zoom" data-fx-force="8"' })}
      ${cachet(c, c.s('introuvable.titre'))}
    </div>
  </div>
</section>
`;
