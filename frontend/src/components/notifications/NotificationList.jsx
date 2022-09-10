import { useContext } from "react";
import { NavigationContext } from "../../providers/NavigationProvider";
import { ChevronLeftSharp } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ScrollableList from "../layout/ScrollableList";
import NotificationItem from "./NotificationItem";

const NotificationList = ({ notifications }) => {
  const { mediumScreen, toggleDrawer, slideRight } = useContext(NavigationContext);
  const notificationHandler = () => {
    if (mediumScreen) {
      return toggleDrawer();
    }
    return slideRight();
  };
  return (
    <Box flex={1} p="12px 12px" display="flex" flexDirection="column" gap="0.25rem" overflow="hidden" height="50%">
      <Typography fontSize="1.5rem" fontWeight="bold">
        <IconButton onClick={notificationHandler}>
          <ChevronLeftSharp />
        </IconButton>
        Notifications
      </Typography>
      <ScrollableList gap="0.5rem" thumbWidth="10px" thumbColor="#8f0acd73">
        {notifications.map((notification) => (
          <NotificationItem {...notification} />
        ))}
      </ScrollableList>
    </Box>
  );
};

export default NotificationList;
