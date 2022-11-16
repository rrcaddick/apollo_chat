import { gql, useQuery, useSubscription } from "@apollo/client";
import { useEffect, useState } from "react";
import { baseMutation } from "../mutationUtils";
import { REGISTER_USER_MUTATION, createUpdateProfile, createUpdateUser } from "./mutations";
import { GET_ME_QUERY, GET_FRIENDS, READ_ONLINE_FRIENDS } from "./queries";
import { ON_USER_ONLINE } from "./subscriptions";

const useRegisterUser = baseMutation(REGISTER_USER_MUTATION);
const useUpdateProfile = baseMutation(createUpdateProfile());
const useUpdateUser = baseMutation(createUpdateUser());

const useGetMe = (onCompletedFn = null) => {
  const { data, loading, error } = useQuery(GET_ME_QUERY, {
    onCompleted: ({ me }) => {
      onCompletedFn && onCompletedFn(me);
    },
  });
  return { me: data?.me, loading, error };
};

const useGetFriends = () => {
  const [filteredFriends, setFilteredFriends] = useState();
  const { data, loading, error } = useQuery(GET_FRIENDS);
  const [filter, setFilter] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filterFriends = (searchTerm) => {
    setSearchTerm(searchTerm.toLowerCase());
  };

  const removeFriend = (friendId) => {
    setFilter((prevState) => [...prevState, friendId]);
  };

  const addFriend = (friendId) => {
    setFilter((prevState) => prevState.filter((id) => id !== friendId));
  };

  const resetFriends = () => {
    setFilter([]);
    setSearchTerm("");
  };

  useEffect(() => {
    if (data?.friends) {
      setFilteredFriends(
        data.friends.filter((friend) => friend.name.toLowerCase().includes(searchTerm) && !filter.includes(friend.id))
      );
    }
  }, [filter, searchTerm, data?.friends]);

  useEffect(() => {
    if (data?.friends) {
      setFilteredFriends(data.friends);
    }
  }, [data]);

  return { friends: filteredFriends, filterFriends, removeFriend, addFriend, resetFriends, loading, error };
};

const useGetOnlineFriends = () => {
  const [filteredFriends, setFilteredFriends] = useState();
  const { data, loading, error } = useQuery(READ_ONLINE_FRIENDS);
  const [friendCount, setFriendCount] = useState(0);

  const filterOnlineFriends = (searchTerm) => {
    if (searchTerm === "") {
      return setFilteredFriends(data.onlineFriends);
    }
    setFilteredFriends(data.onlineFriends.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase())));
  };

  useEffect(() => {
    if (data?.onlineFriends) {
      setFilteredFriends(data.onlineFriends);
      setFriendCount(data.onlineFriends.length);
    }
  }, [data]);

  return { onlineFriends: filteredFriends, friendCount, filterOnlineFriends, loading, error };
};

const useUserOnline = () => {
  const { loading, data, error } = useSubscription(ON_USER_ONLINE, {
    onData: ({ client, data }) => {
      const { userOnline } = data.data;

      client.cache.writeFragment({
        id: client.cache.identify(userOnline),
        fragment: gql`
          fragment updateOnlineStatus on User {
            isOnline
            lastSeen
          }
        `,
        data: {
          isOnline: userOnline.isOnline,
          lastSeen: userOnline.lastSeen,
        },
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { loading, data, error };
};

export {
  useRegisterUser,
  useGetMe,
  useGetFriends,
  useGetOnlineFriends,
  useUpdateProfile,
  useUpdateUser,
  useUserOnline,
};
