# Rapport d’audit

Projet : `fencersfiles-maquette` · 17/11/2026 20:34:06 · 12 min · 5 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/dossiers,/dossiers/la-terre-creuse,/auteur,/404

## Résumé

- Statut : **131 échec(s)**
- Passe : `20261117-192147-rapide-cible` · version ?v=1
- Échecs : **131**
- À regarder : **130**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (30), films d’ouverture (8), films de transition (8), bords de l’écran (4), intro accélérable et passable (7), menu (1), clavier (5), liens et boutons (5), liens profonds (4), liens vers la page en cours (4), changements de hauteur (4), tient dans l’écran (2), fluidité (8), défilement selon l’appareil (5), mouvement (8), effets du plan (5), souris immobile (4), vitesse (4), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 79 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en rideau |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### texte coupé (8)

- **texte coupé** — `/` — div.une-texte > h1.une-titre > span.ligne-masque:nth-of-type(1) > span.une-ligne « LA TERRE » — coupé par div.une-grille.conteneur > div.une-texte > h1.une-titre > span.ligne-masque:nth-of-type(1) « LA TERRE » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/` — div.une-texte > h1.une-titre > span.ligne-masque:nth-of-type(2) > span.une-ligne « CREUSE » — coupé par div.une-grille.conteneur > div.une-texte > h1.une-titre > span.ligne-masque:nth-of-type(2) « CREUSE » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/404` — div.introuvable-texte:nth-of-type(1) > h1.une-titre > span.ligne-masque > span.une-ligne « DOSSIER INTROUVABLE » — coupé par div.conteneur.introuvable-grille > div.introuvable-texte:nth-of-type(1) > h1.une-titre > span.ligne-masque « DOSSIER INTROUVABLE » _(390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, 1366×768 normal, 390×844 sansWebgl)_
- **texte coupé** — `/auteur` — div.conteneur.auteur-tete-texte > h1.une-titre > span.ligne-masque:nth-of-type(1) > span.une-ligne « PLUS DE 40 ANS » — coupé par section#debut > div.conteneur.auteur-tete-texte > h1.une-titre > span.ligne-masque:nth-of-type(1) « PLUS DE 40 ANS » _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/auteur` — div.conteneur.auteur-tete-texte > h1.une-titre > span.ligne-masque:nth-of-type(2) > span.une-ligne « D’UFOLOGIE » — coupé par section#debut > div.conteneur.auteur-tete-texte > h1.une-titre > span.ligne-masque:nth-of-type(2) « D’UFOLOGIE » _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/dossiers` — div.conteneur.index-tete-grille > h1.index-titre > span.ligne-masque:nth-of-type(2) > span.une-ligne « DOSSIERS À OUVRIR » — coupé par section#debut > div.conteneur.index-tete-grille > h1.index-titre > span.ligne-masque:nth-of-type(2) « DOSSIERS À OUVRIR » _(1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/dossiers` — section#debut > div.conteneur.index-tete-grille > h1.index-titre > span.index-nombre:nth-of-type(1) « 76 » — coupé par section#debut « 76 DOSSIERS À OUVRIR Tous les dossiers de Fencer’s » _(320×568 sansJs)_
- **texte coupé** — `/dossiers/la-terre-creuse` — div.fiche-tete-texte:nth-of-type(1) > h1.fiche-h1 > span.ligne-masque > span.une-ligne « LA TERRE CREUSE » — coupé par div.conteneur.fiche-tete-grille > div.fiche-tete-texte:nth-of-type(1) > h1.fiche-h1 > span.ligne-masque « LA TERRE CREUSE » _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_

### textes qui se chevauchent (100)

