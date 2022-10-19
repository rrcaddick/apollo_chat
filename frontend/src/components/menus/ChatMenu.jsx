import { useState } from "react";
import { Phone, VideoCall, MoreVert, ChevronLeftSharp, Person } from "@mui/icons-material";
import { Box, IconButton, ListItemIcon, MenuItem, Typography } from "@mui/material";
import MenuWrapper from "../common/MenuWrapper";
import DropDownMenu from "../common/DropDownMenu";
import AvatarWithInitials from "../common/AvatarWithInitials";
import { navigationPositionVar } from "../../graphql/variables/common";
import { useReadSelectedChat } from "../../graphql/chat/hooks";
import { formatLastSeen } from "../../utils/dateUtils";

const ChatMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { selectedChat } = useReadSelectedChat();
  const {
    details: { name, profilePicture, mobile, isOnline, lastSeen },
  } = selectedChat || { details: {} };

  return (
    <MenuWrapper
      sx={(theme) => ({
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
        </DropDownMenu>
      </Box>
    </MenuWrapper>
  );
};

export default ChatMenu;
