// /pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  try {
    await resend.emails.send({
      from: 'Your Name <onboarding@resend.dev>',
      to: 'susmithreddyms@gmail.com',
      subject: `[Contact] ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Sending email with data:", { name, email, subject, message });
    console.log("Using API key:", process.env.RESEND_API_KEY);

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Email not sent' });
  }
}
