import { DarkMode, LightMode, Logout, Person, Settings } from "@mui/icons-material";
import { Backdrop, CircularProgress, ListItemIcon, MenuItem } from "@mui/material";
import DropDownMenu from "../common/DropDownMenu";
import { useLogout } from "../../hooks/useLogout";
import { isDarkModeVar } from "../../graphql/variables/common";
import { toggleDarkMode } from "../../utils/common";
import { useReactiveVar } from "@apollo/client";

const UserMenu = ({ anchorEl, open, handleClose, toggleMenu: { toggleProfile, toggleSettings } }) => {
  const isDarkMode = useReactiveVar(isDarkModeVar);
  const { logout, loading } = useLogout();

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
        <MenuItem onClick={toggleDarkMode}>
          <ListItemIcon>{isDarkMode ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}</ListItemIcon>
          {isDarkMode ? "Light" : "Dark"} Mode
        </MenuItem>
        <MenuItem onClick={logout}>
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
