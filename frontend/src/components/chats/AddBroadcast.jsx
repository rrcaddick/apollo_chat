import { Box, Fab, IconButton, Typography, useTheme } from "@mui/material";
import { Check, Close } from "@mui/icons-material";
import Participants from "./Participants";
import SearchControl from "../common/SearchControl";
import { DUMMY_USERS } from "../../data";
import ScrollableList from "../common/ScrollableList";
import FriendItem from "../friends/FriendItem";

const participants = DUMMY_USERS.slice(0, 20);

const AddBroadcast = ({ onClose }) => {
  const theme = useTheme();
  return (
    <Box display="flex" flexDirection="column" gap="0.8rem" overflow="hidden">
      <Box display="flex" justifyContent="space-between" alignItems="center" p="12px 12px 0px">
        <Typography fontWeight="bold" fontSize="x-large">
          Add To Broadcast
        </Typography>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </Box>

      <Participants participants={participants} />

      <Box padding="0 12px">
        <SearchControl placeholder="Search friends..." backgroundColor={theme.palette.grey["200"]} />
      </Box>

      <Box p="12px" overflow="hidden" display="flex" flexGrow={1} position="relative`">
        <ScrollableList gap="0.5rem" thumbWidth="10px" thumbColor="#8f0acd73">
          {DUMMY_USERS.map((friend) => (
            <FriendItem key={friend.id} {...friend} active={friend.id === 2} />
          ))}
        </ScrollableList>
        <Fab
          color="primary"
          sx={{
            position: "absolute",
            bottom: "12px",
            right: "12px",
          }}
        >
          <Check />
        </Fab>
      </Box>
    </Box>
  );
};

export default AddBroadcast;
