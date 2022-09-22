import { Box, IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

const Settings = ({ onClose }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" p="12px">
      <Typography fontWeight="bold" fontSize="x-large">
        Settings
      </Typography>
      <IconButton onClick={onClose}>
        <Close />
      </IconButton>
    </Box>
  );
};

export default Settings;
