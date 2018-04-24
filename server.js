const express = require('express'),
  server = express(),
  mongoose = require('mongoose'),
  session = require('express-session'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  MongoStore = require('connect-mongo')(session),
  keys = require('./keys.json'),
  routes = require('./routes'),
  register = require('./routes/api/register'),
  port = process.env.PORT || 8080,
  environment = server.get('env');


server.use(session({
  secret: keys.sessionKey,
  resave: false,
  rolling: true,
  cookie: {
    maxAge: 900000
  },
  store: new MongoStore({
    url: `${keys.mongoUrl}`
  }),
  saveUninitialized: false
}))


server.use(express.static('public'));

server.use(bodyParser.urlencoded({
  extended: false
}));
server.use(bodyParser.json());

server.use(routes);

mongoose.connect(keys.mongoUrl);
mongoose.Promise = Promise;
mongoose.connection.on('error', err => {
  console.log(err);
});

server.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
