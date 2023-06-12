import { useState } from 'react';
import { MdHome, MdSchool, MdVideogameAsset, MdBarChart, MdSettings } from 'react-icons/md';

import { Typography } from '../../elements/Typography';

const Sidebar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex bg-[#2563EB] py-5">
      <div className="w-[300px] px-4 flex flex-col gap-4">
        <img
          src={require('../../assets/Logo.png')}
          alt="logo"
          className="hover:cursor-pointer"
          width={128}
        />

        {[
          {
            title: 'Homefeed',
            icon: <MdHome className="w-6 h-6 text-white" />
          },
          {
            title: 'Practice & Study',
            icon: <MdSchool className="w-6 h-6 text-white" />
          },
          {
            title: 'Challenge',
            icon: <MdVideogameAsset className="w-6 h-6 text-white" />
          },
          {
            title: 'Progress & Analytics',
            icon: <MdBarChart className="w-6 h-6 text-white" />
          },
          {
            title: 'User Settings',
            icon: <MdSettings className="w-6 h-6 text-white" />
          }
        ].map((item, index) => (
          <div
            key={index}
            className={`flex gap-3 hover:cursor-pointer rounded-md items-center hover:bg-opacity-10 hover:bg-[#EFF6FF] ${
              index === currentIndex ? 'bg-blue' : ''
            } p-3`}
            onClick={() => setCurrentIndex(index)}
          >
            {item.icon}
            <Typography value={item.title} size="base" color="white" weight={5} font="Poppins" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
