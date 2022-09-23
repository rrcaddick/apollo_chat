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

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const Register = () => {
  const [visibility, setVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: "all" });

  const registerHandler = (userData) => {
    console.log(userData);
  };

  return (
    <RegisterForm onSubmit={handleSubmit(registerHandler)}>
      <TextField
        variant="standard"
        label="Full Name"
        placeholder="John Doe"
        helperText={errors?.name?.message}
        error={errors?.name}
        fullWidth
        {...register("name", nameValidator)}
      />
      <TextField
        variant="standard"
        type="email"
        label="Email Address"
        placeholder="example@example.com"
        helperText={errors?.email?.message}
        error={errors?.email}
        fullWidth
        {...register("email", emailValidator)}
      />
      <TextField
        variant="standard"
        label="Mobile Number"
        placeholder="0761234567"
        helperText={errors?.tel?.message}
        error={errors?.tel}
        fullWidth
        {...register("tel", mobileValidator)}
      />
      <TextField
        variant="standard"
        type={visibility.password ? "text" : "password"}
        label="Password"
        placeholder="P@ssw0rd!2$"
        helperText={errors?.password?.message}
        error={errors?.password}
        fullWidth
        InputProps={{
          endAdornment: (
            <IconButton onClick={() => setVisibility((prevState) => ({ ...prevState, password: !prevState.password }))}>
              {visibility.password ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        }}
        {...register("password", passwordValidator)}
      />
      <TextField
        variant="standard"
        type={visibility.confirmPassword ? "text" : "password"}
        label="Confirm Password"
        placeholder="P@ssw0rd!2$"
        helperText={errors?.confirmPassword?.message}
        error={errors?.confirmPassword}
        fullWidth
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={() =>
                setVisibility((prevState) => ({ ...prevState, confirmPassword: !prevState.confirmPassword }))
              }
            >
              {visibility.confirmPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        }}
        {...register("confirmPassword", confirmPasswordValidator(getValues))}
      />
      <Button variant="contained" sx={{ marginTop: "1.5rem" }} type="submit">
        Register
      </Button>
    </RegisterForm>
  );
};

export default Register;
