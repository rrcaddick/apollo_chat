const { MongoDataSource } = require("apollo-datasource-mongodb");

class Message extends MongoDataSource {
  async getMessages() {
    return await this.model.find().populate("sender chat");
  }

  async getChatMessages(chatId, userId) {
    return await this.model
      .find({ chat: chatId, deletedBy: { $ne: userId } })
      .populate("sender chat")
      .sort({ createdAt: 1 });
  }

  async getMessage(messageId) {
    return await this.model.findById(messageId).populate("sender chat");
  }

  async addMessage({ sender, chat, content }) {
    const message = await this.model.create({ sender, chat, content });
    return await message.populate("sender chat");
  }

  async clearChatMessages(chatId, userId) {
    const { modifiedCount: clearedMessageCount } = await this.model.updateMany(
      { chat: chatId, deletedBy: { $ne: userId } },
      { $push: { deletedBy: userId } },
      { clearLatestMessage: true, chatId }
    );
    return { clearedMessageCount };
  }
}

module.exports = Message;
