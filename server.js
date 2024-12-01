const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 8000;

// Middleware
app.use(cors()); // Allow requests from any origin
app.use(bodyParser.json()); // Parse JSON data
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data

// Email configuration using Nodemailer
const transporter = nodemailer.createTransport({
    service: 'Gmail', // or another email service like Yahoo, Outlook
    auth: {
        user: 'daytradingcatz@gmail.com', // Replace with your email
        pass: 'qffy lbse gqcw zbyp'  // Replace with your email password or app-specific password
    }
});

// POST route to handle form submissions
app.post('/send_email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email, // Sender's email
        to: 'daytradingcatz@gmail.com', // Replace with your email
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Failed to send the message.');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Message sent successfully!');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
