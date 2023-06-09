import { RouterProvider } from 'react-router';

import { Loader } from './components';
import { router } from './routes';

const Loading = () => <Loader />;

function App() {
  return (
    <>
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </>
  );
}

export default App;
