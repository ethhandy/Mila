import { Typography } from '../../elements/Typography';
import { Button } from '../../elements/Button';
import { useSignupStore } from '../../state/store';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

const Interesting = () => {
  const [setCurrentPage] = useSignupStore((state) => [state.setCurrentPage]);

  return (
    <section className="flex flex-col items-center h-screen w-screen justify-center gap-6">
      <div className="h-[558px] w-[800px] flex flex-col gap-6">
        <div className="flex justify-center">
          <img src="assets/Signup/Interesting.png" alt="Courses" width={358} />
        </div>
        <Typography
          color="black"
          size="2xl"
          weight={6}
          align="center"
          font="Poppins"
          value="What is more interesting for you to start with?"
        />
        <div className="flex flex-col gap-4">
          {['Courses', 'Books', 'All of above'].map((item, index) => (
            <div className="flex justify-center" key={index}>
              <Button
                color="white"
                size="sm"
                value={
                  <Typography value={item} color="gray" size="lg" weight={7} tracking="tight" />
                }
                extraClass="w-96 py-[10px] border border-gray hover:bg-[#d6f3ff]"
                clickHandler={() => setCurrentPage(6)}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 justify-center">
          <AiOutlineExclamationCircle className="w-6 h-6 text-purple-100" />
          <Typography
            color="gray"
            size="base"
            align="center"
            value="You can select a different section at any time"
          />
        </div>
      </div>
    </section>
  );
};

export default Interesting;
