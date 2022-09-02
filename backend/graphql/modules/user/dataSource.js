const { MongoDataSource } = require("apollo-datasource-mongodb");

class User extends MongoDataSource {
  async getUsers() {
    return await this.model.find();
  }

  async registerUser(input) {
    return await this.model.create({ ...input });
  }
}

module.exports = User;
