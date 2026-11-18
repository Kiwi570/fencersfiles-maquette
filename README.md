# Fencer's Files — maquette v1

Maquette du blog Fencer's Files (site actuel : fencersfiles.blogspot.com), direction « Les dossiers ».
Adresse prévue : https://fencersfiles-maquette.vercel.app

## Pages

| Page | Adresse | Contenu |
|---|---|---|
| Accueil | `/` | Dernier dossier, manifeste du blog, six derniers dossiers, douze rubriques, série Alien Transcripts, rubrique Anciennes civilisations, l'auteur, appel à lui écrire |
| Les dossiers | `/dossiers` | Les 76 dossiers, filtres par rubrique (gardés dans l'adresse : `?rubrique=ovni`), recherche (`?q=`) |
| Fiche dossier | `/dossiers/<nom>` | 76 pages générées depuis un seul modèle : numéro, titre, présentation du blog, bouton vers le PDF, dossiers de la même rubrique, précédent et suivant |
| L'auteur et contact | `/auteur` | Présentation, chiffres réels du blog, e-mail, formulaire simulé |
| 404 | `/404` | Dossier introuvable |

## Fiche récapitulative : ce que le client doit fournir (à compléter)

- **Mentions légales** : nom de l'éditeur du site, adresse, contact. À compléter.
- **Politique de confidentialité** : usage des données du formulaire (nom, e-mail, message), durée de conservation, droits des personnes. À compléter.
- **Hébergeur** : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (adresse vérifiée le 17 novembre 2026 dans les documents légaux de Vercel).
- **Statut de l'éditeur** : particulier ou structure (SIRET le cas échéant). À compléter.
- **Droits sur les dossiers** : plusieurs couvertures portent « Traduit par Fencer Ya », un nom d'auteur ou « Extrait du livre… ». Ces dossiers sont des traductions ou des extraits d'ouvrages de tiers : l'autorisation des ayants droit est à vérifier avant la mise en ligne définitive. La maquette ne fait que pointer vers les PDF de l'auteur, comme le blog actuel.
- **Droits sur les couvertures et le médaillon** : images créées par l'auteur avec des outils de génération d'images ; à confirmer. Le médaillon imite un tampon officiel américain (« Eyes only », « U.S. Government ») : à garder ou à redessiner, au choix du client.
- **Crédits des illustrations générées** : les six images d'ambiance (bureau, magnétophone, dolmen, liasses, ciel étoilé, tiroir) ont été générées avec Grok pour la maquette. Chacune porte la mention « Illustration générée ».
- **Nom de l'auteur** : le blog ne le donne pas ; la maquette dit « l'auteur ». À compléter s'il souhaite signer.

## Ce qui a été retiré, remplacé ou ajouté faute d'information

- **Rubriques manquantes** (page Les dossiers) : dix dossiers n'ont aucune rubrique dans Blogger (n° 001 à 009 et n° 018 de la maquette). Ils sont rangés sous « Sans rubrique » en attendant le classement de l'auteur.
- **Numéros des dossiers** (toutes les pages) : la numérotation de 001 à 076 suit l'ordre de publication. C'est une présentation ajoutée par la maquette, à valider.
- **Titres courts** (toutes les pages) : relus sur les couvertures des PDF ; le blog n'a pas de champ titre. À relire par l'auteur (`outils/dossiers.mjs`, table `TITRES`).
- **Photo de l'auteur** (accueil, page auteur) : la photo de profil du blog n'a pas été récupérée ; le médaillon et un ciel étoilé la remplacent.
- **Texte de présentation de l'auteur** : reformulé à partir de sa bio (plus de 40 ans d'intérêt pour l'ufologie, observations inexpliquées). Le texte exact est à fournir.
- **Carte, horaires, téléphone, réseaux sociaux** : absents du blog, donc absents de la maquette.
- **Image d'en-tête du blog** (soucoupe au-dessus d'une vallée) : non reprise, elle porte le filigrane d'un service tiers.
- **Vignettes du blog** : 128 px d'origine, non reprises ; les couvertures viennent de la première page de chaque PDF.
- **Dossiers discrets** : quatre dossiers (swastika, 11-Septembre, Jason Society, groupes du nouvel ordre mondial) figurent dans l'index et ont leur fiche, mais ne sont pas mis en avant à l'accueil ni dans les suggestions. Le contenu des PDF n'a pas été relu.
- **Liens vers le blog actuel** : aucun. Les seuls liens externes mènent aux PDF (Dropbox) et s'ouvrent dans un nouvel onglet.

## À la mise en ligne définitive

- **Retirer** : `noindex` (balise robots dans `source/gabarits/commun.mjs` et en-tête `X-Robots-Tag` dans `vercel.json`), le formulaire simulé (le brancher sur un vrai envoi), les mentions « à compléter » du pied de page et du formulaire, la phrase « Maquette de démonstration » du pied de page.
- **Garder** : la mention « Illustration générée » sur les six images d'ambiance.
- **Vérifier** : les liens Dropbox des 76 PDF (un lien de partage peut expirer), et le classement des dix dossiers sans rubrique.

## Mettre à jour le contenu

Tout part des données ; on ne modifie jamais une page `.html` à la main.

1. Nouveau dossier ou correction : mettre à jour `recu/site2/articles.json` (flux du blog, `_suivi/ff-vignettes.mjs`) et la table `TITRES` de `outils/dossiers.mjs`, puis `node outils/dossiers.mjs`.
2. Couvertures : `_suivi/ff-couvertures2.mjs` (sur le Mac) remplit `recu/couvertures/`, puis `node outils/visuels.mjs`.
3. Textes de l'interface : `donnees/textes/fr.json`. Réglages : `donnees/site.json` (le champ `version` change à chaque livraison).
4. `node outils/generer.mjs` réécrit les 80 pages.
5. Audit : `node _audit/audit.mjs` (voir `_audit/README.md`).

## Dossiers du projet

| Dossier | Contenu |
|---|---|
| `donnees/` | `dossiers.json` (76 dossiers), `textes/fr.json`, `site.json`, `images.json`, `structure.json` |
| `source/` | Gabarits des pages (`pages/`), composants communs (`gabarits/`), style et script critiques |
| `assets/` | Styles, scripts, polices, images (`couv/` : couvertures, `grok/` : illustrations générées) |
| `outils/` | `dossiers.mjs`, `visuels.mjs`, `generer.mjs` |
| `_audit/` | Script d'audit, journal et rapport de la version livrée |
| `_suivi/` | Relevé du site, plans, direction, documents Grok, scripts de récupération |
| `recu/` | Textes du blog (`site2/articles.json`) et sources des images Grok (jamais mis en ligne). Les 76 couvertures d'origine (33 Mo) et les vignettes ne sont pas dans le zip : elles restent sur le Mac, dans `~/Downloads/fencersfiles-couvertures` et `~/Downloads/fencersfiles-recu`. |
