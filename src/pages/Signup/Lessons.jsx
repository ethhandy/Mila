import { Typography } from '../../elements/Typography';
import { Button } from '../../elements/Button';
import { useSignupStore } from '../../state/store';

const Lessons = () => {
  const [setCurrentPage] = useSignupStore((state) => [state.setCurrentPage]);

  return (
    <section className="flex flex-col items-center h-screen w-screen justify-center gap-6">
      <div className="h-[456px] w-[800px] flex flex-col gap-6">
        <div className="flex justify-center">
          <img src="assets/Signup/Leassons.svg" alt="Courses" width={470} />
        </div>

        <Typography
          color="black"
          size="2xl"
          weight={6}
          align="center"
          font="Poppins"
          value="I have hundreds of lessons with excerpts from movies and a huge library of books"
        />

        <div className="flex justify-center">
          <Button
            color="purple"
            size="sm"
            value={<Typography value="Next" color="white" size="lg" />}
            clickHandler={() => setCurrentPage(7)}
            extraClass="w-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Lessons;
