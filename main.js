function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}



// ScrollReveal Animations
const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2000,
    reset: true
});

sr.reveal('.home-text', {});
sr.reveal('.home-img', { delay: 200 });
sr.reveal('.social', { delay: 200 });

sr.reveal('.about-img', {});
sr.reveal('.heading', {});
sr.reveal('.about-text', { delay: 200 });

sr.reveal('.form textarea', {});
sr.reveal('.contact-form', { delay: 200 });

sr.reveal('#donation', { delay: 200 });

sr.reveal('.sticky-note', {
    origin: 'left',
    distance: '100px',
    delay: 300,
    duration: 1000,
    interval: 200,
    opacity: 0,
    scale: 0.8,
    easing: 'ease-out'
});
