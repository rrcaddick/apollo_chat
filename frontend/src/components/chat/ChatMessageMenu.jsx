import { useContext } from "react";
import { NavigationContext } from "../../providers/NavigationProvider";
import { Phone, VideoCall, MoreVert, ChevronLeftSharp, Notifications } from "@mui/icons-material";
import { Avatar, Badge, Box, IconButton, Typography } from "@mui/material";
import ChatMenu from "../navigation/ChatMenu";

const ChatMessageMenu = () => {
  const { slideRight, slideLeft, mediumScreen, toggleDrawer } = useContext(NavigationContext);

  const notificationHandler = () => {
    if (mediumScreen) {
      return toggleDrawer();
    }
    return slideLeft();
  };

  return (
    <ChatMenu
      sx={(theme) => ({
        [theme.breakpoints.down("md")]: {
          padding: "0",
        },
      })}
    >
      <Box display="flex" alignItems="center" gap="0.5rem" overflow="hidden">
        <IconButton size="small" padding="0" onClick={slideRight}>
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
        <IconButton
          size="small"
          sx={(theme) => ({
            display: "none",
            [theme.breakpoints.up("md")]: {
              display: "flex",
            },
          })}
        >
          <Phone />
        </IconButton>

        <IconButton
          size="small"
          sx={(theme) => ({
            display: "none",
            [theme.breakpoints.up("md")]: {
              display: "flex",
            },
          })}
        >
          <VideoCall />
        </IconButton>

        <IconButton size="small">
          <MoreVert />
        </IconButton>

        <IconButton
          size="small"
          onClick={notificationHandler}
          sx={(theme) => ({
            [theme.breakpoints.up("lg")]: {
              display: "none",
            },
          })}
        >
          <Badge badgeContent={4} color="secondary">
            <Notifications />
          </Badge>
        </IconButton>
      </Box>
    </ChatMenu>
  );
};

export default ChatMessageMenu;
