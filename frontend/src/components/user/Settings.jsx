import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { Close, Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useGetMe, useUpdateUser } from "../../graphql/user/hooks";
import { getDirtyFields } from "../../utils/formUtils";
import { createUpdateUser } from "../../graphql/user/mutations";
import { useShowPassword } from "../../hooks/useShowPassword";

const Settings = ({ onClose }) => {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { dirtyFields, isValid, errors },
  } = useForm({
    mode: "all",
  });

  const {
    showCurrentPassword,
    showPassword,
    showConfirmPassword,
    toggleShowCurrentPassword,
    toggleShowPassword,
    toggleShowConfirmPassword,
    resetVisibility,
  } = useShowPassword();

  const setDefaultValues = (me) => {
    reset(me);
  };
  const { me } = useGetMe(setDefaultValues);

  const onUpdateCompleted = () => {
    onClose();
  };

  const onCloseHandler = () => {
    const defaultFormState = { ...me, currentPassword: "", password: "", confirmPassword: "" };
    reset(defaultFormState);
    resetVisibility();
    onClose();
  };

  const { mutate: updateUser, loading, serverErrors } = useUpdateUser(onUpdateCompleted);

  const updateHandler = (userData) => {
    const input = getDirtyFields(userData, dirtyFields);
    updateUser({ variables: { input }, mutation: createUpdateUser(input) });
  };

  return (
    <Box display="flex" flexDirection="column" p="12px" gap="2rem">
      <Box display="flex" justifyContent="center" position="relative">
        <Typography fontWeight="bold" fontSize="x-large" textAlign="center">
          Settings
        </Typography>
        <IconButton
          onClick={onCloseHandler}
          sx={{
            position: "absolute",
            right: 0,
          }}
        >
          <Close />
        </IconButton>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        gap="1.5rem"
        sx={(theme) => ({
          padding: "0 5%",
          [theme.breakpoints.up("md")]: {
            padding: "0 10%",
          },
        })}
      >
        <TextField
          variant="standard"
          label="Name"
          placeholder="Change your name"
          fullWidth
          InputLabelProps={{ shrink: Boolean(watch("name", true)) }}
          helperText={errors?.name?.message || serverErrors?.name}
          error={errors?.name || Boolean(serverErrors?.name)}
          {...register("name", { required: "Your name cannot be blank" })}
        />
        <TextField
          variant="standard"
          label="Email"
          placeholder="Update your email address"
          fullWidth
          InputLabelProps={{ shrink: Boolean(watch("email", true)) }}
          helperText={errors?.email?.message || serverErrors?.email}
          error={errors?.email || Boolean(serverErrors?.email)}
          {...register("email", { required: "Email cannot be blank" })}
        />
        <TextField
          variant="standard"
          label="Current Password"
          placeholder="Enter your current password"
          fullWidth
          type={showCurrentPassword ? "text" : "password"}
          helperText={errors?.currentPassword?.message || serverErrors?.currentPassword}
          error={errors?.currentPassword || Boolean(serverErrors?.currentPassword)}
          InputProps={{
            endAdornment: (
              <IconButton onClick={toggleShowCurrentPassword}>
                {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
          {...register("currentPassword", {
            validate: (currentPassword) => {
              if (watch("password") && !currentPassword) {
                return "Your current password is required to change passwords";
              }
              return true;
            },
          })}
        />
        <TextField
          variant="standard"
          label="New Password"
          placeholder="Enter a new password"
          fullWidth
          helperText={errors?.password?.message || serverErrors?.password}
          error={errors?.password || Boolean(serverErrors?.password)}
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <IconButton onClick={toggleShowPassword}>{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton>
            ),
          }}
          {...register("password", {
            deps: ["currentPassword", "confirmPassword"],
            validate: (password) => {
              if (watch("confirmPassword") && !password) {
                return "Please enter a password to confirm";
              }
              return true;
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Your password should be least 8 characters, with at least 1 lowercase, capital, number and special character",
            },
          })}
        />
        <TextField
          variant="standard"
          label="Confirm New Password"
          placeholder="Confirm your new password"
          fullWidth
          helperText={errors?.confirmPassword?.message || serverErrors?.confirmPassword}
          error={errors?.confirmPassword || Boolean(serverErrors?.confirmPassword)}
          type={showConfirmPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <IconButton onClick={toggleShowConfirmPassword}>
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
          {...register("confirmPassword", {
            deps: ["password"],
            validate: (confirmPassword) => {
              if (watch("password") && !confirmPassword) return "Please confirm your password";
              if (confirmPassword !== watch("password")) return "Your passwords do not match";
              return true;
            },
          })}
        />
        <Button variant="contained" fullWidth onClick={handleSubmit(updateHandler)} disabled={!isValid || loading}>
          {loading ? "Loading..." : "Update"}
        </Button>
      </Box>
    </Box>
  );
};

export default Settings;
