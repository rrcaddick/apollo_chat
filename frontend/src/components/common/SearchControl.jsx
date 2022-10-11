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
  border: none;
  padding: 12px 0 12px 6px;
  outline: 0;
  width: 100%;
`;

const SearchControl = ({ placeholder, onSearch, backgroundColor = "#fff" }) => {
  const handleEnterHandler = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
    }
  };

  return (
    <InputUnstyled
      backgroundColor={backgroundColor}
      placeholder={placeholder}
      type="search"
      components={{
        Root: StyledInputRoot,
        Input: StyledInputElement,
      }}
      onChange={onSearch}
      onKeyPress={handleEnterHandler}
      startAdornment={
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
      }
    />
  );
};

export default SearchControl;
