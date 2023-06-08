import { Header, Banner, Landing, Footer } from './pages';
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
          height: Math.max(935, height + 98),
          backgroundSize: `${width}px ${Math.max(935, height + 98)}px`
        }}
        className="bg-no-repeat bg-cover z-10 sticky"
      >
        <Header />
        <Banner />
      </div>

      <Landing />
      <Footer />
    </ScreenContext.Provider>
  );
}

export default App;
