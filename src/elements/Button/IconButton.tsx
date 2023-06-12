import { ReactNode } from 'react';
import cn from 'classnames';

interface IconButtonInterface {
  icon: ReactNode;
  color?: string;
  bgColor?: string;
  opacity?: number;
}

const IconButton = ({ icon = <></>, color = 'blue', bgColor = 'white', opacity = 1 }) => {
  const effectClass = cn(
    bgColor === 'white' ? 'bg-white hover:bg-gray-100' : '',
    'hover:cursor-pointer',
    bgColor === 'blue' ? 'bg-blue hover:bg-blue-600' : '',
    'hover:cursor-pointer',
    color === 'white' ? 'text-white' : '',
    color === 'black' ? 'text-black' : ''
  );

  const sizeClass = cn('w-12 h-12');

  return (
    <button
      className={cn('flex items-center justify-center rounded-xl', effectClass, sizeClass)}
      style={{ opacity }}
    >
      {icon}
    </button>
  );
};

export default IconButton;
