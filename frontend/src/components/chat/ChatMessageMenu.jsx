import { Phone, VideoCall, MoreHoriz } from "@mui/icons-material";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import ChatMenu from "../navigation/ChatMenu";

const ChatMessageMenu = () => {
  return (
    <ChatMenu>
      <Box display="flex" alignItems="center" gap="1rem">
        <Avatar src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
        <Box>
          <Typography fontWeight="bold">Raymond Caddick</Typography>
          <Typography fontSize="small">Last Seen 3 hours ago</Typography>
        </Box>
      </Box>
      <Box>
        <IconButton>
          <Phone />
        </IconButton>
        <IconButton>
          <VideoCall />
        </IconButton>
        <IconButton>
          <MoreHoriz />
        </IconButton>
        {/* <Menu></Menu> */}
      </Box>
    </ChatMenu>
  );
};

export default ChatMessageMenu;
