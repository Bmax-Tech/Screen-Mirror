var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});


var WebSocketServer = require('ws').Server;

var PORT = 7788;

var wss = new WebSocketServer({port: PORT});

var messages = [];
wss.on('connection', function (ws) {
//  messages.forEach(function(message){
//    ws.send(message);
//  });
  ws.on('message', function (message) {
    messages.push(message);
    //console.log('Message Received: %s', message);
    wss.clients.forEach(function (conn) {
      conn.send(message);
    });
  });
});