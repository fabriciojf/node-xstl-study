// base settings
  var config = require('./app/config/default-config');

// imports
  var express = require('express');
  var path = require('path');
  var app = express();
  var cookieParser = require('cookie-parser');
  var bodyParser = require('body-parser');
  var defaultRoutes = require('./app/route/default-route');
  var port = config.server.port;
  
  var domain = '/factor';

  app.use(cookieParser());

// body parser
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

// express routes
  app.use(domain, defaultRoutes);

// server start
  app.listen(port);
  console.log('Server Running: http://' + config.server.host + ':' + port + domain);