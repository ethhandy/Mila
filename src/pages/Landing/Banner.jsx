import { Typography } from '../../components/Typography';
import { GetStartedForm } from '../../components/Form';

const Banner = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="flex">
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
            tracking="tight"
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
              size="3xl"
              color="black"
              weight={5}
              value="Mila speaks :"
              tracking="tight"
            />
            <div className="flex gap-4 items-center">
              {['uk', 'spain', 'france', 'germany', 'china', 'japan'].map((country, index) => (
                <img
                  src={require(`../../assets/countries/${country}.png`)}
                  alt="country"
                  width={64}
                  height={55}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="pt-14 w-[708px]">
          <img src={require('../../assets/robot.png')} alt="robot" className="ml-14" height={453} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
