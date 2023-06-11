import { Typography } from '../../elements/Typography';

const Left = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-indigo">
      <div className="flex flex-col gap-8 w-[510px]">
        <Typography value="Mila Ai" color="yellow" size="7xl" tracking="tight" weight={6} />
        <Typography
          value="Intelligent Learning"
          color="white"
          size="4xl"
          tracking="tight"
          weight={6}
        />
        <Typography
          value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut autem cumque distinctio doloribus id laborum provident quam similique! At, ducimus, minus! Consectetur non tenetur vitae voluptatum? Necessitatibus, rem voluptatum?"
          color="white"
          size="base"
          opacity={0.7}
          font="Poppins"
          extraClass="leading-loose"
        />
      </div>
    </section>
  );
};

export default Left;
