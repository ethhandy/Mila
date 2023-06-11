import { useState } from 'react';
import { BiShow, BiHide } from 'react-icons/bi';

const TextField = ({ placeholder = '', Icon = <></>, type = 'text' }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex items-center relative">
      <input
        type={type === 'password' ? (show ? 'text' : 'password') : type}
        placeholder={placeholder}
        className="pl-12 border border-gray rounded-lg text-base h-12 w-96 font-medium"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      />
      <div className="absolute w-12 h-12 flex justify-center items-center">{Icon}</div>
      {type === 'password' ? (
        <div className="absolute right-3 flex justify-center items-center">
          <div className="hover:cursor-pointer" onClick={() => setShow((state) => !state)}>
            {show ? <BiHide className="w-6 h-6" /> : <BiShow className="w-6 h-6" />}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TextField;
