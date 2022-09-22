import { Avatar, Box, IconButton, TextField, Typography } from "@mui/material";
import { Check, Close, PhotoCamera } from "@mui/icons-material";

const Profile = ({ onClose }) => {
  return (
    <Box display="flex" flexDirection="column" p="12px" gap="2rem">
      <Box display="flex" justifyContent="center" position="relative">
        <Typography fontWeight="bold" fontSize="x-large" textAlign="center">
          Raymond Caddick
        </Typography>
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 0,
          }}
        >
          <Close />
        </IconButton>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" position="relative">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          sx={{ flex: "0 1 50%", height: "100%", position: "relative" }}
        >
          <Avatar
            alt="Ray Caddick"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            sx={{ width: "100%", height: "100%" }}
          />
          <input hidden accept="image/*" type="file" />
          <PhotoCamera sx={{ position: "absolute", bottom: "10%" }} />
        </IconButton>
      </Box>
      <Box display="flex" p="0 15%">
        <TextField variant="standard" placeholder="Set a new status" fullWidth />
        <IconButton>
          <Check />
        </IconButton>
      </Box>
      <Box display="flex" p="0 15%">
        <TextField variant="standard" placeholder="Update your mobile number" fullWidth />
        <IconButton>
          <Check />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Profile;
