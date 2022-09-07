import LeftNav from "../components/navigation/LeftNav";
import ChatMessage from "../components/chat/ChatMessage";
import ChatLayout from "../components/layout/ChatLayout";
import RightNav from "../components/navigation/RightNav";

const Chats = () => {
  return (
    <ChatLayout>
      <LeftNav />
      <ChatMessage />
      <RightNav />
    </ChatLayout>
  );
};

export default Chats;
