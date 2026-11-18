# Rapport d’audit

Projet : `fencersfiles-maquette` · 17/11/2026 20:43:57 · 1 min · 4 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/auteur,/dossiers,/dossiers/la-terre-creuse (étapes : fichiers, mesures)

## Résumé

- Statut : **8 échec(s)**
- Passe : `20261117-194319-rapide-cible-partiel` · version ?v=1
- Échecs : **8**
- À regarder : **1**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (24)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261117-192147-rapide-cible | rapide | /,/dossiers,/dossiers/la-terre-creuse,/auteur,/404 | toutes | 131 | 130 | 1 | échecs |
| 20261117-193823-rapide-cible-partiel | rapide | /,/404,/auteur,/dossiers,/dossiers/la-terre-creuse | fichiers, mesures, mouvement | 105 | 8 | 0 | échecs |
| 20261117-194123-rapide-cible-partiel | rapide | /,/auteur,/dossiers,/dossiers/la-terre-creuse | fichiers, mesures | 105 | 7 | 0 | échecs |
| 20261117-194216-rapide-cible-partiel | rapide | /,/auteur,/dossiers,/dossiers/la-terre-creuse | fichiers, mesures | 105 | 7 | 0 | échecs |
| **20261117-194319-rapide-cible-partiel** (celle-ci) | rapide | /,/auteur,/dossiers,/dossiers/la-terre-creuse | fichiers, mesures | 8 | 1 | 0 | échecs |

## Échecs

### textes qui se chevauchent (8)

- **textes qui se chevauchent** — `/` — div.conteneur.auteur-grille > div > p.auteur-chiffre:nth-of-type(1) > span.auteur-nombre:nth-of-type(1) « 40 » — avec section#auteur > div.conteneur.auteur-grille > div > h2.auteur-titre « D’UFOLOGIE » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.conteneur.auteur-grille > div > p.auteur-chiffre:nth-of-type(1) > span.auteur-unite:nth-of-type(2) « ANS » — avec section#auteur > div.conteneur.auteur-grille > div > h2.auteur-titre « D’UFOLOGIE » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — section#civilisations > div > p.civilisations-mots > span:nth-of-type(2) « CIVILISATIONS » — avec section#civilisations > div > div.civilisations-legende > p « 15 dossiers : Baalbeck, Yonaguni, les pierres d’Ic » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/auteur` — section#bio > ul.conteneur.chiffres > li:nth-of-type(1) > strong « 40 » — avec section#bio > ul.conteneur.chiffres > li:nth-of-type(1) > span « ANS D’UFOLOGIE, ET PLUS » _(1366×768 normal, 844×390 normal)_
- **textes qui se chevauchent** — `/auteur` — section#bio > ul.conteneur.chiffres > li:nth-of-type(2) > strong « 76 » — avec section#bio > ul.conteneur.chiffres > li:nth-of-type(2) > span « DOSSIERS PUBLIÉS » _(1366×768 normal, 844×390 normal)_
- **textes qui se chevauchent** — `/auteur` — section#bio > ul.conteneur.chiffres > li:nth-of-type(3) > strong « 12 » — avec section#bio > ul.conteneur.chiffres > li:nth-of-type(3) > span « RUBRIQUES » _(1366×768 normal, 844×390 normal)_
- **textes qui se chevauchent** — `/dossiers` — section#debut > div.conteneur.index-tete-grille > h1.index-titre > span.index-nombre:nth-of-type(1) « 76 » — avec div.conteneur.index-tete-grille > h1.index-titre > span.ligne-masque:nth-of-type(2) > span.une-ligne « DOSSIERS À OUVRIR » _(1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/dossiers/la-terre-creuse` — section#debut > div.conteneur.fiche-tete-grille > div.fiche-tete-texte:nth-of-type(1) > p.fiche-numero:nth-of-type(2) « N° 076 » — avec div.fiche-tete-texte:nth-of-type(1) > h1.fiche-h1 > span.ligne-masque > span.une-ligne « LA TERRE CREUSE » _(1366×768 normal, 844×390 normal)_

## À regarder

### section sans visuel (1)

- **section sans visuel** — `/dossiers/la-terre-creuse` — section#presentation « PRÉSENTATION Et si la Terre n’était pas exactement » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 6 étape(s) notée(s), 47 min de travail, 304 min d’attente de l’utilisateur.
- Audit rapide : étapes lourdes sur /, /auteur, /dossiers, /dossiers/la-terre-creuse.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --pages=/,/auteur,/dossiers,/dossiers/la-terre-creuse --seulement=fichiers,mesures
```
