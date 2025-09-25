import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Scale, Menu, X } from 'lucide-react';
import { firmInfo } from '@/lib/content';
import { cn } from '@/lib/utils';
import { useTranslations } from '@/hooks/use-translations';
import { LanguageToggle } from '@/components/LanguageToggle';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslations();
  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/team', label: t('nav.team') },
    { href: '/industries', label: 'Industries' },
    { href: '/blog', label: t('nav.blog') },
    { href: '/contact', label: t('nav.contact') },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const NavLinksComponent = ({ className }: { className?: string }) => (
    <nav className={cn("flex items-center gap-4 lg:gap-6", className)}>
      {navLinks.map((link) => (
        <NavLink
          key={link.href}
          to={link.href}
          onClick={() => isMenuOpen && toggleMenu()}
          className={({ isActive }) =>
            cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive ? "text-primary" : "text-muted-foreground"
            )
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow duration-300",
        isScrolled ? "shadow-md" : "shadow-none"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Scale className="h-8 w-8 text-primary" />
            <span className="font-display text-xl font-bold text-gray-900 dark:text-gray-100">{firmInfo.shortName}</span>
          </Link>
          <div className="hidden lg:flex items-center gap-4">
            <NavLinksComponent />
            <LanguageToggle />
            <ThemeToggle />
            <Button asChild className="transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              <Link to="/contact">{t('home.cta')}</Link>
            </Button>
          </div>
          <div className="lg:hidden flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <Button onClick={toggleMenu} variant="ghost" size="icon">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-background border-b shadow-lg animate-accordion-down">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <NavLinksComponent className="flex-col items-start" />
            <Button asChild className="w-full mt-4">
              <Link to="/contact" onClick={toggleMenu}>{t('home.cta')}</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}