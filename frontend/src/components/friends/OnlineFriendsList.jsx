import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ScrollableList from "../layout/ScrollableList";
import OnlineFriendItem from "./OnlineFriendItem";

const OnlineFriendsList = ({ onlineFriends }) => {
  return (
    <Box flex={1} p="12px 24px" display="flex" flexDirection="column" gap="1rem" overflow="hidden">
      <Typography fontSize="1.5rem" fontWeight="bold">
        Online Friends
      </Typography>
      <ScrollableList gap="0.5rem" thumbWidth="10px" thumbColor="#8f0acd73">
        {onlineFriends.map((friend) => (
          <OnlineFriendItem {...friend} />
        ))}
      </ScrollableList>
    </Box>
  );
};

export default OnlineFriendsList;
