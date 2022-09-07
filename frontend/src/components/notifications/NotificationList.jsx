import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ScrollableList from "../layout/ScrollableList";
import NotificationItem from "./NotificationItem";

const NotificationList = ({ notifications }) => {
  return (
    <Box flex={1} p="12px 24px" display="flex" flexDirection="column" gap="1rem" overflow="hidden">
      <Typography fontSize="1.5rem" fontWeight="bold">
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
