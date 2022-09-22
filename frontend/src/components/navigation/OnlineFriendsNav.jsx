import { Stack, Typography } from "@mui/material";
import ScrollableList from "../common/ScrollableList";
import { DUMMY_USERS } from "../../data";
import FriendItem from "../friends/FriendItem";

const OnlineFriendsNav = ({ position }) => {
  return (
    <Stack flex="1 0 100%" p="12px" width="100%" spacing={1} sx={{ transform: `translateX(-${100 * position}%)` }}>
      <Typography fontSize="1.5rem" fontWeight="bold">
        Online Friends
      </Typography>
      <ScrollableList gap="0.5rem" thumbWidth="10px" thumbColor="#8f0acd73">
        {DUMMY_USERS.map((friend) => (
          <FriendItem {...friend} />
        ))}
      </ScrollableList>
    </Stack>
  );
};

export default OnlineFriendsNav;
