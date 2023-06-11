import { Typography } from '../../elements/Typography';

const Mission = () => {
  return (
    <section style={{ height: 921 }} className="flex justify-center items-center">
      <div className="flex flex-col w-[500px] ml-44">
        <Typography size="xl" weight={7} color="indigo" value="Our mission" tracking="tight" />
        <Typography
          size="7xl"
          color="black"
          weight={5}
          tracking="tight"
          extraClass="mt-6"
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
        src={require('../../assets/FeatureList.png')}
        alt="Graphic"
        style={{ width: '688px', height: '656px' }}
      />
    </section>
  );
};

export default Mission;
