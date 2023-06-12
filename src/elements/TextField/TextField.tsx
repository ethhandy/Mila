import { FC, ReactNode, useState } from 'react';
import { BiShow, BiHide } from 'react-icons/bi';

type RegisterHandler = (name: string) => object;
export interface TextFieldProps {
  placeholder?: string;
  Icon?: ReactNode;
  type?: string;
  name?: string;
  fullWidth?: boolean;
  register?: RegisterHandler;
}

const TextField: FC<TextFieldProps> = ({
  placeholder,
  Icon,
  type,
  name = '',
  fullWidth = false,
  register = (name: string): any => {}
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex items-center relative">
      <input
        type={type === 'password' ? (show ? 'text' : 'password') : type}
        placeholder={placeholder}
        className={`pl-12 border border-gray rounded-lg text-base h-12 ${
          fullWidth ? 'w-full' : 'w-96'
        } font-medium`}
        style={{ fontFamily: "'Poppins', sans-serif" }}
        {...register(name)}
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

TextField.defaultProps = {
  placeholder: 'Input here',
  type: 'text',
  Icon: <></>
};

export default TextField;
