import { Navigate } from 'react-router';
import { useAuthStore } from '../state/store';

const withAuth = (Component: React.FC) => (props: JSX.IntrinsicAttributes) => {
  const [isAuthenicated] = useAuthStore((state) => [state.isAuthenicated]);

  return isAuthenicated ? <Component {...props} /> : <Navigate to="/" />;
};

export default withAuth;
