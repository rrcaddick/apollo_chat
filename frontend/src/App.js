import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chats from "./pages/Chats";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import LoadQueries from "./components/query/LoadQueries";
import { isDarkModeVar } from "./graphql/variables/common";
import { createClient } from "./graphql/client";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      dark: "#424242",
      light: "#333",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "'Poppins', sans-serif",
    },
  },
});

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "'Poppins', sans-serif",
    },
  },
  palette: {
    background: {
      dark: "#eeeeee",
      light: "#fff",
    },
  },
});

const client = createClient();

const App = () => {
  const isDarkMode = useReactiveVar(isDarkModeVar);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
      <CssBaseline />
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/chat"
            element={
              <LoadQueries>
                <Chats />
              </LoadQueries>
            }
          />
        </Routes>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
