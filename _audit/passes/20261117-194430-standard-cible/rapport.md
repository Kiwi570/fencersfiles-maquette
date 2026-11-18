# Rapport d’audit

Projet : `fencersfiles-maquette` · 17/11/2026 21:00:58 · 16 min · 6 page(s) · audit standard ciblé sur /,/dossiers,/dossiers/la-terre-creuse,/dossiers/les-crop-circles-sont-ils-crees-par-des-sons,/auteur,/404

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261117-194430-standard-cible` · version ?v=1
- Échecs : **1**
- À regarder : **12**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (4), liens vers la page en cours (5), changements de hauteur (5), tient dans l’écran (5), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (5), souris immobile (5), vitesse (5), captures (1)

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

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261117-192147-rapide-cible | rapide | /,/dossiers,/dossiers/la-terre-creuse,/auteur,/404 | toutes | 131 | 130 | 1 | échecs |
| 20261117-193823-rapide-cible-partiel | rapide | /,/404,/auteur,/dossiers,/dossiers/la-terre-creuse | fichiers, mesures, mouvement | 105 | 8 | 0 | échecs |
| 20261117-194123-rapide-cible-partiel | rapide | /,/auteur,/dossiers,/dossiers/la-terre-creuse | fichiers, mesures | 105 | 7 | 0 | échecs |
| 20261117-194216-rapide-cible-partiel | rapide | /,/auteur,/dossiers,/dossiers/la-terre-creuse | fichiers, mesures | 105 | 7 | 0 | échecs |
| 20261117-194319-rapide-cible-partiel | rapide | /,/auteur,/dossiers,/dossiers/la-terre-creuse | fichiers, mesures | 8 | 1 | 0 | échecs |
| **20261117-194430-standard-cible** (celle-ci) | standard | /,/dossiers,/dossiers/la-terre-creuse,/dossiers/les-crop-circles-sont-ils-crees-par-des-sons,/auteur,/404 | toutes | 1 | 12 | 1 | échecs |

## Échecs

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/auteur` — section#debut > div.conteneur.auteur-tete-texte > p.surtitre:nth-of-type(1) « L’AUTEUR » — avec div.conteneur.auteur-tete-texte > h1.une-titre > span.ligne-masque:nth-of-type(1) > span.une-ligne « PLUS DE 40 ANS » _(1920×1080 normal)_

## À regarder

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### section sans visuel (2)

- **section sans visuel** — `/dossiers/la-terre-creuse` — section#presentation « PRÉSENTATION Et si la Terre n’était pas exactement » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/dossiers/les-crop-circles-sont-ils-crees-par-des-sons` — section#presentation « PRÉSENTATION ET SI LES MYSTÉRIEUX DESSINS APPARAIS » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/dossiers` — à 78 ms (différence 30 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 66 ms (différence 27 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### rechargement au milieu de la page (4)

- **rechargement au milieu de la page** — `/auteur` — écran différent à la même position après rechargement (6.1 %), voir comparaisons/rechargement-auteur-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/dossiers` — écran différent à la même position après rechargement (6.2 %), voir comparaisons/rechargement-dossiers-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/dossiers/la-terre-creuse` — écran différent à la même position après rechargement (7.7 %), voir comparaisons/rechargement-dossiers-la-terre-creuse-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/dossiers/les-crop-circles-sont-ils-crees-par-des-sons` — écran différent à la même position après rechargement (7.5 %), voir comparaisons/rechargement-dossiers-les-crop-circles-sont-ils-crees-par-des-sons-*.png _(1366×768)_

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
- Journal v1 : 6 étape(s) notée(s), 47 min de travail, 304 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /auteur, /dossiers, /dossiers/la-terre-creuse, /dossiers/les-crop-circles-sont-ils-crees-par-des-sons.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2619 ms depuis le premier octet
- Ouverture /auteur (1366×768) : 2511 ms depuis le premier octet
- Ouverture /dossiers (1366×768) : 2473 ms depuis le premier octet
- Ouverture /dossiers/la-terre-creuse (1366×768) : 2540 ms depuis le premier octet
- Ouverture /dossiers/les-crop-circles-sont-ils-crees-par-des-sons (1366×768) : 2445 ms depuis le premier octet
- Ouverture / (390×844) : 2534 ms depuis le premier octet
- Ouverture /auteur (390×844) : 2498 ms depuis le premier octet
- Ouverture /dossiers (390×844) : 2488 ms depuis le premier octet
- Ouverture /dossiers/la-terre-creuse (390×844) : 2484 ms depuis le premier octet
- Ouverture /dossiers/les-crop-circles-sont-ils-crees-par-des-sons (390×844) : 2485 ms depuis le premier octet
- film de l'ouverture /dossiers/les-crop-circles-sont-ils-crees-par-des-sons 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 451 images d’intro, 14 de voile et 98 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /auteur : aucune section épinglée ou plein écran.
- Tient dans l'écran /dossiers : aucune section épinglée ou plein écran.
- Tient dans l'écran /dossiers/la-terre-creuse : aucune section épinglée ou plein écran.
- Tient dans l'écran /dossiers/les-crop-circles-sont-ils-crees-par-des-sons : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 387, tâche la plus longue 0 ms
- Fluidité /auteur 1366×768 (molette) : 0 % d'images lentes sur 185, tâche la plus longue 0 ms
- Fluidité /dossiers 1366×768 (molette) : 0 % d'images lentes sur 386, tâche la plus longue 0 ms
- Fluidité /dossiers/la-terre-creuse 1366×768 (molette) : 0 % d'images lentes sur 187, tâche la plus longue 0 ms
- Fluidité /dossiers/les-crop-circles-sont-ils-crees-par-des-sons 1366×768 (molette) : 0 % d'images lentes sur 185, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Fluidité /auteur 390×844 (doigt) : 0 % d'images lentes sur 1337, tâche la plus longue 0 ms
- Fluidité /dossiers 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /dossiers/la-terre-creuse 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Fluidité /dossiers/les-crop-circles-sont-ils-crees-par-des-sons 390×844 (doigt) : 0 % d'images lentes sur 1337, tâche la plus longue 0 ms
- Vitesse / : 0.53 s de calcul au chargement (téléphone ralenti).
- Vitesse /auteur : 0.33 s de calcul au chargement (téléphone ralenti).
- Vitesse /dossiers : 0.66 s de calcul au chargement (téléphone ralenti).
- Vitesse /dossiers/la-terre-creuse : 0.36 s de calcul au chargement (téléphone ralenti).
- Vitesse /dossiers/les-crop-circles-sont-ils-crees-par-des-sons : 0.42 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/auteur --seulement=fichiers,mesures
```
