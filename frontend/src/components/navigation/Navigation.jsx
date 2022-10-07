import { useContext, useState } from "react";
import { NavigationContext } from "../../providers/NavigationProvider";
import { Box, CircularProgress, Backdrop } from "@mui/material";
import ChatsNav from "./ChatsNav";
import PhoneNav from "./PhoneNav";
import OnlineFriendsNav from "./OnlineFriendsNav";
import NotificationsNav from "./NotificationsNav";
import NavigationMenu from "../menus/NavigationMenu";
import UserMenu from "../menus/UserMenu";

const Navigation = () => {
  const [navMenuPosition, setNavMenuPosition] = useState(0);
  const { position, logoutLoading } = useContext(NavigationContext);

  const navigationStyles = (theme) => ({
    backgroundColor: theme.palette.grey["200"],
    [theme.breakpoints.down("md")]: {
      transform: `translateX(-${100 * position}%)`,
      transition: `transform 500ms ease-in-out`,
    },
    [theme.breakpoints.up("md")]: {
      flex: 1.75,
    },
    [theme.breakpoints.up("lg")]: {
      flex: 1.5,
    },
    [theme.breakpoints.up("xl")]: {
      flex: 1.25,
    },
  });

  const [{ profile, settings }, setUserMenu] = useState({
    profile: false,
    settings: false,
  });

  const toggleProfile = () => {
    setUserMenu((prevState) => ({ ...prevState, profile: !prevState.profile }));
  };
  const toggleSettings = () => {
    setUserMenu((prevState) => ({ ...prevState, settings: !prevState.settings }));
  };

  return (
    <>
      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={logoutLoading}>
        <CircularProgress size="10rem" thickness={5} />
      </Backdrop>
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        flex="1 0 100%"
        overflow="hidden"
        position="relative"
        sx={navigationStyles}
      >
        <NavigationMenu
          onNavigate={setNavMenuPosition}
          navMenuPosition={navMenuPosition}
          toggleMenu={{ toggleProfile, toggleSettings }}
        />
        <UserMenu open={{ profile, settings }} toggleMenu={{ toggleProfile, toggleSettings }} />
        <Box display="flex" width="100%" overflow="hidden" sx={{ "& > *": { transition: `transform 300ms linear` } }}>
          <ChatsNav position={navMenuPosition} />
          <PhoneNav position={navMenuPosition} />
          <OnlineFriendsNav position={navMenuPosition} />
          <NotificationsNav position={navMenuPosition} />
        </Box>
      </Box>
    </>
  );
};

export default Navigation;
