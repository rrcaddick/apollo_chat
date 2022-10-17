import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chats from "./pages/Chats";
import { ApolloProvider } from "@apollo/client";
import { useClient } from "./hooks/useClient";

const App = () => {
  const client = useClient();
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chats />} />
      </Routes>
    </ApolloProvider>
  );
};

export default App;
