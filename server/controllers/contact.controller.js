const Form = require('../models/ContactForm');
const nodemailer = require('nodemailer');

const createForm = async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        const form = new Form({ name, email, subject, message });
        const newForm = await form.save();

        const transporter = nodemailer.createTransport({
            service: 'gmail', 
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            subject: subject || 'New Contact Form Submission',
            text: `
                You have a new contact form submission:
                Name: ${name}
                Email: ${email}
                Message: ${message}
            `,
            replyTo: email
        };

        await transporter.sendMail(mailOptions);

        return res.status(201).json({ success: true, message: 'Form submitted and email sent', data: newForm });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Server Error' });
    }
};

module.exports = { createForm };
