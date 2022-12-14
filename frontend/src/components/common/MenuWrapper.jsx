import { AppBar, Toolbar } from "@mui/material";
import React from "react";

const MenuWrapper = ({ children, ...rest }) => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "background.paper",
        color: "text.primary",
        marginBottom: "0.75rem",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "0.5rem",
        }}
        {...rest}
      >
        {children}
      </Toolbar>
    </AppBar>
  );
};

export default MenuWrapper;
