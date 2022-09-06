import { AppBar, Toolbar } from "@mui/material";

const ChatMenu = ({ children }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", color: "black", marginBottom: "0.75rem" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>{children}</Toolbar>
    </AppBar>
  );
};

export default ChatMenu;
