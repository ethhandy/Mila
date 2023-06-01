import { useContext } from 'react';
import { Button } from '../../components/Button';
import { Typography } from '../../components/Typography';
import { ScreenContext } from '../../contexts';

const Challenges = () => {
  const { width } = useContext(ScreenContext);

  return (
    <section
      style={{
        backgroundImage: 'url("./assets/Challenges.png")'
      }}
      className="bg-auto bg-no-repeat bg-center mb-28 pt-40 pr-24 flex h-[758px]"
    >
      <div className="w-[432px] flex flex-col" style={{ marginLeft: 714 + (width - 1250) / 2 }}>
        <Typography
          value="You’re not alone"
          weight={7}
          size="xl"
          color="purple"
          extraClass="tracking-tight"
        />
        <Typography
          value={
            <>
              Online Challenge
              <span className="text-[#5956E9]">.</span>
            </>
          }
          weight={5}
          size="7xl"
          color="black"
          extraClass="tracking-tight mt-6"
        />
        <Typography
          value="The PvP feature offers a competitive experience where two users face off in a language challenge, answering a series of AI-generated questions."
          size="base"
          color="black"
          opacity={0.7}
          extraClass="tracking-tight mt-10 mb-16"
          font="Poppins"
        />

        <Button
          color="purple"
          size="md"
          value={
            <Typography
              value="See Challenges"
              color="white"
              weight={5}
              extraClass="tracking-tighter"
              size="base"
            />
          }
        />
      </div>
    </section>
  );
};

export default Challenges;
