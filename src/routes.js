const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.render('index');
});

route.get('/room', (req, res) => {
    res.render('room');
});

route.get('/createPass', (req, res) => {
    res.render('createPass');
});

module.exports = route;
