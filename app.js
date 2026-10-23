// Sur Projets, un lien comme projets.html#portfolio doit ouvrir le bon accordéon.
// Le formulaire de Contact fonctionne sans JavaScript.

function ouvrirProjetDepuisLien() {
    // Retirer le # pour retrouver l'identifiant du projet dans le HTML.
    const identifiant = window.location.hash.substring(1);
    const projet = document.getElementById(identifiant);

    if (projet !== null && projet.tagName === 'DETAILS') {
        projet.open = true;
        projet.scrollIntoView();
    }
}

ouvrirProjetDepuisLien();
window.addEventListener('hashchange', ouvrirProjetDepuisLien);