- **textes qui se chevauchent** — `/` — div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(1) > a.fiche-lien > span.fiche-onglet « N° 075 » — avec div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(2) > a.fiche-lien > span.fiche-onglet « N° 074 » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — article.fiche:nth-of-type(1) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « ESPACE » — avec div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(1) > a.fiche-lien > h3.fiche-titre « LES ANOMALIES LUNAIRES » _(1366×768 normal, 844×390 normal)_
- **textes qui se chevauchent** — `/` — article.fiche:nth-of-type(1) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « ESPACE » — avec article.fiche:nth-of-type(2) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « VIE EXTRATERRESTRE » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — article.fiche:nth-of-type(1) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « ESPACE » — avec article.fiche:nth-of-type(2) > a.fiche-lien > p.fiche-meta > span:nth-of-type(2) « 15 NOV. » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — article.fiche:nth-of-type(1) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « ESPACE » — avec article.fiche:nth-of-type(3) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « HISTOIRE SECRÈTE » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — article.fiche:nth-of-type(1) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « ESPACE » — avec article.fiche:nth-of-type(3) > a.fiche-lien > p.fiche-meta > span:nth-of-type(2) « 13 NOV. » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — article.fiche:nth-of-type(1) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « ESPACE » — avec article.fiche:nth-of-type(4) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « HISTOIRE SECRÈTE » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — article.fiche:nth-of-type(1) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « ESPACE » — avec article.fiche:nth-of-type(4) > a.fiche-lien > p.fiche-meta > span:nth-of-type(2) « 13 NOV. » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — article.fiche:nth-of-type(1) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « ESPACE » — avec article.fiche:nth-of-type(5) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « BASES SECRÈTES » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — article.fiche:nth-of-type(1) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « ESPACE » — avec div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(5) > a.fiche-lien > h3.fiche-titre « LES BASES EXTRATERRESTRES EN AUSTRALIE » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — article.fiche:nth-of-type(1) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « ESPACE » — avec div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(6) > a.fiche-lien > h3.fiche-titre « BLUE PLANET PROJECT : PROJECT PULSAR » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — article.fiche:nth-of-type(1) > a.fiche-lien > p.fiche-meta > span:nth-of-type(2) « 16 NOV. » — avec div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(1) > a.fiche-lien > h3.fiche-titre « LES ANOMALIES LUNAIRES » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — article.fiche:nth-of-type(1) > a.fiche-lien > p.fiche-meta > span:nth-of-type(2) « 16 NOV. » — avec article.fiche:nth-of-type(2) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « VIE EXTRATERRESTRE » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — article.fiche:nth-of-type(1) > a.fiche-lien > p.fiche-meta > span:nth-of-type(2) « 16 NOV. » — avec article.fiche:nth-of-type(3) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « HISTOIRE SECRÈTE » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — article.fiche:nth-of-type(1) > a.fiche-lien > p.fiche-meta > span:nth-of-type(2) « 16 NOV. » — avec article.fiche:nth-of-type(4) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « HISTOIRE SECRÈTE » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — article.fiche:nth-of-type(1) > a.fiche-lien > p.fiche-meta > span:nth-of-type(2) « 16 NOV. » — avec article.fiche:nth-of-type(4) > a.fiche-lien > p.fiche-meta > span:nth-of-type(2) « 13 NOV. » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — article.fiche:nth-of-type(1) > a.fiche-lien > p.fiche-meta > span:nth-of-type(2) « 16 NOV. » — avec article.fiche:nth-of-type(5) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « BASES SECRÈTES » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — article.fiche:nth-of-type(1) > a.fiche-lien > p.fiche-meta > span:nth-of-type(2) « 16 NOV. » — avec div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(5) > a.fiche-lien > h3.fiche-titre « LES BASES EXTRATERRESTRES EN AUSTRALIE » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — article.fiche:nth-of-type(1) > a.fiche-lien > p.fiche-meta > span:nth-of-type(2) « 16 NOV. » — avec article.fiche:nth-of-type(6) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « HISTOIRE SECRÈTE » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — article.fiche:nth-of-type(1) > a.fiche-lien > p.fiche-meta > span:nth-of-type(2) « 16 NOV. » — avec article.fiche:nth-of-type(6) > a.fiche-lien > p.fiche-meta > span:nth-of-type(2) « 13 NOV. » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(1) > a.fiche-lien > h3.fiche-titre « LES ANOMALIES LUNAIRES » — avec article.fiche:nth-of-type(2) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « VIE EXTRATERRESTRE » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(1) > a.fiche-lien > h3.fiche-titre « LES ANOMALIES LUNAIRES » — avec article.fiche:nth-of-type(2) > a.fiche-lien > p.fiche-meta > span:nth-of-type(2) « 15 NOV. » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(1) > a.fiche-lien > h3.fiche-titre « LES ANOMALIES LUNAIRES » — avec div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(2) > a.fiche-lien > h3.fiche-titre « LES RACES EXTRATERRESTRES INSECTOÏDES » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(1) > a.fiche-lien > h3.fiche-titre « LES ANOMALIES LUNAIRES » — avec article.fiche:nth-of-type(3) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « HISTOIRE SECRÈTE » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(1) > a.fiche-lien > h3.fiche-titre « LES ANOMALIES LUNAIRES » — avec article.fiche:nth-of-type(3) > a.fiche-lien > p.fiche-meta > span:nth-of-type(2) « 13 NOV. » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(1) > a.fiche-lien > h3.fiche-titre « LES ANOMALIES LUNAIRES » — avec div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(3) > a.fiche-lien > h3.fiche-titre « ALIEN TRANSCRIPTS 5 : RÉSUMÉ DES CONCLUSIONS » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(1) > a.fiche-lien > h3.fiche-titre « LES ANOMALIES LUNAIRES » — avec article.fiche:nth-of-type(4) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « HISTOIRE SECRÈTE » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(1) > a.fiche-lien > h3.fiche-titre « LES ANOMALIES LUNAIRES » — avec article.fiche:nth-of-type(4) > a.fiche-lien > p.fiche-meta > span:nth-of-type(2) « 13 NOV. » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(1) > a.fiche-lien > h3.fiche-titre « LES ANOMALIES LUNAIRES » — avec div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(4) > a.fiche-lien > h3.fiche-titre « L’AÉROPORT DE DENVER » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(1) > a.fiche-lien > h3.fiche-titre « LES ANOMALIES LUNAIRES » — avec article.fiche:nth-of-type(5) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « BASES SECRÈTES » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(1) > a.fiche-lien > h3.fiche-titre « LES ANOMALIES LUNAIRES » — avec div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(5) > a.fiche-lien > h3.fiche-titre « LES BASES EXTRATERRESTRES EN AUSTRALIE » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(1) > a.fiche-lien > h3.fiche-titre « LES ANOMALIES LUNAIRES » — avec article.fiche:nth-of-type(6) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « HISTOIRE SECRÈTE » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(1) > a.fiche-lien > h3.fiche-titre « LES ANOMALIES LUNAIRES » — avec article.fiche:nth-of-type(6) > a.fiche-lien > p.fiche-meta > span:nth-of-type(2) « 13 NOV. » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(1) > a.fiche-lien > h3.fiche-titre « LES ANOMALIES LUNAIRES » — avec div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(6) > a.fiche-lien > h3.fiche-titre « BLUE PLANET PROJECT : PROJECT PULSAR » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(2) > a.fiche-lien > span.fiche-onglet « N° 074 » — avec div.conteneur.pile:nth-of-type(2) > article.fiche:nth-of-type(3) > a.fiche-lien > span.fiche-onglet « N° 073 » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — article.fiche:nth-of-type(2) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « VIE EXTRATERRESTRE » — avec article.fiche:nth-of-type(3) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « HISTOIRE SECRÈTE » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — article.fiche:nth-of-type(2) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « VIE EXTRATERRESTRE » — avec article.fiche:nth-of-type(3) > a.fiche-lien > p.fiche-meta > span:nth-of-type(2) « 13 NOV. » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — article.fiche:nth-of-type(2) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « VIE EXTRATERRESTRE » — avec article.fiche:nth-of-type(4) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « HISTOIRE SECRÈTE » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — article.fiche:nth-of-type(2) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « VIE EXTRATERRESTRE » — avec article.fiche:nth-of-type(4) > a.fiche-lien > p.fiche-meta > span:nth-of-type(2) « 13 NOV. » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — article.fiche:nth-of-type(2) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « VIE EXTRATERRESTRE » — avec article.fiche:nth-of-type(5) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « BASES SECRÈTES » _(1366×768 normal)_
- … et 60 autres (rapport.json)

