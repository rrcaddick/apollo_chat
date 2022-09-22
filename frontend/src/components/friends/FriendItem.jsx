import { Avatar, Badge, Box, Typography } from "@mui/material";

const FriendItem = ({ profilePicture, name, status }) => {
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
      <Badge
        variant="dot"
        color="success"
        overlap="circular"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Avatar src={profilePicture} />
      </Badge>
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
