const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const router = require('./app/routes.js');
const mongoose = require('mongoose');

//DATABASE
var db = require('./config/db');

mongoose.connect(db.url);

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected');
});

mongoose.connection.on('error', (err) => {
    console.log('MongoDB connection error : ' + err);
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB connection close')
});

//APP CONFIG
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({extended: true})); // parse application/x-www-form-urlencoded

app.use(express.static(__dirname + '/public'));

//ROUTER
router(app);
//PORT
app.listen(port, () => {
    console.log('Listening on ' + port);
});

exports = module.exports = app;