// pages/api/contact.js (for Next.js 12 or below)
// or app/api/contact/route.js (for Next.js 13+ with app directory)
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'vamsirangumudri2023@gmail.com',
        pass: 'nbto kbwc ivec oalo',
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'vamsirangumudri2023@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Message sent successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: 'Error sending message.', error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}