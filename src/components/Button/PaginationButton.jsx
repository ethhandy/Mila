import { Typography } from '../Typography';

const PaginationButton = ({ getCurrentPage = () => {} }) => {
  return (
    <div className="flex w-80 items-center gap-8">
      <Typography
        value={`0${getCurrentPage()}`}
        size="sm"
        color="white"
        weight={5}
        extraClass="hover:cursor-pointer"
      />

      <div className="w-10 " style={{ height: '1px', border: '1px solid white' }}></div>

      <Typography
        value={`0${(getCurrentPage() % 3) + 1}`}
        size="sm"
        color="white"
        weight={5}
        opacity={0.3}
        extraClass="hover:cursor-pointer"
      />
    </div>
  );
};

export default PaginationButton;
