<script type="text/javascript">
    // Select the contact form
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
</script>
