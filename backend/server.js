const dotenv = require("dotenv").config();
const colors = require("colors");
const { connectDb } = require("./config/db");
const { createServer: createHttpServer } = require("http");
const express = require("express");
const cookieParser = require("cookie-parser");
const { authenticate } = require("./middleware/authenticate");
const { ApolloServer } = require("apollo-server-express");
const { schema, executor, context, dataSources, formatError, execute, subscribe } = require("./graphql");
const { WebSocketServer } = require("ws");
const { useServer } = require("graphql-ws/lib/use/ws");
const jwt = require("jsonwebtoken");
const User = require("./models/user");
const PORT = process.env.PORT || 5000;

// Express app and middleware
const app = express();
app.use(express.urlencoded({ extended: false }), express.json(), cookieParser(), authenticate);

// Auth routes
app.use(require("./routes/auth.routes"));

// Error handler
app.use(require("./controllers/error.controller"));

// GraphQL
const apolloServer = new ApolloServer({
  schema,
  executor,
  context,
  dataSources,
  formatError,
});

// Web sockets set up
const httpServer = createHttpServer(app);
const wsServer = new WebSocketServer({
  server: httpServer,
  path: "/graphql",
});

const wsContext = ({ connectionParams }, msg, args) => {
  const { user } = connectionParams;
  return { user };
};

useServer(
  {
    schema,
    execute,
    subscribe,
    context: wsContext,
    onConnect: async ({ connectionParams, extra: { socket } }) => {
      const { token } = connectionParams;
      try {
        const { userId } = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        connectionParams.user = await User.findById(userId);
      } catch {
        socket.close(3000, "Invalid access token");
      }
    },
    onDisconnect: ({ connectionParams }) => {
      console.log(connectionParams);
    },
  },
  wsServer
);

(async () => {
  await connectDb();
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/graphql" });

  // REST 404 handler
  app.use(require("./controllers/404.controller"));

  httpServer.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`.bgWhite.black);
  });
})();
