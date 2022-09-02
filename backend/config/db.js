const mongoose = require("mongoose");

const MONGO_URI = String(process.env.MONGO_URI);
const isDevelopment = process.env.NODE_ENV === "development";

const connectDb = async () => {
  try {
    isDevelopment && mongoose.set("debug", true);
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDb connected on ${conn.connection.host}`.black.bgGreen);
  } catch (error) {
    console.log(`MongoDb Error: ${error.message}`.black.bgRed);
    process.exit(1);
  }
};

module.exports = {
  connectDb,
};
