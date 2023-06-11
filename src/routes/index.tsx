import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { appLinks } from '../utils/constant';
import withSuspense from '../hocs/withSuspense';

const Dashboard = withSuspense(lazy(() => import('../pages/Dashboard')));
const Signup = withSuspense(lazy(() => import('../pages/Signup')));
const Login = withSuspense(lazy(() => import('../pages/Login')));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: appLinks.signup,
    element: <Signup />
  },
  {
    path: appLinks.login,
    element: <Login />
  }
]);
