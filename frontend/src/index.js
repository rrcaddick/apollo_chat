import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Global, css } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material";

const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
      }

      html {
        height: 100%;
        width: 100%;
      }

      body {
        height: 100%;
        width: 100%;
        display: flex;
      }

      #root {
        height: 100%;
        width: 100%;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
      }
    `}
  />
);

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "'Poppins', sans-serif",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
