import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { keyStatistics, services, testimonials, industryExpertise, affiliations } from '@/lib/content';
import { ArrowRight, Quote } from 'lucide-react';
import { useTranslations } from '@/hooks/use-translations';
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" }
  }
};
const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};
export function HomePage() {
  const { t } = useTranslations();
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-24 md:py-40 text-center bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom mask-image-radial-fade"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-display font-bold text-primary text-balance">
              {t('home.headline')}
            </motion.h1>
            <motion.p variants={fadeIn} className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground text-pretty">
              {t('home.subheadline')}
            </motion.p>
            <motion.div variants={fadeIn} className="mt-10">
              <Button asChild size="lg" className="text-lg py-3 px-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <Link to="/contact">{t('home.cta')}</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Firm Overview Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-gray-100">{t('home.overviewTitle')}</h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">{t('home.overviewText')}</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 gap-6">
              {keyStatistics.map((stat) => (
                <motion.div variants={fadeIn} key={stat.label} className="bg-card p-6 rounded-lg shadow-sm text-center">
                  <p className="text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-gray-100">{t('home.servicesTitle')}</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              {t('home.servicesSubtitle')}
            </p>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <motion.div variants={fadeIn} key={service.title}>
                <Card className="h-full text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{service.description.split('. ')[0]}.</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link to="/services">
                {t('home.exploreServices')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Industry Expertise Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-gray-100">Industry Expertise</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Deep legal knowledge tailored to Mpumalanga's key economic sectors.
            </p>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {industryExpertise.map((industry) => (
              <motion.div variants={fadeIn} key={industry.name}>
                <Card className="h-full text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                      <industry.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{industry.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{industry.description.split('. ')[0]}.</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link to="/industries">
                Learn More About Our Sectors <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-gray-100">{t('home.testimonialsTitle')}</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              {t('home.testimonialsSubtitle')}
            </p>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div variants={fadeIn} key={testimonial.author}>
                <Card className="h-full flex flex-col">
                  <CardContent className="p-8 flex-grow flex flex-col">
                    <Quote className="h-8 w-8 text-primary/20 mb-4" />
                    <p className="italic text-muted-foreground flex-grow">"{testimonial.quote}"</p>
                    <div className="mt-6 pt-4 border-t">
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Affiliations Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-display font-bold text-gray-900 dark:text-gray-100">Our Affiliations & Partnerships</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {affiliations.map((aff) => (
              <motion.div variants={fadeIn} key={aff.name} className="flex justify-center">
                <img src={aff.logoUrl} alt={aff.name} className="h-12 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" title={aff.name} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-gray-100">{t('home.ctaBottomTitle')}</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t('home.ctaBottomSubtitle')}
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="text-lg py-3 px-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <Link to="/contact">{t('home.ctaBottomButton')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}