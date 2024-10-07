const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const axios = require('axios');

// POST - Submit a contact form
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please provide all required fields' });
    }

    try {
        // Save contact form submission to the database
        const newContact = new Contact({
            name,
            email,
            message,
        });
        await newContact.save();

        // Prepare email data for Postmark
        const emailData = {
            From: process.env.ADMIN_EMAIL,
            To: process.env.ADMIN_EMAIL,
            Subject: 'New Contact Form Submission',
            TextBody: `You have a new contact form submission from:
                       Name: ${name}
                       Email: ${email}
                       Message: ${message}`,
            ReplyTo: email,
            TrackOpens: true,
            MessageStream: "outbound",
        };

        // Send the email via Postmark
        const postmarkResponse = await axios.post('https://api.postmarkapp.com/email', emailData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Postmark-Server-Token': process.env.POSTMARK_API_KEY,
            }
        });

        if (postmarkResponse.data.ErrorCode === 0) {
            console.log("Email sent successfully: " + postmarkResponse.data.MessageID);
            res.status(201).json({ message: 'Contact form submitted successfully' });
        } else {
            throw new Error('Error sending email');
        }

    } catch (err) {
        console.error(err);
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

// Delete All Submissions
router.delete('/', async (req, res) => {
    try {
        await Contact.deleteMany({});
        res.status(200).json({ message: 'All contact form submissions have been deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
