import { Typography } from '../../elements/Typography';

import { Sidebar } from '../../components/Sidebar';
import Content from './Content';

const Dashboard = () => {
  return (
    <div className="flex w-screen h-screen relative">
      <Sidebar />
      <div className="flex flex-col w-full">
        <div className="flex flex-col p-10 w-full h-full overflow-y-auto">
          <Typography value="Basics of grammar" size="2xl" font="Poppins" weight={6} />
          <Content />
        </div>
        <div className="flex justify-center items-center w-full h-24 bg-pink-100 p-4"></div>
      </div>
    </div>
  );
};

export default Dashboard;
