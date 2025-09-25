import { Hono } from "hono";
import type { Env } from './core-utils';
import { ok, bad } from './core-utils';
import { z } from 'zod';
// Schema for the contact form (must match frontend)
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});
// Schema for the booking form (must match frontend)
const bookingFormSchema = z.object({
  service: z.string().min(1, { message: "Please select a service." }),
  attorney: z.string().min(1, { message: "Please select an attorney." }),
  date: z.string().datetime({ message: "Please select a valid date." }),
  time: z.string().min(1, { message: "Please select a time." }),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
});
export function userRoutes(app: Hono<{ Bindings: Env }>) {
  app.get('/api/test', (c) => c.json({ success: true, data: { name: 'CF Workers Demo' }}));
  // Contact Form Endpoint
  app.post('/api/contact', async (c) => {
    try {
      const body = await c.req.json();
      const validation = contactFormSchema.safeParse(body);
      if (!validation.success) {
        // The Zod error object is complex, let's format it for a clear client-side message.
        const errors = validation.error.flatten().fieldErrors;
        const errorMessages = Object.entries(errors).map(([field, messages]) => `${field}: ${messages.join(', ')}`).join('; ');
        return bad(c, `Invalid input: ${errorMessages}`);
      }
      console.log("New Contact Form Submission:", JSON.stringify(validation.data, null, 2));
      return ok(c, { message: "Message received successfully!" });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return c.json({ success: false, error: 'Failed to process message' }, 500);
    }
  });
  // New Appointment Booking Endpoint
  app.post('/api/booking', async (c) => {
    try {
      const body = await c.req.json();
      const validation = bookingFormSchema.safeParse(body);
      if (!validation.success) {
        // The Zod error object is complex, let's format it for a clear client-side message.
        const errors = validation.error.flatten().fieldErrors;
        const errorMessages = Object.entries(errors).map(([field, messages]) => `${field}: ${messages.join(', ')}`).join('; ');
        return bad(c, `Invalid input: ${errorMessages}`);
      }
      console.log("New Appointment Booking:", JSON.stringify(validation.data, null, 2));
      return ok(c, { message: "Appointment booked successfully!" });
    } catch (error) {
      console.error("Error processing booking:", error);
      return c.json({ success: false, error: 'Failed to process booking' }, 500);
    }
  });

}