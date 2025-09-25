import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactInfo } from '@/lib/content';
import { contactFormSchema, ContactFormValues } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Mail, Phone, MapPin, Clock, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useTranslations } from '@/hooks/use-translations';
import { api } from '@/lib/api-client';
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
export function ContactPage() {
  const { t } = useTranslations();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const { isSubmitting } = form.formState;
  async function onSubmit(values: ContactFormValues) {
    try {
      await api('/api/contact', {
        method: 'POST',
        body: JSON.stringify(values),
      });
      toast.success(t('contact.successMessage'));
      form.reset();
    } catch (error) {
      toast.error(t('contact.errorMessage'));
    }
  }
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-24 md:py-32 bg-muted"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 variants={fadeIn} initial="hidden" animate="visible" className="text-4xl md:text-5xl font-display font-bold text-primary">
            {t('contact.title')}
          </motion.h1>
          <motion.p variants={fadeIn} initial="hidden" animate="visible" className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            {t('contact.subtitle')}
          </motion.p>
        </div>
      </motion.section>
      {/* Contact Info Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Details */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-primary" />
                    Physical Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>{contactInfo.physicalAddress.line1}</p>
                  <p>{contactInfo.physicalAddress.line2}</p>
                  <p>{contactInfo.physicalAddress.city}</p>
                  <p>{contactInfo.physicalAddress.province}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-primary" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-1">
                  <p>{contactInfo.officeHours.weekdays}</p>
                  <p>{contactInfo.officeHours.saturday}</p>
                  <p>{contactInfo.officeHours.sunday}</p>
                </CardContent>
              </Card>
            </motion.div>
            {/* Contact Form */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <Card>
                <CardHeader>
                  <CardTitle>{t('contact.formTitle')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.formName')}</FormLabel>
                          <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.formEmail')}</FormLabel>
                          <FormControl><Input placeholder="john.doe@example.com" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="subject" render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.formSubject')}</FormLabel>
                          <FormControl><Input placeholder="e.g., Property Transfer Enquiry" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.formMessage')}</FormLabel>
                          <FormControl><Textarea placeholder="Please describe your legal needs..." className="min-h-[120px]" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <Button type="submit" disabled={isSubmitting} className="w-full">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            {t('contact.formSending')}
                          </>
                        ) : (
                          t('contact.formSend')
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}