const { MongoDataSource } = require("apollo-datasource-mongodb");

class Chat extends MongoDataSource {
  async chats() {
    return await this.model.find();
  }

  async chat(chatId) {
    return await this.findOneById(chatId);
  }

  async addChat(members) {
    return this.model.create({ members });
  }
}

module.exports = Chat;
