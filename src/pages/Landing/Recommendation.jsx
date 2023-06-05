import { Typography } from '../../components/Typography';

const Recommendation = () => {
  return (
    <section className="flex justify-center">
      <div className="w-[1440px] pl-52 pr-20">
        <div className="flex mt-[508px] relative">
          <div className="flex gap-6 flex-col">
            <Typography
              value="We are famous"
              color="#C75C6F"
              size="xl"
              weight={7}
              extraClass="tracking-tight"
            />
            <Typography
              value="Our reviews speak for themselves"
              color="black"
              weight={5}
              size="7xl"
              extraClass="tracking-tight w-[684px]"
            />
          </div>

          <div className="w-24 h-24 rounded-full bg-[#FAB8C4] absolute right-0" />
        </div>

        <div className="grid grid-cols-3 mt-36">
          <div className="flex flex-col gap-10">
            <Typography
              value="What users are saying"
              color="black"
              weight={5}
              extraClass="tracking-tighter text-[40px] w-[230px]"
            />
          </div>

          <div className="gap-y-24 gap-x-6 grid grid-cols-2 col-span-2 pr-32">
            {[
              {
                name: 'Emily',
                said: 'I’ve used many English apps, but I think Speak is the best fit for me! I think I’m beginning to comprehend (listening skills) as I’m speaking now. ',
                totalName: 'Emily',
                color: '#5956E9',
                path: 'Emily'
              },
              {
                name: 'Bento',
                said: 'Mila makes me practice speaking what I’ve learned which helps me remember better. It’s seriously the best.',
                totalName: 'Emily',
                color: '#5956E9',
                borderColor: '#C75C6F',
                path: 'Bento'
              },
              {
                name: 'Tam M.',
                said: 'I’ve been using it consistently because it’s easy to understand and the explanations are great!',
                totalName: 'Tran Mau Tri Tam',
                color: '#C75C6F',
                path: 'Bento'
              },
              {
                name: 'Laura',
                said: 'I’ve always stopped after the 3rd day (when starting something new), but I used this (app) everyday. The content wasn’t boring but rather fun. ',
                totalName: 'Laura',
                color: '#90D0B1',
                path: 'Laura'
              }
            ].map((person, index) => (
              <div
                key={index}
                className="border-t pt-16"
                style={{
                  borderColor: person.borderColor ? person.borderColor : person.color,
                  borderTopWidth: '2px'
                }}
              >
                <Typography
                  value={person.name}
                  weight={7}
                  size="xl"
                  extraClass="tracking-tight"
                  color={person.color}
                />
                <Typography
                  value={`"${person.said}"`}
                  size="2xl"
                  color="black"
                  extraClass="tracking-tight mt-8 mb-2.5 h-56"
                />
                <div className="flex gap-6">
                  <img
                    src={`./assets/Recommendations/${person.path}.png`}
                    alt={person.path}
                    className="w-12 h-12"
                  />
                  <div className="flex flex-col">
                    <Typography
                      value={person.totalName}
                      weight={5}
                      size="base"
                      color="black"
                      font="Poppins"
                      extraClass="tracking-tighter"
                    />
                    <Typography
                      value="User of Mila"
                      size="sm"
                      weight={5}
                      extraClass="tracking-tight"
                      color="gray"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
