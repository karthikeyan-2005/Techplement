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

ScrollReveal().reveal('.header-des', {
    delay: 200,
    origin: 'top',
    distance: '50px',
    duration: 1000
});
ScrollReveal().reveal('nav', {
    delay: 200,
    origin: 'top',
    distance: '50px',
    duration: 1000
});
ScrollReveal().reveal('.login-tran', {
    delay: 200,
    origin: 'left',
    distance: '50px',
    duration: 1000
});
ScrollReveal().reveal('.paraword', {
    delay: 200,
    origin: 'right',
    distance: '50px',
    duration: 1000
});
ScrollReveal().reveal('.image-page1', {
    delay: 200,
    origin: 'bottom',
    distance: '50px',
    duration: 1000
});
ScrollReveal().reveal('.bg-container', {
    delay: 200,
    origin: 'bottom',
    distance: '50px',
    duration: 1000
});
ScrollReveal().reveal('.faq', {
    delay: 200,
    origin: 'left',
    distance: '50px',
    duration: 1000
});
ScrollReveal().reveal('.container1', {
    delay: 200,
    origin: 'right',
    distance: '50px',
    duration: 1000
});
ScrollReveal().reveal('footer', {
    delay: 200,
    origin: 'bottom',
    distance: '50px',
    duration: 1000
});
