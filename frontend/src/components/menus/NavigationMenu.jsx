import { Group, Message, Notifications, Phone } from "@mui/icons-material";
import { Avatar, Badge, IconButton } from "@mui/material";
import { useState } from "react";
import { useGetMe, useGetOnlineFriends } from "../../graphql/user/hooks";
import MenuWrapper from "../common/MenuWrapper";
import UserMenuOptions from "./UserMenuOptions";
import { getAvatarUrl } from "../../utils/cloudinary";

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

  const { friendCount } = useGetOnlineFriends();

  const MenuItems = [
    { icon: <Message />, navPos: 0, active: navMenuPosition === 0 },
    { icon: <Phone />, navPos: 1, active: navMenuPosition === 1 },
    {
      icon: (
        <Badge badgeContent={friendCount} color="secondary">
          <Group />
        </Badge>
      ),
      navPos: 2,
      active: navMenuPosition === 2,
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
        <Avatar alt={me?.name} src={getAvatarUrl(me?.profilePicture)} />
      </IconButton>
      <UserMenuOptions anchorEl={anchorEl} open={open} handleClose={handleClose} toggleMenu={toggleMenu} />
    </MenuWrapper>
  );
};

export default NavigationMenu;
