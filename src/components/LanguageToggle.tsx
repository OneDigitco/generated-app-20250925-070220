import React from 'react';
import { Button } from '@/components/ui/button';
import { useTranslations } from '@/hooks/use-translations';
import { Languages } from 'lucide-react';
export function LanguageToggle() {
  const { language, toggleLanguage } = useTranslations();
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      aria-label="Toggle language"
      className="relative"
    >
      <Languages className="h-5 w-5" />
      <span className="absolute -bottom-0 -right-1 text-xs font-bold text-primary bg-primary-foreground rounded-full px-1">
        {language.toUpperCase()}
      </span>
    </Button>
  );
}