var express = require('express');
var app = express();
var mongojs=require('mongojs') //this is an liprary from mongodb
var db=mongojs('mongodb://dania:dandonzh82**@ds157247.mlab.com:57247/contactlist',['contactlist'])
var bodyParser=require("body-parser")

app.use(express.static(__dirname+"/client"))
  app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()) //this for take the body content
require('./client/routes.js')(app, express);

app.listen(process.env.PORT ||8000 );
module.exports = app;