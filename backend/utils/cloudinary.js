const { v2: cloudinary } = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const createSignature = () => {
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
};

const destroyImage = async (public_id) => {
  if (!public_id) return;
  await cloudinary.uploader.destroy(public_id);
};

module.exports = { createSignature, destroyImage };
