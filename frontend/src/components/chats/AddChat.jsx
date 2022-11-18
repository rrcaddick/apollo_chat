import { Close } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import ScrollableList from "../common/ScrollableList";
import FriendItem from "../friends/FriendItem";
import SearchControl from "../common/SearchControl";
import { useGetFriends, useGetMe } from "../../graphql/user/hooks";
import { useDebounce } from "../../hooks/useDebounce";
import { useApolloClient } from "@apollo/client";
import { READ_EXISTING_CHAT } from "../../graphql/chat/queries";
import { selectedChatVar } from "../../graphql/variables/selectedChat";
import { useAddChat } from "../../graphql/chat/hooks";
import { navigationPositionVar } from "../../graphql/variables/common";
import { generateTempId } from "../../utils/common";

const AddChat = ({ onClose }) => {
  const theme = useTheme();
  const { debounce } = useDebounce();
  const { me } = useGetMe();
  const { friends, filterFriends } = useGetFriends();
  const client = useApolloClient();
  const { mutate: addChat } = useAddChat();

  const searchHandler = (e) => {
    const searchTerm = e.target.value;
    debounce(() => {
      filterFriends(searchTerm);
    }, 250);
  };

  const checkCacheForChat = (userId) => {
    const data = client.readQuery({
      query: READ_EXISTING_CHAT,
      variables: { userId },
    });
    return data?.existingChat;
  };

  const onSelectHandler = async (user) => {
    const existingChat = checkCacheForChat(user.id);
    if (existingChat) {
      selectedChatVar(existingChat);
    } else {
      addChat({
        variables: { input: { members: [user.id] } },
        optimisticResponse: {
          addChat: {
            __typename: "Chat",
            id: generateTempId("Chat"),
            chatType: "DIRECT",
            unreadCount: 0,
            members: [
              { __typename: "User", ...me },
              { __typename: "User", ...user },
            ],
            admins: null,
            updatedAt: Date.now().toString(),
            latestMessage: null,
            details: {
              __typename: "User",
              ...user,
            },
            isSelected: true,
          },
        },
      });
    }
    navigationPositionVar(1);
    onClose();
  };

  return (
    <Box backgroundColor="background.dark">
      <Box display="flex" justifyContent="space-between" alignItems="center" p="12px">
        <Typography fontWeight="bold" fontSize="x-large">
          Select a contact
        </Typography>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </Box>

      <Box padding="0 12px 12px">
        <SearchControl
          placeholder="Search friends..."
          backgroundColor={theme.palette.grey["200"]}
          onSearch={searchHandler}
        />
      </Box>

      <Box p="0 12px 12px" overflow="hidden" display="flex" flexGrow={1}>
        <ScrollableList gap="0.5rem" thumbWidth="10px" thumbColor="#8f0acd73">
          {friends &&
            friends.map((friend) => <FriendItem key={friend.id} friend={friend} onSelect={onSelectHandler} />)}
        </ScrollableList>
      </Box>
    </Box>
  );
};

export default AddChat;
