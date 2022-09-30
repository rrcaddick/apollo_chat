const { v2: cloudinary } = require("cloudinary");

const resolvers = {
  Query: {
    imageSignature: (_root, _args, { user }) => {
      const timestamp = new Date().getTime();
      const signature = cloudinary.utils.api_sign_request(
        {
          timestamp,
          folder: "ApolloChat",
          upload_preset: "ApolloChat",
        },
        process.env.CLOUDINARY_SECRET
      );
      return { timestamp, signature };
    },
  },
};

module.exports = {
  resolvers,
};
