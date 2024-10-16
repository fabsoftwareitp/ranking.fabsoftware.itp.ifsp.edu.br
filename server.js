const express = require('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();
app.use(cors())
app.use(express.static('public'))
const port = 9091;

routes(app);


app.listen(port, () => {
  console.log(`servidor escutando na porta: ${port}`);
});

app.set('trust proxy', true);
app.use(express.static('game'));

module.exports = app;

