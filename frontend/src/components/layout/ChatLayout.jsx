import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { forwardRef } from "react";

const ChatLayout = forwardRef(({ children }, ref) => {
  return (
    <>
      <AppBar
        sx={(theme) => ({
          marginBottom: "0.5rem",
          display: "none",
          [theme.breakpoints.up("md")]: {
            display: "block",
          },
        })}
        position="static"
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography fontSize="1rem" fontWeight="bold">
            GRAPHQL CHAT
          </Typography>
          <Typography fontSize="0.75rem" textAlign="right">
            An Simple Display of Apollo's Power
          </Typography>
        </Toolbar>
      </AppBar>
      <Box ref={ref} component="main" display="flex" width="100%" overflow="hidden" flexGrow={1}>
        {children}
      </Box>
    </>
  );
});

export default ChatLayout;
