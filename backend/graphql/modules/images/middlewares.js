const { authGaurd } = require("../../middleware/authGaurd");

const middlewares = {
  Query: {
    "*": [authGaurd],
  },
};

module.exports = {
  middlewares,
};
