import Logo from './Logo';
import PageMenu from './PageMenu';
import Kit from './Kit';

const Header = () => {
  return (
    <div className="pt-12 pb-20" style={{ paddingLeft: '8%', paddingRight: '8%' }}>
      <nav className="flex items-center justify-between">
        <div className="flex gap-20 items-center">
          <Logo />
          <PageMenu />
        </div>
        <Kit />
      </nav>
    </div>
  );
};

export default Header;
