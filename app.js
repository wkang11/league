var express = require('express');
var app =express();
var http = require('http');
var path = require('path');

var server = http.createServer(app);


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/about', function(req, res){
    res.sendFile(path.join(__dirname + '/pages/about.html'));
});

app.get('/contact', function(req, res){
    res.sendFile(path.join(__dirname + '/pages/contact.html'));
});

app.get('/home', function(req, res){
    res.sendFile(path.join(__dirname + '/pages/home.html'));
});

app.use(express.static(__dirname + '/static'));


// app.use(function(req, res, next){
//     var err = new Error('Batman said you are wrong');
//     err.status = 404;
//     next(err);
// });

server.listen(3000);
server.on('error', onError);

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
