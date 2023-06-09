import { Typography } from '../../elements/Typography';
import { useSignupStore } from '../../state/store';
import { TextField } from '../../elements/TextField';
import { HiOutlineMail } from 'react-icons/hi';
import { RiKey2Fill } from 'react-icons/ri';

const SignupWithEmail = () => {
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

        <div className="flex gap-4 justify-center items-center flex-col">
          <TextField placeholder="Email" Icon={<HiOutlineMail className="w-6 h-6" />} />
          <div className="flex flex-col gap-2">
            <TextField placeholder="Passport" Icon={<RiKey2Fill className="w-6 h-6" />} />
            <TextField placeholder="Confirm password" Icon={<RiKey2Fill className="w-6 h-6" />} />
          </div>
        </div>

        <div onClick={() => setCurrentPage(9)}>
          <Typography
            value="Quick sign up"
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

export default SignupWithEmail;
