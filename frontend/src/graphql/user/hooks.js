import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { baseMutation } from "../mutationUtils";
import { REGISTER_USER_MUTATION, createUpdateProfile, createUpdateUser } from "./mutations";
import { GET_ME_QUERY, GET_ONLINE_FRIENDS } from "./queries";
import { currentUserIdVar } from "../variables/currentUser";

const useRegisterUser = baseMutation(REGISTER_USER_MUTATION);
const useUpdateProfile = baseMutation(createUpdateProfile());
const useUpdateUser = baseMutation(createUpdateUser());

const useGetMe = (onCompletedFn = null) => {
  const { data, loading, error } = useQuery(GET_ME_QUERY, {
    onCompleted: ({ me }) => {
      onCompletedFn && onCompletedFn(me);
      currentUserIdVar(me.id);
    },
  });
  return { me: data?.me, loading, error };
};

const useGetFriends = () => {
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

export { useRegisterUser, useGetMe, useGetFriends, useUpdateProfile, useUpdateUser };
