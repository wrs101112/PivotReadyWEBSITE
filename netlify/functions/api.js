// Netlify serverless function to handle API routes
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

    // Simple example response - you can modify this based on your actual API needs
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: 'PivotReady API is working!'
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}