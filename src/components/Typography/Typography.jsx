import cn from 'classnames';

const Typography = ({
  value = '',
  color = '',
  opacity = 1,
  weight = 4,
  size = null,
  align = '',
  extraClass = '',
  font = 'DM',
  tracking = ''
}) => {
  const sizeClass = cn(
    size === 'sm' ? 'text-sm max-sm:text-xs' : '',
    size === 'base' ? 'text-base max-sm:text-sm' : '',
    size === 'lg' ? 'text-lg max-sm:text-base' : '',
    size === 'xl' ? 'text-xl max-sm:text-lg' : '',
    size === '2xl' ? 'text-2xl max-sm:text-lg' : '',
    size === '3xl' ? 'text-3xl max-sm:text-xl' : '',
    size === '7xl' ? 'text-7xl max-sm:text-4xl' : '',
    size === '8xl' ? 'text-8xl max-sm:text-5xl' : ''
  );

  const colorTable = {
    black: '#292930',
    gray: '#999FAE',
    blue: '#2522BA',
    white: '#FFFFFF',
    purple: '#5956E9'
  };

  const weightTable = [
    '',
    'font-thin',
    'font-extralight',
    'font-light',
    'font-normal',
    'font-medium',
    'font-semibold',
    'font-bold',
    'font-extrabold',
    'font-black'
  ];

  const trackingClass = cn(
    tracking === 'tight' ? 'tracking-tight' : '',
    tracking === 'tighter' ? 'tracking-tighter' : ''
  );

  return (
    <p
      style={{
        color: color[0] === '#' ? color : colorTable[color],
        opacity,
        fontFamily: font === 'DM' ? "'DM Sans', sans-serif" : "'Poppins', sans-serif"
      }}
      className={cn(
        sizeClass,
        trackingClass,
        weightTable[weight],
        align === 'center' ? 'text-center' : '',
        extraClass
      )}
    >
      {value}
    </p>
  );
};

export default Typography;
