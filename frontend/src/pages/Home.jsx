import { useState } from "react";
import { Box, Container, Stack, Tab, Tabs, Typography, useTheme } from "@mui/material";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import BackgroundImage from "../assets/home-background.webp";

const Home = () => {
  const theme = useTheme();
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (_event, newValue) => {
    setTabIndex(newValue);
  };
  return (
    <Box flex={1} sx={{ backgroundImage: `url(${BackgroundImage})` }}>
      <Container maxWidth="sm" sx={{ paddingTop: "1.5rem" }}>
        <Stack padding="1rem" backgroundColor="white" borderRadius="5px" boxShadow={theme.shadows[20]}>
          <Box
            borderRadius="3.5px"
            backgroundColor={theme.palette.primary.main}
            color={theme.palette.primary.contrastText}
            paddingY="1rem"
          >
            <Typography textAlign="center" fontSize="x-large">
              GraphQL Chat
            </Typography>
          </Box>
          <Tabs value={tabIndex} onChange={handleChange} variant="fullWidth">
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
          {tabIndex === 0 && <Login />}
          {tabIndex === 1 && <Register />}
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
