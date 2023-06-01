import { Message, Voice } from '../../components/Icon';
import { Typography } from '../../components/Typography';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const SecondLanding = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("./assets/Background.png")',
        minHeight: '1024',
        marginTop: '-98px'
      }}
      className="bg-no-repeat bg-cover box-border"
    >
      <div className="flex justify-center">
        <div className="flex flex-col" style={{ width: '1075px' }}>
          <div className="flex pt-40 gap-44">
            <Typography size="xl" weight={7} value="Features" color="white" />

            <div className="flex flex-col gap-10">
              <Typography
                size="7xl"
                weight={5}
                value="The most advanced AI Speaking technology"
                color="white"
              />
              <Typography
                size="lg"
                opacity={0.5}
                value="Mila is the first & only app that lets you get real conversational practice without needing a live tutor on the other end. And we build some serious AI tech to make that possible."
                color="white"
                extraClass="pr-72"
                font="Poppins"
              />
            </div>
          </div>

          <div className="flex mt-48">
            <div className="w-80" />
            <div className="grid grid-cols-2 w-full">
              {Voice}
              {Message}
            </div>
          </div>

          <div className="flex mt-9">
            <div className="flex w-80 items-center gap-8">
              <Typography value="02" size="sm" color="white" weight={5} />
              <div className="w-10 " style={{ height: '1px', border: '1px solid white' }}></div>
              <Typography value="03" size="sm" color="white" weight={5} opacity={0.3} />
            </div>
            <div className="grid grid-cols-2 w-full">
              <Typography size="2xl" color="white" weight={5} value="Express yourself freely" />
              <Typography size="2xl" color="white" weight={5} value="Perfect your accent" />
            </div>
          </div>

          <div className="flex mt-8">
            <div className="w-80" />
            <div className="grid grid-cols-2 w-full">
              <Typography
                size="base"
                color="white"
                weight={4}
                opacity={0.5}
                value="Practice communicating in English about any topic you want."
                font="Poppins"
              />
              <Typography
                size="base"
                color="white"
                weight={4}
                opacity={0.5}
                value="Learn how to pronounce words correctly and clearly, with real-time voice feedback.​"
                font="Poppins"
              />
            </div>
          </div>

          <div className="flex mt-16 mb-24">
            <div className="w-80 flex gap-4">
              <div
                className="flex items-center justify-center rounded-full w-10 h-10 text-white hover:cursor-pointer"
                style={{ border: '1px solid #555555' }}
              >
                <HiOutlineArrowNarrowLeft />
              </div>

              <div
                className="flex items-center justify-center rounded-full w-10 h-10 text-white hover:cursor-pointer"
                style={{ border: '1px solid #555555', backgroundColor: '#5956E9' }}
              >
                <HiOutlineArrowNarrowRight />
              </div>
            </div>

            <div className="grid grid-cols-2 w-full items-center">
              <Typography
                size="base"
                color="white"
                weight={4}
                opacity={0.5}
                value="Find out more"
                font="Poppins"
              />
              <div className="flex gap-4 items-center">
                <div className="w-10 " style={{ height: '1px', border: '1px solid white' }}></div>
                <Typography
                  size="base"
                  color="white"
                  weight={4}
                  value="Find out more"
                  font="Poppins"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondLanding;
