import InputUnstyled from "@mui/base/InputUnstyled";
import styled from "@emotion/styled";
import { InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

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
  flex-grow: 1;
  border: none;
  padding: 12px 0 12px 6px;
  outline: 0;
`;

const SearchControl = ({ placeholder, onSearch, backgroundColor = "#fff" }) => {
  return (
    <InputUnstyled
      backgroundColor={backgroundColor}
      placeholder={placeholder}
      components={{
        Root: StyledInputRoot,
        Input: StyledInputElement,
      }}
      startAdornment={
        <InputAdornment>
          <Search />
        </InputAdornment>
      }
    />
  );
};

export default SearchControl;
