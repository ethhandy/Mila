/* eslint-disable jsx-a11y/anchor-has-content */
import cn from 'classnames';
import React, { FC } from 'react';

type ClickHandler = () => void;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  size?: 'sm' | 'md' | 'full';
  color?: 'white' | 'pink' | 'purple';
  isLink?: boolean;
  to?: string;
  clickHandler?: ClickHandler;
  extraClass?: string;
}

const Button: FC<ButtonProps> = ({ value, size, color, to, clickHandler, isLink, extraClass }) => {
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

  return isLink === true ? (
    <a className={cn(effectClass, sizeClass, extraClass)} href={to} onClick={clickHandler}>
      {value}
    </a>
  ) : (
    <button className={cn(effectClass, sizeClass, extraClass)} onClick={clickHandler}>
      {value}
    </button>
  );
};

Button.defaultProps = {
  value: 'Button',
  size: 'sm',
  color: 'purple',
  isLink: false,
  clickHandler: () => {},
  extraClass: ''
};
export default Button;
