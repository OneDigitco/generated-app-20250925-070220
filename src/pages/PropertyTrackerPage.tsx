import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { mockPropertyTrackerData } from '@/lib/content';
import { PropertyTrackerData } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, Loader, Circle, AlertTriangle, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};
export function PropertyTrackerPage() {
  const [reference, setReference] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<PropertyTrackerData | null>(null);
  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reference) {
      setError("Please enter a valid reference number.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setData(null);
    setTimeout(() => {
      const result = mockPropertyTrackerData[reference.toUpperCase()];
      if (result) {
        setData(result);
      } else {
        setError("Reference number not found. Please check the number and try again.");
      }
      setIsLoading(false);
    }, 1500);
  };
  const getStatusIcon = (status: 'completed' | 'in_progress' | 'pending') => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-6 w-6 text-green-500" />;
      case 'in_progress': return <Loader className="h-6 w-6 text-blue-500 animate-spin" />;
      case 'pending': return <Circle className="h-6 w-6 text-muted-foreground" />;
    }
  };
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
            Property Transfer Tracker
          </motion.h1>
          <motion.p variants={fadeIn} initial="hidden" animate="visible" className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Enter your unique reference number to view the real-time progress of your property transfer.
          </motion.p>
        </div>
      </motion.section>
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Track Your Transfer</CardTitle>
                <CardDescription>Enter the reference number provided by our conveyancing department.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4">
                  <Input
                    placeholder="e.g., CDM12345"
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                    className="flex-grow"
                  />
                  <Button type="submit" disabled={isLoading} className="sm:w-auto">
                    {isLoading ? <><Loader className="mr-2 h-4 w-4 animate-spin" /> Searching...</> : <><Search className="mr-2 h-4 w-4" /> Track Progress</>}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          <AnimatePresence>
            {(error || data) && (
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="mt-8"
              >
                {error && (
                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                {data && (
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle>Transfer Status for: {data.reference}</CardTitle>
                      <CardDescription>{data.propertyDescription}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-sm">
                        <div><strong className="block text-foreground">Seller:</strong> <span className="text-muted-foreground">{data.seller}</span></div>
                        <div><strong className="block text-foreground">Buyer:</strong> <span className="text-muted-foreground">{data.buyer}</span></div>
                        <div><strong className="block text-foreground">Current Status:</strong> <span className="text-muted-foreground">{data.status}</span></div>
                        <div><strong className="block text-foreground">Est. Completion:</strong> <span className="text-muted-foreground">{data.estimatedCompletion}</span></div>
                      </div>
                      <div className="relative">
                        <div className="absolute left-3 h-full border-l-2 border-dashed border-border"></div>
                        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8">
                          {data.stages.map((stage, index) => (
                            <motion.div key={index} variants={fadeIn} className="relative flex items-start gap-4">
                              <div className="flex-shrink-0 w-6 h-6 mt-1 bg-background z-10">{getStatusIcon(stage.status)}</div>
                              <div className="flex-1">
                                <p className={cn("font-semibold", stage.status !== 'pending' && 'text-foreground')}>{stage.name}</p>
                                <p className="text-sm text-muted-foreground">{stage.details}</p>
                                {stage.date && <p className="text-xs text-muted-foreground mt-1">Completed: {stage.date}</p>}
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}