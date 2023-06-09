import { Dropdown } from '../../elements/Dropdown';

const PageMenu = () => {
  return (
    <div className="flex gap-x-12">
      <Dropdown
        items={[
          {
            value: 'Features',
            to: '/features'
          }
        ]}
      />
      <Dropdown
        items={[
          {
            value: 'Pricing',
            to: '/pricing'
          }
        ]}
      />
      <Dropdown
        items={[
          {
            value: 'Tours',
            to: '/tours'
          }
        ]}
      />

      <Dropdown items={[{ value: 'Explore', hasDownIcon: true }, {}]} />
    </div>
  );
};

export default PageMenu;
