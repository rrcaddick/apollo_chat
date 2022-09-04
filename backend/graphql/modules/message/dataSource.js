const { MongoDataSource } = require("apollo-datasource-mongodb");

class Message extends MongoDataSource {
  async getMessages() {
    return await this.model.find();
  }

  async getMessage(messageId) {
    return await this.findOneById(messageId);
  }

  async addMessage({ sender, chat, content }) {
    return this.model.create({ sender, chat, content });
  }
}

module.exports = Message;
