import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail } from "./email";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Register API route with proper Express response methods
  app.post('/api/brevo-contact', async (req, res) => {
    console.log('🚀 API Route Hit - Contact form submission received');
    console.log('📝 Request body received:', req.body);
    
    // Set JSON content type explicitly
    res.setHeader('Content-Type', 'application/json');
    
    try {
      const contactSchema = z.object({
        name: z.string().min(2),
        email: z.string().email(),
        subject: z.string().min(1),
        message: z.string().min(10),
      });

      const validatedData = contactSchema.parse(req.body);
      console.log('✅ Validation successful:', validatedData);
      
      console.log('📧 Calling Brevo email function...');
      const emailSent = await sendContactEmail(validatedData);
      console.log('📧 Email function returned:', emailSent);
      
      if (!emailSent) {
        console.log('❌ Email failed - sending error response');
        return res.json({ 
          success: false, 
          message: 'Failed to send email. Please try again later.' 
        });
      }
      
      console.log('✅ Email sent - sending success response');
      return res.json({ 
        success: true,
        message: "Thank you for your message! We'll get back to you soon at info@pivotready.co"
      });
      
    } catch (error) {
      console.error('💥 Route error:', error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false,
          message: "Invalid form data",
          errors: error.errors 
        });
      }
      
      return res.status(500).json({ 
        success: false,
        message: "Failed to process contact form submission" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
