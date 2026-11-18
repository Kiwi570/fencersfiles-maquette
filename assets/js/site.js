/* Effets propres à Fencer's Files. Le socle gère l'ouverture, les transitions, l'en-tête, le menu, les mesures
   et la bibliothèque d'effets posés par attributs. Ici : l'intro (lettres, cachet), l'onglet numéroté qui se pose,
   le caviardage qui se retire, la pile qui se déploie, la rangée de la série, le cachet, l'aperçu des rubriques
   et les filtres de l'index. Chaque effet propre porte data-effet="nom-du-plan". */
import { demarrer, versObjet } from './socle/index.js?v=3';

const gsap = window.gsap;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const tete = () => $('main > section');
/* Scène à sens unique : arrivée au bout, elle reste dans son état final, même si l'on remonte. */
const unSens = (st) => ({ ...st, onLeave: (self) => { if (self.animation) self.animation.progress(1); self.kill(false); } });

/* Premier écran de chaque page : l'onglet se pose, le titre monte ligne à ligne, le reste suit, le cachet tombe. */
function reveler(tl, t) {
  const s = tete();
  if (!s) return;
  const titres = $$('h1[data-anime="gsap"]', s), lignes = $$('.une-ligne', s), onglets = $$('[data-effet="onglet"]', s), cachets = $$('.cachet', s);
  const blocs = $$('[data-anime="gsap"]', s).filter((e) => !titres.includes(e) && !onglets.includes(e));
  if (titres.length) tl.set(titres, { opacity: 1 }, t);
  if (lignes.length) tl.fromTo(lignes, { yPercent: 132 }, { yPercent: 0, duration: 0.8, stagger: 0.09, ease: 'power3.out' }, t);
  if (onglets.length) tl.fromTo(onglets, { yPercent: -150, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.55, ease: 'back.out(1.5)' }, Math.max(0, t - 0.05));
  if (blocs.length) tl.fromTo(blocs, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.07, ease: 'power3.out' }, t + 0.18);
  if (cachets.length) tl.fromTo(cachets, { scale: 1.9, opacity: 0, rotate: -26 }, { scale: 1, opacity: 1, rotate: -9, duration: 0.3, ease: 'power4.in' }, t + 0.3);
}

/* Onglet et couverture du premier écran : ils continuent de bouger au défilement. */
function ouvertureAuDefilement() {
  const s = tete();
  if (!s) return;
  const st = { trigger: s, start: 'top top', end: 'bottom top', scrub: true };
  $$('[data-effet="onglet"]', s).forEach((el) => gsap.fromTo(el, { y: 0 }, { y: -46, ease: 'none', immediateRender: false, scrollTrigger: st }));
  const couv = $('.une-couv, .fiche-tete-couv', s);
  if (couv) gsap.fromTo(couv, { y: 0, rotate: couv.classList.contains('une-couv') ? 3 : 2.5 }, { y: -50, rotate: -2, ease: 'none', immediateRender: false, scrollTrigger: st });
}

/* Caviardage : les barres noires se retirent l'une après l'autre quand le texte entre dans l'écran. */
function caviardage() {
  $$('[data-effet="caviardage"]').forEach((p) => {
    const tl = gsap.timeline({ scrollTrigger: unSens({ trigger: p, start: 'top 84%', end: 'top 42%', scrub: 0.4 }) });
    $$('.caviar', p).forEach((mot, i) => tl.fromTo(mot, { '--caviar': 1 }, { '--caviar': 0, duration: 1, ease: 'power1.inOut' }, i * 0.55));
  });
}

