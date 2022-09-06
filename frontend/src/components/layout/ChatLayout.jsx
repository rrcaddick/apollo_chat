import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const ChatLayout = ({ children }) => {
  return (
    <>
      <AppBar sx={{ marginBottom: "0.5rem" }} position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography fontSize={20} fontWeight="bold">
            GRAPHQL CHAT
          </Typography>
          <Typography>An Elegant Display of Apollo's Power</Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ display: "flex", width: "100%", overflow: "hidden", flexGrow: 1 }}>
        {children}
      </Box>
    </>
  );
};

export default ChatLayout;
