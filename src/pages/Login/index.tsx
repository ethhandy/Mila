import { useNavigate } from 'react-router';

import Left from './Left';
import Right from './Right';

import { useAuthStore } from '../../state/store';
import { useEffect } from 'react';

const Login = () => {
  const [isAuthenticated] = useAuthStore((state) => [state.isAuthenicated]);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/dashboard');
  }, [isAuthenticated]);

  return (
    <section className="grid grid-cols-2">
      <Left />
      <Right />
    </section>
  );
};

export default Login;
