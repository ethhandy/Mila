import { Suspense } from 'react';

const withSuspense = (Component) => (props) => {
  return (
    <Suspense fallback="Loading...">
      <Component {...props} />
    </Suspense>
  );
};

export default withSuspense;
