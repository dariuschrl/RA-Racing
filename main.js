// Mobile Menu and Smooth Scrolling Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Theme switching functionality
    function setTheme(theme) {
        const body = document.body;
        const logo = document.querySelector('.logo');
        
        if (theme === 'dark') {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            logo.src = 'assets/logoo.png';  // Orange logo for dark mode
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            logo.src = 'assets/logop.png';  // Purple logo for light mode
        }
    }

    // Detect system color scheme and apply theme
    function detectColorScheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    // Initial theme detection
    detectColorScheme();

    // Listen for changes in system color scheme
    window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', e => {
            setTheme(e.matches ? 'dark' : 'light');
        });

    const menuToggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');
    const menuItems = document.querySelectorAll('.menu a');
    const menuIcon = document.querySelector('.menu-icon');

    // Smooth scroll to target section
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            const headerOffset = 80; // Adjust this value based on your navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Toggle mobile menu
    function toggleMenu() {
        menu?.classList.toggle('active');
        menuToggle?.classList.toggle('active');
        document.body.classList.toggle('menu-open');  // Add this line to toggle body scroll
        
        const isMenuActive = menu?.classList.contains('active');
        menuIcon.src = isMenuActive ? 'assets/close.png' : 'assets/menu.png';
    }

    // Add event listeners
    menuToggle?.addEventListener('click', toggleMenu);
    
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            toggleMenu();
            smoothScroll(item.getAttribute('href'));
        });
    });
});
