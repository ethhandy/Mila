import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import IconButton from './IconButton';

const AfterBeforeButton = ({ getPreviousPage = () => {}, getNextPage = () => {} }) => {
  return (
    <div className="w-80 flex gap-4">
      <IconButton
        diameter={40}
        color="purple"
        Icon={<HiOutlineArrowNarrowLeft />}
        size="sm"
        clickHandler={getPreviousPage}
      />
      <IconButton
        diameter={40}
        color="purple"
        Icon={<HiOutlineArrowNarrowRight />}
        size="sm"
        clickHandler={getNextPage}
      />
    </div>
  );
};

export default AfterBeforeButton;
