import { Close } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import ScrollableList from "../common/ScrollableList";
import { DUMMY_USERS } from "../../data";
import FriendItem from "../friends/FriendItem";
import SearchControl from "../common/SearchControl";
import { useTheme } from "@emotion/react";

const AddChat = ({ onClose }) => {
  const theme = useTheme();
  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center" p="12px">
        <Typography fontWeight="bold" fontSize="x-large">
          Select a contact
        </Typography>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </Box>

      <Box padding="0 12px 12px">
        <SearchControl placeholder="Search friends..." backgroundColor={theme.palette.grey["200"]} />
      </Box>

      <Box p="0 12px 12px" overflow="hidden" display="flex" flexGrow={1}>
        <ScrollableList gap="0.5rem" thumbWidth="10px" thumbColor="#8f0acd73">
          {/* {DUMMY_USERS.map((friend) => (
            <FriendItem key={friend.id} {...friend} active={friend.id === 2} />
          ))} */}
        </ScrollableList>
      </Box>
    </>
  );
};

export default AddChat;
