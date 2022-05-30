const express = require('express');
const route = require('./routes.js');
const port = '8080';
const server = express();

const path = require('path');
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

server.use(route);

server.listen(port, () => console.log(`http://localhost/${port}`));

/* vídeo 4 min 47 */
