import cn from 'classnames';

const IconButton = ({ size = '', color = '', clickHandler = () => {}, Icon = <></> }) => {
  const effectClass = cn(color === 'purple' ? 'hover:bg-[#5956E9] text-white' : '');

  const sizeClass = cn(size === 'sm' ? 'w-10 h-10' : '');

  return (
    <button
      className={cn(
        'flex items-center justify-center rounded-full',
        'border border-gray-600',
        effectClass,
        sizeClass
      )}
      onClick={clickHandler}
    >
      {Icon}
    </button>
  );
};

export default IconButton;
