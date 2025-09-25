import React from 'react';
import { motion } from 'framer-motion';
import { aboutUsContent } from '@/lib/content';
import { CheckCircle } from 'lucide-react';
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
export function AboutPage() {
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
            Our Story & Commitment
          </motion.h1>
          <motion.p variants={fadeIn} initial="hidden" animate="visible" className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Founded on the principle of "Doing What is Right," we have been Mpumalanga's trusted legal partner since 2005.
          </motion.p>
        </div>
      </motion.section>
      {/* Firm History Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-gray-100">Firm History</h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">{aboutUsContent.history}</p>
            </motion.div>
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-10 lg:mt-0">
              <div className="bg-muted p-8 rounded-lg shadow-soft">
                <h3 className="text-2xl font-display font-semibold text-primary">Our Mission</h3>
                <p className="mt-3 text-muted-foreground">{aboutUsContent.mission}</p>
              </div>
              <div className="bg-card border mt-8 p-8 rounded-lg">
                <h3 className="text-2xl font-display font-semibold text-secondary-foreground">Our Philosophy</h3>
                <blockquote className="mt-3 border-l-4 border-primary pl-4 italic text-muted-foreground">
                  <p>{aboutUsContent.philosophy.title}</p>
                  <p className="mt-2 text-sm not-italic">{aboutUsContent.philosophy.text}</p>
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-gray-100">Our Core Values</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              The principles that guide our every action and decision.
            </p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {aboutUsContent.values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeIn}
                className="bg-card p-6 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                </div>
                <p className="mt-3 text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}