import { Box } from "@mui/material";
import ChatListMenu from "../chat/ChatListMenu";
import ChatList from "../chat/ChatList";

const CHATS_DUMMY = [
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

const LeftNav = () => {
  return (
    <Box
      sx={{ flex: 1.25, display: "flex", flexDirection: "column" }}
      backgroundColor={(theme) => theme.palette.grey["200"]}
      overflow="hidden"
    >
      <ChatListMenu />
      <ChatList chats={CHATS_DUMMY} />
    </Box>
  );
};

export default LeftNav;