### zone tactile sous 44 px (5)

- **zone tactile sous 44 px** — `/` — nav:nth-of-type(2) > ul > li:nth-of-type(4) > a.pied-rubrique « Ovni » — 37 × 44 px _(390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/404` — nav:nth-of-type(2) > ul > li:nth-of-type(4) > a.pied-rubrique « Ovni » — 37 × 44 px _(390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_
- **zone tactile sous 44 px** — `/auteur` — nav:nth-of-type(2) > ul > li:nth-of-type(4) > a.pied-rubrique « Ovni » — 37 × 44 px _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/dossiers` — nav:nth-of-type(2) > ul > li:nth-of-type(4) > a.pied-rubrique « Ovni » — 37 × 44 px _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/dossiers/la-terre-creuse` — nav:nth-of-type(2) > ul > li:nth-of-type(4) > a.pied-rubrique « Ovni » — 37 × 44 px _(390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_

### image non chargée (12)

- **image non chargée** — `/` — div.rubriques-vue.active:nth-of-type(1) > figure.media.couv > picture > img « Couverture du dossier « Les anomalies lunaires » » — http://127.0.0.1:42001/assets/images/couv/d075-128.webp _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **image non chargée** — `/` — div.rubriques-vue:nth-of-type(2) > figure.media.couv > picture > img « Couverture du dossier « La Terre creuse » » — http://127.0.0.1:42001/assets/images/couv/d076-128.webp _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **image non chargée** — `/` — div.rubriques-vue:nth-of-type(3) > figure.media.couv > picture > img « Couverture du dossier « L’Hadjar el Gouble » » — http://127.0.0.1:42001/assets/images/couv/d067-128.webp _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **image non chargée** — `/` — div.rubriques-vue:nth-of-type(4) > figure.media.couv > picture > img « Couverture du dossier « Les bases extraterrestres  » — http://127.0.0.1:42001/assets/images/couv/d071-128.webp _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **image non chargée** — `/` — div.rubriques-vue:nth-of-type(5) > figure.media.couv > picture > img « Couverture du dossier « Les bases extraterrestres  » — http://127.0.0.1:42001/assets/images/couv/d071-128.webp _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **image non chargée** — `/` — div.rubriques-vue:nth-of-type(6) > figure.media.couv > picture > img « Couverture du dossier « Les crop circles sont-ils  » — http://127.0.0.1:42001/assets/images/couv/d019-128.webp _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **image non chargée** — `/` — div.rubriques-vue:nth-of-type(7) > figure.media.couv > picture > img « Couverture du dossier « L’aéroport de Denver » » — http://127.0.0.1:42001/assets/images/couv/d072-128.webp _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **image non chargée** — `/` — div.rubriques-vue:nth-of-type(8) > figure.media.couv > picture > img « Couverture du dossier « L’Hadjar el Gouble » » — http://127.0.0.1:42001/assets/images/couv/d067-128.webp _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **image non chargée** — `/` — div.rubriques-vue:nth-of-type(9) > figure.media.couv > picture > img « Couverture du dossier « La Terre creuse » » — http://127.0.0.1:42001/assets/images/couv/d076-128.webp _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **image non chargée** — `/` — div.rubriques-vue:nth-of-type(10) > figure.media.couv > picture > img « Couverture du dossier « L’aéroport de Denver » » — http://127.0.0.1:42001/assets/images/couv/d072-128.webp _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **image non chargée** — `/` — div.rubriques-vue:nth-of-type(11) > figure.media.couv > picture > img « Couverture du dossier « Le chupacabra » » — http://127.0.0.1:42001/assets/images/couv/d040-128.webp _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **image non chargée** — `/` — div.rubriques-vue:nth-of-type(12) > figure.media.couv > picture > img « Couverture du dossier « Les anomalies lunaires » » — http://127.0.0.1:42001/assets/images/couv/d075-128.webp _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/` — div.une-grille.conteneur > div.une-texte > p.une-actions:nth-of-type(3) > span.une-info « 76 DOSSIERS · 12 RUBRIQUES » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/dossiers/la-terre-creuse` — div.conteneur.fiche-tete-grille > div.fiche-tete-texte:nth-of-type(1) > p.une-actions:nth-of-type(4) > span.une-info « PUBLIÉ LE 17 NOVEMBRE 2026 » _(320×568 sansJs)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/` — .onglet-date — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

### débordement horizontal (1)

- **débordement horizontal** — `/404` — page large de 1445 px pour un écran de 1366 px _(1366×768 normal)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/dossiers/la-terre-creuse` — div.conteneur.fiche-tete-grille > div.fiche-tete-texte:nth-of-type(1) > p.une-actions:nth-of-type(4) > a.bouton « OUVRIR LE DOSSIER COMPLET (PDF) » _(320×568 sansJs)_

### section sans effet au défilement (1)

- **section sans effet au défilement** — `/dossiers/la-terre-creuse` — section#presentation.fiche-corps — aucun élément data-effet (bibliothèque : data-anime="lignes|mots|lettres|cascade|rideau", data-fx ; ou effet du projet marqué data-effet) _(1366×768 normal, 390×844 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `auteur.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 1 de donnees/site.json

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### texte de contenu sous 13 px (ordinateur) (107)

- **texte de contenu sous 13 px (ordinateur)** — `/` — header > div.entete-rangee > div.entete-actions > a.bouton:nth-of-type(2) « ÉCRIRE À L’AUTEUR » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > figure.media.une-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.une-grille.conteneur > div.une-texte > p.une-actions:nth-of-type(3) > span.une-info « 76 DOSSIERS · 12 RUBRIQUES » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article.fiche:nth-of-type(2) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « VIE EXTRATERRESTRE » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article.fiche:nth-of-type(3) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « HISTOIRE SECRÈTE » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article.fiche:nth-of-type(4) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « HISTOIRE SECRÈTE » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article.fiche:nth-of-type(5) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « BASES SECRÈTES » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article.fiche:nth-of-type(6) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « HISTOIRE SECRÈTE » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#serie > figure.media.serie-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article.fiche:nth-of-type(1) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « VIE EXTRATERRESTRE » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article.fiche:nth-of-type(3) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « VIE EXTRATERRESTRE » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article.fiche:nth-of-type(5) > a.fiche-lien > p.fiche-meta > span:nth-of-type(1) « HISTOIRE SECRÈTE » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#civilisations > div > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#auteur > div.conteneur.auteur-grille > figure.media.auteur-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — header > div.entete-rangee > div.entete-actions > a.bouton:nth-of-type(2) « ÉCRIRE À L’AUTEUR » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — div.conteneur.introuvable-grille > div.introuvable-visuel:nth-of-type(2) > figure.media.introuvable-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/auteur` — header > div.entete-rangee > div.entete-actions > a.bouton:nth-of-type(2) « ÉCRIRE À L’AUTEUR » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/auteur` — section#debut > figure.media.auteur-tete-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/auteur` — section#bio > ul.conteneur.chiffres > li:nth-of-type(1) > span « ANS D’UFOLOGIE, ET PLUS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/auteur` — section#bio > ul.conteneur.chiffres > li:nth-of-type(2) > span « DOSSIERS PUBLIÉS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/dossiers` — header > div.entete-rangee > div.entete-actions > a.bouton:nth-of-type(2) « ÉCRIRE À L’AUTEUR » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/dossiers` — div.conteneur.index-tete-grille > div.index-intro > p.une-actions:nth-of-type(2) > span.une-info « DERNIER DOSSIER : 17 NOVEMBRE 2026 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/dossiers` — section#debut > figure.media.index-bandeau > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/dossiers` — div#recherche > div.index-filtres:nth-of-type(1) > a.pastille:nth-of-type(2) « VIE EXTRATERRESTRE 32 » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/dossiers` — div#recherche > div.index-filtres:nth-of-type(1) > a.pastille:nth-of-type(3) « HISTOIRE SECRÈTE 16 » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- … et 82 autres (rapport.json)

### typographie française (10)

- **typographie française** — `/` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(2) > ul.pied-legal > li:nth-of-type(1) « Mentions légales : à compléter » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(2) > ul.pied-legal > li:nth-of-type(2) « Politique de confidentialité : à compléter » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/404` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(2) > ul.pied-legal > li:nth-of-type(1) « Mentions légales : à compléter » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/404` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(2) > ul.pied-legal > li:nth-of-type(2) « Politique de confidentialité : à compléter » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/auteur` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(2) > ul.pied-legal > li:nth-of-type(1) « Mentions légales : à compléter » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/auteur` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(2) > ul.pied-legal > li:nth-of-type(2) « Politique de confidentialité : à compléter » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/dossiers` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(2) > ul.pied-legal > li:nth-of-type(1) « Mentions légales : à compléter » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/dossiers` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(2) > ul.pied-legal > li:nth-of-type(2) « Politique de confidentialité : à compléter » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/dossiers/la-terre-creuse` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(2) > ul.pied-legal > li:nth-of-type(1) « Mentions légales : à compléter » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/dossiers/la-terre-creuse` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(2) > ul.pied-legal > li:nth-of-type(2) « Politique de confidentialité : à compléter » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### section sans visuel (1)

- **section sans visuel** — `/dossiers/la-terre-creuse` — section#presentation « PRÉSENTATION Et si la Terre n’était pas exactement » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/dossiers` — à 90 ms (différence 30 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/dossiers` — à 54 ms (différence 23 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 61 ms (différence 24 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### rechargement au milieu de la page (3)

- **rechargement au milieu de la page** — `/auteur` — écran différent à la même position après rechargement (6.0 %), voir comparaisons/rechargement-auteur-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/dossiers` — écran différent à la même position après rechargement (35.1 %), voir comparaisons/rechargement-dossiers-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/dossiers/la-terre-creuse` — écran différent à la même position après rechargement (8.0 %), voir comparaisons/rechargement-dossiers-la-terre-creuse-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Audit rapide : étapes lourdes sur /, /auteur, /dossiers, /dossiers/la-terre-creuse.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2645 ms depuis le premier octet
- Ouverture /auteur (1366×768) : 2504 ms depuis le premier octet
- Ouverture /dossiers (1366×768) : 2486 ms depuis le premier octet
- Ouverture /dossiers/la-terre-creuse (1366×768) : 2454 ms depuis le premier octet
- Ouverture / (390×844) : 2514 ms depuis le premier octet
- Ouverture /auteur (390×844) : 2494 ms depuis le premier octet
- Ouverture /dossiers (390×844) : 2455 ms depuis le premier octet
- Ouverture /dossiers/la-terre-creuse (390×844) : 2455 ms depuis le premier octet
- film de l'ouverture /dossiers/la-terre-creuse 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 314 images d’intro, 12 de voile et 67 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /auteur : aucune section épinglée ou plein écran.
- Tient dans l'écran /dossiers : aucune section épinglée ou plein écran.
- Tient dans l'écran /dossiers/la-terre-creuse : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 383, tâche la plus longue 0 ms
- Fluidité /auteur 1366×768 (molette) : 0 % d'images lentes sur 179, tâche la plus longue 0 ms
- Fluidité /dossiers 1366×768 (molette) : 0 % d'images lentes sur 393, tâche la plus longue 0 ms
- Fluidité /dossiers/la-terre-creuse 1366×768 (molette) : 0 % d'images lentes sur 192, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1353, tâche la plus longue 0 ms
- Fluidité /auteur 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /dossiers 390×844 (doigt) : 0 % d'images lentes sur 1337, tâche la plus longue 0 ms
- Fluidité /dossiers/la-terre-creuse 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Vitesse / : 0.49 s de calcul au chargement (téléphone ralenti).
- Vitesse /auteur : 0.34 s de calcul au chargement (téléphone ralenti).
- Vitesse /dossiers : 0.61 s de calcul au chargement (téléphone ralenti).
- Vitesse /dossiers/la-terre-creuse : 0.47 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --pages=/,/404,/auteur,/dossiers,/dossiers/la-terre-creuse --seulement=fichiers,mesures,mouvement
```
