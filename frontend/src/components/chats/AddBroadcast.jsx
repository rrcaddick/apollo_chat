import { Check, Close } from "@mui/icons-material";
import { Box, Fab, IconButton, TextField, Typography, useTheme } from "@mui/material";
import SearchControl from "../common/SearchControl";
import FriendItem from "../friends/FriendItem";
import ScrollableList from "../common/ScrollableList";
import Participants from "./Participants";
import { useDebounce } from "../../hooks/useDebounce";
import { useGetFriends, useGetMe } from "../../graphql/user/hooks";
import { useAddChat } from "../../graphql/chat/hooks";
import { useParticipants } from "../../hooks/useParticipants";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { navigationPositionVar } from "../../graphql/variables/common";
import { generateTempId } from "../../utils/common";

const AddBroadCast = ({ onClose }) => {
  const theme = useTheme();
  const { debounce } = useDebounce();
  const { me } = useGetMe();
  const { friends, filterFriends, removeFriend, addFriend, resetFriends } = useGetFriends();
  const { participants, addParticipant, removeParticipant, resetParticipants } = useParticipants();
  const BroadcastNameRef = useRef();
  const SearchInputRef = useRef();
  const { mutate: addChat } = useAddChat();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "all" });

  const searchHandler = (e) => {
    const searchTerm = e.target.value;
    debounce(() => {
      filterFriends(searchTerm);
    }, 250);
  };

  const onSelectHandler = (friend) => {
    removeFriend(friend.id);
    addParticipant(friend);
  };

  const onRemoveHandler = (friend) => {
    addFriend(friend.id);
    removeParticipant(friend);
  };

  const resetAndClose = () => {
    reset({ name: "" });
    resetParticipants();
    resetFriends();
    SearchInputRef.current.value = "";
    onClose();
  };

  const onCloseHandler = () => {
    resetAndClose();
  };

  const createBroadcastHandler = () => {
    const name = BroadcastNameRef.current.value;
    const members = participants.map((p) => p.id);
    const input = {
      chatType: "BROADCAST",
      name,
      members,
    };
    addChat({
      variables: { input },
      optimisticResponse: {
        addChat: {
          __typename: "Chat",
          id: generateTempId("BroadcastChat"),
          chatType: "BROADCAST",
          isSelected: true,
          members: participants.map((participant) => ({ __typename: "User", ...participant })),
          admins: [{ __typename: "User", ...me }],
          latestMessage: null,
          updatedAt: Date.now().toString(),
          details: {
            __typename: "Detail",
            name,
            members,
            profilePicture: "ApolloChat/ykoxzcf9rpbdtcftc1ih",
          },
        },
      },
    });
    navigationPositionVar(1);
    resetAndClose();
  };

  return (
    <Box display="flex" flexDirection="column" gap="0.8rem" overflow="hidden">
      <Box display="flex" justifyContent="space-between" alignItems="center" p="12px 12px 0px">
        <Typography fontWeight="bold" fontSize="x-large">
          New Broadcast List
        </Typography>
        <IconButton onClick={onCloseHandler}>
          <Close />
        </IconButton>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" gap="1rem" p="0 15px 12px 12px ">
        <TextField
          variant="standard"
          placeholder="Broadcast name"
          fullWidth
          inputRef={BroadcastNameRef}
          // helperText={errors?.name?.message || serverErrors?.name}
          // error={errors?.name || Boolean(serverErrors?.name)}
          helperText={errors?.name?.message}
          FormHelperTextProps={{ sx: { position: "absolute", bottom: "-1.2rem" } }}
          error={Boolean(errors?.name)}
          {...register("name", { required: "Please provide your broadcast name" })}
        />
      </Box>

      <Participants participants={participants} onRemove={onRemoveHandler} />

      <Box padding="0 12px">
        <SearchControl
          placeholder="Search friends..."
          backgroundColor={theme.palette.grey["200"]}
          onSearch={searchHandler}
          ref={SearchInputRef}
        />
      </Box>

      <Box p="12px" overflow="hidden" display="flex" position="relative">
        <ScrollableList gap="0.5rem" thumbWidth="10px" thumbColor="#8f0acd73">
          {friends &&
            friends.map((friend) => <FriendItem key={friend.id} friend={friend} onSelect={onSelectHandler} />)}
        </ScrollableList>
      </Box>
      <Fab
        onClick={handleSubmit(createBroadcastHandler)}
        color="primary"
        sx={{
          position: "absolute",
          bottom: "12px",
          right: "12px",
        }}
        disabled={participants.length === 0 || !isValid}
      >
        <Check />
      </Fab>
    </Box>
  );
};

export default AddBroadCast;
