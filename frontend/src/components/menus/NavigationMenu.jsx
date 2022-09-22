import { Group, Message, Notifications, Phone } from "@mui/icons-material";
import { Avatar, Badge, IconButton } from "@mui/material";
import { useState } from "react";
import MenuWrapper from "../common/MenuWrapper";
import UserMenuOptions from "./UserMenuOptions";

const NavigationMenu = ({ onNavigate, navMenuPosition, toggleMenu }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const MenuItems = [
    { icon: <Message />, navPos: 0, active: navMenuPosition === 0 },
    { icon: <Phone />, navPos: 1, active: navMenuPosition === 1 },
    { icon: <Group />, navPos: 2, active: navMenuPosition === 2 },
    {
      icon: (
        <Badge badgeContent={4} color="secondary">
          <Notifications />
        </Badge>
      ),
      navPos: 3,
      active: navMenuPosition === 3,
    },
  ];

  return (
    <MenuWrapper padding="12px 24px">
      {MenuItems.map(({ icon, navPos, active }) => (
        <IconButton
          key={navPos}
          color={active ? "primary" : "default"}
          onClick={() => {
            onNavigate(navPos);
          }}
        >
          {icon}
        </IconButton>
      ))}

      <IconButton onClick={handleClick}>
        <Avatar
          alt="Ray Caddick"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        />
      </IconButton>
      <UserMenuOptions anchorEl={anchorEl} open={open} handleClose={handleClose} toggleMenu={toggleMenu} />
    </MenuWrapper>
  );
};

export default NavigationMenu;
