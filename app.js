const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

const port = 3000;
const app = express();
app.use(jsonParser);
app.use(parseUrlencoded);

routes.registrarRotas(app);

app.listen(port, () => {
  console.log('Server running port 3000');
});
