import { Badge, Box, Typography } from "@mui/material";
import AvatarWithInitials from "../common/AvatarWithInitials";

const FriendItem = ({ profilePicture, name, status, isOnline }) => {
  return (
    <Box
      display="flex"
      gap="1rem"
      alignItems="center"
      p="0.5rem"
      borderRadius="10px"
      sx={{
        cursor: "pointer",
        "&:hover": {
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.primary.contrastText,
        },
      }}
    >
      <AvatarWithInitials src={profilePicture} alt={name} isOnline={isOnline} />
      <Box>
        <Typography fontSize="1rem" fontWeight="bold">
          {name}
        </Typography>
        <Typography fontSize="x-small">{status}</Typography>
      </Box>
    </Box>
  );
};

export default FriendItem;
