import { useQuery } from "@apollo/client";
import { baseMutation } from "../baseMutation";
import { REGISTER_USER_MUTATION } from "./mutations";
import { GET_ME_QUERY } from "./queries";

const useRegisterUser = baseMutation(REGISTER_USER_MUTATION);

const useGetMe = () => {
  const { data, loading, error } = useQuery(GET_ME_QUERY);
  return { me: data?.me, loading, error };
};

export { useRegisterUser, useGetMe };
