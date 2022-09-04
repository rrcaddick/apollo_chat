const dotenv = require("dotenv").config();
const colors = require("colors");
const express = require("express");
const cookieParser = require("cookie-parser");
const { ApolloServer, gql } = require("apollo-server-express");
const { connectDb } = require("./config/db");
const { schema, executor, context, dataSources, formatError } = require("./graphql");
const { authenticate } = require("./middleware/authenticate");
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

(async () => {
  await connectDb();
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/graphql" });

  // REST 404 handler
  app.use(require("./controllers/404.controller"));

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`.bgWhite.black);
  });
})();
