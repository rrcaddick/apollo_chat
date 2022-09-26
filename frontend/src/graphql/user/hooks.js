import { baseMutation } from "../baseMutation";
import { REGISTER_USER_MUTATION } from "./mutations";

const useRegisterUser = baseMutation(REGISTER_USER_MUTATION);

export { useRegisterUser };
