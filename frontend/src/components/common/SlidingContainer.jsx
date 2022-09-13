import { Drawer } from "@mui/material";
import React from "react";

const SlidingContainer = ({ open, children, anchor = "right" }) => {
  return (
    <Drawer
      open={open}
      variant="persistent"
      anchor={anchor}
      sx={{
        "& .MuiDrawer-root": {
          position: "absolute",
          width: "100%",
        },
        "& .MuiPaper-root": {
          position: "absolute",
          width: "100%",
        },
      }}
    >
      {children}
    </Drawer>
  );
};

export default SlidingContainer;
