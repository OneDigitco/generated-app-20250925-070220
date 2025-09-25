import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css';
import { AppLayout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { TeamPage } from '@/pages/TeamPage';
import { ContactPage } from '@/pages/ContactPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { BlogPage } from '@/pages/BlogPage';
import { BlogPostPage } from '@/pages/BlogPostPage';
import { TranslationProvider } from '@/hooks/use-translations';
import { BookingPage } from '@/pages/BookingPage';
import { ClientPortalPage } from '@/pages/ClientPortalPage';
import { TrainingPage } from '@/pages/TrainingPage';
import { ResourcesPage } from '@/pages/ResourcesPage';
import { HealthCheckPage } from '@/pages/HealthCheckPage';
import { IndustriesPage } from '@/pages/IndustriesPage';
import { PropertyTrackerPage } from '@/pages/PropertyTrackerPage';
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/team", element: <TeamPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/blog/:slug", element: <BlogPostPage /> },
      { path: "/booking", element: <BookingPage /> },
      { path: "/portal", element: <ClientPortalPage /> },
      { path: "/training", element: <TrainingPage /> },
      { path: "/resources", element: <ResourcesPage /> },
      { path: "/health-check", element: <HealthCheckPage /> },
      { path: "/industries", element: <IndustriesPage /> },
      { path: "/property-tracker", element: <PropertyTrackerPage /> },
      { path: "*", element: <NotFoundPage /> },
    ]
  }
]);
// Do not touch this code
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <TranslationProvider>
        <RouterProvider router={router} />
      </TranslationProvider>
    </ErrorBoundary>
  </StrictMode>,
);