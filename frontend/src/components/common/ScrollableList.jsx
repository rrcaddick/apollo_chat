import { Box } from "@mui/system";

const ScrollableList = ({ children, thumbWidth, thumbColor, ...rest }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexGrow={1}
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
};

export default ScrollableList;
