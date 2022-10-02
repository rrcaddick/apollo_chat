import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { baseMutation } from "../baseMutation";
import { REGISTER_USER_MUTATION, UPDATE_PROFILE } from "./mutations";
import { GET_ME_QUERY, GET_ONLINE_FRIENDS } from "./queries";

const useRegisterUser = baseMutation(REGISTER_USER_MUTATION);

const useUpdateProfile = baseMutation(UPDATE_PROFILE);

const useGetMe = (onCompletedFn = null) => {
  const { data, loading, error } = useQuery(GET_ME_QUERY, {
    onCompleted: ({ me }) => {
      onCompletedFn(me);
    },
  });
  return { me: data?.me, loading, error };
};

const useGetOnlineFriends = () => {
  const [filteredFriends, setFilteredFriends] = useState();
  const { data, loading, error } = useQuery(GET_ONLINE_FRIENDS);

  const filterOnlineFriends = (searchTerm) => {
    if (searchTerm === "") {
      return setFilteredFriends(data.onlineFriends);
    }
    setFilteredFriends(data.onlineFriends.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase())));
  };

  useEffect(() => {
    if (data?.onlineFriends) {
      setFilteredFriends(data.onlineFriends);
    }
  }, [data]);

  return { onlineFriends: filteredFriends, filterOnlineFriends, loading, error };
};

export { useRegisterUser, useGetMe, useGetOnlineFriends, useUpdateProfile };
