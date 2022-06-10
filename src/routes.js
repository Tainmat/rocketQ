const express = require('express');
const route = express.Router();
const QuestionController = require('./controllers/QuestionController.js');
const RoomController = require('./controllers/RoomController.js');

route.get('/', (req, res) => {
    res.render('index', { page: 'enter-room' });
});

route.get('/create-pass', (req, res) => {
    res.render('index', { page: 'create-pass' });
});

route.get('/room/:roomId', (req, res) => {
    res.render('room');
});

route.post('/question/:room/:question/:action', QuestionController.index);
route.post('/create-room', RoomController.create);

module.exports = route;
