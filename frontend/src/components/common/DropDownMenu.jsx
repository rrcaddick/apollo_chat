import { Menu } from "@mui/material";
const DropDownMenu = ({ children, ...rest }) => {
  return (
    <Menu
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 12,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      {...rest}
    >
      {children}
    </Menu>
  );
};

export default DropDownMenu;
