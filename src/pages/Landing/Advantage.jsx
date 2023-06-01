import { useContext } from 'react';
import { ScreenContext } from '../../contexts';
import { Typography } from '../../components/Typography';
import { Robot } from '../../components/Icon';

const Advantage = () => {
  const { width } = useContext(ScreenContext);
  const ratio = width / 1440;

  return (
    <section
      style={{
        backgroundImage: 'url("./assets/Advantage.png")',
        height: 980 * ratio
      }}
      className="bg-cover bg-no-repeat relative"
    >
      <div style={{ paddingLeft: 200 * ratio, paddingTop: 148 * ratio }}>
        <Typography
          value="Languages Learning Reinvented"
          weight={7}
          size="xl"
          extraClass="tracking-tight text-[#C75C6F] mb-4"
        />

        <Typography
          value="Learn Faster"
          color="blue"
          weight={7}
          extraClass="tracking-tight text-[144px]"
        />

        <Typography
          value="with Mila"
          color="white"
          weight={7}
          extraClass={`tracking-tight text-[144px] -mt-8`}
        />
      </div>
      <div
        className="flex flex-col rounded-full bg-[#5956E9] absolute pl-20 pr-16 gap-7 pr-18 pt-24"
        style={{ marginLeft: 735 * ratio, width: 505, height: 505, bottom: -100 }}
      >
        {Robot}
        <Typography
          value="We transform language education by offering an AI-driven platform that serves as a tailored, individual tutor, seamlessly understanding and addressing the unique needs of each learner."
          weight={5}
          size="xl"
          font="Poppins"
          color="white"
        />
        <div className="flex items-center">
          <div className="w-8 mr-4 border-white h-[1px] border" />
          <Typography
            value="Milla team"
            color="white"
            size="base"
            font="Poppins"
            extraClass="tracking-tighter"
            weight={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Advantage;
