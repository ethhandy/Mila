import { Typography } from '../../elements/Typography';
import { BackToTop } from '../../elements/Icon';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center">
        <div className="w-[1040px] grid grid-cols-4">
          <img src={require('../../assets/Logo.png')} alt="Logo" height={53} />
          {[
            ['Company', 'About us', 'Jobs', 'Press', 'Blog'],
            ['Support', 'Contact us', 'Cookies', 'Privacy & terms', 'Sitemap'],
            ['Community', 'App', 'Languages', 'Forum']
          ].map((section, index) => (
            <div key={index} className="flex flex-col">
              {section.map((item, i) => (
                <Typography
                  key={i}
                  color={i === 0 ? 'gray' : 'black'}
                  size="base"
                  font="Poppins"
                  tracking="tight"
                  extraClass={`${i === 0 ? 'mb-14' : 'mb-4 hover:cursor-pointer'}`}
                  value={item}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <div className="flex border-gray-100 border-t pt-8 pb-20 justify-between w-[1040px]">
          <Typography
            color="gray"
            value="© 2023, Parallel Agency."
            weight={5}
            size="sm"
            tracking="tight"
          />

          <div
            className="flex gap-4 items-center hover:cursor-pointer"
            onClick={() => scroll.scrollToTop({ delay: 200 })}
          >
            {BackToTop}
            <Typography color="gray" value="Back to top" weight={5} size="sm" tracking="tight" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
