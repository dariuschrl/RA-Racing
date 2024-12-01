function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
    
    // Prevent scrolling when menu is open
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : 'auto';
}

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    const menu = document.querySelector('.menu');
    const toggle = document.querySelector('.toggle');
    
    if (menu.classList.contains('active') && 
        !menu.contains(e.target) && 
        !toggle.contains(e.target)) {
        toggleMenu();
    }
});

// Initialize ScrollReveal with extended reveal configuration
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1200,
    delay: 300,
    easing: 'ease-out',
    reset: true
});

// Home Section Animations
sr.reveal('#home .home-text h1', {
    origin: 'left',
    delay: 500
});

sr.reveal('#home .home-text a', {
    origin: 'bottom',
    delay: 600
});

sr.reveal('#home .home-img', {
    origin: 'right',
    delay: 700
});

sr.reveal('#home .social a', {
    origin: 'bottom',
    interval: 100,
    delay: 800
});

// About RA Team Section
sr.reveal('#about-ra-team .heading', {
    origin: 'top',
    delay: 500
});

sr.reveal('#about-ra-team .sticky-notes .sticky-note', {
    origin: 'bottom',
    interval: 200,
    delay: 600
});

// My Story (About) Section
sr.reveal('#about .heading', {
    origin: 'top',
    delay: 500
});

sr.reveal('#about .about-img', {
    origin: 'left',
    delay: 600
});

sr.reveal('#about .about-text', {
    origin: 'right',
    delay: 700,
    interval: 200  // Add interval to text paragraphs
});

// Donation Section
sr.reveal('#donation .heading', {
    origin: 'top',
    delay: 500
});

sr.reveal('#donation .donation-content', {
    origin: 'bottom',
    delay: 600,
    interval: 200  // Add interval to donation elements
});

sr.reveal('#donation .paypal-form', {
    origin: 'bottom',
    delay: 700
});

// Contact Section
sr.reveal('#contact .heading', {
    origin: 'top',
    delay: 500
});

sr.reveal('#contact .contact-content', {
    origin: 'bottom',
    delay: 600
});

sr.reveal('#contact .contact-form input', {
    origin: 'bottom',
    interval: 200,
    delay: 700
});

sr.reveal('#contact .contact-form textarea', {
    origin: 'bottom',
    delay: 800
});

sr.reveal('#contact .contact-button', {
    origin: 'bottom',
    delay: 900
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
