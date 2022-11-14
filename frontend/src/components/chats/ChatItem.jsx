import { Badge, Box, Typography, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import AvatarWithInitials from "../common/AvatarWithInitials";
import { formatChatTime } from "../../utils/dateUtils";
import { selectedChatVar } from "../../graphql/variables/selectedChat";
import { navigationPositionVar } from "../../graphql/variables/common";
import { useRemoveChat, useResetUnreadCount } from "../../graphql/chat/hooks";

const ChatItem = ({ chat }) => {
  const {
    id,
    latestMessage,
    isSelected,
    updatedAt,
    details: { name, profilePicture, isOnline },
    unreadCount,
  } = chat;

  const chatTime = latestMessage?.createdAt || updatedAt;
  const hasUnread = unreadCount > 0;

  const { mutate: removeChat } = useRemoveChat();
  const { mutate: resetUnreadCount } = useResetUnreadCount();

  const removeChatHandler = (e) => {
    e.stopPropagation();
    removeChat({
      variables: { chatId: id },
      optimisticResponse: {
        removeChat: {
          __typename: "Chat",
          id,
        },
      },
    });
  };

  const onSelectHandler = () => {
    selectedChatVar(chat);
    hasUnread &&
      resetUnreadCount({
        variables: { chatId: id },
        optimisticResponse: {
          resetUnreadCount: {
            __typename: "Chat",
            id,
            unreadCount: 0,
          },
        },
      });
    navigationPositionVar(1);
  };

  return (
    <Box
      p="1rem"
      backgroundColor="#fff"
      borderRadius="10px"
      display="flex"
      gap="1rem"
      justifyContent="flex-start"
      position="relative"
      // TODO: Fix hidden box shadows
      // boxShadow={(theme) => theme.shadows["2"]}
      sx={(theme) => ({
        [theme.breakpoints.down("md")]: {
          userSelect: "none",
          WebkitTapHighlightColor: "rgba(0,0,0,0)",
        },
        cursor: "pointer",
        backgroundColor: isSelected ? theme.palette.primary.main : "white",
        color: isSelected && theme.palette.primary.contrastText,
        "&:hover": {
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.primary.contrastText,
          "& .delete-icon": {
            transform: `translateX(0%)`,
          },
        },
      })}
      onClick={onSelectHandler}
    >
      <Box
        position="absolute"
        left="0"
        top="0"
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundColor="white"
        height="100%"
        zIndex="1000"
        className="delete-icon"
        sx={{
          transform: `translateX(-100%)`,
          transition: "transform 200ms linear",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
        }}
      >
        <IconButton onClick={removeChatHandler}>
          <Delete />
        </IconButton>
      </Box>
      <AvatarWithInitials alt={name} src={profilePicture} isOnline={isOnline} />

      <Box overflow="hidden" textOverflow="ellipsis">
        <Typography fontWeight={hasUnread ? "bold" : "normal"} noWrap>
          {name}
        </Typography>
        <Typography fontWeight={hasUnread ? "bold" : "normal"} fontSize="x-small" noWrap>
          {latestMessage?.content}
        </Typography>
      </Box>

      <Box marginLeft="auto" display="flex" flexDirection="column" alignItems="flex-end" justifyContent="space-between">
        <Typography fontWeight={hasUnread ? "bold" : "normal"} fontSize="x-small" noWrap>
          {formatChatTime(chatTime)}
        </Typography>
        <Badge sx={{ marginRight: "10px" }} badgeContent={unreadCount} color="secondary" />
      </Box>
    </Box>
  );
};

export default ChatItem;
