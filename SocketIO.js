/**
 * Socket.IO
 *
 * @author asma
 * @copyright 2015 asma All Rights Reserved.
 */

module.exports = function (app) {

  var debug  = require('debug')('nodeSampleApp:server');
  var logger = require('./logger');
  var http   = require('http').Server(app);
  var io     = require('socket.io')(http);

  io.on('connection', function (socket) {
    logger.debug('Socket.IO connected');

    socket.on('init', function (req) {
      socket.set('room', req.room);
      socket.set('name', req.name);

      socket.to(req.room).emit('notification', req.name + 'さんが入室しました');
      socket.join('initialized');
    });

    socket.on('notification', function (data) {});

    socket.on('message', function(data) {
      socket.to(socket.get('room')).emit('message', socket.get('name') + ': ' + data);
    });

    socket.on('leave', function() {
      socket.leave(socket.get('room'));
      socket.to(socket.get('room')).emit('System', socket.get('name') + 'さんが退室しました');
    });

    socket.on('disconnect', function () {});
  });

  /**
   * Get port from environment and store in Express.
   */
  var port = normalizePort(process.env.PORT || '3000');
  app.set('port', port);
  http.listen(port, function () {});

  io.on('error', onError);
  io.on('listening', onListening);

  /**
   * Normalize a port into a number, string, or false.
   */
  function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
      // named pipe
      return val;
    }

    if (port >= 0) {
      // port number
      return port;
    }

    return false;
  }

  /**
   * Event listener for HTTP server "error" event.
   */
  function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  /**
   * Event listener for HTTP server "listening" event.
   */
  function onListening() {
    var addr = io.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }

  module.exports = app;

};
