import React from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '@/lib/content';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Award } from 'lucide-react';
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
export function TeamPage() {
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
            Meet Our Expert Team
          </motion.h1>
          <motion.p variants={fadeIn} initial="hidden" animate="visible" className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            A dedicated group of legal professionals committed to your success.
          </motion.p>
        </div>
      </motion.section>
      {/* Team Grid Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div key={member.name} variants={fadeIn}>
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardHeader className="flex flex-row items-start gap-4 p-6">
                    <img src={member.imageUrl} alt={member.name} className="w-24 h-24 rounded-full object-cover border-4 border-primary/20" />
                    <div className="flex-1">
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <CardDescription className="text-primary">{member.role}</CardDescription>
                      <a href={`mailto:${member.email}`} className="mt-2 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="h-4 w-4" />
                        {member.email}
                      </a>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 flex-grow flex flex-col">
                    <div className="space-y-1 mb-4">
                      <p className="text-sm font-semibold">Specializations:</p>
                      <div className="flex flex-wrap gap-1">
                        {member.specializations.split(', ').map(spec => (
                          <Badge key={spec} variant="secondary">{spec}</Badge>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground text-pretty flex-grow">{member.bio}</p>
                    {member.achievements.length > 0 && (
                      <div className="mt-4 pt-4 border-t">
                        <h4 className="text-sm font-semibold mb-2">Notable Achievements:</h4>
                        <ul className="space-y-2">
                          {member.achievements.map((ach, index) => (
                            <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <Award className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}