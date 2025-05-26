import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail } from "./email";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Brevo-powered contact form endpoint (bypasses Netlify form processing)
  app.post('/api/brevo-contact', async (req, res) => {
    try {
      console.log('Brevo contact form endpoint hit');
      console.log('Request body:', req.body);
      
      const contactSchema = z.object({
        name: z.string().min(2),
        email: z.string().email(),
        subject: z.string().min(1),
        message: z.string().min(10),
      });

      const validatedData = contactSchema.parse(req.body);
      console.log('Data validation successful:', validatedData);
      
      console.log('About to call sendContactEmail with data:', validatedData);
      const emailSent = await sendContactEmail(validatedData);
      console.log('sendContactEmail returned:', emailSent);
      console.log('Email sending process completed');
      
      if (!emailSent) {
        console.log('Email sending failed, returning error response');
        return res.status(500).json({ 
          success: false, 
          message: 'Failed to send email. Please try again later.' 
        });
      }
      
      // Send HTML response to work around Vite middleware interference
      res.status(200).send(`
        <script>
          window.parent.postMessage({
            type: 'CONTACT_FORM_SUCCESS',
            message: 'Thank you for your message! We will get back to you soon at info@pivotready.co'
          }, '*');
        </script>
        <h1>Success!</h1>
        <p>Thank you for your message! We'll get back to you soon at info@pivotready.co</p>
      `);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false,
          message: "Invalid form data",
          errors: error.errors 
        });
      }
      
      console.error("Brevo contact form error:", error);
      res.status(500).json({ 
        success: false,
        message: "Failed to process contact form submission" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
