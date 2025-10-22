// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.about-card, .timeline-item, .impact-item, .contact-item, .donate-form, .contact-form');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        const speed = scrolled * 0.5;
        heroImage.style.transform = `translateY(${speed}px)`;
    }
});

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !message) {
        showNotification('Please fill in all fields.', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        showNotification('Thank you for your message! We\'ll get back to you within 24 hours.', 'success');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '5px',
        color: 'white',
        fontWeight: '600',
        zIndex: '10000',
        maxWidth: '300px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease'
    });
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.background = 'var(--primary-orange)';
            break;
        case 'error':
            notification.style.background = '#dc3545';
            break;
        default:
            notification.style.background = '#007bff';
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Racing speed lines effect
function createSpeedLines() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 5; i++) {
        const line = document.createElement('div');
        line.className = 'speed-line';
        
        Object.assign(line.style, {
            position: 'absolute',
            top: Math.random() * 100 + '%',
            left: '-100px',
            width: '50px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.7), transparent)',
            animation: `speedLine ${2 + Math.random() * 3}s linear infinite`,
            animationDelay: Math.random() * 2 + 's',
            zIndex: '1'
        });
        
        hero.appendChild(line);
    }
}

// Add speed line animation CSS
const speedLineCSS = `
@keyframes speedLine {
    0% {
        left: -100px;
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        left: 100%;
        opacity: 0;
    }
}
`;

// Inject speed line CSS
const style = document.createElement('style');
style.textContent = speedLineCSS;
document.head.appendChild(style);

// Initialize speed lines on load
document.addEventListener('DOMContentLoaded', () => {
    createSpeedLines();
});

// Counter animation for statistics
function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        element.textContent = current;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.about-card, .impact-item, .contact-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Racing-themed cursor trail effect
let cursorTrail = [];
const trailLength = 8;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY });
    
    if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
    }
    
    // Create trail effect (optional, can be performance intensive)
    if (Math.random() < 0.1) { // Reduce frequency for performance
        createCursorParticle(e.clientX, e.clientY);
    }
});

function createCursorParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = 'var(--primary-orange)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';
    particle.style.opacity = '0.7';
    
    document.body.appendChild(particle);
    
    // Animate particle
    let opacity = 0.7;
    let size = 4;
    
    const animateParticle = () => {
        opacity -= 0.05;
        size += 0.5;
        
        particle.style.opacity = opacity;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        if (opacity > 0) {
            requestAnimationFrame(animateParticle);
        } else {
            particle.remove();
        }
    };
    
    requestAnimationFrame(animateParticle);
}

// Performance optimization: throttle scroll events
let ticking = false;

function updateOnScroll() {
    // Parallax and other scroll effects
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        const speed = scrolled * 0.3;
        heroImage.style.transform = `translateY(${speed}px)`;
    }
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero elements
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-description, .hero-buttons');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Racing stats counter (if needed in future)
function initStatsCounters() {
    const stats = [
        { element: '.races-count', target: 15 },
        { element: '.wins-count', target: 3 },
        { element: '.podiums-count', target: 8 }
    ];
    
    stats.forEach(stat => {
        const element = document.querySelector(stat.element);
        if (element) {
            animateCounter(element, 0, stat.target, 2000);
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('RA Racing website initialized');
    
    // Add some racing flair to the console
    console.log(`
    🏁 RA RACING - PROFESSIONAL MOTORSPORT 🏁
    
    Driver: Darius Chirila
    Team: RA Racing
    Mission: Promoting Romanian Motorsport
    
    Ready to race! 🏎️💨
    `);
});