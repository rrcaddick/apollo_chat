import { Drawer } from "@mui/material";

const ContainedDrawer = ({ children, open, anchor = "right", width = "100%", sx, ...rest }) => {
  return (
    <Drawer
      open={open}
      anchor={anchor}
      variant="persistent"
      sx={{
        ...sx,
        "& .MuiDrawer-root": {
          position: "absolute",
          width: width,
        },
        "& .MuiPaper-root": {
          position: "absolute",
          width: width,
          height: "100%",
        },
      }}
      {...rest}
    >
      {children}
    </Drawer>
  );
};

export default ContainedDrawer;
