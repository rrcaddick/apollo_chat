const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { connectDb } = require("./config/db");
const { createServer: createHttpServer } = require("http");
const { createServer: createHttpsServer } = require("https");
const express = require("express");
const cookieParser = require("cookie-parser");
const { authenticate } = require("./middleware/authenticate");
const { ApolloServer } = require("apollo-server-express");
const { schema, executor, context, dataSources, formatError, execute, subscribe, injector } = require("./graphql");
const { pubSubToken } = require("./graphql/common/injectionTokens");
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

// HTTPS Server
// const serverOptions = {
//   cert: fs.readFileSync(path.join(__dirname, "ssl", "server.cert")),
//   key: fs.readFileSync(path.join(__dirname, "ssl", "server.key")),
// };
// const httpsServer = createHttpsServer(serverOptions, app);
// const wssServer = createServerFrom(
//   httpsServer,
//   (test) => {
//     console.log(test);
//   },
//   { path: "wss://192.168.0.122:5000/graphql" }
// );

// HTTP Server
const httpServer = createHttpServer(app);
// Web sockets set up
const wsServer = new WebSocketServer({
  server: httpServer,
  path: "/graphql",
});

const wsContext = ({ connectionParams }) => {
  const { user } = connectionParams;
  return { user, dataSources: dataSources() };
};

useServer(
  {
    schema,
    execute,
    subscribe,
    context: wsContext,
    onConnect: async ({ connectionParams, extra: { socket } }) => {
      // TODO: Refactor token validation into util function
      const { token } = connectionParams;

      try {
        const { userId } = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        const user = await User.findByIdAndUpdate(userId, { isOnline: true }, { new: true });
        connectionParams.user = user;
        const pubSub = injector.get(pubSubToken);
        pubSub.publish("USER_ONLINE", user);
      } catch {
        socket.close(3000, "Invalid access token");
      }
    },
    onDisconnect: async ({ connectionParams }) => {
      const { user } = connectionParams;
      if (user) {
        const latestUser = await User.findByIdAndUpdate(user._id, { isOnline: false }, { new: true });
        const pubSub = injector.get(pubSubToken);
        pubSub.publish("USER_ONLINE", latestUser);
      }
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

  // httpServer.listen(PORT, () => {
  //   console.log(`Server started on port ${PORT}`.bgWhite.black);
  // });

  httpServer.listen(PORT, () => {
    console.log(`HTTPS Server started on port ${PORT}`.bgWhite.black);
  });
})();
