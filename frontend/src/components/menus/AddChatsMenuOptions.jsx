import { AddRounded, CellTowerSharp, ChatBubble, GroupAdd } from "@mui/icons-material";
import { Backdrop, Box, SpeedDial, SpeedDialAction } from "@mui/material";
import { useState } from "react";

const AddChatsMenuOptions = ({ onOpen: { toggleAddChat, toggleCreateGroup, toggleSendBroadcast } }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  const speedDialActions = [
    {
      icon: <ChatBubble />,
      name: "Start a New Chat",
      action: toggleAddChat,
    },
    {
      icon: <GroupAdd />,
      name: "Create a Group",
      action: toggleCreateGroup,
    },
    {
      icon: <CellTowerSharp />,
      name: "Broadcast a Message",
      action: toggleSendBroadcast,
    },
  ];

  return (
    <Box display="flex" alignItems="center" flexShrink={1} position="relative">
      <Backdrop open={open} sx={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: "absolute", top: "-1.8rem", right: 0 }}
        direction="down"
        icon={<AddRounded />}
        onClose={handleClose}
        onClick={toggleOpen}
        onBlur={undefined}
        open={open}
        onMouseLeave={undefined}
      >
        {speedDialActions.map(({ name, icon, action }) => (
          <SpeedDialAction
            key={name}
            sx={{ whiteSpace: "nowrap" }}
            icon={icon}
            tooltipTitle={name}
            tooltipOpen
            onClick={() => {
              handleClose();
              action();
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default AddChatsMenuOptions;
