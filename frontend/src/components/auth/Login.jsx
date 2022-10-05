import styled from "@emotion/styled";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Alert, Button, IconButton, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { useShowPassword } from "../../hooks/useShowPassword";
import { useForm } from "react-hook-form";
import { emailValidator } from "./validators";
import { useNavigate } from "react-router-dom";

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 0 0;
`;

const Login = () => {
  const { showPassword, toggleShowPassword } = useShowPassword();

  const { login, loading, serverError, success } = useLogin();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "rrcaddick@gmail.com",
      password: "Whatever123!",
    },
    mode: "all",
  });

  const loginHandler = async (userData) => {
    await login(userData);
  };

  useEffect(() => {
    if (success) {
      navigate("/chat");
    }
  }, [success, navigate]);

  return (
    <>
      {serverError && (
        <Alert sx={{ marginTop: "1rem" }} severity="error">
          {serverError}
        </Alert>
      )}
      <LoginForm onSubmit={handleSubmit(loginHandler)}>
        <TextField
          variant="standard"
          label="Email Address"
          placeholder="example@example.com"
          fullWidth
          type="email"
          helperText={errors?.email?.message}
          error={errors?.email}
          {...register("email", emailValidator)}
        />
        <TextField
          variant="standard"
          label="Password"
          placeholder="P@ssw0rd!2$"
          fullWidth
          type={showPassword ? "text" : "password"}
          helperText={errors?.password?.message}
          error={errors?.password}
          {...register("password", { required: "Please enter your password" })}
          InputProps={{
            endAdornment: (
              <IconButton onClick={toggleShowPassword}>{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton>
            ),
          }}
        />
        <Button type="submit" variant="contained" sx={{ marginTop: "2rem" }} disabled={!isValid || loading}>
          {loading ? "Loading" : "Login"}
        </Button>
      </LoginForm>
    </>
  );
};

export default Login;
