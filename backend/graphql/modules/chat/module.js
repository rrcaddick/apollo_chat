const { createModule } = require("graphql-modules");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");
const { middlewares } = require("./middlewares");

const chatModule = createModule({
  id: "chat-module",
  dirname: __dirname,
  typeDefs,
  resolvers,
  middlewares,
});

module.exports = {
  chatModule,
};
