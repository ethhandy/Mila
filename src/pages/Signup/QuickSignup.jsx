import { Typography } from '../../elements/Typography';
import { Button } from '../../elements/Button';
import { useSignupStore } from '../../state/store';
import { AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

const QuickSignup = () => {
  const [setCurrentPage] = useSignupStore((state) => [state.setCurrentPage]);

  return (
    <section className="flex flex-col items-center h-screen w-screen justify-center gap-6">
      <div className="h-[463px] w-[800px] flex flex-col gap-6">
        <div className="flex justify-center">
          <img src="assets/Signup/Register.svg" alt="Courses" width={163} />
        </div>

        <Typography
          color="black"
          size="2xl"
          weight={6}
          align="center"
          font="Poppins"
          value="Sign up and start learning!"
        />

        <div className="flex gap-4 justify-center">
          <div className="flex justify-center">
            <Button
              color="white"
              size="sm"
              value={
                <div className="flex items-center gap-2 justify-center">
                  <AiFillFacebook className="w-6 h-6" />
                  <Typography value="Facebook" color="black" size="lg" />
                </div>
              }
              extraClass="w-72 border border-gray"
            />
          </div>
          <div className="flex justify-center">
            <Button
              color="white"
              size="sm"
              value={
                <div className="flex items-center justify-center gap-2">
                  <FcGoogle className="w-6 h-6" />
                  <Typography value="Google" color="black" size="lg" />
                </div>
              }
              extraClass="w-72 border border-gray"
            />
          </div>
        </div>

        <div onClick={() => setCurrentPage(10)}>
          <Typography
            value="Sign up with email"
            color="blue"
            size="lg"
            align="center"
            extraClass="hover:cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default QuickSignup;
