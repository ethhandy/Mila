import { Typography } from '../../elements/Typography';
import { Button } from '../../elements/Button';
import { useSignupStore } from '../../state/store';

const Age = () => {
  const [setCurrentPage] = useSignupStore((state) => [state.setCurrentPage]);

  return (
    <section className="flex flex-col items-center h-screen w-screen justify-center gap-6">
      <div className="h-[621px] w-[800px] flex flex-col gap-6">
        <div className="flex justify-center">
          <img src="assets/Signup/Age.svg" alt="Courses" width={226} />
        </div>

        <Typography
          color="black"
          size="2xl"
          weight={6}
          align="center"
          font="Poppins"
          value="How old are you?"
        />

        <div className="flex flex-col gap-2">
          {['0-17', '18-21', '22-35', '36-50', '50+'].map((item) => (
            <div className="flex justify-center">
              <Button
                color="white"
                size="sm"
                value={
                  <Typography value={item} color="gray" size="lg" weight={7} tracking="tight" />
                }
                extraClass="w-96 py-[10px] border border-gray"
                clickHandler={() => setCurrentPage(8)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Age;
