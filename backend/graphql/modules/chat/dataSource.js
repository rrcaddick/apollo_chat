const { MongoDataSource } = require("apollo-datasource-mongodb");

class Chat extends MongoDataSource {
  async getChats() {
    return await this.model.find();
  }

  async getChat(chatId) {
    return await this.findOneById(chatId);
  }

  async addChat(members) {
    const chat = await this.model.create({ members });
    return chat.populate("members latestMessage");
  }
}

module.exports = Chat;
