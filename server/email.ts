import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData): Promise<boolean> {
  try {
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #4A7C74;">New Contact Form Submission</h2>
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Subject:</strong> ${formData.subject}</p>
        </div>
        <div style="background: #fff; padding: 20px; border-left: 4px solid #4A7C74; margin: 20px 0;">
          <h3 style="color: #4A7C74; margin-top: 0;">Message:</h3>
          <p style="white-space: pre-wrap;">${formData.message}</p>
        </div>
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
        <p style="font-size: 12px; color: #666;">
          This email was sent from the PivotReady.co contact form.
        </p>
      </div>
    `;

    const emailText = `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
This email was sent from the PivotReady.co contact form.
    `;

    await mailService.send({
      to: 'info@pivotready.co',
      from: 'noreply@pivotready.co', // This should be a verified sender in SendGrid
      replyTo: formData.email,
      subject: `Contact Form: ${formData.subject}`,
      text: emailText,
      html: emailHtml,
    });

    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}