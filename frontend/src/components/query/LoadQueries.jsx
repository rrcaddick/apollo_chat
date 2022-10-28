import { Backdrop } from "@mui/material";
import { useGetChats, useGroupAdded } from "../../graphql/chat/hooks";
import { useGetFriends, useGetMe, useUserOnline } from "../../graphql/user/hooks";
import Lottie from "lottie-react";
import loadingAnimation from "../../animations/app-loading.json";
import { useReceiveMessage } from "../../graphql/message/hooks";

const LoadQueries = ({ children }) => {
  const { loading: loadingMe } = useGetMe();
  const { loading: loadingFriends } = useGetFriends();
  const { loading: loadingChats } = useGetChats();
  useReceiveMessage();
  useUserOnline();
  useGroupAdded();

  if (loadingMe || loadingFriends || loadingChats)
    return (
      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true} invisible={false}>
        <Lottie animationData={loadingAnimation} loop={true} />
      </Backdrop>
    );

  return children;
};

export default LoadQueries;
