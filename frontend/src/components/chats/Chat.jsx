import { Backdrop, Box } from "@mui/material";
import MessageFeed from "../messages/MessageFeed";
import NewMessage from "../messages/NewMessage";
import ChatMenu from "../menus/ChatMenu";
import { navigationPositionVar } from "../../graphql/variables/common";
import { useReactiveVar } from "@apollo/client";
import { useAddChat } from "../../graphql/chat/hooks";
import Lottie from "lottie-react";
import loadingAnimation from "../../animations/app-loading.json";

const Chat = () => {
  const position = useReactiveVar(navigationPositionVar);
  const { loading } = useAddChat();
  if (loading)
    return (
      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true} invisible={false}>
        <Lottie animationData={loadingAnimation} loop={true} />
      </Backdrop>
    );

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
