import { useEffect, useState } from "react";
import { DarkMode, LightMode, Logout, Person, Settings } from "@mui/icons-material";
import { Backdrop, CircularProgress, ListItemIcon, MenuItem } from "@mui/material";
import DropDownMenu from "../common/DropDownMenu";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";

const UserMenu = ({ anchorEl, open, handleClose, toggleMenu: { toggleProfile, toggleSettings } }) => {
  const [darkMode, setDarkMode] = useState(false);

  const navigate = useNavigate();
  const { logout, loading, success } = useLogout();

  const logoutHandler = () => {
    logout();
  };

  useEffect(() => {
    if (success) {
      navigate("/");
    }
  }, [success, navigate]);

  return (
    <>
      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading} invisible={false}>
        <CircularProgress size="10rem" thickness={5} />
      </Backdrop>
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
    </>
  );
};

export default UserMenu;
