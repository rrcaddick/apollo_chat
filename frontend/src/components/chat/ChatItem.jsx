import { Avatar, Box, Typography } from "@mui/material";

const ChatItem = ({ active, latestMessage, details: { name, profilePicture } }) => {
  const activestyles = active
    ? {
        backgroundColor: (theme) => theme.palette.primary.main,
        color: (theme) => theme.palette.primary.contrastText,
      }
    : {};

  return (
    <Box
      p="1rem"
      backgroundColor="#fff"
      borderRadius="10px"
      display="flex"
      gap="1rem"
      justifyContent="flex-start"
      sx={{
        cursor: "pointer",
        "&:hover": {
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.primary.contrastText,
        },
      }}
      {...activestyles}
    >
      <Avatar alt="Ash Caddick" src={profilePicture} />

      <Box overflow="hidden" textOverflow="ellipsis">
        <Typography fontWeight="bold">{name}</Typography>
        <Typography fontSize="x-small" noWrap>
          {latestMessage}
        </Typography>
      </Box>

      <Box marginLeft="auto" display="flex" flexDirection="column" alignItems="flex-end" justifyContent="space-between">
        <Typography fontSize="x-small" noWrap>
          3:43 PM
        </Typography>
        <Typography
          fontSize="small"
          borderRadius="50%"
          backgroundColor="purple"
          width="1.25rem"
          height="1.25rem"
          color="#fff"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          2
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatItem;
