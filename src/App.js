import { Header, FirstLanding, SecondLanding } from './pages';

function App() {
  return (
    <>
      <div
        style={{ backgroundImage: 'url("./assets/Circle.png")', height: '1122px' }}
        className="bg-no-repeat bg-cover z-10 sticky"
      >
        <Header />
        <FirstLanding />
      </div>
      <SecondLanding />
    </>
  );
}

export default App;