/* Pile : les six derniers dossiers partent empilés au centre et se déploient. */
function pile() {
  const p = $('[data-effet="pile"]');
  if (!p) return;
  const cartes = $$('.fiche', p), st = { trigger: p, start: 'top 100%', end: 'top 62%', scrub: 0.4 };
  const mm = gsap.matchMedia();
  mm.add('(min-width: 1001px)', () => {
    const tl = gsap.timeline({ scrollTrigger: unSens(st) });
    cartes.forEach((c, i) => tl.fromTo(c, { xPercent: (2.5 - i) * 104, y: 70, rotate: (i - 2.5) * 3.2 }, { xPercent: 0, y: 0, rotate: 0, duration: 1, ease: 'power2.out' }, 0));
  });
  mm.add('(max-width: 1000px)', () => {
    const tl = gsap.timeline({ scrollTrigger: unSens({ ...st, end: 'top 66%' }) });
    cartes.forEach((c, i) => tl.fromTo(c, { y: 50 + i * 14, rotate: i % 2 ? 3 : -3 }, { y: 0, rotate: 0, duration: 1, ease: 'power2.out' }, 0));
  });
}

/* Rangée de la série : elle glisse à l'horizontale pendant que la section traverse l'écran. */
function rangee() {
  const piste = $('[data-effet="rangee"]');
  if (!piste) return;
  const st = { trigger: piste.closest('section'), start: 'top 75%', end: 'bottom 35%', scrub: 0.5, invalidateOnRefresh: true };
  const mm = gsap.matchMedia();
  mm.add('(min-width: 761px)', () => {
    piste.removeAttribute('tabindex'); piste.removeAttribute('role'); piste.removeAttribute('aria-label');
    gsap.fromTo(piste, { x: () => Math.round(window.innerWidth * 0.1) }, { x: () => -Math.max(0, piste.scrollWidth - window.innerWidth) - Math.round(window.innerWidth * 0.02), ease: 'none', scrollTrigger: st });
    return () => { piste.setAttribute('tabindex', '0'); piste.setAttribute('role', 'region'); gsap.set(piste, { clearProps: 'transform' }); };
  });
  mm.add('(max-width: 760px)', () => {
    gsap.fromTo($$('.fiche', piste), { y: 36 }, { y: 0, ease: 'none', stagger: 0.05, scrollTrigger: unSens({ ...st, end: 'top 30%' }) });
  });
}

