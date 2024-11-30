<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "contact@raracing.com";  // recipient email
    $subject = "New Contact Form Submission";

    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Create the email content
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    // Set email headers
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Error sending message.";
    }
}
?>
