import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { healthCheckQuestions } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { AlertCircle, CheckCircle, Shield, ArrowRight, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
export function HealthCheckPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const totalQuestions = healthCheckQuestions.length;
  const progress = (currentStep / totalQuestions) * 100;
  const handleAnswer = (questionId: string, riskScore: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: riskScore }));
  };
  const handleNext = () => {
    if (currentStep < totalQuestions - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };
  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsCompleted(false);
  };
  const totalRiskScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
  const maxPossibleScore = healthCheckQuestions.reduce((sum, q) => sum + Math.max(...q.options.map(o => o.riskScore)), 0);
  const riskPercentage = maxPossibleScore > 0 ? (totalRiskScore / maxPossibleScore) * 100 : 0;
  const getRiskLevel = () => {
    if (riskPercentage < 25) return { level: 'Low Risk', color: 'text-green-500', icon: CheckCircle };
    if (riskPercentage < 60) return { level: 'Medium Risk', color: 'text-yellow-500', icon: AlertCircle };
    return { level: 'High Risk', color: 'text-red-500', icon: Shield };
  };
  const riskProfile = getRiskLevel();
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
            Business Legal Health Check
          </motion.h1>
          <motion.p variants={fadeIn} initial="hidden" animate="visible" className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Answer a few simple questions to get a snapshot of your business's legal compliance and risk areas.
          </motion.p>
        </div>
      </motion.section>
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>
                {isCompleted ? "Your Results" : `Question ${currentStep + 1} of ${totalQuestions}`}
              </CardTitle>
              {!isCompleted && <Progress value={progress} className="mt-2" />}
            </CardHeader>
            <CardContent className="min-h-[300px]">
              <AnimatePresence mode="wait">
                {isCompleted ? (
                  <motion.div key="results" variants={fadeIn} initial="hidden" animate="visible" className="text-center">
                    <riskProfile.icon className={`h-16 w-16 mx-auto mb-4 ${riskProfile.color}`} />
                    <h3 className="text-2xl font-bold">Overall Assessment: <span className={riskProfile.color}>{riskProfile.level}</span></h3>
                    <p className="text-muted-foreground mt-2">
                      Your responses indicate potential areas of legal risk. A high score suggests that you should seek professional legal advice to ensure compliance and protect your business.
                    </p>
                    <div className="mt-8">
                      <Button asChild size="lg">
                        <Link to="/booking">Book a Consultation</Link>
                      </Button>
                      <Button variant="outline" onClick={handleRestart} className="ml-4">
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Start Over
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key={currentStep} variants={fadeIn} initial="hidden" animate="visible" exit={{ opacity: 0, y: -20 }}>
                    <p className="text-lg font-semibold mb-2">{healthCheckQuestions[currentStep].text}</p>
                    <p className="text-sm text-muted-foreground mb-6">Category: {healthCheckQuestions[currentStep].category}</p>
                    <RadioGroup
                      onValueChange={(value) => handleAnswer(healthCheckQuestions[currentStep].id, parseInt(value))}
                      className="space-y-3"
                    >
                      {healthCheckQuestions[currentStep].options.map((option, index) => (
                        <div key={index} className="flex items-center space-x-2 border p-4 rounded-md hover:bg-muted">
                          <RadioGroupItem value={option.riskScore.toString()} id={`q${currentStep}-o${index}`} />
                          <Label htmlFor={`q${currentStep}-o${index}`} className="flex-1 cursor-pointer">{option.text}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                    <div className="mt-8 text-right">
                      <Button
                        onClick={handleNext}
                        disabled={answers[healthCheckQuestions[currentStep].id] === undefined}
                      >
                        {currentStep < totalQuestions - 1 ? 'Next Question' : 'See Results'}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}