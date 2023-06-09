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

const Signup = () => {
  const [currentPage] = useSignupStore((state) => [state.currentPage]);

  return currentPage === 1 ? (
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
  );
};

export default Signup;
