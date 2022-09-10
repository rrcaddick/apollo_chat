import { useContext } from "react";
import { NavigationContext } from "../../providers/NavigationProvider";
import { Box, Drawer } from "@mui/material";
import OnlineFriendsList from "../friends/OnlineFriendsList";
import NotificationList from "../notifications/NotificationList";

const DUMMY_NOTIFICATIONS = [
  {
    id: 1,
    user: {
      name: "Dean van Zyl",
      profilePicture:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    time: "3 min ago",
    action: "mentioned you in group",
    target: "Vortext Missions",
  },
  {
    id: 2,
    user: {
      name: "Neil Oosthuizen",
      profilePicture:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    time: "12 min ago",
    action: "Reacted to your message",
    target: "What about 5 PM tonight",
  },
  {
    id: 3,
    user: {
      name: "Ash Caddick",
      profilePicture:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    time: "1 day ago",
    action: "Add you to the group",
    target: "Farmyard Caddick",
  },
  {
    id: 1,
    user: {
      name: "Dean van Zyl",
      profilePicture:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    time: "3 min ago",
    action: "mentioned you in group",
    target: "Vortext Missions",
  },
  {
    id: 2,
    user: {
      name: "Neil Oosthuizen",
      profilePicture:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    time: "12 min ago",
    action: "Reacted to your message",
    target: "What about 5 PM tonight",
  },
  {
    id: 3,
    user: {
      name: "Ash Caddick",
      profilePicture:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    time: "1 day ago",
    action: "Add you to the group",
    target: "Farmyard Caddick",
  },
  {
    id: 1,
    user: {
      name: "Dean van Zyl",
      profilePicture:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    time: "3 min ago",
    action: "mentioned you in group",
    target: "Vortext Missions",
  },
  {
    id: 2,
    user: {
      name: "Neil Oosthuizen",
      profilePicture:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    time: "12 min ago",
    action: "Reacted to your message",
    target: "What about 5 PM tonight",
  },
  {
    id: 3,
    user: {
      name: "Ash Caddick",
      profilePicture:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    time: "1 day ago",
    action: "Add you to the group",
    target: "Farmyard Caddick",
  },
  {
    id: 1,
    user: {
      name: "Dean van Zyl",
      profilePicture:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    time: "3 min ago",
    action: "mentioned you in group",
    target: "Vortext Missions",
  },
  {
    id: 2,
    user: {
      name: "Neil Oosthuizen",
      profilePicture:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    time: "12 min ago",
    action: "Reacted to your message",
    target: "What about 5 PM tonight",
  },
  {
    id: 3,
    user: {
      name: "Ash Caddick",
      profilePicture:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    time: "1 day ago",
    action: "Add you to the group",
    target: "Farmyard Caddick",
  },
  {
    id: 1,
    user: {
      name: "Dean van Zyl",
      profilePicture:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    time: "3 min ago",
    action: "mentioned you in group",
    target: "Vortext Missions",
  },
  {
    id: 2,
    user: {
      name: "Neil Oosthuizen",
      profilePicture:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    time: "12 min ago",
    action: "Reacted to your message",
    target: "What about 5 PM tonight",
  },
  {
    id: 3,
    user: {
      name: "Ash Caddick",
      profilePicture:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    time: "1 day ago",
    action: "Add you to the group",
    target: "Farmyard Caddick",
  },
  {
    id: 1,
    user: {
      name: "Dean van Zyl",
      profilePicture:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    time: "3 min ago",
    action: "mentioned you in group",
    target: "Vortext Missions",
  },
  {
    id: 2,
    user: {
      name: "Neil Oosthuizen",
      profilePicture:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    time: "12 min ago",
    action: "Reacted to your message",
    target: "What about 5 PM tonight",
  },
  {
    id: 3,
    user: {
      name: "Ash Caddick",
      profilePicture:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    time: "1 day ago",
    action: "Add you to the group",
    target: "Farmyard Caddick",
  },
];

const DUMMY_FRIENDS = [
  {
    id: 1,
    name: "Dean van Zyl",
    profilePicture:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    status: "Avalable",
  },
  {
    id: 2,
    name: "Neil Oosthuizen",
    profilePicture:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    status: "Great day at work",
  },
  {
    id: 3,
    name: "Ash Caddick",
    profilePicture:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    status: "DJ sesion tomorrow night!",
  },
  {
    id: 1,
    name: "Dean van Zyl",
    profilePicture:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    status: "Avalable",
  },
  {
    id: 2,
    name: "Neil Oosthuizen",
    profilePicture:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    status: "Great day at work",
  },
  {
    id: 3,
    name: "Ash Caddick",
    profilePicture:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    status: "DJ sesion tomorrow night!",
  },
  {
    id: 1,
    name: "Dean van Zyl",
    profilePicture:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    status: "Avalable",
  },
  {
    id: 2,
    name: "Neil Oosthuizen",
    profilePicture:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    status: "Great day at work",
  },
  {
    id: 3,
    name: "Ash Caddick",
    profilePicture:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    status: "DJ sesion tomorrow night!",
  },
  {
    id: 1,
    name: "Dean van Zyl",
    profilePicture:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    status: "Avalable",
  },
  {
    id: 2,
    name: "Neil Oosthuizen",
    profilePicture:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    status: "Great day at work",
  },
  {
    id: 3,
    name: "Ash Caddick",
    profilePicture:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    status: "DJ sesion tomorrow night!",
  },
  {
    id: 1,
    name: "Dean van Zyl",
    profilePicture:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    status: "Avalable",
  },
  {
    id: 2,
    name: "Neil Oosthuizen",
    profilePicture:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    status: "Great day at work",
  },
  {
    id: 3,
    name: "Ash Caddick",
    profilePicture:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    status: "DJ sesion tomorrow night!",
  },
  {
    id: 1,
    name: "Dean van Zyl",
    profilePicture:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    status: "Avalable",
  },
  {
    id: 2,
    name: "Neil Oosthuizen",
    profilePicture:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    status: "Great day at work",
  },
  {
    id: 3,
    name: "Ash Caddick",
    profilePicture:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    status: "DJ sesion tomorrow night!",
  },
  {
    id: 1,
    name: "Dean van Zyl",
    profilePicture:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    status: "Avalable",
  },
  {
    id: 2,
    name: "Neil Oosthuizen",
    profilePicture:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    status: "Great day at work",
  },
  {
    id: 3,
    name: "Ash Caddick",
    profilePicture:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    status: "DJ sesion tomorrow night!",
  },
  {
    id: 1,
    name: "Dean van Zyl",
    profilePicture:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    status: "Avalable",
  },
  {
    id: 2,
    name: "Neil Oosthuizen",
    profilePicture:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    status: "Great day at work",
  },
  {
    id: 3,
    name: "Ash Caddick",
    profilePicture:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    status: "DJ sesion tomorrow night!",
  },
];

const RightNav = () => {
  const { slideStyles, mediumScreen, drawerOpen } = useContext(NavigationContext);
  // Right drawer render
  if (mediumScreen) {
    return (
      <Drawer
        open={drawerOpen}
        display="flex"
        flexGrow={1}
        anchor="right"
        variant="temporary"
        flex={1}
        sx={{
          width: "40%",
          flexShrink: 0,
          overflow: "hidden",
          [`& .MuiDrawer-paper`]: {
            width: "40%",
            boxSizing: "border-box",
          },
        }}
      >
        <Box flex={1} overflow="hidden">
          {/* Notifications */}
          <NotificationList notifications={DUMMY_NOTIFICATIONS} />

          {/* Online Friends */}
          <OnlineFriendsList onlineFriends={DUMMY_FRIENDS} />
        </Box>
      </Drawer>
    );
  }

  // Normal render
  return (
    <Box
      flex="1 0 100%"
      sx={(theme) => ({
        [theme.breakpoints.up("lg")]: {
          flex: 1,
        },
        [theme.breakpoints.up("md")]: {
          flex: "0 0 0",
          minWidth: "0",
        },
        [theme.breakpoints.down("md")]: {
          ...slideStyles,
        },
      })}
    >
      {/* Notifications */}
      <NotificationList notifications={DUMMY_NOTIFICATIONS} />

      {/* Online Friends */}
      <OnlineFriendsList onlineFriends={DUMMY_FRIENDS} />
    </Box>
  );
};

export default RightNav;
