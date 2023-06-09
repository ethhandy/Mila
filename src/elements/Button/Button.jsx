import cn from 'classnames';

const Button = ({
  value = '',

  size = 'lg',
  color = '',

  to = '',
  clickHandler = () => {},

  isLink = false
}) => {
  const effectClass = cn(
    color === 'white' ? 'bg-white shadow-2xl' : '',
    color === 'pink' ? 'bg-[#FAB8C4] hover:bg-[#FFBFCF]' : '',
    color === 'purple' ? 'bg-[#5956E9] hover:bg-[#5C5AED]' : ''
  );

  const sizeClass = cn(
    size === 'md' ? 'px-12 py-6 rounded-2xl' : '',
    size === 'full' ? 'w-full py-4' : ''
  );

  return (
    <button
      className={cn(effectClass, sizeClass)}
      onClick={() => {
        if (isLink) window.location.href = to;
        else clickHandler();
      }}
    >
      {value}
    </button>
  );
};

export default Button;
