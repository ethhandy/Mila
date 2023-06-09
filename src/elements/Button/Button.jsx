/* eslint-disable jsx-a11y/anchor-has-content */
import cn from 'classnames';

const Button = ({
  value = '',

  size = 'md',
  color = '',

  to = '',
  clickHandler = () => {},

  isLink = false,

  extraClass = ''
}) => {
  const effectClass = cn(
    color === 'white' ? 'bg-white' : '',
    color === 'pink' ? 'bg-pink-100 hover:bg-pink-200' : '',
    color === 'purple' ? 'bg-purple-100 hover:bg-purple-200' : ''
  );

  const sizeClass = cn(
    size === 'sm' ? 'py-2.5 rounded-2xl' : '',
    size === 'md' ? 'px-12 py-6 rounded-2xl' : '',
    size === 'full' ? 'w-full py-4' : ''
  );

  return isLink ? (
    <a className={cn(effectClass, sizeClass, extraClass)} href={to} onClick={clickHandler}>
      {' '}
      {value}{' '}
    </a>
  ) : (
    <button
      className={cn(effectClass, sizeClass, extraClass)}
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
