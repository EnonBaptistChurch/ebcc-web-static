// netlify/functions/contact.js
import nodemailer from 'nodemailer';

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing fields' }) };
    }

    console.log('Incoming form submission:', { name, email, message });

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,        // secure port
      secure: true,     // SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send the email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM, // verified sender
      to: process.env.EMAIL_TO,     // destination inbox
      replyTo: email,               // user's email for reply
      subject: `New contact form message from ${name}`,
      text: message,
    });

    console.log('Email sent successfully:', info.messageId);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error('Email sending error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
}
