import { MdSend } from 'react-icons/md';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';

import { Typography } from '../../elements/Typography';
import { Sidebar } from '../../components/Sidebar';
import Content from './Content';
import Listening from '../../components/Listening/Listening';
import { IconButton } from '../../elements/Button';
import { TextField } from '../../elements/TextField';

const Dashboard = () => {
  return (
    <div className="flex w-screen h-screen relative">
      <Sidebar />
      <div className="flex flex-col w-full">
        <div className="flex flex-col p-10 w-full h-full overflow-y-auto">
          <Typography value="Basics of grammar" size="2xl" font="Poppins" weight={6} />
          <Content />
        </div>
        <div className="flex justify-center items-center w-full h-24 bg-blue-100 p-4">
          <Listening />
          <div className="flex-1 w-full">
            <TextField
              Icon={<HiOutlineChatBubbleLeftRight className="w-6 h-6" />}
              name="msg"
              type="text"
              fullWidth={true}
              placeholder="Ask any questions to Mila"
            />
          </div>
          <div className="flex px-4">
            <IconButton icon={<MdSend className="w-6 h-6" />} color="white" bgColor="blue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
