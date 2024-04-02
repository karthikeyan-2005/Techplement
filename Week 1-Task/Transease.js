document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 60;
        window.scrollTo({
            top: target.offsetTop - headerOffset,
            behavior: 'smooth'
        });
    });
});

ScrollReveal().reveal('.feature-item', {
    delay: 100,
    interval: 100,
    origin: 'bottom',
    distance: '50px',
    duration: 1000
});
ScrollReveal().reveal('.pricing-plan', {
    delay: 100,
    interval: 100,
    origin: 'bottom',
    distance: '50px',
    duration: 1000
});
ScrollReveal().reveal('.faq', {
    delay: 100,
    interval: 100,
    origin: 'bottom',
    distance: '50px',
    duration: 1000
});