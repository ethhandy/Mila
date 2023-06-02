import { useContext } from 'react';
import { ScreenContext } from '../../contexts';
import { Typography } from '../../components/Typography';

const Mission = () => {
  const { width } = useContext(ScreenContext);

  return (
    <section style={{ height: (3684 * width) / 5760 }} className="flex justify-center items-center">
      <div className="flex flex-col w-[500px] ml-44">
        <Typography
          size="xl"
          weight={7}
          extraClass="tracking-tight"
          color="purple"
          value="Our mission"
        />
        <Typography
          size="7xl"
          color="black"
          weight={5}
          extraClass="tracking-tight mt-6"
          value={
            <>
              Adaptative Language Learning
              <span style={{ color: '#5956E9' }}>.</span>
            </>
          }
        />
        <Typography
          size="lg"
          color="gray"
          font="Poppins"
          extraClass="mt-10 pr-24"
          value="Unique, AI-driven tool that tailors language education to each user by taking into account their proficiency, goals, preferences, and performance."
        />
      </div>

      <img
        src="./assets/FeatureList.png"
        alt="Graphic"
        style={{ width: '688px', height: '656px' }}
      />
    </section>
  );
};

export default Mission;