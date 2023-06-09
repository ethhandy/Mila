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
    color === 'pink' ? 'bg-pink-100 hover:bg-pink-200' : '',
    color === 'purple' ? 'bg-purple-100 hover:bg-purple-200' : ''
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
