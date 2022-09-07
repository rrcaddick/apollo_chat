import { Avatar, Box, Typography } from "@mui/material";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import styled from "@emotion/styled";

const NotificationLink = styled(ButtonUnstyled)`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: blue;
  font-size: 0.75rem;
`;

const NotificationItem = ({ user: { name, profilePicture }, time, action, target }) => {
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
      <Avatar src={profilePicture} />
      <Box>
        <Typography
          fontSize="0.75rem"
          lineHeight="1.5"
          display="block"
          sx={{
            "&:after": {
              content: `" - ${time}"`,
              fontSize: "0.6rem",
              color: (theme) => theme.palette.grey["400"],
              marginLeft: "1rem",
            },
          }}
        >
          <NotificationLink variant="text">@{name}</NotificationLink> {`${action} "${target}"`}
        </Typography>
      </Box>
    </Box>
  );
};

export default NotificationItem;
