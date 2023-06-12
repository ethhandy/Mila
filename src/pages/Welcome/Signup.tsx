import { GetStartedForm } from '../../elements/Form';
import { Typography } from '../../elements/Typography';
import { useGlobalStore } from '../../state/store';

const Signup = () => {
  const [width] = useGlobalStore((state) => [state.width]);

  return (
    <>
      <section
        style={{ backgroundImage: 'url("./assets/Signup.png")', height: (2063 * width) / 2880 }}
        className="bg-no-repeat bg-cover"
      ></section>

      <div className="flex justify-center" style={{ marginTop: '-48px' }}>
        <GetStartedForm extraClass="w-[504px]" />
      </div>

      <div className="flex flex-col" style={{ marginTop: '-196px' }}>
        <div className="flex justify-center">
          <Typography
            color="black"
            value="Ready to get started?"
            size="2xl"
            weight={5}
            tracking="tighter"
          />
        </div>
        <div className="flex justify-center">
          <Typography
            color="black"
            value="Sign up with your mail"
            size="2xl"
            weight={5}
            tracking="tighter"
          />
        </div>
      </div>
    </>
  );
};

export default Signup;
