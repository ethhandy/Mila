import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { appLinks } from '../utils/constant';
import { withSuspense, withAuth } from '../hocs';
import { useAuthStore } from '../state/store';

const Welcome = withSuspense(lazy(() => import('../pages/Welcome')));
const Signup = withSuspense(lazy(() => import('../pages/Signup')));
const Login = withSuspense(lazy(() => import('../pages/Login')));
const Dashboard = withAuth(withSuspense(lazy(() => import('../pages/Dashboard'))));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />
  },
  {
    path: appLinks.signup,
    element: <Signup />
  },
  {
    path: appLinks.login,
    element: <Login />
  },
  {
    path: appLinks.dashboard,
    element: <Dashboard />
  }
]);
