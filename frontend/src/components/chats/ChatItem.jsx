import { Badge, Box, Typography } from "@mui/material";
import AvatarWithInitials from "../common/AvatarWithInitials";
import { formatChatTime } from "../../utils/dateUtils";
import { selectedChatVar } from "../../graphql/variables/selectedChat";
import { navigationPositionVar } from "../../graphql/variables/common";

const ChatItem = ({ chat }) => {
  const {
    latestMessage,
    isSelected,
    details: { name, profilePicture, time },
  } = chat;

  const activestyles = isSelected
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
        navigationPositionVar(1);
        selectedChatVar(chat);
      }}
      {...activestyles}
    >
      <AvatarWithInitials alt={name} src={profilePicture} />

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
          {formatChatTime(time)}
        </Typography>
        {/* <Badge badgeContent={Math.floor(Math.random() * (4 - 1 + 0) + 0)} color="secondary" /> */}
      </Box>
    </Box>
  );
};

export default ChatItem;
