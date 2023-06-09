import { Typography } from '../../elements/Typography';
import { Button } from '../../elements/Button';
import { useSignupStore } from '../../state/store';

const Courses = () => {
  const [setCurrentPage] = useSignupStore((state) => [state.setCurrentPage]);

  return (
    <section className="flex flex-col items-center h-screen w-screen justify-center gap-6">
      <div className="h-[363px] w-[800px] flex flex-col gap-6">
        <div className="flex justify-center">
          <img src="assets/Signup/Courses.svg" alt="Courses" width={322} />
        </div>

        <Typography
          color="black"
          size="2xl"
          weight={6}
          align="center"
          font="Poppins"
          value="I have courses for any level"
        />

        <div className="flex justify-center">
          <Button
            color="purple"
            size="sm"
            value={<Typography value="Let's get started" color="white" size="lg" />}
            clickHandler={() => setCurrentPage(4)}
            extraClass="w-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Courses;
