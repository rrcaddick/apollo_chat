import { createContext, useState } from "react";

const NavigationContext = createContext({
  position: 0,
  setPosition: () => {},
});

const NavigationProvider = ({ children }) => {
  const [position, setPosition] = useState(0);

  const contextValue = {
    position,
    setPosition,
  };

  return <NavigationContext.Provider value={contextValue}>{children}</NavigationContext.Provider>;
};

export { NavigationContext };

export default NavigationProvider;
