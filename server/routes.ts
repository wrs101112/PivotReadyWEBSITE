import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const contactSchema = z.object({
        name: z.string().min(2),
        email: z.string().email(),
        subject: z.string().min(1),
        message: z.string().min(10),
      });

      const validatedData = contactSchema.parse(req.body);
      
      // In a real implementation, we would store this data or send an email
      // For now, we'll just return a success response
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
