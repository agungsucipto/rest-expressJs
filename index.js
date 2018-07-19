var express = require('express'); 
var bodyParser = require('body-parser');

var home = require('./routes/home');
var mahasiswa = require('./routes/mahasiswa');
 
var app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', home);
app.use('/mahasiswa', mahasiswa);
 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
 
app.listen("3000");
console.log("Server started on port 3000");