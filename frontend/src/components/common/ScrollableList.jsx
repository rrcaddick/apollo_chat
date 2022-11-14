import { Box } from "@mui/system";
import { forwardRef } from "react";

const ScrollableList = forwardRef(({ children, thumbWidth, thumbColor, ...rest }, ref) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexGrow={1}
      ref={ref}
      sx={{
        overflowY: "overlay",
        "&:hover::-webkit-scrollbar": {
          display: "block",
        },
        "::-webkit-scrollbar": { width: `${thumbWidth}`, display: "none" },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: `${thumbColor}`,
          borderRadius: "20px",
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
});

export default ScrollableList;
