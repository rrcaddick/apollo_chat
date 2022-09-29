import { createContext, useState } from "react";
import { useLogout } from "../hooks/useLogout";

const NavigationContext = createContext({
  position: 0,
  setPosition: () => {},
  logout: () => {},
  logoutLoading: false,
  logoutSuccess: false,
});

const NavigationProvider = ({ children }) => {
  const [position, setPosition] = useState(0);

  const { logout, loading, success } = useLogout();

  const contextValue = {
    position,
    setPosition,
    logout,
    logoutLoading: loading,
    logoutSuccess: success,
  };

  return <NavigationContext.Provider value={contextValue}>{children}</NavigationContext.Provider>;
};

export { NavigationContext };

export default NavigationProvider;
