import Logo from './Logo';
import Kit from './Kit';

const Header = () => {
  return (
    <header className="pt-12 pb-12" style={{ paddingLeft: '8%', paddingRight: '2.5%' }}>
      <nav className="flex items-center justify-between">
        <div className="flex gap-20 items-center">
          <Logo />
        </div>
        <Kit />
      </nav>
    </header>
  );
};

export default Header;
