import LeftNav from "../components/navigation/LeftNav";
import ChatMessage from "../components/chat/ChatMessage";
import ChatLayout from "../components/layout/ChatLayout";
import RightNav from "../components/navigation/RightNav";
import NavigationProvider from "../providers/NavigationProvider";

const Chats = () => {
  return (
    <ChatLayout>
      <NavigationProvider>
        <LeftNav />
        <ChatMessage />
        <RightNav />
      </NavigationProvider>
    </ChatLayout>
  );
};

export default Chats;
