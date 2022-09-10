import { AppBar, Toolbar } from "@mui/material";

const ChatMenu = ({ children, ...rest }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", color: "black", marginBottom: "0.75rem" }}>
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

export default ChatMenu;
