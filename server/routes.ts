import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail } from "./email";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      console.log('Contact form endpoint hit');
      console.log('Request body:', req.body);
      
      const contactSchema = z.object({
        name: z.string().min(2),
        email: z.string().email(),
        subject: z.string().min(1),
        message: z.string().min(10),
      });

      const validatedData = contactSchema.parse(req.body);
      console.log('Data validation successful:', validatedData);
      
      console.log('About to call sendContactEmail function...');
      // Send email using SendGrid
      const emailSent = await sendContactEmail(validatedData);
      console.log('sendContactEmail returned:', emailSent);
      
      if (!emailSent) {
        console.log('Email sending failed, returning error response');
        return res.status(500).json({ 
          success: false, 
          message: 'Failed to send email. Please try again later.' 
        });
      }
      res.status(200).json({ 
        success: true,
        message: "Contact form submission received"
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false,
          message: "Invalid form data",
          errors: error.errors 
        });
      }
      
      console.error("Contact form error:", error);
      res.status(500).json({ 
        success: false,
        message: "Failed to process contact form submission" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
