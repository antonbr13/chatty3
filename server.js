var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

var messages = [];


// Any request coming into the server will first be passed through any functions inside your app.use() method before being passed on to your endpoints
app.use(bodyParser.json());

// Middleware

app.get('/', function( req, res ) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify(messages));
});



app.post('/', function(req, res, next) {
   messages.push({
      username: req.body.username,
      message: req.body.message,
      time: new Date()
   });
   res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify(messages));
});

app.options('/', function(req, res, next) {
   res.status(200).set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }).send();
});




var port = 8773;
app.listen(port, function() {
   console.log('listening on port ' + port);
});
