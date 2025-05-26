import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail } from "./email";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // CRITICAL: Register API route FIRST and force response termination
  app.post('/api/brevo-contact', async (req, res) => {
    console.log('🚀 API Route Hit - Forcing response termination');
    
    // Immediately set headers and prevent any middleware interference
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('X-Powered-By', 'Express-Direct');
    
    try {
      console.log('📝 Request body received:', req.body);
      
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
        const errorResponse = JSON.stringify({ 
          success: false, 
          message: 'Failed to send email. Please try again later.' 
        });
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(errorResponse);
        return;
      }
      
      console.log('✅ Email sent - sending success response');
      const successResponse = JSON.stringify({ 
        success: true,
        message: "Thank you for your message! We'll get back to you soon at info@pivotready.co"
      });
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(successResponse);
      return;
      
    } catch (error) {
      console.error('💥 Route error:', error);
      
      if (error instanceof z.ZodError) {
        const validationResponse = JSON.stringify({ 
          success: false,
          message: "Invalid form data",
          errors: error.errors 
        });
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(validationResponse);
        return;
      }
      
      const errorResponse = JSON.stringify({ 
        success: false,
        message: "Failed to process contact form submission" 
      });
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(errorResponse);
      return;
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
