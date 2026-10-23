# Portfolio d’Adrien Calvayrac

Portfolio personnel présentant mon parcours, mes projets et mon objectif d’alternance en 2027 dans le développement et la gestion informatique.

## Structure

- `index.html` : accueil, photo, présentation et navigation.
- `projets.html` : Job Board, CV en ligne et portfolio, dans des accordéons.
- `parcours.html` : parcours, progression, technologies et sport.
- `contact.html` : coordonnées, CV et formulaire de contact.
- `style.css` : mise en page et effets, avec règles pour les écrans de 760 px ou moins.
- `app.js` : ouvre l’accordéon correspondant à un lien comme `projets.html#portfolio`.
- `images/` : portrait, captures et icônes ; licence des icônes dans `images/LICENSE-icones.txt`.
- `documents/` : CV au format PDF.
- `MODIFIER.md` : guide de personnalisation fourni avec les fichiers du site.

## Ouvrir le site

Ouvrir `index.html` dans un navigateur. Aucun framework, installation npm, compilation ou base de données n’est nécessaire. Une connexion Internet est nécessaire pour les liens externes et l’envoi des messages.

## Fonctionnement

HTML structure le contenu, CSS gère la présentation et le responsive. Les accordéons utilisent les balises natives `details` et `summary` avec le même attribut `name` pour qu’un seul projet reste ouvert à la fois.

Le formulaire envoie ses champs à Formspree avec la méthode POST. Le destinataire est configuré dans le compte Formspree, sans mot de passe dans les fichiers. Son fonctionnement est indépendant d’app.js. Après l’envoi, Formspree affiche sa réponse.

Le portrait et les captures ont été fournis par Adrien. Les icônes proviennent de Lucide et leur licence est conservée dans le projet. La maquette et le code ont été élaborés avec une assistance IA, puis ajustés au fil des échanges.

## Publication

La mise en ligne n’est pas encore activée. La solution envisagée est GitHub Pages, depuis la branche de publication du dépôt personnel du portfolio. Placer les fichiers de ce dossier à la racine du dépôt, puis choisir cette branche et le dossier racine dans Settings > Pages. Une fois configuré, chaque push sur la branche choisie déclenche la publication.

Renseigner ici l’URL du dépôt et celle du site après leur création.

## Vérifications avant livraison

- Vérifier l’affichage réel sur ordinateur et téléphone, ainsi qu’avec le texte agrandi.
- Parcourir les liens, les accordéons et le formulaire avec Tab et Entrée.
- Vérifier le téléchargement du CV et les liens vers les dépôts GitHub.
- Confirmer la réception des messages du formulaire.
- Ajouter l’adresse du dépôt du portfolio dans la page Projets.
