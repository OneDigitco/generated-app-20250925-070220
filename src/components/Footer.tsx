import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Mail, Phone, MapPin } from 'lucide-react';
import { firmInfo, contactInfo } from '@/lib/content';
const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Our Team' },
  { href: '/industries', label: 'Industries' },
  { href: '/blog', label: 'Blog' },
  { href: '/resources', label: 'Resources' },
  { href: '/health-check', label: 'Health Check' },
  { href: '/property-tracker', label: 'Property Tracker' },
  { href: '/contact', label: 'Contact' },
];
export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Scale className="h-8 w-8 text-primary" />
              <span className="font-display text-xl font-bold text-foreground">{firmInfo.shortName}</span>
            </Link>
            <p className="text-sm">{firmInfo.description.split('. ')[0]}.</p>
            <p className="text-xs pt-4">Built with ��️ at Cloudflare</p>
          </div>
          <div className="md:mx-auto">
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:mx-auto">
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  {contactInfo.physicalAddress.line1},<br />
                  {contactInfo.physicalAddress.line2},<br />
                  {contactInfo.physicalAddress.city}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="text-sm hover:text-primary transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-sm hover:text-primary transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Office Hours</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>{contactInfo.officeHours.weekdays}</li>
              <li>{contactInfo.officeHours.saturday}</li>
              <li>{contactInfo.officeHours.sunday}</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} {firmInfo.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}