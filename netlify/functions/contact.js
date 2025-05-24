// Netlify serverless function to handle contact form submissions
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
      
      // Here you would typically integrate with an email service
      // For now, we'll just log and return success
      console.log('Contact form submission:', data);
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          message: 'Thank you for your message! We will get back to you soon.',
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