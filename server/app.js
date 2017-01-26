/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
require('newrelic');
var express = require('express');
var config = require('./config/environment');

// dump connection string
console.log("config %j",config);

// Setup server
var app = express();
var server = require('http').createServer(app);
var socketio = require('socket.io')(server, {
  serveClient: config.env !== 'production',
  path: '/socket.io-client'
});
require('./config/socketio')(socketio);
require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

process.on('uncaughtException', function(err) {
  console.log(err.stack);
  throw err;
});

// Expose app
exports = module.exports = app;
