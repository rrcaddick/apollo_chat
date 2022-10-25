const { MongoDataSource } = require("apollo-datasource-mongodb");

class Message extends MongoDataSource {
  async getMessages() {
    return await this.model.find().populate("sender chat");
  }

  async getChatMessages(chatId) {
    return await this.model.find({ chat: chatId }).populate("sender").sort({ createdAt: 1 });
  }

  async getMessage(messageId) {
    return await this.model.findById(messageId).populate("sender chat");
  }

  async addMessage({ sender, chat, content }) {
    const message = await this.model.create({ sender, chat, content });
    return await message.populate("sender chat");
  }

  async clearChatMessages(chatId) {
    const { deletedCount: clearedMessageCount } = await this.model.deleteMany({ chat: chatId });
    return { clearedMessageCount };
  }
}

module.exports = Message;
