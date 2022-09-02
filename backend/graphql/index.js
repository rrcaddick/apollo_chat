const { createApplication } = require("graphql-modules");
const { userModule } = require("./modules/user/module");
const UserSource = require("./modules/user/dataSource");
const User = require("../models/user");

const graphqlApplication = createApplication({
  modules: [userModule],
});

const context = ({ req }) => {
  const context = {};
  if (req.user) {
    context.user = req.user;
  }

  return context;
};

const dataSources = () => ({
  user: new UserSource(User),
});

const formatError = (err) => {
  return {
    message: err.message,
    path: err?.path,
    code: err?.extensions?.code,
    data: err?.extensions?.data,
  };
};

module.exports = {
  graphqlApplication,
  executor: graphqlApplication.createApolloExecutor(),
  schema: graphqlApplication.schema,
  context,
  dataSources,
  formatError,
};
