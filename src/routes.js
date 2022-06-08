const express = require('express');
const route = express.Router();
const QuestionController = require('./controllers/QuestionController.js');

route.get('/', (req, res) => {
    res.render('index');
});

route.get('/room', (req, res) => {
    res.render('room');
});

route.get('/createPass', (req, res) => {
    res.render('createPass');
});

route.post('/room/:room/:question/:action', QuestionController.index);

module.exports = route;
