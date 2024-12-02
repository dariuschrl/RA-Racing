// Mobile Menu and Smooth Scrolling Functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');
    const menuItems = document.querySelectorAll('.menu a');
    const menuIcon = document.querySelector('.menu-icon');

    // Smooth scroll to target section
    function smoothScroll(target) {
        const element = document.querySelector(target);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Toggle mobile menu
    function toggleMenu() {
        menu?.classList.toggle('active');
        menuToggle?.classList.toggle('active');
        
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
