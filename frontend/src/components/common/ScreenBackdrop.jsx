import ReactDOM from "react-dom";
import { Backdrop } from "@mui/material";

const backdropRoot = document.getElementById("backdrop");

const Portal = ({ children }) => {
  return ReactDOM.createPortal(children, backdropRoot);
};

const ScreenBackdrop = ({ children, isOpen, invisible, onClick }) => {
  return (
    <Portal>
      <Backdrop sx={{ color: "#fff", zIndex: 1 }} open={isOpen} invisible={invisible} onClick={onClick}>
        {children && children}
      </Backdrop>
    </Portal>
  );
};

export default ScreenBackdrop;
