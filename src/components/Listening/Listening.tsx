import { MdOutlineSettingsVoice, MdSettingsVoice } from 'react-icons/md';
import { IconButton } from '../../elements/Button';

const Listening = () => {
  return (
    <div className="flex items-center px-4 justify-between">
      <IconButton icon={<MdSettingsVoice className="w-6 h-6" />} color="black" bgColor="white" />
    </div>
  );
};

export default Listening;
