import { CircularProgress, Stack, Typography } from "@mui/material";
import ScrollableList from "../common/ScrollableList";
import FriendItem from "../friends/FriendItem";
import SearchControl from "../common/SearchControl";
import { useGetFriends } from "../../graphql/user/hooks";
import { useDebounce } from "../../hooks/useDebounce";
import { Box } from "@mui/system";

const OnlineFriendsNav = ({ position }) => {
  const { debounce } = useDebounce();
  const { onlineFriends, filterOnlineFriends, loading, error } = useGetFriends();

  const searchHandler = (e) => {
    const searchTerm = e.target.value;
    debounce(() => {
      filterOnlineFriends(searchTerm);
    }, 250);
  };

  return (
    <Stack flex="1 0 100%" p="12px" width="100%" spacing={1} sx={{ transform: `translateX(-${100 * position}%)` }}>
      <Typography fontSize="1.5rem" fontWeight="bold">
        Online Friends
      </Typography>
      <SearchControl placeholder="Search friends..." onSearch={searchHandler} />

      {error && (
        <Typography fontSize="2rem" fontWeight="bold">
          {error.messsage}
        </Typography>
      )}
      {loading && (
        <Box display="flex" justifyContent="center" marginTop="2rem">
          <CircularProgress size="5rem" />
        </Box>
      )}
      {onlineFriends && (
        <ScrollableList gap="0.5rem" thumbWidth="10px" thumbColor="#8f0acd73">
          {onlineFriends.map((friend) => (
            <FriendItem key={friend.id} {...friend} />
          ))}
        </ScrollableList>
      )}
    </Stack>
  );
};

export default OnlineFriendsNav;
