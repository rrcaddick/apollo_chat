import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import { createContext, useState } from "react";

const NavigationContext = createContext({
  mediumScreen: false,
  drawerOpen: false,
  toggleDrawer: () => {},
  slideLeft: () => {},
  slideRight: () => {},
  slideStyles: {},
});

const NavigationProvider = ({ children }) => {
  const [position, setPosition] = useState(0);

  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const slideLeft = (position = null) => {
    if (typeof position === "number") {
      return setPosition(position);
    }
    setPosition((prevState) => prevState + 1);
  };

  const slideRight = (position = null) => {
    if (typeof position === "number") {
      return setPosition(position);
    }
    setPosition((prevState) => prevState - 1);
  };

  const slideStyles = {
    transform: `translateX(-${100 * position}%)`,
    transition: `all 500ms ease-in-out`,
  };

  const contextValue = {
    mediumScreen,
    drawerOpen,
    toggleDrawer,
    slideLeft,
    slideRight,
    slideStyles,
  };

  return <NavigationContext.Provider value={contextValue}>{children}</NavigationContext.Provider>;
};

export { NavigationContext };

export default NavigationProvider;
