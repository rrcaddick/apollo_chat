const { authGaurd } = require("../../middleware/authGaurd");
const { validate } = require("../../middleware/validate");
const { chatSchema } = require("./validator");

const middlewares = {
  Query: {
    "*": [authGaurd],
  },
  Mutation: {
    addChat: [authGaurd, validate(chatSchema)],
  },
};

module.exports = {
  middlewares,
};
