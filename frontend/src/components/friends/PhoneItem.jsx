import { Phone } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import AvatarWithInitials from "../common/AvatarWithInitials";

const PhoneItem = ({ profilePicture, name, mobile, isOnline }) => {
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
          "& .MuiIconButton-colorSuccess": {
            color: "white",
          },
        },
      }}
    >
      <AvatarWithInitials src={profilePicture} alt={name} isOnline={isOnline} />
      <Box>
        <Typography fontSize="1rem" fontWeight="bold">
          {name}
        </Typography>
        <Typography fontSize="x-small">{mobile}</Typography>
      </Box>
      <IconButton sx={{ marginLeft: "auto" }} color="success" href={`tel:${mobile}`}>
        <Phone />
      </IconButton>
    </Box>
  );
};

export default PhoneItem;
