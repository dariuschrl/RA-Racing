function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission behavior.

    const form = event.target; // Get the form element.
    const formData = new FormData(form); // Collect form data.

    // Convert FormData to JSON
    const formObject = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('http://localhost:8000/send_email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formObject) // Send form data as JSON
        });

        if (response.ok) {
            alert('Message sent successfully!');
            form.reset(); // Reset the form fields.
        } else {
            alert('Error sending message. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error connecting to the server. Please try again.');
    }
});

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
