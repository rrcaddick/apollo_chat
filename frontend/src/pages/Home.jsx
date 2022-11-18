import { useState } from "react";
import { Box, Container, Stack, Tab, Tabs, Typography, useTheme } from "@mui/material";
import { isDarkModeVar } from "../graphql/variables/common";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import BackgroundImage from "../assets/home-background.webp";
import DarkBackgroundImage from "../assets/dark-home-background.jpg";

const Home = () => {
  const theme = useTheme();
  const isDarkMode = isDarkModeVar();
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (_event, newValue) => {
    setTabIndex(newValue);
  };

  const onRegister = () => {
    setTabIndex(0);
  };

  return (
    <Box
      flex={1}
      sx={{
        backgroundImage: isDarkMode ? `url(${DarkBackgroundImage})` : `url(${BackgroundImage})`,
      }}
    >
      <Container maxWidth="sm" sx={{ paddingTop: "1.5rem" }}>
        <Stack padding="1rem" backgroundColor="background.paper" borderRadius="5px" boxShadow={theme.shadows[20]}>
          <Box borderRadius="3.5px" backgroundColor="primary.main" color="primary.contrastText" paddingY="1rem">
            <Typography textAlign="center" fontSize="x-large">
              GraphQL Chat
            </Typography>
          </Box>
          <Tabs value={tabIndex} onChange={handleChange} variant="fullWidth">
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
          {tabIndex === 0 && <Login />}
          {tabIndex === 1 && <Register onRegister={onRegister} />}
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
