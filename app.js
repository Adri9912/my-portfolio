// Sur Projets, afficher le début du projet lorsqu’un accordéon s’ouvre.
// Le formulaire de Contact fonctionne sans JavaScript.

function afficherProjet(projet) {
    const mouvementReduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    projet.scrollIntoView({
        behavior: mouvementReduit ? 'auto' : 'smooth',
        block: 'start'
    });
}

document.querySelectorAll('.projet-accordeon').forEach(function(projet) {
    projet.addEventListener('toggle', function() {
        if (projet.open) {
            afficherProjet(projet);
        }
    });
});

// Un lien comme projets.html#portfolio ouvre aussi le bon accordéon.
function ouvrirProjetDepuisLien() {
    const identifiant = window.location.hash.substring(1);
    const projet = document.getElementById(identifiant);

    if (projet !== null && projet.tagName === 'DETAILS') {
        if (projet.open) {
            afficherProjet(projet);
        } else {
            projet.open = true;
        }
    }
}

ouvrirProjetDepuisLien();
window.addEventListener('hashchange', ouvrirProjetDepuisLien);
