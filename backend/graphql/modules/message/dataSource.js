const { MongoDataSource } = require("apollo-datasource-mongodb");

class Message extends MongoDataSource {
  async getMessages() {
    return await this.model.find().populate("sender chat");
  }

  async getMessage(messageId) {
    return await this.model.findById(messageId).populate("sender chat");
  }

  async addMessage({ sender, chat, content }) {
    const message = await this.model.create({ sender, chat, content });
    return await message.populate("sender chat");
  }
}

module.exports = Message;
