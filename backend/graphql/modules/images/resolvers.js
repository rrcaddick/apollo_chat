const { createSignature } = require("../../../utils/cloudinary");

const resolvers = {
  Query: {
    imageSignature: () => {
      return createSignature();
    },
  },
};

module.exports = {
  resolvers,
};
