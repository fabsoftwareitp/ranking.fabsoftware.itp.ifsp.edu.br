const bodyParser = require('body-parser');
const { Router } = require('express');
const path = require('path');
const db = require('./Database');
const router = Router();

function getFileName(gameName) {
  let dbName;
  switch(gameName) {
    case "bb":
      dbName = "/ranking-bb.json";
      break;
    case "space":
      dbName = "/ranking-space.json";
      break;
    case "pong":
      dbName = "/ranking-pong.json";
      break;
    default:
      throw Error("Arquivo não encontrado");
  }
  return path.join(__dirname + dbName);
}


router.get('/ranking/:game', function (req, res) {
  const game = req.params.game; //pega os valores da URL
  const dbFileName = getFileName(game); //pega o nome do arquivo
  const data = db.read(dbFileName); //le o arquivo JSON do respectivo game
  res.send(data); //envia os dados
});

router.post('/ranking/', function(req, res) {
  let data = req.body; //pegando os dados 
  const game = data.game;
  delete data.game; 
  const dbFileName = getFileName(game); //pega o nome do arquivo
  db.insert(dbFileName, data); //salva os dados no arquivo
})

module.exports = app => {
  app.use(
    bodyParser.json(),
    router
  )
}