import { Typography } from '../../elements/Typography';
import { Button } from '../../elements/Button';
import { useSignupStore } from '../../state/store';

const Welcome = () => {
  const [setCurrentPage] = useSignupStore((state) => [state.setCurrentPage]);

  return (
    <section className="h-screen w-screen flex items-center justify-center">
      <div className="w-[460px] h-[467px] flex flex-col gap-6">
        <div className="flex justify-center">
          <img src="./assets/Signup/Hello.svg" alt="Hello" width={212} height={184} />
        </div>
        <Typography
          color="black"
          size="2xl"
          weight={6}
          align="center"
          font="Poppins"
          value="Hello, I'm Mila!"
        />
        <Typography
          color="black"
          size="2xl"
          weight={6}
          align="center"
          font="Poppins"
          value="I'll show you the most fun way to learn languages*"
        />
        <div className="flex justify-center">
          <Button
            color="indigo"
            size="sm"
            value={<Typography value="Let's get started" color="white" size="lg" />}
            clickHandler={() => setCurrentPage(2)}
            extraClass="w-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
