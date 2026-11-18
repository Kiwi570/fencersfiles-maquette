# Ce qui a changé

## v3 — 18 novembre 2026

Comparaison faite fichier par fichier avec le zip v2.

- **Couverture du dossier n° 001** (La généalogie des Annunaki) : un fichier resté d'un ancien traitement, `assets/images/couv/d001-800.webp`, montrait la couverture avec les marges blanches de la page du PDF. Les pages le proposaient au navigateur sur les grands écrans et les écrans Retina. Il est retiré ; la couverture rognée (740 px) le remplace. C'est le seul fichier retiré.
- **Outil des couvertures** (`outils/visuels.mjs`) : il retire désormais les tailles d'un ancien traitement avant d'écrire les nouvelles.
- **Numéro de version** : `?v=3` dans les pages et dans les scripts.
- Rien d'autre ne change.

## v2 — 18 novembre 2026

Comparaison faite fichier par fichier avec le zip v1 mis en ligne le 18 novembre.

- **Couvertures plus nettes** : chaque couverture a maintenant une troisième taille, à sa largeur réelle (de 705 à 800 px selon le dossier), en plus des tailles 240 et 480 px. Sur un écran Retina, la couverture de l'ouverture de l'accueil et celle de chaque fiche ne sont plus agrandies depuis 480 px. 75 fichiers d'images ajoutés, aucun retiré.
- **Pages** : les 76 fiches et les pages qui montrent une couverture proposent cette taille au navigateur (attribut `srcset`).
- **Numéro de version** : `?v=2` dans les pages et dans les scripts, pour que les navigateurs prennent les fichiers à jour.
- Rien d'autre ne change : mêmes textes, même style, mêmes effets.

## v1 — 17 novembre 2026

Première version : la base.

- **Direction « Les dossiers »** : papier clair en fond dominant, encre nuit pour les ouvertures, la série, l'appel final et le pied de page, rouge tampon en accent. Big Shoulders Display pour les titres, Source Serif 4 pour le texte, IBM Plex Mono pour les étiquettes.
- **80 pages** : accueil, Les dossiers, 76 fiches de dossier générées depuis un seul modèle, L'auteur et contact, 404.
- **Contenu** : les 76 dossiers du blog (titre court, présentation, rubriques, date, lien PDF), le manifeste et les quatre thèmes du billet de bienvenue, les douze rubriques avec leur compte réel.
- **Images** : les 76 couvertures tirées de la première page des PDF, le médaillon du blog (en-tête, intro, voile, pied, favicon), six illustrations générées pour les ambiances.
- **Mouvement** : intro (le nom s'écrit, le cachet tombe, le médaillon rejoint la couverture), voile en deux pans entre les pages, onglet numéroté qui se pose, mots caviardés qui se découvrent, pile des derniers dossiers qui se déploie, rangée de la série, image qui s'ouvre en plein écran, cachet « À vous de mener l'enquête ».
- **Outils** : filtres par rubrique et recherche gardés dans l'adresse, formulaire simulé, barre de lecture sur les fiches.
