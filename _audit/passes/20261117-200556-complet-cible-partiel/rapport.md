# Rapport d’audit

Projet : `fencersfiles-maquette` · 17/11/2026 21:12:06 · 6 min · 6 page(s) · audit complet ciblé sur /,/dossiers,/dossiers/la-terre-creuse,/dossiers/les-crop-circles-sont-ils-crees-par-des-sons,/auteur,/404 (étapes : mesures, ecran)

## Résumé

- Statut : **3 échec(s)**
- Passe : `20261117-200556-complet-cible-partiel` · version ?v=1
- Échecs : **3**
- À regarder : **2**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5), tient dans l’écran (8)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261117-192147-rapide-cible | rapide | /,/dossiers,/dossiers/la-terre-creuse,/auteur,/404 | toutes | 131 | 130 | 1 | échecs |
| 20261117-193823-rapide-cible-partiel | rapide | /,/404,/auteur,/dossiers,/dossiers/la-terre-creuse | fichiers, mesures, mouvement | 105 | 8 | 0 | échecs |
| 20261117-194123-rapide-cible-partiel | rapide | /,/auteur,/dossiers,/dossiers/la-terre-creuse | fichiers, mesures | 105 | 7 | 0 | échecs |
| 20261117-194216-rapide-cible-partiel | rapide | /,/auteur,/dossiers,/dossiers/la-terre-creuse | fichiers, mesures | 105 | 7 | 0 | échecs |
| 20261117-194319-rapide-cible-partiel | rapide | /,/auteur,/dossiers,/dossiers/la-terre-creuse | fichiers, mesures | 8 | 1 | 0 | échecs |
| 20261117-194430-standard-cible | standard | /,/dossiers,/dossiers/la-terre-creuse,/dossiers/les-crop-circles-sont-ils-crees-par-des-sons,/auteur,/404 | toutes | 1 | 12 | 1 | échecs |
| **20261117-200556-complet-cible-partiel** (celle-ci) | complet | /,/dossiers,/dossiers/la-terre-creuse,/dossiers/les-crop-circles-sont-ils-crees-par-des-sons,/auteur,/404 | mesures, ecran | 3 | 2 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/` — div.une-grille.conteneur > div.une-texte > p.une-actions:nth-of-type(3) > span.une-info « 76 DOSSIERS · 12 RUBRIQUES » _(375×667 sansJs)_
- **premier écran : information clé hors de l’écran** — `/dossiers/la-terre-creuse` — div.conteneur.fiche-tete-grille > div.fiche-tete-texte:nth-of-type(1) > p.une-actions:nth-of-type(4) > span.une-info « PUBLIÉ LE 17 NOVEMBRE 2026 » _(1000×560 sansJs)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/dossiers/les-crop-circles-sont-ils-crees-par-des-sons` — div.conteneur.fiche-tete-grille > div.fiche-tete-texte:nth-of-type(1) > p.une-actions:nth-of-type(4) > a.bouton « OUVRIR LE DOSSIER COMPLET (PDF) » _(1000×560 sansJs)_

## À regarder

### section sans visuel (2)

- **section sans visuel** — `/dossiers/la-terre-creuse` — section#presentation « PRÉSENTATION Et si la Terre n’était pas exactement » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/dossiers/les-crop-circles-sont-ils-crees-par-des-sons` — section#presentation « PRÉSENTATION ET SI LES MYSTÉRIEUX DESSINS APPARAIS » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran /auteur : aucune section épinglée ou plein écran.
- Tient dans l'écran /dossiers : aucune section épinglée ou plein écran.
- Tient dans l'écran /dossiers/la-terre-creuse : aucune section épinglée ou plein écran.
- Tient dans l'écran /dossiers/les-crop-circles-sont-ils-crees-par-des-sons : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/dossiers/la-terre-creuse,/dossiers/les-crop-circles-sont-ils-crees-par-des-sons --seulement=fichiers,mesures
```
