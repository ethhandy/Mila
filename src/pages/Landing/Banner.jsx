import { Typography } from '../../components/Typography';
import { GetStartedForm } from '../../components/Form';

const Banner = () => {
  return (
    <section className="flex gap-16 justify-center">
      <div className="flex flex-col gap-y-10" style={{ width: '482px' }}>
        <Typography
          size="8xl"
          color="black"
          weight={5}
          font="DM"
          value={
            <>
              A new way to learn languages
              <span style={{ color: '#5956E9' }}>.</span>
            </>
          }
          extraClass="tracking-tight"
        />

        <Typography
          size="lg"
          color="gray"
          value="Talk about anything and get instant feedback from the world’s most advanced AI language tutor. "
          extraClass="pr-36 leading-7"
          font="Poppins"
        />

        <GetStartedForm />

        <div className="flex flex-col gap-7 mt-4">
          <Typography
            size={'3xl'}
            color="black"
            weight={5}
            value="Mila speaks :"
            extraClass="tracking-tight"
          />
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

      <div className="pt-14" style={{ width: '607px' }}>
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
    </section>
  );
};

export default Banner;
