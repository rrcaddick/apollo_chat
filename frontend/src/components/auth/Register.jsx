import { useState } from "react";
import styled from "@emotion/styled";
import { Button, IconButton, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem 0 0;
`;

const Register = () => {
  const [visibility, setVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  return (
    <RegisterForm>
      <TextField variant="standard" label="Name" placeholder="John Doe" helperText="" fullWidth />
      <TextField
        variant="standard"
        type="email"
        label="Email Address"
        placeholder="example@example.com"
        helperText=""
        fullWidth
      />
      <TextField variant="standard" label="Mobile Number" placeholder="+27 123 4567" helperText="" fullWidth />
      <TextField
        variant="standard"
        type={visibility.password ? "text" : "password"}
        label="Password"
        placeholder="P@ssw0rd!2$"
        helperText=""
        fullWidth
        InputProps={{
          endAdornment: (
            <IconButton onClick={() => setVisibility((prevState) => ({ ...prevState, password: !prevState.password }))}>
              {visibility.password ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        }}
      />
      <TextField
        variant="standard"
        type={visibility.confirmPassword ? "text" : "password"}
        label="Confirm Password"
        placeholder="P@ssw0rd!2$"
        helperText=""
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
      />
      <Button variant="contained" sx={{ marginTop: "1.5rem" }}>
        Register
      </Button>
    </RegisterForm>
  );
};

export default Register;
