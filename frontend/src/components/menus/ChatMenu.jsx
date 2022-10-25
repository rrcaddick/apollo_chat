import { useState } from "react";
import { Phone, VideoCall, MoreVert, ChevronLeftSharp, Person, Delete, ClearAll, Search } from "@mui/icons-material";
import { Box, IconButton, ListItemIcon, MenuItem, Typography } from "@mui/material";
import MenuWrapper from "../common/MenuWrapper";
import DropDownMenu from "../common/DropDownMenu";
import AvatarWithInitials from "../common/AvatarWithInitials";
import { navigationPositionVar } from "../../graphql/variables/common";
import { formatLastSeen } from "../../utils/dateUtils";
import { useRemoveChat } from "../../graphql/chat/hooks";
import { useReactiveVar } from "@apollo/client";
import { selectedChatVar } from "../../graphql/variables/selectedChat";
import { useClearChatMessages } from "../../graphql/message/hooks";

const ChatMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [clearedCount, setClearedCount] = useState(0);
  const [showClearedBanner, setShowClearedBanner] = useState(false);

  const { mutate: removeChat } = useRemoveChat();
  const { mutate: clearChatMessages } = useClearChatMessages(({ clearChatMessages }) => {
    setClearedCount(clearChatMessages?.clearedMessageCount);
    setShowClearedBanner(true);
    setTimeout(() => {
      setShowClearedBanner(false);
    }, 3000);
  });

  const selectedChat = useReactiveVar(selectedChatVar);
  const {
    id,
    details: { name, profilePicture, mobile, isOnline, lastSeen },
  } = selectedChat || { details: {} };

  const removeChatHandler = (e) => {
    removeChat({
      variables: { chatId: id },
      optimisticResponse: {
        removeChat: {
          id,
        },
      },
    });
    navigationPositionVar(0);
  };

  const clearChatMessagesHandler = () => {
    clearChatMessages({ variables: { chatId: id } });
  };

  return (
    <MenuWrapper
      sx={(theme) => ({
        position: "relative",
        [theme.breakpoints.down("md")]: {
          padding: "0",
        },
      })}
    >
      <Box display="flex" alignItems="center" gap="0.5rem" overflow="hidden">
        <IconButton
          size="small"
          padding="0"
          onClick={() => {
            navigationPositionVar(0);
          }}
        >
          <ChevronLeftSharp
            sx={(theme) => ({
              [theme.breakpoints.up("md")]: {
                display: "none",
              },
            })}
          />
          <AvatarWithInitials src={profilePicture} alt={name} isOnline={isOnline} />
        </IconButton>
        <Box overflow="hidden" textOverflow="ellipsis">
          <Typography fontWeight="bold" fontSize="1rem" noWrap>
            {name}
          </Typography>
          <Typography
            fontSize="0.8rem"
            noWrap
            sx={(theme) => ({
              display: "none",
              [theme.breakpoints.up("450")]: {
                display: "block",
              },
            })}
          >
            {formatLastSeen(isOnline, lastSeen)}
          </Typography>
          <Typography
            fontSize="0.8rem"
            noWrap
            sx={(theme) => ({
              display: "block",
              [theme.breakpoints.up("450")]: {
                display: "none",
              },
            })}
          >
            {formatLastSeen(isOnline, lastSeen, true)}
          </Typography>
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        marginLeft="auto"
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            marginRight: "12px",
          },
        })}
      >
        <IconButton size="small" href={`tel:${mobile}`}>
          <Phone />
        </IconButton>

        <IconButton size="small">
          <VideoCall />
        </IconButton>

        <IconButton size="small" onClick={handleClick}>
          <MoreVert />
        </IconButton>

        <DropDownMenu anchorEl={anchorEl} open={open} onClose={handleClose} onClick={handleClose}>
          <MenuItem>
            <ListItemIcon>
              <Person fontSize="small" />
            </ListItemIcon>
            Profile
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Search fontSize="small" />
            </ListItemIcon>
            Search
          </MenuItem>
          <MenuItem onClick={clearChatMessagesHandler}>
            <ListItemIcon>
              <ClearAll fontSize="small" />
            </ListItemIcon>
            Clear
          </MenuItem>
          <MenuItem onClick={removeChatHandler}>
            <ListItemIcon>
              <Delete fontSize="small" />
            </ListItemIcon>
            Delete
          </MenuItem>
        </DropDownMenu>
      </Box>
      <Box
        position="absolute"
        backgroundColor={(theme) => theme.palette.success.main}
        color="white"
        width="100%"
        textAlign="center"
        py="0.5rem"
        sx={{
          bottom: 0,
          left: 0,
          transform: `translateY(${showClearedBanner ? 100 : 0}%)`,
          transition: "transform 200ms linear",
        }}
        zIndex="-1"
      >
        {`${clearedCount} Message${clearedCount > 1 ? "s" : ""} cleared`}
      </Box>
    </MenuWrapper>
  );
};

export default ChatMenu;
