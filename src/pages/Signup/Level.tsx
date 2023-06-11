import { Button } from '../../elements/Button';
import { Typography } from '../../elements/Typography';
import { useSignupStore } from '../../state/store';

const Level = () => {
  const [setCurrentPage] = useSignupStore((state) => [state.setCurrentPage]);

  return (
    <section className="flex flex-col items-center h-screen w-screen justify-center gap-6">
      <div className="h-[511px] flex flex-col gap-8">
        <div className="flex justify-center">
          <img src="assets/Signup/Think.svg" alt="think" width={193} />
          <img src="assets/Signup/Level.svg" alt="level" width={193} />
        </div>

        <Typography
          color="black"
          size="2xl"
          weight={6}
          align="center"
          font="Poppins"
          value="How do you evaluate your language level?"
        />

        <div className="flex flex-col gap-4">
          {['Beginner', 'Intermediate', 'Advanced'].map((item, index) => (
            <div className="flex justify-center" key={index}>
              <Button
                color="white"
                size="sm"
                value={
                  <Typography value={item} color="gray" size="lg" weight={7} tracking="tight" />
                }
                extraClass="w-96 py-[10px] border border-gray"
                clickHandler={() => setCurrentPage(3)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Level;
