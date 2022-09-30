const { createModule } = require("graphql-modules");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");
const { middlewares } = require("./middlewares");

const imagesModule = createModule({
  id: "iamges-module",
  dirname: __dirname,
  typeDefs,
  resolvers,
  middlewares,
});

module.exports = {
  imagesModule,
};
