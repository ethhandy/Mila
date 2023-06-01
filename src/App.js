import {
  Header,
  Banner,
  Features,
  Signup,
  Mission,
  Challenges,
  Advantage,
  Recommendation
} from './pages';
import { useState, useEffect } from 'react';
import { ScreenContext } from './contexts';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const onResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <ScreenContext.Provider value={{ width, height }}>
      <div
        style={{
          backgroundImage: 'url("./assets/Circle.png")',
          height: (1122 * width) / 1440,
          minHeight: 1122
        }}
        className="bg-no-repeat bg-cover z-10 sticky"
      >
        <Header />
        <Banner />
      </div>

      <Features />
      <Signup />
      <Mission />
      <Challenges />
      <Advantage />
      <Recommendation />
    </ScreenContext.Provider>
  );
}

export default App;
