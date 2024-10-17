const fs = require('fs');
const path = require('path');

class Database {

  static insert(filename, newData) {
    try {
      const data = JSON.parse(fs.readFileSync(filename));
      fs.writeFileSync(filename, JSON.stringify([...data, newData]))
      return 'inserido com sucesso!';
    } catch (error) {
      return error.message;
    }
  }

  static read(filename) {
    try {
      const data = JSON.parse(fs.readFileSync(filename));
      return data;
    } catch (error) {
      return error.message;
    }
  }

  static reset(filename) {
    try {
      const data = JSON.parse(fs.readFileSync(filename));
      fs.writeFileSync(filename, JSON.stringify([]))
      return 'inserido com sucesso!';
    } catch (error) {
      return error.message;
    }
  }
}

module.exports = Database;