import { Stack, Typography } from "@mui/material";
import ScrollableList from "../common/ScrollableList";
import NotificationItem from "../notifications/NotificationItem";
import { DUMMY_NOTIFICATIONS } from "../../data";

const NotificationsNav = ({ position }) => {
  return (
    <Stack flex="1 0 100%" p="12px" width="100%" spacing={1} sx={{ transform: `translateX(-${100 * position}%)` }}>
      <Typography fontSize="1.5rem" fontWeight="bold">
        Notifications
      </Typography>
      <ScrollableList gap="0.5rem" thumbWidth="10px" thumbColor="#8f0acd73">
        {/* {DUMMY_NOTIFICATIONS.map((notification) => (
          <NotificationItem {...notification} />
        ))} */}
      </ScrollableList>
    </Stack>
  );
};

export default NotificationsNav;
