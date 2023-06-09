import { Typography } from '../../elements/Typography';
import { Button } from '../../elements/Button';
import { useSignupStore } from '../../state/store';

const Purpose = () => {
  const [setCurrentPage] = useSignupStore((state) => [state.setCurrentPage]);

  return (
    <section className="flex flex-col items-center h-screen w-screen justify-center gap-6">
      <div className="h-[578px] w-[800px] flex flex-col gap-6">
        <div className="flex justify-center">
          <img src="assets/Signup/Purpose.svg" alt="Courses" width={417} />
        </div>
        <Typography
          color="black"
          size="2xl"
          weight={6}
          align="center"
          font="Poppins"
          value="What is your purpose for learning the language?"
        />

        <div className="flex justify-center">
          <div className="flex flex-col gap-1">
            {[
              'Watching movies in the original version',
              'For travels',
              'Reading books',
              'For work',
              'Communication and making friends'
            ].map((item, index) => (
              <div key={index} className="flex gap-2 items-center hover:cursor-pointer">
                <input
                  id={index}
                  type="checkbox"
                  className="w-4 h-4 rounded text-white border-gray-100"
                />
                <label
                  htmlFor={index}
                  className="text-gray text-base tracking-tight"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            color="purple"
            size="sm"
            value={<Typography value="Next" color="white" size="lg" />}
            clickHandler={() => setCurrentPage(5)}
            extraClass="w-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Purpose;
