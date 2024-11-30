function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission (page reload)

    var form = event.target; // Get the form element
    var data = new FormData(form); // Create FormData object to send form data

    // Create a new XMLHttpRequest object to send the form data to PHP
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'send_email.php', true);
    
    // When the request finishes, execute this function
    xhr.onload = function() {
        if (xhr.status === 200) {
            var response = xhr.responseText; // Get the response from PHP
            
            if (response === "Message sent successfully.") {
                alert('Message sent successfully!');
                form.reset(); // Clear all input fields after sending the email
            } else {
                alert('Error sending message. Please try again later.');
            }
        } else {
            alert('There was an error with the request.');
        }
    };

    // Send the form data to the PHP server
    xhr.send(data);
});


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
    origin: 'left',  // Reveal from left
    distance: '100px', // Move 100px from the left
    delay: 300,  // Delay for the sticky notes
    duration: 1000, // Animation duration
    interval: 200, // Delay between each note's animation
    opacity: 0, // Start hidden
    scale: 0.8, // Slightly scale the sticky notes
    easing: 'ease-out', // Easing function for smoothness
});
