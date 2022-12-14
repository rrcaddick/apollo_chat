const { createModule } = require("graphql-modules");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");
const { middlewares } = require("./middlewares");

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
