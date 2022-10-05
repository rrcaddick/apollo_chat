import { useState } from "react";
import styled from "@emotion/styled";
import { Button, IconButton, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import {
  nameValidator,
  emailValidator,
  mobileValidator,
  passwordValidator,
  confirmPasswordValidator,
} from "./validators";
import { useRegisterUser } from "../../graphql/user/hooks";
import { useShowPassword } from "../../hooks/useShowPassword";

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const Register = ({ onRegister }) => {
  const { showPassword, showConfirmPassword, toggleShowPassword, toggleShowConfirmPassword } = useShowPassword();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "Raymond Caddick",
      email: "rrcaddick@gmail.com",
      mobile: "0763635909",
      password: "Whatever123!",
      confirmPassword: "Whatever123!",
    },
    mode: "all",
  });

  const { loading, serverErrors, mutate: registerUser } = useRegisterUser(onRegister);

  const registerHandler = (userData) => {
    registerUser({ variables: { input: userData } });
  };

  return (
    <RegisterForm onSubmit={handleSubmit(registerHandler)}>
      <TextField
        variant="standard"
        label="Full Name"
        placeholder="John Doe"
        helperText={errors?.name?.message || serverErrors?.name}
        error={errors?.name || Boolean(serverErrors?.name)}
        fullWidth
        {...register("name", nameValidator)}
      />
      <TextField
        variant="standard"
        type="email"
        label="Email Address"
        placeholder="example@example.com"
        helperText={errors?.email?.message || serverErrors?.email}
        error={errors?.email || Boolean(serverErrors?.email)}
        fullWidth
        {...register("email", emailValidator)}
      />
      <TextField
        variant="standard"
        label="Mobile Number"
        placeholder="0761234567"
        helperText={errors?.mobile?.message || serverErrors?.mobile}
        error={errors?.mobile || Boolean(serverErrors?.mobile)}
        fullWidth
        {...register("mobile", mobileValidator)}
      />
      <TextField
        variant="standard"
        type={showPassword ? "text" : "password"}
        label="Password"
        placeholder="P@ssw0rd!2$"
        helperText={errors?.password?.message || serverErrors?.password}
        error={errors?.password || Boolean(serverErrors?.password)}
        fullWidth
        InputProps={{
          endAdornment: (
            <IconButton onClick={toggleShowPassword}>{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton>
          ),
        }}
        {...register("password", passwordValidator)}
      />
      <TextField
        variant="standard"
        type={showConfirmPassword ? "text" : "password"}
        label="Confirm Password"
        placeholder="P@ssw0rd!2$"
        helperText={errors?.confirmPassword?.message || serverErrors?.confirmPassword}
        error={errors?.confirmPassword || Boolean(serverErrors?.confirmPassword)}
        fullWidth
        InputProps={{
          endAdornment: (
            <IconButton onClick={toggleShowConfirmPassword}>
              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        }}
        {...register("confirmPassword", confirmPasswordValidator(getValues))}
      />
      <Button variant="contained" sx={{ marginTop: "1.5rem" }} type="submit">
        {loading ? "Loading..." : "Register"}
      </Button>
    </RegisterForm>
  );
};

export default Register;
