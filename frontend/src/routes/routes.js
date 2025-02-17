import React from 'react';
import LandingPage from '../components/landing/LandingPage';
import Dashboard from '../components/dashboard/Dashboard';
import LendingServices from '../components/dashboard/LendingServices';
import TransactionCenter from '../components/transactions/TransactionCenter';
import HelpSupportPage from '../components/help/HelpSupportPage';
import SettingsPage from '../components/settings/SettingsPage';
import SecurityVerification from '../components/security/SecurityVerification';
import GroupManagement from '../components/group/GroupManagement';
import GroupActivities from '../components/group/GroupActivities';
import MemberProfile from '../components/group/MemberProfile';
import AnalyticsReports from '../components/analytics/AnalyticsReports';
import RealTimeTracking from '../components/features/RealTimeTracking';
import AIFraudDetection from '../components/features/AIFraudDetection';
import AutomatedAuditing from '../components/features/AutomatedAuditing';


const routes = [
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/transactions',
    element: <TransactionCenter />
  },
  {
    path: '/help',
    element: <HelpSupportPage />
  },
  {
    path: '/settings',
    element: <SettingsPage />
  },
  {
    path: '/security',
    element: <SecurityVerification />
  },
  {
    path: '/groups',
    element: <GroupManagement />
  },
  {
    path: '/groups/:groupId',
    element: <GroupManagement />
  },
  {
    path: '/groups/activities',
    element: <GroupActivities />
  },
  {
    path: '/groups/member/:memberId',
    element: <MemberProfile />
  },
  {
    path: '/analytics',
    element: <AnalyticsReports />
  },
  {
    path: '/features/real-time-tracking',
    element: <RealTimeTracking />
  },
  {
    path: '/features/ai-fraud-detection',
    element: <AIFraudDetection />
  },
  {
    path: '/features/automated-auditing',
    element: <AutomatedAuditing />
  },

  {
    path: '/lending',
    element: <LendingServices />
  },

];

export default routes;