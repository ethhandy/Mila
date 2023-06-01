import { useContext } from 'react';
import { ScreenContext } from '../../contexts';
import { GetStartedForm } from '../../components/Form';

const Signup = () => {
  const { width } = useContext(ScreenContext);

  return (
    <>
      <section
        style={{ backgroundImage: 'url("./assets/Signup.png")', height: (2063 * width) / 2880 }}
        className="bg-no-repeat bg-cover"
      ></section>

      <div className="flex justify-center" style={{ marginTop: '-48px' }}>
        <GetStartedForm extraClass="w-[504px]" />
      </div>
    </>
  );
};

export default Signup;
