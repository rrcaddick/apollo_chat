const { InjectionToken } = require("graphql-modules");

const pubSubToken = new InjectionToken("pub-sub");

module.exports = {
  pubSubToken,
};
