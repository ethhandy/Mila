import { Suspense } from 'react';

import { Loader } from '../components';

const withSuspense = (Component) => (props) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default withSuspense;
