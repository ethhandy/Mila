import { Typography } from '../../elements/Typography';
import { Button } from '../../elements/Button';
import { useSignupStore } from '../../state/store';

const Time = () => {
  const [setCurrentPage] = useSignupStore((state) => [state.setCurrentPage]);

  return (
    <section className="flex flex-col items-center h-screen w-screen justify-center gap-6">
      <div className="h-[584px] w-[800px] flex flex-col gap-6">
        <div className="flex justify-center">
          <img src="assets/Signup/Time.svg" alt="Courses" width={223} />
        </div>

        <Typography
          color="black"
          size="2xl"
          weight={6}
          align="center"
          font="Poppins"
          value="Select a convenient time to study"
        />

        <div className="flex flex-col gap-2">
          <div className="flex justify-center">
            <Button
              color="purple"
              size="sm"
              value={<Typography value="Set reminder" color="white" size="lg" />}
              clickHandler={() => setCurrentPage(9)}
              extraClass="w-96"
            />
          </div>
          <div className="flex justify-center">
            <Button
              color="white"
              size="sm"
              value={
                <Typography
                  value="Skip"
                  color="gray"
                  size="lg"
                  extraClass="hover:text-white w-96"
                />
              }
              clickHandler={() => setCurrentPage(9)}
              extraClass="w-96 hover:bg-purple-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Time;
