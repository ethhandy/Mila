import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { appLinks } from '../utils/constant';
import withSuspense from '../hocs/withSuspense';

const Dashboard = withSuspense(lazy(() => import('../pages/Dashboard')));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />
  }
]);
