import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Toaster } from '@/components/ui/sonner';
import { Outlet, ScrollRestoration } from 'react-router-dom';
interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Toaster richColors />
    </div>
  );
}
export const AppLayout = () => (
  <Layout>
    <ScrollRestoration />
    <Outlet />
  </Layout>
);