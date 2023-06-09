/* eslint-disable react-hooks/exhaustive-deps */
import Level from './Level';
import Welcome from './Welcome';

import { useSignupStore } from '../../state/store';
import Courses from './Courses';
import Purpose from './Purpose';
import Interesting from './Interesting';
import Lessons from './Lessons';
import Age from './Age';
import Time from './Time';
import QuickSignup from './QuickSignup';
import SignupWithEmail from './SignupWithEmail';
import { Steps } from '../../components/Steps';
import { useEffect } from 'react';

const Signup = () => {
  const [currentPage, setCurrentPage] = useSignupStore((state) => [
    state.currentPage,
    state.setCurrentPage
  ]);

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  return (
    <div className="flex flex-col relative">
      <div className="flex justify-center h-20 items-center pt-5 gap-14">
        <a className="hover:cursor-pointer z-10" href="/">
          <img src={require('../../assets/Logo.png')} alt="Logo" />
        </a>
        <div className="w-[552px]">
          <Steps current={Math.min(7, currentPage - 2)} />
        </div>
      </div>

      <div className="absolute">
        {currentPage === 1 ? (
          <Welcome />
        ) : currentPage === 2 ? (
          <Level />
        ) : currentPage === 3 ? (
          <Courses />
        ) : currentPage === 4 ? (
          <Purpose />
        ) : currentPage === 5 ? (
          <Interesting />
        ) : currentPage === 6 ? (
          <Lessons />
        ) : currentPage === 7 ? (
          <Age />
        ) : currentPage === 8 ? (
          <Time />
        ) : currentPage === 9 ? (
          <QuickSignup />
        ) : currentPage === 10 ? (
          <SignupWithEmail />
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default Signup;
