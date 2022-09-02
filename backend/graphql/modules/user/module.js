const { createModule } = require("graphql-modules");
const { typeDefs } = require("./types");
const { resolvers } = require("./resolvers");
const { middlewares } = require("./middleware");

const userModule = createModule({
  id: "user-module",
  dirname: __dirname,
  typeDefs,
  resolvers,
  middlewares,
});

module.exports = {
  userModule,
};
