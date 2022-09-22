import { Drawer } from "@mui/material";

const ContainedDrawer = ({ children, open, anchor = "right", ...rest }) => {
  return (
    <Drawer
      open={open}
      anchor={anchor}
      variant="persistent"
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
      {...rest}
    >
      {children}
    </Drawer>
  );
};

export default ContainedDrawer;
