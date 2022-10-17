import Chat from "../components/chats/Chat";
import ChatPageLayout from "../components/layout/ChatPageLayout";
import Navigation from "../components/navigation/Navigation";
import { selectedChatVar } from "../graphql/variables/selectedChat";
import { useReactiveVar } from "@apollo/client";
import ChatSplash from "../components/chats/ChatSplash";
import SubscriptionProvider from "../components/subscriptions/SubscriptionProvider";

const Chats = () => {
  const selectedChat = useReactiveVar(selectedChatVar);
  return (
    <SubscriptionProvider>
      <ChatPageLayout>
        <Navigation />
        {!selectedChat && <ChatSplash />}
        {selectedChat && <Chat />}
      </ChatPageLayout>
    </SubscriptionProvider>
  );
};

export default Chats;
