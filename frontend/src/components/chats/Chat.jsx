import { Box } from "@mui/material";
import MessageFeed from "../messages/MessageFeed";
import NewMessage from "../messages/NewMessage";
import ChatMenu from "../menus/ChatMenu";
import { navigationPositionVar } from "../../graphql/variables/common";
import { useReactiveVar } from "@apollo/client";
import ContainedDrawer from "../common/ContainedDrawer";
import { useState } from "react";
import ChatProfile from "./ChatProfile";

const Chat = () => {
  const position = useReactiveVar(navigationPositionVar);
  const [openProfile, setOpenProfile] = useState(false);

  const toggleProfile = () => {
    setOpenProfile((p) => !p);
  };

  return (
    <Box
      flex="1 0 100%"
      width="100%"
      display="flex"
      flexDirection="column"
      pb="12px"
      sx={(theme) => ({
        position: "relative",
        [theme.breakpoints.up("md")]: {
          flex: 3,
        },
        [theme.breakpoints.down("md")]: {
          transform: `translateX(-${100 * position}%)`,
          transition: `transform 500ms ease-in-out`,
        },
      })}
    >
      <ChatProfile openProfile={openProfile} onClose={toggleProfile} />
      <ChatMenu toggleProfile={toggleProfile} />
      <MessageFeed />
      <NewMessage />
    </Box>
  );
};

export default Chat;
