// Appliquer le choix avant le CSS pour éviter un éclair clair au chargement.
const racine = document.documentElement;
try {
    racine.dataset.theme = localStorage.getItem('portfolio-theme') === 'nuit' ? 'nuit' : 'jour';
    racine.dataset.etoiles = localStorage.getItem('portfolio-etoiles') === 'pause' ? 'pause' : 'animees';
} catch {
    // Le site fonctionne aussi si le navigateur refuse le stockage local.
    racine.dataset.theme = 'jour';
    racine.dataset.etoiles = 'animees';
}

document.addEventListener('DOMContentLoaded', function() {
    const boutonTheme = document.querySelector('.bouton-theme');
    const boutonEtoiles = document.querySelector('.bouton-etoiles');
    const mouvementReduit = window.matchMedia('(prefers-reduced-motion: reduce)');

    function actualiserBoutons() {
        const nuit = racine.dataset.theme === 'nuit';
        const pause = racine.dataset.etoiles === 'pause';
        boutonTheme.textContent = nuit ? '☀ Mode jour' : '☾ Mode nuit';
        boutonTheme.setAttribute('aria-label', nuit ? 'Passer en mode jour' : 'Passer en mode nuit');
        const masquerPause = !nuit || mouvementReduit.matches;
        if (masquerPause && document.activeElement === boutonEtoiles) {
            boutonTheme.focus();
        }
        boutonEtoiles.hidden = masquerPause;
        boutonEtoiles.textContent = pause ? 'Animer les étoiles' : 'Pause étoiles';
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
        actualiserBoutons();
        // Le bouton Pause va disparaître en mode jour : garder le focus sur le thème.
        boutonTheme.focus();
    });

    boutonEtoiles.addEventListener('click', function() {
        racine.dataset.etoiles = racine.dataset.etoiles === 'pause' ? 'animees' : 'pause';
        memoriser('portfolio-etoiles', racine.dataset.etoiles);
        actualiserBoutons();
    });

    mouvementReduit.addEventListener('change', actualiserBoutons);
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
        etoile.style.setProperty('--intensite', 0.25 + Math.random() * 0.5);
        etoile.style.setProperty('--duree', 4 + Math.random() * 6 + 's');
        etoile.style.setProperty('--retard', -Math.random() * 10 + 's');
        ciel.appendChild(etoile);
    }
    document.body.prepend(ciel);
    document.querySelector('.reglages-affichage').hidden = false;
    actualiserBoutons();
});
