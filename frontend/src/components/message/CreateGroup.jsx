import { Close, CancelRounded } from "@mui/icons-material";
import { Avatar, Badge, Box, IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import { NavigationContext } from "../../providers/NavigationProvider";
import ScrollableList from "../layout/ScrollableList";
import { DUMMY_USERS } from "../../data";
import FriendItem from "../friends/FriendItem";
import SearchControl from "../common/SearchControl";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const participants = DUMMY_USERS.slice(0, 30);

const RemoveIcon = styled(CancelRounded)`
  color: red;
  background-color: white;
  border-radius: 50%;
`;

const CreateGroup = () => {
  const { toggleCreateGroup } = useContext(NavigationContext);
  const theme = useTheme();
  return (
    <Box display="flex" flexDirection="column" gap="0.8rem" overflow="hidden">
      <Box display="flex" justifyContent="space-between" alignItems="center" p="12px 12px 0px">
        <Typography fontWeight="bold" fontSize="x-large">
          Add Participants
        </Typography>
        <IconButton onClick={toggleCreateGroup}>
          <Close />
        </IconButton>
      </Box>
      <Box
        display="flex"
        p="6px 12px"
        gap="0.5rem"
        flexWrap="wrap"
        overflow="scroll"
        flex="0 0 auto"
        maxHeight="6.1rem"
      >
        {participants.map((participant) => (
          <Box display="flex" justifyContent="flex-start" alignItems="flex-start">
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <IconButton size="small">
                  <RemoveIcon fontSize="small" />
                </IconButton>
              }
            >
              <Avatar src={participant.profilePicture} />
            </Badge>
          </Box>
        ))}
      </Box>

      <Box padding="0 12px">
        <SearchControl placeholder="Search friends..." backgroundColor={theme.palette.grey["200"]} />
      </Box>

      <ScrollableList p="12px" gap="0.5rem" thumbWidth="10px" thumbColor="#8f0acd73">
        {DUMMY_USERS.map((friend) => (
          <FriendItem key={friend.id} {...friend} active={friend.id === 2} />
        ))}
      </ScrollableList>
    </Box>
  );
};

export default CreateGroup;
