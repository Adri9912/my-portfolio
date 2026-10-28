// GSAP anime seulement l’entrée de l’accueil. Le site reste visible sans lui.
if (window.gsap) {
    gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', function() {
        gsap.from('.presentation > *, .navigation-accueil', {
            y: 20,
            opacity: 0,
            duration: 0.65,
            stagger: 0.09,
            ease: 'power2.out',
            clearProps: 'transform,opacity'
        });
    });
}
