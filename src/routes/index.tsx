import { createBrowserRouter, Navigate } from 'react-router-dom'
import { MainLayout } from '@/components/layout/main-layout'
import { DashboardLayout } from '@/components/layout/dashboard-layout'

// Public pages
import { LandingPage } from '@/pages/landing'
import { LoginPage } from '@/pages/auth/login'
import { SignupPage } from '@/pages/auth/signup'
import { EmailVerificationPage } from '@/pages/auth/email-verification'
import { PasswordResetRequestPage } from '@/pages/auth/password-reset-request'
import { PasswordResetPage } from '@/pages/auth/password-reset'

// Dashboard pages
import { DashboardPage } from '@/pages/dashboard'
import { FileLibraryPage } from '@/pages/dashboard/file-library'
import { ContentStudioPage } from '@/pages/dashboard/content-studio'
import { ContentEditorPage } from '@/pages/dashboard/content-editor'
import { ResearchHubPage } from '@/pages/dashboard/research-hub'
import { EditorialCalendarPage } from '@/pages/dashboard/editorial-calendar'
import { IntegrationsPage } from '@/pages/dashboard/integrations'
import { PublishingQueuePage } from '@/pages/dashboard/publishing-queue'
import { AnalyticsPage } from '@/pages/dashboard/analytics'
import { SettingsPage } from '@/pages/dashboard/settings'
import { AdminDashboardPage } from '@/pages/dashboard/admin'
import { HelpPage } from '@/pages/help'
import { ContentImportExportPage } from '@/pages/dashboard/import-export'

// Error & legal pages
import { NotFoundPage } from '@/pages/errors/not-found'
import { ServerErrorPage } from '@/pages/errors/server-error'
import { PrivacyPage } from '@/pages/legal/privacy'
import { TermsPage } from '@/pages/legal/terms'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'verify-email', element: <EmailVerificationPage /> },
      { path: 'forgot-password', element: <PasswordResetRequestPage /> },
      { path: 'reset-password', element: <PasswordResetPage /> },
      { path: 'privacy', element: <PrivacyPage /> },
      { path: 'terms', element: <TermsPage /> },
      { path: 'help', element: <HelpPage /> },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'library', element: <FileLibraryPage /> },
      { path: 'studio', element: <ContentStudioPage /> },
      { path: 'studio/:id', element: <ContentEditorPage /> },
      { path: 'research', element: <ResearchHubPage /> },
      { path: 'calendar', element: <EditorialCalendarPage /> },
      { path: 'integrations', element: <IntegrationsPage /> },
      { path: 'publishing', element: <PublishingQueuePage /> },
      { path: 'analytics', element: <AnalyticsPage /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: 'admin', element: <AdminDashboardPage /> },
      { path: 'import-export', element: <ContentImportExportPage /> },
    ],
  },
  { path: '/404', element: <NotFoundPage /> },
  { path: '/500', element: <ServerErrorPage /> },
  { path: '*', element: <Navigate to="/404" replace /> },
])
