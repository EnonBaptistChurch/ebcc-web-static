import nodemailer from 'nodemailer'

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  try {
    const { name, email, message } = JSON.parse(event.body)

    // SMTP transporter (example Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // verified Gmail
        pass: process.env.EMAIL_PASS, // App Password
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,   // your verified email
      to: process.env.EMAIL_TO,       // where you want to receive emails
      subject: `New Contact Form Message from ${name}`,
      text: message,
      replyTo: email,                 // user's email for direct reply
    })

    return { statusCode: 200, body: JSON.stringify({ message: 'Email sent successfully' }) }
  } catch (err) {
    console.error('Email send error:', err)
    return { statusCode: 500, body: JSON.stringify({ error: 'Error sending email' }) }
  }
}
