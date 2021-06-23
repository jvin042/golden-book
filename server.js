const express = require('express');

const app = express();

const session = require('express-session');

const messageRoute = require(('./routes/message'));

require('dotenv').config();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.json());

app.use(express.urlencoded({
  extended: true,
}));

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
}));

app.use(require('./middleware/flash'));

app.use('/', messageRoute);

app.listen(3000);
