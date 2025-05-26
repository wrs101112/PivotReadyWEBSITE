// Brevo (formerly Sendinblue) email integration using official SDK
// GDPR compliant email service with auto-responder and tracking capabilities
import * as brevo from '@getbrevo/brevo';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData): Promise<boolean> {
  try {
    console.log('Sending email via Brevo SDK...');
    
    if (!process.env.BREVO_API_KEY) {
      console.error('BREVO_API_KEY not found');
      return false;
    }

    // Configure Brevo API client
    const apiInstance = new brevo.TransactionalEmailsApi();
    const apiKey = apiInstance.authentications['apiKey'];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    // Create email data using Brevo SDK format
    const sendSmtpEmail = new brevo.SendSmtpEmail();
    
    sendSmtpEmail.sender = {
      name: "PivotReady Contact Form",
      email: "info@pivotready.co"
    };
    
    sendSmtpEmail.to = [
      {
        email: "info@pivotready.co",
        name: "PivotReady Team"
      }
    ];
    
    sendSmtpEmail.subject = `Contact Form: ${formData.subject}`;
    
    sendSmtpEmail.htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px;">
        <div style="background: #4A7C74; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">New Contact Form Submission</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">From PivotReady.co</p>
        </div>
        
        <div style="padding: 30px; background: #f9f9f9;">
          <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #4A7C74; margin-top: 0;">Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #4A7C74;">Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${formData.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #4A7C74;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${formData.email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #4A7C74;">Subject:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${formData.subject}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: white; padding: 25px; border-radius: 8px; margin-top: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #4A7C74; margin-top: 0;">Message:</h3>
            <div style="background: #f8f9fa; padding: 20px; border-left: 4px solid #4A7C74; border-radius: 4px;">
              <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${formData.message}</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background: #e8f4f1; border-radius: 8px;">
            <p style="margin: 0; color: #4A7C74; font-weight: bold;">Reply directly to this email to respond to ${formData.name}</p>
          </div>
        </div>
        
        <div style="background: #2F2F2F; color: #ccc; padding: 20px; text-align: center; font-size: 12px;">
          <p style="margin: 0;">This email was automatically sent from the PivotReady.co contact form</p>
        </div>
      </div>
    `;
    
    sendSmtpEmail.textContent = `New Contact Form Submission from PivotReady.co

Contact Details:
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Reply directly to this email to respond to ${formData.name}
This email was automatically sent from the PivotReady.co contact form`;

    sendSmtpEmail.replyTo = {
      email: formData.email,
      name: formData.name
    };

    console.log('Sending email using Brevo SDK...');
    
    // Send the email using the official SDK
    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log('Email sent successfully via Brevo SDK!');
    console.log('Brevo response:', result);
    return true;

  } catch (error) {
    console.error('Brevo SDK error:', error);
    return false;
  }
}