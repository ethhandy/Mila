import { Header, Banner, Landing, Footer } from './pages';
import { useEffect } from 'react';
import useGlobalStore from './state/store';

function App() {
  const [width, height, setWidth, setHeight] = useGlobalStore((state) => [
    state.width,
    state.height,
    state.setWidth,
    state.setHeight
  ]);

  const onResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
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
    </>
  );
}

export default App;
