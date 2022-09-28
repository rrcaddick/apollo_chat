import { Group, Message, Notifications, Phone } from "@mui/icons-material";
import { Avatar, Badge, IconButton } from "@mui/material";
import { useState } from "react";
import { useGetMe } from "../../graphql/user/hooks";
import MenuWrapper from "../common/MenuWrapper";
import UserMenuOptions from "./UserMenuOptions";

const NavigationMenu = ({ onNavigate, navMenuPosition, toggleMenu }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { me } = useGetMe();

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
        <Avatar alt={me?.name} src={me?.profilePicture} />
      </IconButton>
      <UserMenuOptions anchorEl={anchorEl} open={open} handleClose={handleClose} toggleMenu={toggleMenu} />
    </MenuWrapper>
  );
};

export default NavigationMenu;
