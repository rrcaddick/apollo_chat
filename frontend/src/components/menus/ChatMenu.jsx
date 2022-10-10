import { useContext, useState } from "react";
import { NavigationContext } from "../../providers/NavigationProvider";
import { Phone, VideoCall, MoreVert, ChevronLeftSharp, Person } from "@mui/icons-material";
import { Box, IconButton, ListItemIcon, MenuItem, Typography } from "@mui/material";
import MenuWrapper from "../common/MenuWrapper";
import DropDownMenu from "../common/DropDownMenu";
import { useReactiveVar } from "@apollo/client";
import { selectedChatVar } from "../../graphql/variables/selectedChat";
import { getAvatarUrl } from "../../utils/cloudinary";
import AvatarWithInitials from "../common/AvatarWithInitials";

const ChatMenu = () => {
  const { setPosition } = useContext(NavigationContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const selectedChat = useReactiveVar(selectedChatVar);

  const {
    details: { name, profilePicture },
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
            setPosition(0);
          }}
        >
          <ChevronLeftSharp
            sx={(theme) => ({
              [theme.breakpoints.up("md")]: {
                display: "none",
              },
            })}
          />
          <AvatarWithInitials padding="0" src={getAvatarUrl(profilePicture)} alt={name} />
        </IconButton>
        <Box overflow="hidden" textOverflow="ellipsis">
          <Typography fontWeight="bold" fontSize="1rem" noWrap>
            {name}
          </Typography>
          <Typography fontSize="0.8rem" noWrap>
            Last Seen 3 hours ago
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
        <IconButton size="small">
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
