const dotenv = require("dotenv");
const colors = require("colors");
const express = require("express");
const cookieParser = require("cookie-parser");
const { ApolloServer } = require("apollo-server-express");
const { connectDb } = require("./config/db");
const { schema, executor, context, dataSources, formatError } = require("./graphql");
const PORT = process.env.PORT || 5000;

// Express app and middleware
const app = express();
app.use(express.urlencoded({ extended: false }), express.json(), cookieParser());

// Auth routes
app.use(require("./routes/auth.routes"));

// Error handler
app.use(require("./controllers/error.controller"));

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

  // 404 handler
  app.use(require("./controllers/404.controller"));

  app.listen(PORT, () => {
    console.log(`Server started on port ${5000}`.bgWhite.black);
  });
})();
