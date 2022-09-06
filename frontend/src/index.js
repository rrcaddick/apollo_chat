import React from "react";
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

      body {
        height: 100vh;
        width: 100vw;
        display: flex;
      }

      #root {
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
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
