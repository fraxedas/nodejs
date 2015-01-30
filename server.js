var http = require("http");
var express = require("express");
var app = express();

app.set("view engine", "jade");

app.get("/", function(req, res){
	res.render("jade/index", {title: "Express + Jade"});
});

app.get("/user", function(req, res){
	res.send({name : "Oscar Fraxedas", isValid: true});
});

var server = http.createServer(app);

server.listen(3000);