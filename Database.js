const fs = require('fs');
const path = require('path');

class Database {

  static insertold(filename, newData) {
    try {
      const data = JSON.parse(fs.readFileSync(filename));
      fs.writeFileSync(filename, JSON.stringify([...data, newData]))
      return 'inserido com sucesso!';
    } catch (error) {
      return error.message;
    }
  }

  static insert(filename, newData) {
    try {
      const data = JSON.parse(fs.readFileSync(filename));
      const index = data.findIndex(item => item.name === newData.name);
  
      if (index !== -1) {
        data[index].score = newData.score;
      } else {
        data.push(newData);
      }
      fs.writeFileSync(filename, JSON.stringify(data));
  
      return 'inserido ou atualizado com sucesso!';
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