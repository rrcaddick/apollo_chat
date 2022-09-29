import { useContext, useEffect, useState } from "react";
import { NavigationContext } from "../../providers/NavigationProvider";
import { DarkMode, LightMode, Logout, Person, Settings } from "@mui/icons-material";
import { ListItemIcon, MenuItem } from "@mui/material";
import DropDownMenu from "../common/DropDownMenu";
import { useNavigate } from "react-router-dom";

const UserMenu = ({ anchorEl, open, handleClose, toggleMenu: { toggleProfile, toggleSettings } }) => {
  const [darkMode, setDarkMode] = useState(false);

  const navigate = useNavigate();
  const { logout, logoutSuccess } = useContext(NavigationContext);

  const logoutHandler = () => {
    logout();
  };

  useEffect(() => {
    if (logoutSuccess) {
      navigate("/");
    }
  }, [logoutSuccess, navigate]);

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
      <MenuItem onClick={logoutHandler}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </DropDownMenu>
  );
};

export default UserMenu;
