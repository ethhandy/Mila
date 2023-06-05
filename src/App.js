import {
  Header,
  Banner,
  Features,
  Mission,
  Challenges,
  Advantage,
  Recommendation,
  Download,
  Footer
} from './pages';
import { useState, useEffect } from 'react';
import { ScreenContext } from './contexts';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './App.css';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

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
      <div
        style={{
          marginTop: '-98px'
        }}
      >
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          containerClass="carousel-container"
          infinite={true}
        >
          <Features />
          <Features />
          <Features />
        </Carousel>
      </div>

      {/* <Signup /> */}
      <Mission />
      <Challenges />
      <Advantage />
      <Recommendation />
      <Download />
      <Footer />
    </ScreenContext.Provider>
  );
}

export default App;
