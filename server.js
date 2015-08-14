var http = require("http");
var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(__dirname + "/public"));

http.createServer(app).listen(3000, function () {
	console.log("server is live on port 3000!");
});