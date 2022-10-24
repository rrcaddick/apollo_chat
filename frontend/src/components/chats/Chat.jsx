import { Box } from "@mui/material";
import MessageFeed from "../messages/MessageFeed";
import NewMessage from "../messages/NewMessage";
import ChatMenu from "../menus/ChatMenu";
import { navigationPositionVar } from "../../graphql/variables/common";
import { useReactiveVar } from "@apollo/client";

const Chat = () => {
  const position = useReactiveVar(navigationPositionVar);

  return (
    <Box
      flex="1 0 100%"
      width="100%"
      display="flex"
      flexDirection="column"
      pb="12px"
      sx={(theme) => ({
        [theme.breakpoints.up("md")]: {
          flex: 3,
        },
        [theme.breakpoints.down("md")]: {
          transform: `translateX(-${100 * position}%)`,
          transition: `transform 500ms ease-in-out`,
        },
      })}
    >
      <ChatMenu />
      <MessageFeed />
      <NewMessage />
    </Box>
  );
};

export default Chat;
