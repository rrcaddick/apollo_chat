import { useContext, useRef } from "react";
import { NavigationContext } from "../../providers/NavigationProvider";
import { Box } from "@mui/material";
import ChatListMenu from "../chat/ChatListMenu";
import ChatList from "../chat/ChatList";
import { CHATS_DUMMY } from "../../data";

const LeftNav = () => {
  const { slideStyles } = useContext(NavigationContext);
  const leftNavRef = useRef();
  return (
    <Box
      ref={leftNavRef}
      flex="1 0 100%"
      display="flex"
      flexDirection="column"
      backgroundColor={(theme) => theme.palette.grey["200"]}
      overflow="hidden"
      width="100%"
      sx={(theme) => ({
        position: "relative",
        [theme.breakpoints.up("lg")]: {
          flex: 1.25,
        },
        [theme.breakpoints.up("md")]: {
          flex: 1.5,
        },
        [theme.breakpoints.down("md")]: {
          ...slideStyles,
        },
      })}
    >
      <ChatListMenu />
      <ChatList chats={CHATS_DUMMY} />
    </Box>
  );
};

export default LeftNav;
