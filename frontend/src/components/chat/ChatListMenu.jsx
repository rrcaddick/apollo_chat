import { useContext } from "react";
import { NavigationContext } from "../../providers/NavigationProvider";
import { Group, Message, Notifications, Phone } from "@mui/icons-material";
import { Avatar, Badge, IconButton } from "@mui/material";
import ChatMenu from "../navigation/ChatMenu";

const ChatListMenu = () => {
  const { slideLeft, mediumScreen, toggleDrawer } = useContext(NavigationContext);

  const notificationHandler = () => {
    if (mediumScreen) {
      return toggleDrawer();
    }
    return slideLeft(2);
  };

  return (
    <ChatMenu padding="12px 24px">
      <IconButton color="primary">
        <Message />
      </IconButton>
      <IconButton color="primary">
        <Phone />
      </IconButton>
      <IconButton color="primary">
        <Group />
      </IconButton>
      <IconButton
        color="primary"
        onClick={() => {
          notificationHandler();
        }}
      >
        <Badge badgeContent={4} color="secondary">
          <Notifications />
        </Badge>
      </IconButton>
      <Avatar
        alt="Ray Caddick"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
      />
    </ChatMenu>
  );
};

export default ChatListMenu;
