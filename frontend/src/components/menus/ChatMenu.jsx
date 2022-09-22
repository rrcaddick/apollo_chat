import { useContext, useState } from "react";
import { NavigationContext } from "../../providers/NavigationProvider";
import { Phone, VideoCall, MoreVert, ChevronLeftSharp, Person } from "@mui/icons-material";
import { Avatar, Box, IconButton, ListItemIcon, MenuItem, Typography } from "@mui/material";
import MenuWrapper from "../common/MenuWrapper";
import DropDownMenu from "../common/DropDownMenu";

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
          <Avatar
            padding="0"
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          />
        </IconButton>
        <Box overflow="hidden" textOverflow="ellipsis">
          <Typography fontWeight="bold" fontSize="1rem" noWrap>
            Raymond Caddick
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
