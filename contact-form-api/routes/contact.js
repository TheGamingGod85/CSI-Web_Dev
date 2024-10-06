// routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// POST - Submit a contact form
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please provide all required fields' });
    }

    try {
        // Save contact form submission to database
        const newContact = new Contact({
            name,
            email,
            message,
        });
        await newContact.save();

        // Send email notification to admin using Mailgun SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtp.mailgun.org',
            port: 587,
            auth: {
                user: `${process.env.MAILGUN_USER}`,
                pass: `${process.env.MAILGUN_PASSWORD}`,
            },
        });

        const mailOptions = {
            from: `${name} <${email}>`,
            to: `${process.env.ADMIN_EMAIL}`,
            subject: 'New Contact Form Submission',
            text: `You have a new contact form submission from:
                   Name: ${name}
                   Email: ${email}
                   Message: ${message}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Email sent: ' + info.response);
        });

        res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// GET - Retrieve all contact form submissions
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
