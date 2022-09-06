import ChatList from "../components/chat/ChatList";
import ChatMessage from "../components/chat/ChatMessage";
import ChatLayout from "../components/layout/ChatLayout";
import Notifications from "../components/notifications/Notifications";

const Chats = () => {
  return (
    <ChatLayout>
      <ChatList />
      <ChatMessage />
      <Notifications />
    </ChatLayout>
  );
};

export default Chats;
