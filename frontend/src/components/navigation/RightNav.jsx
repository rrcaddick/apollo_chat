import { useContext } from "react";
import { NavigationContext } from "../../providers/NavigationProvider";
import { Box, Drawer } from "@mui/material";
import OnlineFriendsList from "../friends/OnlineFriendsList";
import NotificationList from "../notifications/NotificationList";
import { DUMMY_NOTIFICATIONS, DUMMY_USERS } from "../../data";

const RightNav = () => {
  const { slideStyles, mediumScreen, drawerOpen, toggleDrawer } = useContext(NavigationContext);
  // Right drawer render
  if (mediumScreen) {
    return (
      <Drawer
        open={drawerOpen}
        ModalProps={{ onBackdropClick: toggleDrawer }}
        display="flex"
        flexGrow={1}
        anchor="right"
        variant="temporary"
        flex={1}
        sx={{
          width: "40%",
          flexShrink: 0,
          overflow: "hidden",
          [`& .MuiDrawer-paper`]: {
            width: "40%",
            boxSizing: "border-box",
          },
        }}
      >
        <Box flex={1} overflow="hidden">
          {/* Notifications */}
          <NotificationList notifications={DUMMY_NOTIFICATIONS} />

          {/* Online Friends */}
          <OnlineFriendsList onlineFriends={DUMMY_USERS} />
        </Box>
      </Drawer>
    );
  }

  // Normal render
  return (
    <Box
      flex="1 0 100%"
      sx={(theme) => ({
        [theme.breakpoints.up("lg")]: {
          flex: 1,
        },
        [theme.breakpoints.up("md")]: {
          flex: "0 0 0",
          minWidth: "0",
        },
        [theme.breakpoints.down("md")]: {
          ...slideStyles,
        },
      })}
    >
      {/* Notifications */}
      <NotificationList notifications={DUMMY_NOTIFICATIONS} />

      {/* Online Friends */}
      <OnlineFriendsList onlineFriends={DUMMY_USERS} />
    </Box>
  );
};

export default RightNav;
