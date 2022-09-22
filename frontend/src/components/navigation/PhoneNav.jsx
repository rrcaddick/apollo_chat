import { Box } from "@mui/material";

const PhoneNav = ({ position }) => {
  return (
    <Box flex="1 0 100%" width="100%" sx={{ transform: `translateX(-${100 * position}%)` }}>
      Phone Menu
      <a href="tel:+6199942413">call us!</a>
    </Box>
  );
};

export default PhoneNav;
