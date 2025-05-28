
import { Handler } from '@netlify/functions';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

async function sendContactEmail(formData: ContactFormData): Promise<boolean> {
  try {
    console.log('Sending email via Brevo API...');
    
    if (!process.env.BREVO_API_KEY) {
      console.error('BREVO_API_KEY not found');
      return false;
    }

    const emailData = {
      sender: {
        name: "PivotReady Contact Form",
        email: "info@pivotready.co"
      },
      to: [
        {
          email: "info@pivotready.co",
          name: "PivotReady Team"
        }
      ],
      subject: `Contact Form: ${formData.subject}`,
      htmlContent: `
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
      `,
      textContent: `New Contact Form Submission from PivotReady.co

Contact Details:
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Reply directly to this email to respond to ${formData.name}
This email was automatically sent from the PivotReady.co contact form`,
      replyTo: {
        email: formData.email,
        name: formData.name
      }
    };

    console.log('Making Brevo API call...');
    
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY
      },
      body: JSON.stringify(emailData)
    });

    console.log('Brevo API response status:', response.status);

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Brevo API error - Status:', response.status);
      console.error('Brevo API error - Response:', errorData);
      return false;
    }

    const result = await response.json();
    console.log('Email sent successfully via Brevo!');
    console.log('Brevo response:', result);
    return true;

  } catch (error) {
    console.error('Brevo email error:', error);
    return false;
  }
}

export const handler: Handler = async (event, context) => {
  console.log('🚀 Netlify Function - Contact form submission received');
  console.log('📝 Event body:', event.body);

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ 
        success: false, 
        message: 'Method not allowed' 
      })
    };
  }

  try {
    const formData = JSON.parse(event.body || '{}');
    console.log('✅ Parsed form data:', formData);

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ 
          success: false, 
          message: 'Missing required fields' 
        })
      };
    }

    if (formData.name.length < 2 || formData.message.length < 10) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ 
          success: false, 
          message: 'Invalid form data' 
        })
      };
    }

    console.log('📧 Calling Brevo email function...');
    const emailSent = await sendContactEmail(formData);
    console.log('📧 Email function returned:', emailSent);

    if (!emailSent) {
      console.log('❌ Email failed - sending error response');
      return {
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ 
          success: false, 
          message: 'Failed to send email. Please try again later.' 
        })
      };
    }

    console.log('✅ Email sent - sending success response');
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ 
        success: true,
        message: "Thank you for your message! We'll get back to you soon at info@pivotready.co"
      })
    };

  } catch (error) {
    console.error('💥 Function error:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ 
        success: false,
        message: "Failed to process contact form submission" 
      })
    };
  }
};
