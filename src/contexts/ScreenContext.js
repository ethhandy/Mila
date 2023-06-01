import { createContext } from 'react';

const defaultValue = {
  width: window.innerWidth,
  height: window.innerHeight,
  setWidth: () => {},
  setHeight: () => {}
};

const ScreenContext = createContext(defaultValue);

export default ScreenContext;
