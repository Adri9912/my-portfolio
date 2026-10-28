// Appliquer le choix avant le CSS pour éviter un éclair clair au chargement.
const racine = document.documentElement;
try {
    racine.dataset.theme = localStorage.getItem('portfolio-theme') === 'nuit' ? 'nuit' : 'jour';
} catch {
    // Le site fonctionne aussi si le navigateur refuse le stockage local.
    racine.dataset.theme = 'jour';
}

document.addEventListener('DOMContentLoaded', function() {
    const boutonTheme = document.querySelector('.bouton-theme');

    function actualiserBouton() {
        const nuit = racine.dataset.theme === 'nuit';
        boutonTheme.textContent = nuit ? '☀' : '☾';
        const libelle = nuit ? 'Passer en mode jour' : 'Passer en mode nuit';
        boutonTheme.setAttribute('aria-label', libelle);
        boutonTheme.setAttribute('title', libelle);
    }

    // La mémorisation est facultative : le bouton fonctionne même sans elle.
    function memoriser(cle, valeur) {
        try {
            localStorage.setItem(cle, valeur);
        } catch {
            // Certains navigateurs limitent le stockage des fichiers locaux.
        }
    }

    boutonTheme.addEventListener('click', function() {
        racine.dataset.theme = racine.dataset.theme === 'nuit' ? 'jour' : 'nuit';
        memoriser('portfolio-theme', racine.dataset.theme);
        actualiserBouton();
    });

    document.addEventListener('visibilitychange', function() {
        racine.toggleAttribute('data-page-masquee', document.hidden);
    });

    // Des positions aléatoires et des luminosités variées évitent un motif en grille.
    const ciel = document.createElement('div');
    ciel.className = 'ciel-etoile';
    ciel.setAttribute('aria-hidden', 'true');
    const nombre = window.matchMedia('(max-width: 760px)').matches ? 55 : 110;
    for (let i = 0; i < nombre; i++) {
        const etoile = document.createElement('span');
        etoile.className = 'etoile';
        etoile.style.setProperty('--x', Math.random() * 100 + '%');
        etoile.style.setProperty('--y', Math.random() * 100 + '%');
        etoile.style.setProperty('--taille', 0.6 + Math.random() ** 2 * 1.7 + 'px');
        etoile.style.setProperty('--intensite', 0.5 + Math.random() * 0.45);
        etoile.style.setProperty('--duree', 2.5 + Math.random() * 2.5 + 's');
        etoile.style.setProperty('--retard', -Math.random() * 10 + 's');
        ciel.appendChild(etoile);
    }
    document.body.prepend(ciel);
    document.querySelector('.reglages-affichage').hidden = false;
    actualiserBouton();
});
