import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form API route
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData: ContactFormData = req.body;
      
      // Validate the contact form data
      if (!contactData.name || !contactData.email || !contactData.subject || !contactData.message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      // In a real application, you would save this to a database or send an email
      // For this example, we'll just return a success response
      
      console.log("Contact form submission:", contactData);
      
      res.status(200).json({ 
        message: "Message received successfully",
        timestamp: new Date().toISOString() 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
