// NOTE: SendGrid email functionality removed - now using Netlify Forms
// If moving to a different hosting provider, implement a new email solution here

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// This function is no longer used - kept for reference if needed in future
export async function sendContactEmail(formData: ContactFormData): Promise<boolean> {
  console.log('Email functionality disabled - using Netlify Forms instead');
  console.log('Contact form data received:', formData);
  
  // TODO: Implement new email solution if moving away from Netlify
  return false;
}