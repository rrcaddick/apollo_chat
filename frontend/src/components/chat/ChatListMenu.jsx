import { Group, Mail, Message, Phone } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import ChatMenu from "../navigation/ChatMenu";

const ChatListMenu = () => {
  return (
    <ChatMenu>
      <IconButton color="primary">
        <Message />
      </IconButton>
      <IconButton color="primary">
        <Phone />
      </IconButton>
      <IconButton color="primary">
        <Mail />
      </IconButton>
      <IconButton color="primary">
        <Group />
      </IconButton>
      <Avatar
        alt="Ray Caddick"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
      />
    </ChatMenu>
  );
};

export default ChatListMenu;
