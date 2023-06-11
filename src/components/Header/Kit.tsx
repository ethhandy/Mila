// import { FiSearch } from 'react-icons/fi';
import { Button } from '../../elements/Button';
import { Typography } from '../../elements/Typography';
import { appLinks } from '../../utils/constant';
import { useSignupStore } from '../../state/store';

const Kit = () => {
  const [setCurrentPage] = useSignupStore((state) => [state.setCurrentPage]);

  return (
    <div className="flex gap-x-10 items-center text-black">
      {/* <FiSearch className="w-6 h-6" /> */}

      <Button
        color="pink"
        size="md"
        value={
          <Typography
            color="blue"
            size="base"
            value="Get Started"
            weight={5}
            font="Poppins"
            tracking="tighter"
          />
        }
        isLink={true}
        to={appLinks.signup}
        clickHandler={() => setCurrentPage(1)}
      />

      <Button
        color="white"
        size="md"
        value={
          <Typography
            color="blue"
            size="base"
            value="Login"
            weight={5}
            font="Poppins"
            tracking="tighter"
          />
        }
        isLink={true}
        to={appLinks.login}
        clickHandler={() => setCurrentPage(1)}
      />
    </div>
  );
};

export default Kit;
