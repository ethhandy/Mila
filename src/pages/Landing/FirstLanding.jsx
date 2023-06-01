import { Typography } from '../../components/Typography';
import { Button } from '../../components/Button';
import { MailBox } from '../../components/Icon';

const FirstLanding = () => {
  return (
    <div className="flex gap-16 justify-center">
      <div className="flex flex-col gap-y-10" style={{ width: '482px' }}>
        <Typography
          size="8xl"
          color="black"
          weight={5}
          font="DM"
          value="A new way to learn languages."
        />

        <Typography
          size="lg"
          color="gray"
          value="Talk about anything and get instant feedback from the world’s most advanced AI language tutor. "
          extraClass="pr-36 leading-7"
          font="Poppins"
        />

        <div className="w-full bg-white shadow-md shadow-gray-100 flex justify-between py-1.5 items-center pl-7 pr-2 rounded-lg">
          <div className="flex gap-2 items-center">
            {MailBox}
            <Typography color="gray" size="base" value="Email address" weight={4} font="Poppins" />
          </div>

          <Button
            color="purple"
            size="md"
            value={
              <Typography color="white" size="base" value="Get started" weight={5} font="Poppins" />
            }
          />
        </div>

        <div className="flex flex-col gap-7 mt-4">
          <Typography size={'3xl'} color="black" weight={5} value="Mila speaks :" />
          <div className="flex gap-4 items-center">
            {['uk', 'spain', 'france', 'germany', 'china', 'japan'].map((country, index) => (
              <img
                src={`./assets/countries/${country}.png`}
                alt="country"
                width={64}
                height={55}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="pt-14" style={{ width: '707px' }}>
        <img src="./assets/robot.png" alt="robot" className="ml-14" />

        <div
          className="flex items-center bg-white rounded-xl pt-1 drop-shadow z-10"
          style={{ width: 310, marginTop: '-114px' }}
        >
          <img src="./assets/countries/japan.png" alt="japan" />
          <Typography value="やあ！私はミラです" size="2xl" color="black" weight={5} />
        </div>

        <div
          className="flex items-center bg-white px-3 rounded-xl py-1 drop-shadow pt-1"
          style={{ width: 354, marginTop: '-365px', marginLeft: '340px' }}
        >
          <img src="./assets/countries/france.png" alt="france" />
          <Typography value="Bonjour! Je suis Mila!" size="2xl" color="black" weight={5} />
        </div>
      </div>
    </div>
  );
};

export default FirstLanding;
