const mongoose = require("mongoose");
const { Schema } = mongoose;
const Chat = require("./chat");

const messageSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: "Sender is required when creating a message",
    },
    chat: {
      type: Schema.Types.ObjectId,
      ref: "Chat",
      required: "Chat is required when creating a message",
    },
    content: {
      type: String,
      required: "Content is required when creating a message",
    },
  },
  { timestamps: true }
);

messageSchema.post("save", async function (message, next) {
  await Chat.findByIdAndUpdate(message.chat, { latestMessage: message });
  next();
});

module.exports = mongoose.model("Message", messageSchema);
