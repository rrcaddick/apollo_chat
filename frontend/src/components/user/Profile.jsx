import { Avatar, Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { Close, PhotoCamera } from "@mui/icons-material";
import { useGetMe } from "../../graphql/user/hooks";

const Profile = ({ onClose }) => {
  const { me } = useGetMe();

  return (
    <Box display="flex" flexDirection="column" p="12px" gap="2rem">
      <Box display="flex" justifyContent="center" position="relative">
        <Typography fontWeight="bold" fontSize="x-large" textAlign="center">
          {me?.name}
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
          <Avatar alt={me?.name} src={me?.profilePicture} sx={{ width: "100%", height: "100%" }} />
          <input hidden accept="image/*" type="file" />
          <PhotoCamera sx={{ position: "absolute", bottom: "10%" }} />
        </IconButton>
      </Box>
      <Box display="flex" flexDirection="column" gap="2rem" p="0 15%">
        <TextField
          variant="standard"
          label="Status"
          placeholder="Set a new status"
          value={me?.status || ""}
          fullWidth
        />
        <TextField
          variant="standard"
          placeholder="Update your mobile number"
          label="Mobile Number"
          value={me?.mobile || ""}
          fullWidth
        />
        <Button variant="contained" fullWidth>
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
