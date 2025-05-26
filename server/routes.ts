import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
// NOTE: Contact form now uses Netlify Forms instead of Express routes
// If moving to a different hosting provider, re-enable the contact route below

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint removed - now using Netlify Forms
  // Uncomment and modify this route if moving away from Netlify:
  /*
  app.post('/api/contact', async (req, res) => {
    // TODO: Implement new email solution here
    res.status(200).json({ 
      success: true,
      message: "Contact form received - implement email service"
    });
  });
  */

  const httpServer = createServer(app);

  return httpServer;
}
