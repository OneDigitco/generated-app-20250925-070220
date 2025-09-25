import React from 'react';
import { motion, Variants } from 'framer-motion';
import { industryExpertise } from '@/lib/content';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
export function IndustriesPage() {
  return (
    <div className="bg-background text-foreground">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-24 md:py-32 bg-muted"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 variants={fadeIn} initial="hidden" animate="visible" className="text-4xl md:text-5xl font-display font-bold text-primary">
            Industry-Specific Legal Solutions
          </motion.h1>
          <motion.p variants={fadeIn} initial="hidden" animate="visible" className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We provide tailored legal strategies based on a deep understanding of the unique challenges and opportunities within Mpumalanga's key sectors.
          </motion.p>
        </div>
      </motion.section>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Tabs defaultValue={industryExpertise[0].name} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {industryExpertise.map((industry) => (
                  <TabsTrigger key={industry.name} value={industry.name}>{industry.name}</TabsTrigger>
                ))}
              </TabsList>
              {industryExpertise.map((industry) => (
                <TabsContent key={industry.name} value={industry.name} className="mt-8">
                  <Card className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="p-8">
                        <CardHeader className="p-0">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                              <industry.icon className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="text-3xl font-display">{industry.name}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="p-0">
                          <p className="text-muted-foreground text-pretty mb-6">{industry.description}</p>
                          <h4 className="font-semibold text-foreground mb-3">Key Services for this Sector:</h4>
                          <ul className="space-y-2">
                            {industry.services.map(service => (
                              <li key={service} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>{service}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </div>
                      <div className="hidden md:block">
                        <img src={industry.image} alt={industry.name} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>
    </div>
  );
}