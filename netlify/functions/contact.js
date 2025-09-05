import 'dotenv/config';
import Mailjet from 'node-mailjet';

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

    const mailjet = Mailjet.apiConnect(
      process.env.MJ_APIKEY_PUBLIC,
      process.env.MJ_APIKEY_PRIVATE
    );

    const request = await mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: process.env.EMAIL_FROM,
              Name: 'Enon Website Contact Form'
            },
            To: [
              {
                Email: process.env.EMAIL_TO,
                Name: 'Your Name'
              }
            ],
            Subject: `New Contact Form Message from ${name}`,
            TextPart: message,
            ReplyTo: {
              Email: email,
              Name: name
            }
          }
        ]
      });

    console.log('Email sent:', request.body);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (err) {
    console.error('Email sending error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' })
    };
  }
}
