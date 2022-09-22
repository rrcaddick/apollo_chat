import { DarkMode, LightMode, Logout, Person, Settings } from "@mui/icons-material";
import { ListItemIcon, MenuItem } from "@mui/material";
import { useState } from "react";
import DropDownMenu from "../common/DropDownMenu";

const UserMenu = ({ anchorEl, open, handleClose, toggleMenu: { toggleProfile, toggleSettings } }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DropDownMenu anchorEl={anchorEl} open={open} onClose={handleClose} onClick={handleClose}>
      <MenuItem onClick={toggleProfile}>
        <ListItemIcon>
          <Person fontSize="small" />
        </ListItemIcon>
        Profile
      </MenuItem>
      <MenuItem onClick={toggleSettings}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem>
        <ListItemIcon>{darkMode ? <DarkMode fontSize="small" /> : <LightMode fontSize="small" />}</ListItemIcon>
        {darkMode ? "Dark" : "Light"} Mode
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </DropDownMenu>
  );
};

export default UserMenu;
