const { createApplication, InjectionToken } = require("graphql-modules");
const { PubSub } = require("graphql-subscriptions");
const { userModule } = require("./modules/user/module");
const UserSource = require("./modules/user/dataSource");
const User = require("../models/user");
const { chatModule } = require("./modules/chat/module");
const ChatSource = require("./modules/chat/dataSource");
const Chat = require("../models/chat");
const { messageModule } = require("./modules/message/module");
const MessageSource = require("./modules/message/dataSource");
const Message = require("../models/message");
const { pubSubToken } = require("./common/injectionTokens");
const { imagesModule } = require("./modules/images/module");

// const pubSubToken = new InjectionToken("pub-sub");

const graphqlApplication = createApplication({
  modules: [userModule, chatModule, messageModule, imagesModule],
  providers: [
    {
      provide: pubSubToken,
      useValue: new PubSub(),
    },
  ],
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
  chat: new ChatSource(Chat),
  message: new MessageSource(Message),
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
  execute: graphqlApplication.createExecution(),
  subscribe: graphqlApplication.createSubscription(),
  context,
  dataSources,
  formatError,
  pubSubToken,
};
