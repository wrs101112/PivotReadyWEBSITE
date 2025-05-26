// Netlify serverless function to handle contact form submissions
import sgMail from '@sendgrid/mail';

export async function handler(event, context) {
  try {
    // Basic CORS headers
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    };

    // Handle OPTIONS request for CORS preflight
    if (event.httpMethod === 'OPTIONS') {
      return {
        statusCode: 204,
        headers
      };
    }

    // Process POST requests for contact form submissions
    if (event.httpMethod === 'POST') {
      const data = JSON.parse(event.body);
      console.log('Contact form submission received:', data);
      
      // Initialize SendGrid
      if (!process.env.SENDGRID_API_KEY) {
        console.error('SENDGRID_API_KEY not found');
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({
            message: 'Email service configuration error',
            success: false
          })
        };
      }
      
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      
      // Prepare email
      const msg = {
        to: 'info@pivotready.co',
        from: 'info@pivotready.co',
        subject: `Contact Form: ${data.subject}`,
        text: `New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

---
This email was sent from the PivotReady.co contact form.`,
        html: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #4A7C74;">New Contact Form Submission</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Subject:</strong> ${data.subject}</p>
          </div>
          <div style="background: #fff; padding: 20px; border-left: 4px solid #4A7C74; margin: 20px 0;">
            <h3 style="color: #4A7C74; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="font-size: 12px; color: #666;">
            This email was sent from the PivotReady.co contact form.
          </p>
        </div>`,
      };
      
      // Send email
      await sgMail.send(msg);
      console.log('Email sent successfully via SendGrid');
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          message: 'Thank you for your message! We will get back to you soon at info@pivotready.co',
          success: true
        })
      };
    }

    // Handle any other request types
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ 
        message: 'Method not allowed',
        success: false
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        message: 'Server error processing your request',
        error: error.message,
        success: false
      })
    };
  }
}