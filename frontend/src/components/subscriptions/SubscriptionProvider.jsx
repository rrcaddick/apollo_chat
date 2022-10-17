import { useReceiveMessage } from "../../graphql/message/hooks";
import { useUserOnline } from "../../graphql/user/hooks";

const SubscriptionProvider = ({ children }) => {
  useReceiveMessage();
  useUserOnline();
  return children;
};

export default SubscriptionProvider;
