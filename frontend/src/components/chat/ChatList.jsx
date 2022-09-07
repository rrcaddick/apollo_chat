import { Box, Fab, Input, InputAdornment, Typography } from "@mui/material";
import { AddRounded, Search } from "@mui/icons-material";
import ChatListMenu from "./ChatListMenu";
import ChatItem from "./ChatItem";

const CHAT_DUMMY = [
  {
    id: 1,
    latestMessage: "Are we meeting today? What time would be best for you? Any time is fine with me",
    details: {
      name: "Ash Caddick",
      profilePicture:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  {
    id: 2,
    latestMessage: "What time you free for a jam? Should we play Apex this time?",
    details: {
      name: "Neil Oosthuizen",
      profilePicture:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
  },
  {
    id: 3,
    latestMessage: "Did you watch the game last night! Can't believe we let him score!",
    details: {
      name: "Dean van Zyl",
      profilePicture:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
  },
  {
    id: 1,
    latestMessage: "Are we meeting today? What time would be best for you? Any time is fine with me",
    details: {
      name: "Ash Caddick",
      profilePicture:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  {
    id: 2,
    latestMessage: "What time you free for a jam? Should we play Apex this time?",
    details: {
      name: "Neil Oosthuizen",
      profilePicture:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
  },
  {
    id: 3,
    latestMessage: "Did you watch the game last night! Can't believe we let him score!",
    details: {
      name: "Dean van Zyl",
      profilePicture:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
  },
  {
    id: 1,
    latestMessage: "Are we meeting today? What time would be best for you? Any time is fine with me",
    details: {
      name: "Ash Caddick",
      profilePicture:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  {
    id: 2,
    latestMessage: "What time you free for a jam? Should we play Apex this time?",
    details: {
      name: "Neil Oosthuizen",
      profilePicture:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
  },
  {
    id: 3,
    latestMessage: "Did you watch the game last night! Can't believe we let him score!",
    details: {
      name: "Dean van Zyl",
      profilePicture:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
  },
  {
    id: 1,
    latestMessage: "Are we meeting today? What time would be best for you? Any time is fine with me",
    details: {
      name: "Ash Caddick",
      profilePicture:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  {
    id: 2,
    latestMessage: "What time you free for a jam? Should we play Apex this time?",
    details: {
      name: "Neil Oosthuizen",
      profilePicture:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
  },
  {
    id: 3,
    latestMessage: "Did you watch the game last night! Can't believe we let him score!",
    details: {
      name: "Dean van Zyl",
      profilePicture:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
  },
  {
    id: 1,
    latestMessage: "Are we meeting today? What time would be best for you? Any time is fine with me",
    details: {
      name: "Ash Caddick",
      profilePicture:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  {
    id: 2,
    latestMessage: "What time you free for a jam? Should we play Apex this time?",
    details: {
      name: "Neil Oosthuizen",
      profilePicture:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
  },
  {
    id: 3,
    latestMessage: "Did you watch the game last night! Can't believe we let him score!",
    details: {
      name: "Dean van Zyl",
      profilePicture:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
  },
  {
    id: 1,
    latestMessage: "Are we meeting today? What time would be best for you? Any time is fine with me",
    details: {
      name: "Ash Caddick",
      profilePicture:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  {
    id: 2,
    latestMessage: "What time you free for a jam? Should we play Apex this time?",
    details: {
      name: "Neil Oosthuizen",
      profilePicture:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
  },
  {
    id: 3,
    latestMessage: "Did you watch the game last night! Can't believe we let him score!",
    details: {
      name: "Dean van Zyl",
      profilePicture:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
  },
  {
    id: 1,
    latestMessage: "Are we meeting today? What time would be best for you? Any time is fine with me",
    details: {
      name: "Ash Caddick",
      profilePicture:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  {
    id: 2,
    latestMessage: "What time you free for a jam? Should we play Apex this time?",
    details: {
      name: "Neil Oosthuizen",
      profilePicture:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
  },
  {
    id: 3,
    latestMessage: "Did you watch the game last night! Can't believe we let him score!",
    details: {
      name: "Dean van Zyl",
      profilePicture:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
  },
];

const ChatList = () => {
  return (
    <Box
      sx={{ flex: 1.25, display: "flex", flexDirection: "column" }}
      backgroundColor={(theme) => theme.palette.grey["200"]}
      overflow="hidden"
    >
      <ChatListMenu />
      <Box p="12px 24px" display="flex" flexDirection="column" gap="1rem" flexGrow={1} overflow="hidden">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography fontSize="2rem" fontWeight="bold">
            Chats
          </Typography>
          <Fab color="primary" size="small">
            <AddRounded />
          </Fab>
        </Box>
        <Input
          variant="filled"
          placeholder="Search Chats..."
          sx={{
            padding: "0.5rem 1rem",
            backgroundColor: "#fff",
            "&:hover:not(.Mui-disabled):before": {
              borderBottom: "none",
            },
            "&::before": {
              borderBottom: "none",
            },
            "&:focus": {
              borderBottom: "none",
            },
          }}
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
        />
        {/* Actual List */}
        <Box
          display="flex"
          flexDirection="column"
          gap="1rem"
          flexGrow={1}
          sx={{
            overflowY: "overlay",
            "&:hover::-webkit-scrollbar": {
              display: "block",
            },
            "::-webkit-scrollbar": { width: "10px", display: "none" },
            "::-webkit-scrollbar-thumb": {
              backgroundColor: "#8f0acd73",
              borderRadius: "20px",
            },
          }}
        >
          {CHAT_DUMMY.map((chat) => (
            <ChatItem key={chat.id} {...chat} active={chat.id === 2} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ChatList;
