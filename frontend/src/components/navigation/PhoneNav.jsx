import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useGetFriends } from "../../graphql/user/hooks";
import { useDebounce } from "../../hooks/useDebounce";
import ScrollableList from "../common/ScrollableList";
import SearchControl from "../common/SearchControl";
import PhoneItem from "../friends/PhoneItem";

const PhoneNav = ({ position }) => {
  const { debounce } = useDebounce();
  const { friends, filterFriends, loading, error } = useGetFriends();

  const searchHandler = (e) => {
    const searchTerm = e.target.value;
    debounce(() => {
      filterFriends(searchTerm);
    }, 250);
  };

  return (
    <Stack flex="1 0 100%" p="12px" width="100%" spacing={1} sx={{ transform: `translateX(-${100 * position}%)` }}>
      <Typography fontSize="1.5rem" fontWeight="bold">
        Call a Friend
      </Typography>
      <SearchControl placeholder="Search friends..." onSearch={searchHandler} />

      {error && (
        <Typography fontSize="2rem" fontWeight="bold">
          {error.messsage}
        </Typography>
      )}
      {loading && (
        <Box display="flex" justifyContent="center" marginTop="2rem">
          <CircularProgress size="5rem" thickness={5} />
        </Box>
      )}
      {friends && (
        <ScrollableList gap="0.5rem" thumbWidth="10px" thumbColor="#8f0acd73">
          {friends.map((friend) => (
            <PhoneItem key={friend.id} {...friend} />
          ))}
        </ScrollableList>
      )}
    </Stack>
  );
};

export default PhoneNav;
