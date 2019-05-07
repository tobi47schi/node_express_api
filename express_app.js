var express = require('express');
var app = express();
var cors = require('cors');
var bodyparser = bodyParser = require('body-parser');
var foo = require('./foo.js');
var constants = require('./constants.js')

var constants = constants.user;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
debugger;
const user = {
  _id : "adsfTestId",
  password: "admin",
  name: "tobi",
  email : "tobi@admin.de"
}


app.get('/', function(req, res) {
  console.log('called root');
  console.log(foo.foo());
  res.status(200).json(user);
  console.error(constants);
});


app.post('/login', function(req, res) {
  let loginUser = req.body;
  console.log(loginUser);
  if (loginUser.password == user.password && loginUser.name == user.name) {
    res.json(user);
  } else {
    res.sendStatus(403); //403 status Forebidden
  }
});


app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
