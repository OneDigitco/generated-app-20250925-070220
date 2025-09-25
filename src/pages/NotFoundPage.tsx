import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
export function NotFoundPage() {
  return (
    <div className="min-h-[calc(100vh-128px)] flex flex-col items-center justify-center text-center px-4">
      <AlertTriangle className="h-16 w-16 text-primary mb-4" />
      <h1 className="text-6xl font-display font-bold text-foreground">404</h1>
      <h2 className="text-2xl font-semibold text-muted-foreground mt-2 mb-6">Page Not Found</h2>
      <p className="max-w-md text-muted-foreground mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Button asChild size="lg">
        <Link to="/">Go to Homepage</Link>
      </Button>
    </div>
  );
}