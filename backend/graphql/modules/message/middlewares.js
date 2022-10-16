const { authGaurd } = require("../../middleware/authGaurd");
const { validate } = require("../../middleware/validate");
const { messageSchema } = require("./validator");

const middlewares = {
  Query: {
    "*": [authGaurd],
  },
  Mutation: {
    addMessage: [authGaurd, validate(messageSchema)],
  },
  Subscription: {
    "*": [authGaurd],
  },
};

module.exports = {
  middlewares,
};
