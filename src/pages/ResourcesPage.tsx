import React, { useState, useMemo } from 'react';
import { motion, Variants } from 'framer-motion';
import { legalResources } from '@/lib/content';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Download, Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
export function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = useMemo(() =>
    [...new Set(legalResources.map(r => r.category))],
    []
  );
  const filteredResources = useMemo(() => {
    return legalResources.filter(resource => {
      const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            resource.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory ? resource.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);
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
            Resource Library
          </motion.h1>
          <motion.p variants={fadeIn} initial="hidden" animate="visible" className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Access our library of legal guides, checklists, and handbooks to stay informed.
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
            className="flex flex-col md:flex-row gap-4 mb-12"
          >
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search resources..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={!selectedCategory ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(null)}
              >
                All
              </Button>
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredResources.length > 0 ? (
              filteredResources.map((resource) => (
                <motion.div key={resource.title} variants={fadeIn}>
                  <Card className="h-full flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <CardHeader className="flex-row items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <resource.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle>{resource.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1">{resource.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription>{resource.description}</CardDescription>
                    </CardContent>
                    <div className="p-6 pt-0">
                      <Button asChild className="w-full">
                        <a href={resource.fileUrl} download>
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </a>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No resources found matching your criteria.</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}