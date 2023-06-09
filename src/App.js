import { RouterProvider } from 'react-router';

import { Loader } from './components';
import { router } from './routes';

import './index.css';

function App() {
  return <RouterProvider router={router} fallbackElement={<Loader />} />;
}

export default App;