/* Cachet : il tombe d'un coup quand l'appel final entre dans l'écran, puis glisse légèrement au défilement. */
function tampons() {
  const premier = tete();
  $$('.cachet').filter((c) => !premier || !premier.contains(c)).forEach((c) => {
    const section = c.closest('section') || c;
    gsap.fromTo(c, { scale: 1.9, opacity: 0, rotate: -26 }, { scale: 1, opacity: 1, rotate: -9, duration: 0.32, ease: 'power4.in', scrollTrigger: { trigger: c, start: 'top 82%', once: true } });
    gsap.fromTo(c, { y: 26 }, { y: -26, ease: 'none', scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
}

/* Rubriques : la couverture du dernier dossier de la rubrique survolée (ou atteinte au clavier). */
function apercuRubriques() {
  const vues = $$('.rubriques-vue');
  if (!vues.length) return;
  const montrer = (n) => { if (n && vues.some((v) => v.dataset.vue === n)) vues.forEach((v) => v.classList.toggle('active', v.dataset.vue === n)); };
  $$('.rubriques-liste a').forEach((a) => {
    a.addEventListener('pointerenter', () => montrer(a.dataset.apercu));
    a.addEventListener('focus', () => montrer(a.dataset.apercu));
  });
}

/* Index : filtres par rubrique et recherche, gardés dans l'adresse. La recherche ignore accents, majuscules et pluriels. */
function index() {
  const grille = $('[data-grille-dossiers]');
  if (!grille) return;
  const cartes = $$('.fiche', grille), filtres = $$('[data-filtre]'), champ = $('[data-recherche]'), compte = $('[data-compte]'), aucun = $('[data-aucun]');
  const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[’']/g, ' ').replace(/(\w{3,})s\b/g, '$1');
  const textes = new Map(cartes.map((c) => [c, norm(c.dataset.cherche || '')]));
  const params = new URLSearchParams(location.search);
  let rub = params.get('rubrique') || '', q = params.get('q') || '', minuterie = 0;
  if (!filtres.some((f) => f.dataset.filtre === rub)) rub = '';
  champ.value = q;
  const appliquer = (ecrireAdresse) => {
    const mots = norm(q).split(/\s+/).filter(Boolean);
    let n = 0;
    cartes.forEach((c) => {
      const r = (c.dataset.rubriques || '').split(' ').filter(Boolean);
      const ok = (rub === '' || (rub === 'sans' ? !r.length : r.includes(rub))) && mots.every((m) => textes.get(c).includes(m));
      c.hidden = !ok;
      if (ok) { n++; c.classList.add('vu'); }
    });
    filtres.forEach((f) => { const actif = f.dataset.filtre === rub; f.classList.toggle('active', actif); if (actif) f.setAttribute('aria-current', 'true'); else f.removeAttribute('aria-current'); });
    compte.textContent = compte.dataset.gabarit.replace('{n}', n).replace(/dossiers/, n > 1 ? 'dossiers' : 'dossier');
    aucun.hidden = n > 0;
    if (ecrireAdresse) {
      const p = new URLSearchParams();
      if (rub) p.set('rubrique', rub);
      if (q) p.set('q', q);
      const s = p.toString();
      history.replaceState(history.state, '', location.pathname + (s ? '?' + s : ''));
    }
  };
  /* Passage en fondu, sans moment vide ; si la grille a raccourci, retour au début de la liste. */
  const changer = () => {
    clearTimeout(minuterie);
    grille.style.transition = 'opacity .18s'; grille.style.opacity = '0.25';
    minuterie = setTimeout(() => {
      appliquer(true);
      grille.style.opacity = '1';
      const outils = $('#recherche');
      if (outils && outils.getBoundingClientRect().bottom < 0) outils.scrollIntoView({ block: 'start' });
    }, 180);
  };
  filtres.forEach((f) => f.addEventListener('click', (e) => { e.preventDefault(); rub = f.dataset.filtre; changer(); }));
  champ.addEventListener('input', () => { q = champ.value.trim(); changer(); });
  $$('a[href="#recherche"]').forEach((a) => a.addEventListener('click', () => setTimeout(() => champ.focus({ preventScroll: true }), 500)));
  appliquer(false);
  if (location.hash === '#recherche') setTimeout(() => champ.focus({ preventScroll: true }), 900);
}

demarrer({
  preparer() {
    apercuRubriques();
    index();
    if (!gsap || !window.ScrollTrigger) return;
    ouvertureAuDefilement();
    caviardage();
    pile();
    rangee();
    tampons();
  },
  /* Intro, 2,5 s : le nom s'écrit lettre à lettre, le cachet tombe, le médaillon glisse jusqu'à l'objet d'ouverture
     de la page et le panneau s'ouvre depuis lui ; le premier écran se met en place pendant ce temps. */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.ouverture-lettre', { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.45, stagger: 0.026 }, 0.05)
      .fromTo('.ouverture-trait', { scaleX: 0 }, { scaleX: 1, duration: 0.5 }, 0.2)
      .fromTo('.ouverture-panneau .cachet-texte', { scale: 2.3, opacity: 0, rotate: -16 }, { scale: 1, opacity: 1, rotate: -4, duration: 0.24, ease: 'power4.in' }, 0.6)
      .to('.ouverture-nom, .ouverture-ligne, .ouverture-trait', { opacity: 0, duration: 0.24 }, 0.94);
    versObjet(tl, { a: 0.95 });
    reveler(tl, 1.45);
    return tl;
  },
  etatFinal() {
    if (!gsap) return;
    const s = tete();
    if (s) gsap.set($$('h1[data-anime="gsap"], .une-ligne, [data-anime="gsap"], .cachet', s), { clearProps: 'transform,opacity' });
  },
  arrivee() {
    if (!gsap) return;
    reveler(gsap.timeline(), 0.15);
  },
});
