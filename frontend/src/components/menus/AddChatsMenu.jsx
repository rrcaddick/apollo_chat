import AddChat from "../chats/AddChat";
import AddGroup from "../chats/AddGroup";
import AddBroadcast from "../chats/AddBroadcast";
import ContainedDrawer from "../common/ContainedDrawer";
import AddChatsMenuOptions from "./AddChatsMenuOptions";

const AddChatsMenu = ({
  open: { addChat, createGroup, sendBroadcast },
  toggleMenu: { toggleAddChat, toggleCreateGroup, toggleSendBroadcast },
}) => {
  return (
    <>
      {/* Start a new chat */}
      <ContainedDrawer open={addChat}>
        <AddChat onClose={toggleAddChat} />
      </ContainedDrawer>

      {/* Create a new group */}
      <ContainedDrawer open={createGroup}>
        <AddGroup onClose={toggleCreateGroup} />
      </ContainedDrawer>

      {/* Broadcast a message */}
      <ContainedDrawer open={sendBroadcast}>
        <AddBroadcast onClose={toggleSendBroadcast} />
      </ContainedDrawer>

      {/* Speed Dial */}
      <AddChatsMenuOptions onOpen={{ toggleAddChat, toggleCreateGroup, toggleSendBroadcast }} />
    </>
  );
};

export default AddChatsMenu;
