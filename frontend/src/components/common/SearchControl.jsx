import { Search } from "@mui/icons-material";
import { Input, InputAdornment } from "@mui/material";

const SearchControl = () => {
  return (
    <Input
      variant="filled"
      placeholder="Search Chats..."
      sx={{
        padding: "0.5rem 1rem",
        backgroundColor: "#fff",
        "&:hover:not(.Mui-disabled):before": {
          borderBottom: "none",
        },
        "&::before": {
          borderBottom: "none",
        },
        "&:focus": {
          borderBottom: "none",
        },
      }}
      startAdornment={
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
      }
    />
  );
};

export default SearchControl;
