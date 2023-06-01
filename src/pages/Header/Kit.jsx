import { FiSearch } from 'react-icons/fi';
import { Button } from '../../components/Button';
import { Typography } from '../../components/Typography';

const Kit = () => {
  return (
    <div className="flex gap-x-10 items-center text-white">
      <FiSearch className="w-6 h-6" />
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
            extraClass="tracking-tighter"
          />
        }
      />
    </div>
  );
};

export default Kit;
