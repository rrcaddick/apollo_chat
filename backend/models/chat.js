const mongoose = require("mongoose");
const { Schema } = mongoose;

const chatSchema = new Schema(
  {
    chatType: {
      type: String,
      enum: ["DIRECT", "GROUP", "BROADCAST"],
      default: "DIRECT",
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: "Chat members are required",
      },
    ],
    latestMessage: {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
    name: String,
    icon: String,
  },
  { timestamps: true }
);

chatSchema.pre("save", function (next) {
  const { chatType } = this;
  if (chatType === "BROADCAST") this.icon = "ApolloChat/ykoxzcf9rpbdtcftc1ih";
  next();
});

module.exports = mongoose.model("Chat", chatSchema);
