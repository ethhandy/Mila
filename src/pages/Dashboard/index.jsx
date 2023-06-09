import { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Header, Footer } from '../../components';

import Banner from './Banner';
import Features from './Features';
import Mission from './Mission';
import Challenges from './Challenges';
import Advantage from './Advantage';
import Recommendation from './Recommendation';
import Download from './Download';

import './landing.css';

import { useGlobalStore } from '../../state/store';

const Landing = () => {
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

      <div
        style={{
          marginTop: '-98px'
        }}
        className="relative"
      >
        <div
          className="w-8 h-8 rounded-full bg-purple-100 absolute z-10"
          style={{ top: -((133 * height) / 1024 + 16), left: (691 * width) / 1440 }}
        />
        <div
          className="w-[180px] h-[180px] rounded-full bg-pink-100 absolute z-10"
          style={{ top: -90, left: (790 * width) / 1440 }}
        />
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

      <Mission />
      <Challenges />
      <Advantage />
      <Recommendation />
      <Download />

      <Footer />
    </>
  );
};

export default Landing;
