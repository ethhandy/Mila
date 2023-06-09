import { AiOutlineDown } from 'react-icons/ai';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Typography } from '../Typography';
import cn from 'classnames';

const getMenuItem = (item) => {
  const { value, to } = item;

  return (
    <a href={to}>
      <div className={cn('rounded-xl px-4 py-2 hover:cursor-pointer hover:bg-blue-200')}>
        <Typography size="lg" color="black" value={value} />
      </div>
    </a>
  );
};

const Dropdown = ({
  items = [
    // to: href where to go | optional, value : displayText, customized: true | false (default)
    // especially first index: [to, value, hasDownIcon : true | false]
  ]
}) => {
  const length = items.length;
  const menuBtn = items[0];

  if (length === 0) return <div />;
  if (length === 1)
    return (
      <div
        className={cn(
          'hover:text-black text-gray-400',
          'hover:cursor-pointer flex-none hover:border-b-2 pb-2 hover:border-purple-500'
        )}
      >
        <a href={items[0].to}>
          <p
            className={cn('text-base', 'font-medium')}
            style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.04em' }}
          >
            {items[0].value}
          </p>
        </a>
      </div>
    );

  return (
    <Menu as="div" className={cn('relative inline-block text-left outline-none flex-none')}>
      <Menu.Button className="flex items-end gap-1">
        <div
          className={cn(
            'hover:text-black text-gray-400',
            'hover:cursor-pointer flex-none hover:border-b-2 hover:border-purple-500'
          )}
        >
          <a href={items[0].to}>
            <div className={cn('flex gap-x-3.5 items-center')}>
              <p
                className={cn('text-base', 'font-medium mb-2')}
                style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '-0.04em' }}
              >
                {items[0].value}
              </p>
              {menuBtn.hasDownIcon === true ? (
                <p className={cn('text-base pt-0.5', 'font-medium mb-2')}>
                  <AiOutlineDown />
                </p>
              ) : (
                ''
              )}
            </div>
          </a>
        </div>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-50 mt-9 w-80 origin-top-right rounded-xl border border-gray-300 bg-white p-2 focus:outline-none">
          {items.map(
            (item, index) =>
              index > 0 && <Menu.Item key={index}>{() => getMenuItem(item)}</Menu.Item>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
