import React from 'react';
import { motion, Variants } from 'framer-motion';
import { trainingWorkshops } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, User, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};
export function TrainingPage() {
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
            Training & Workshops
          </motion.h1>
          <motion.p variants={fadeIn} initial="hidden" animate="visible" className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Empower your team with practical legal knowledge from our expert-led training sessions.
          </motion.p>
        </div>
      </motion.section>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {trainingWorkshops.map((workshop) => (
              <motion.div key={workshop.title} variants={fadeIn}>
                <Card className="h-full flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardHeader>
                    <CardTitle>{workshop.title}</CardTitle>
                    <CardDescription>{workshop.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{workshop.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-primary" />
                        <span>Led by: {workshop.instructor}</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <h4 className="font-semibold text-foreground mb-2">Key Topics:</h4>
                      <ul className="space-y-2">
                        {workshop.topics.map(topic => (
                          <li key={topic} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link to="/booking" state={{ service: workshop.title }}>
                        Book This Workshop
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}