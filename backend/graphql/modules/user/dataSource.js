const { MongoDataSource } = require("apollo-datasource-mongodb");

class User extends MongoDataSource {
  async getUsers() {
    return await this.model.find();
  }

  async getUsersByIds(userIds) {
    return await this.findManyByIds(userIds);
  }

  async getUser(userId) {
    return await this.findOneById(userId);
  }

  async registerUser(input) {
    return await this.model.create({ ...input });
  }
}

module.exports = User;
