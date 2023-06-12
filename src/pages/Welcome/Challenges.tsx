import { Button } from '../../elements/Button';
import { Typography } from '../../elements/Typography';
import { useGlobalStore } from '../../state/store';

const Challenges = () => {
  const [width] = useGlobalStore((state) => [state.width]);

  return (
    <section
      style={{
        backgroundImage: 'url("./assets/Challenges.png")'
      }}
      className="bg-auto bg-no-repeat bg-center pt-40 pr-24 flex h-[758px] relative z-10"
    >
      <div className="w-[432px] flex flex-col" style={{ marginLeft: 714 + (width - 1250) / 2 }}>
        <Typography value="You’re not alone" weight={7} size="xl" color="indigo" tracking="tight" />
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
          tracking="tight"
          extraClass="mt-6"
        />
        <Typography
          value="The PvP feature offers a competitive experience where two users face off in a language challenge, answering a series of AI-generated questions."
          size="base"
          color="black"
          opacity={0.7}
          tracking="tight"
          extraClass="mt-10 mb-16"
          font="Poppins"
        />

        <Button
          color="indigo"
          size="md"
          value={
            <Typography
              value="See Challenges"
              color="white"
              weight={5}
              tracking="tighter"
              size="base"
            />
          }
        />
      </div>
    </section>
  );
};

export default Challenges;
