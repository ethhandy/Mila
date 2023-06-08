import { Typography } from '../../components/Typography';
import { Button } from '../../components/Button';

const Download = () => {
  return (
    <section
      style={{
        backgroundImage: 'url("./assets/Download.png")'
      }}
      className="bg-auto bg-no-repeat bg-center mt-36 mb-64 flex h-[606px] justify-center items-center flex-col"
    >
      <Typography
        value="Ready to use the smartest app language?"
        size="7xl"
        color="white"
        weight={5}
        tracking="tight"
        extraClass="text-center w-[890px]"
      />
      <Typography
        value="We offer a incredible learning experience."
        size="lg"
        font="Poppins"
        extraClass="mt-6 mb-10"
        color="white"
      />
      <Button
        color="white"
        size="md"
        value={
          <Typography
            value="Download now"
            size="base"
            color="blue"
            tracking="tighter"
            weight={5}
            font="Poppins"
          />
        }
      />
    </section>
  );
};

export default Download;
