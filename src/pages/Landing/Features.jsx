import { Message, Voice } from '../../components/Icon';
import { Typography } from '../../components/Typography';

const Features = () => {
  return (
    <section
      style={{
        backgroundImage: 'url("./assets/Background.png")',
        minHeight: '1024'
      }}
      className="bg-no-repeat bg-cover box-border d-block "
    >
      <div className="flex justify-center">
        <div className="flex flex-col" style={{ width: '1075px' }}>
          <div className="flex pt-40">
            <Typography
              size="xl"
              weight={7}
              value="Features"
              color="white"
              extraClass="tracking-tight pr-44"
            />
            <div className="flex flex-col gap-10">
              <Typography
                size="7xl"
                weight={5}
                value="The most advanced AI Speaking technology"
                color="white"
                extraClass="tracking-tight"
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
            <div className="w-80" />
            <div className="grid grid-cols-2 w-full">
              <Typography
                size="2xl"
                color="white"
                weight={5}
                value="Express yourself freely"
                extraClass="tracking-tighter"
              />
              <Typography
                size="2xl"
                color="white"
                weight={5}
                value="Perfect your accent"
                extraClass="tracking-tighter"
              />
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
                extraClass="tracking-tight pr-24"
              />
              <Typography
                size="base"
                color="white"
                weight={4}
                opacity={0.5}
                value="Learn how to pronounce words correctly and clearly, with real-time voice feedback.​"
                font="Poppins"
                extraClass="tracking-tight pr-24"
              />
            </div>
          </div>

          <div className="flex mt-16 mb-24">
            <div className="w-80" />

            <div className="grid grid-cols-2 w-full items-center">
              <Typography
                size="base"
                color="white"
                weight={4}
                opacity={0.5}
                value="Find out more"
                font="Poppins"
                extraClass="tracking-tighter"
              />
              <div className="flex gap-4 items-center">
                <div className="w-10 " style={{ height: '1px', border: '1px solid white' }}></div>
                <Typography
                  size="base"
                  color="white"
                  weight={4}
                  value="Find out more"
                  font="Poppins"
                  extraClass="tracking-tighter"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
