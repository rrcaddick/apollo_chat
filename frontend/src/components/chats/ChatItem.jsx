import { useContext } from "react";
import { NavigationContext } from "../../providers/NavigationProvider";
import { Avatar, Badge, Box, Typography } from "@mui/material";

const ChatItem = ({ active, latestMessage, details: { name, profilePicture } }) => {
  const { setPosition } = useContext(NavigationContext);
  const activestyles = active
    ? {
        backgroundColor: (theme) => theme.palette.primary.main,
        color: (theme) => theme.palette.primary.contrastText,
      }
    : {};

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
      <Avatar alt="Ash Caddick" src={profilePicture} />

      <Box overflow="hidden" textOverflow="ellipsis">
        <Typography fontWeight="bold" noWrap>
          {name}
        </Typography>
        <Typography fontSize="x-small" noWrap>
          {latestMessage}
        </Typography>
      </Box>

      <Box marginLeft="auto" display="flex" flexDirection="column" alignItems="flex-end" justifyContent="space-between">
        <Typography fontSize="x-small" noWrap>
          3:43 PM
        </Typography>
        <Badge badgeContent={Math.floor(Math.random() * (4 - 1 + 0) + 0)} color="secondary" />
      </Box>
    </Box>
  );
};

export default ChatItem;
