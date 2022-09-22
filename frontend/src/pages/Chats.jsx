import Chat from "../components/chats/Chat";
import ChatPageLayout from "../components/layout/ChatPageLayout";
import NavigationProvider from "../providers/NavigationProvider";
import Navigation from "../components/navigation/Navigation";

const Chats = () => {
  return (
    <ChatPageLayout>
      <NavigationProvider>
        <Navigation />
        <Chat />
      </NavigationProvider>
    </ChatPageLayout>
  );
};

export default Chats;
