import styled from "@emotion/styled";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, IconButton, TextField } from "@mui/material";
import { useState } from "react";

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0 0;
`;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <LoginForm>
      <TextField
        variant="standard"
        label="Email Address"
        placeholder="example@example.com"
        helperText=""
        fullWidth
        type="email"
      />
      <TextField
        variant="standard"
        label="Password"
        placeholder="P@ssw0rd!2$"
        helperText=""
        fullWidth
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        }}
      />
      <Button variant="contained" sx={{ marginTop: "2rem" }}>
        Login
      </Button>
    </LoginForm>
  );
};

export default Login;
