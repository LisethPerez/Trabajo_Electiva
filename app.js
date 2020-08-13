 
// si juli, gracias
//hablamos mas tardecito juli Vale Linilla :* un beshito jajaj
// jeje un abracito juli jeje
const express = require('express')
const bodyParser = require('body-parser');
const routeIndex = require('./routes/index');
const routesSeries = require('./routes/series');
const path = require('path');

require ('./drivers/mongo-connection');
const app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use('/',routeIndex);
app.use('/newSerie',routesSeries);

module.exports = app;