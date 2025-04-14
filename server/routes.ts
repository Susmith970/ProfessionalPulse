import type { Express } from "express";
import { createServer, type Server } from "http";
import { Resend } from "resend"; // ✅ import Resend

const resend = new Resend(process.env.RESEND_API_KEY); // ✅ load API key

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData: ContactFormData = req.body;

      if (!contactData.name || !contactData.email || !contactData.subject || !contactData.message) {
        return res.status(400).json({ message: "All fields are required" });
      }

      console.log("Contact form submission:", contactData);

      // ✅ Send email using Resend
      await resend.emails.send({
        from: 'Susmith <onboarding@resend.dev>', // 👈 You can replace with verified email
        to: 'susmithreddyms@gmail.com',
        subject: `[Contact] ${contactData.subject}`,
        html: `
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
          <p><strong>Message:</strong></p>
          <p>${contactData.message}</p>
        `,
      });

      return res.status(200).json({
        message: "Message received and email sent successfully",
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
