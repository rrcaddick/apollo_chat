import { Close } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import { NavigationContext } from "../../providers/NavigationProvider";
import ScrollableList from "../layout/ScrollableList";
import { DUMMY_USERS } from "../../data";
import FriendItem from "../friends/FriendItem";
import SearchControl from "../common/SearchControl";
import { useTheme } from "@emotion/react";

const AddNewMessage = () => {
  const { toggleAddChat } = useContext(NavigationContext);
  const theme = useTheme();
  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center" p="12px">
        <Typography fontWeight="bold" fontSize="x-large">
          Select a contact
        </Typography>
        <IconButton onClick={toggleAddChat}>
          <Close />
        </IconButton>
      </Box>

      <Box padding="0 12px">
        <SearchControl placeholder="Search friends..." backgroundColor={theme.palette.grey["200"]} />
      </Box>

      <ScrollableList p="12px" gap="0.5rem" thumbWidth="10px" thumbColor="#8f0acd73">
        {DUMMY_USERS.map((friend) => (
          <FriendItem key={friend.id} {...friend} active={friend.id === 2} />
        ))}
      </ScrollableList>
    </>
  );
};

export default AddNewMessage;
