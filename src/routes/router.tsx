import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../views/home-page';
import { AboutPage } from '../views/about-page';
import { DashboardPage } from '../views/dashboard-page';
import { RootFallback } from '../components/fallback/root-fallback';
import { LandingPageLayout } from '../layouts/landing-page-layout';
import { AuthPageLayout } from '../layouts/auth-page-layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPageLayout />,
    errorElement: <RootFallback />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthPageLayout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
    ],
  },
]);
