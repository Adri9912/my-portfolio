# Portfolio d’Adrien Calvayrac

Portfolio personnel présentant mon parcours, mes projets et mon objectif d’alternance en 2027 dans le développement et la gestion informatique.

- Site en ligne : [adri9912.github.io/my-portfolio](https://adri9912.github.io/my-portfolio/)
- Dépôt GitHub : [Adri9912/my-portfolio](https://github.com/Adri9912/my-portfolio)

## Structure

- `index.html` : accueil, photo, présentation et navigation.
- `projets.html` : Job Board, CV en ligne et portfolio, dans des accordéons.
- `parcours.html` : parcours, progression, technologies et sport.
- `contact.html` : coordonnées, CV, calendrier d’alternance et formulaire de contact.
- `style.css` : mise en page et effets, avec règles pour les écrans de 760 px ou moins.
- `app.js` : ouvre un projet depuis un lien comme `projets.html#portfolio` et fait défiler la page vers l’accordéon ouvert.
- `images/` : portrait, captures et icônes ; licence des icônes dans `images/LICENSE-icones.txt`.
- `documents/` : CV et calendrier d’alternance au format PDF.
- `MODIFIER.md` : guide de personnalisation fourni avec les fichiers du site.

## Ouvrir le site

Ouvrir `index.html` dans un navigateur. Aucun framework, installation npm, compilation ou base de données n’est nécessaire. Une connexion Internet est nécessaire pour les liens externes et l’envoi des messages.

## Fonctionnement

HTML structure le contenu, CSS gère la présentation et le responsive. Les accordéons utilisent les balises natives `details` et `summary` avec le même attribut `name` pour qu’un seul projet reste ouvert à la fois.

Le formulaire envoie ses champs à Formspree avec la méthode POST. Le destinataire est configuré dans le compte Formspree, sans mot de passe dans les fichiers. Son fonctionnement est indépendant d’app.js. Après l’envoi, Formspree affiche sa réponse.

Le portrait et les captures ont été fournis par Adrien. Les icônes proviennent de Lucide et leur licence est conservée dans le projet. La maquette et le code ont été élaborés avec une assistance IA, puis ajustés au fil des échanges.

Le calendrier d’alternance Epitech, fourni par Adrien, est accessible sous le lien du CV sur la page Contact. Il s’ouvre dans un nouvel onglet.

## Publication

Le site est publié avec GitHub Pages depuis la branche `main`, dossier racine (`/`). Les fichiers HTML, CSS, JavaScript et les dossiers de ressources sont placés directement à la racine du dépôt.

La configuration dans **Settings > Pages** est : **Deploy from a branch**, branche **main**, dossier **/ (root)**. Chaque modification commitée puis poussée sur `main` déclenche automatiquement la mise à jour du site, sans compilation locale ni publication manuelle.

Pour mettre le site à jour : modifier les fichiers, les ajouter avec `git add`, créer un commit descriptif avec `git commit`, puis envoyer les changements avec `git push`. Le déploiement se suit dans l’onglet [Actions du dépôt](https://github.com/Adri9912/my-portfolio/actions). Attendre sa réussite avant de vérifier le site publié.

## Vérifications avant livraison

- Vérifier l’affichage réel sur ordinateur et téléphone, ainsi qu’avec le texte agrandi.
- Parcourir les liens, les accordéons et le formulaire avec Tab et Entrée.
- Vérifier le téléchargement du CV, l’ouverture du calendrier et les liens vers les dépôts GitHub.
- Confirmer la réception des messages du formulaire.
- Après chaque publication, vérifier que les dernières modifications apparaissent sur le site en ligne.
