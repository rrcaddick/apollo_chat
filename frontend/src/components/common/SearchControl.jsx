import styled from "@emotion/styled";
import { Input, InputAdornment, useTheme } from "@mui/material";
import { Search } from "@mui/icons-material";
import { forwardRef } from "react";

const StyledInputRoot = styled.div`
  font-weight: 400;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${(p) => p.backgroundColor};
  padding: 0 12px;
`;

const StyledInputElement = styled.input`
  font-size: 0.875rem;
  background-color: inherit;
  border-radius: inherit;
  font-weight: 400;
  line-height: 1;
  border: none;
  padding: 12px 0 12px 6px;
  outline: 0;
  width: 100%;
`;

const InputElement = forwardRef((props, ref) => {
  return <StyledInputElement ref={ref} {...props} />;
});

const SearchControl = forwardRef(({ placeholder, onSearch }, ref) => {
  const handleEnterHandler = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
    }
  };

  const onChangeHandler = (e) => {
    onSearch(e);
  };

  const theme = useTheme();

  return (
    <Input
      backgroundColor={theme.palette.common.white}
      placeholder={placeholder}
      type="search"
      components={{
        Root: StyledInputRoot,
        Input: InputElement,
      }}
      inputRef={ref}
      onChange={onChangeHandler}
      onKeyPress={handleEnterHandler}
      startAdornment={
        <InputAdornment position="start">
          <Search sx={{ color: theme.palette.grey["600"] }} />
        </InputAdornment>
      }
    />
  );
});

export default SearchControl;
