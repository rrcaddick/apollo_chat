import { useContext } from "react";
import { NavigationContext } from "../../providers/NavigationProvider";
import { Avatar, Badge, Box, Typography } from "@mui/material";

const ChatItem = ({ active, latestMessage, details: { name, profilePicture, time } }) => {
  const { setPosition } = useContext(NavigationContext);
  const activestyles = active
    ? {
        backgroundColor: (theme) => theme.palette.primary.main,
        color: (theme) => theme.palette.primary.contrastText,
      }
    : {};

  const timeString = (date) => {
    const dateObj = new Date(+date);
    if (dateObj.toDateString() === new Date().toDateString()) {
      return dateObj.toLocaleString("default", { hour: "2-digit", minute: "2-digit", hour12: true });
    }
    return new Date(+date).toLocaleDateString("default", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  return (
    <Box
      p="1rem"
      backgroundColor="#fff"
      borderRadius="10px"
      display="flex"
      gap="1rem"
      justifyContent="flex-start"
      // TODO: Fix hidden box shadows
      // boxShadow={(theme) => theme.shadows["2"]}
      sx={(theme) => ({
        cursor: "pointer",
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        },
      })}
      onClick={() => {
        setPosition(1);
      }}
      {...activestyles}
    >
      <Avatar alt={name} src={profilePicture} />

      <Box overflow="hidden" textOverflow="ellipsis">
        <Typography fontWeight="bold" noWrap>
          {name}
        </Typography>
        <Typography fontSize="x-small" noWrap>
          {latestMessage?.content}
        </Typography>
      </Box>

      <Box marginLeft="auto" display="flex" flexDirection="column" alignItems="flex-end" justifyContent="space-between">
        <Typography fontSize="x-small" noWrap>
          {timeString(time)}
        </Typography>
        <Badge badgeContent={Math.floor(Math.random() * (4 - 1 + 0) + 0)} color="secondary" />
      </Box>
    </Box>
  );
};

export default ChatItem;
