import { z } from 'zod';
import { LucideIcon } from 'lucide-react';
// Schema for the contact form
export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});
export type ContactFormValues = z.infer<typeof contactFormSchema>;
// Schema for the appointment booking form
export const bookingFormSchema = z.object({
  service: z.string().min(1, { message: "Please select a service." }),
  attorney: z.string().min(1, { message: "Please select an attorney." }),
  date: z.date({ required_error: "Please select a date for your appointment." }),
  time: z.string().min(1, { message: "Please select a time." }),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
});
export type BookingFormValues = z.infer<typeof bookingFormSchema>;
// Type for a single blog post
export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}
// Type for a single training workshop
export interface TrainingWorkshop {
  title: string;
  description: string;
  date: string;
  duration: string;
  instructor: string;
  topics: string[];
}
// Type for a downloadable legal resource
export interface LegalResource {
  title: string;
  description: string;
  category: string;
  fileUrl: string;
  icon: LucideIcon;
}
// Type for a legal health check question
export interface HealthCheckQuestion {
  id: string;
  category: string;
  text: string;
  options: {
    text: string;
    riskScore: number;
  }[];
}
// Type for industry expertise
export interface Industry {
  name: string;
  icon: LucideIcon;
  description: string;
  services: string[];
  image: string;
}
// Type for property transfer tracker
export interface PropertyTrackerStage {
  name: string;
  status: 'completed' | 'in_progress' | 'pending';
  date: string | null;
  details: string;
}
export interface PropertyTrackerData {
  reference: string;
  propertyDescription: string;
  seller: string;
  buyer: string;
  status: string;
  estimatedCompletion: string;
  stages: PropertyTrackerStage[];
}