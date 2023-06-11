import Logo from '../../components/Header/Logo';
import { HiOutlineMail } from 'react-icons/hi';
import { RiKey2Fill } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { TextField } from '../../elements/TextField';
import { Typography } from '../../elements/Typography';
import { Button } from '../../elements/Button';

import { appLinks } from '../../utils/constant';

const Right = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');

  return (
    <section className="flex h-screen items-center justify-center bg-gray-200">
      <form
        className="flex flex-col gap-6 bg-white border border-gray-50 w-[400px] p-4 rounded-md"
        onSubmit={handleSubmit((data) => {
          setData(JSON.stringify(data));
        })}
      >
        <div className="w-36">
          <Logo />
        </div>
        <div className="flex flex-col gap-3">
          <Typography value="Email address" color="black" size="base" font="Poppins" weight={6} />
          <TextField
            placeholder="Email"
            Icon={<HiOutlineMail className="w-6 h-6" />}
            name="email"
            register={register}
          />
        </div>

        <div className="flex flex-col gap-3">
          <Typography value="Password" color="black" size="base" font="Poppins" weight={6} />
          <TextField
            type="password"
            placeholder="Enter password"
            Icon={<RiKey2Fill className="w-6 h-6" />}
            name="password"
            register={register}
          />
        </div>

        <Typography value="Forgot password" color="black" size="base" font="Poppins" weight={6} />

        <Button
          color="indigo"
          size="sm"
          value={<Typography value="Login to Mila" color="white" font="Poppins" weight={6} />}
          type="submit"
        />

        <div onClick={() => (window.location.href = appLinks.signup)}>
          <Typography
            value="Create an account"
            color="indigo"
            size="base"
            font="Poppins"
            weight={6}
            extraClass="hover:underline hover:cursor-pointer"
          />
        </div>
      </form>
    </section>
  );
};

export default Right;
