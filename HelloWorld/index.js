"use strict";
//required module
var mHttp = require("http");
//variables
var iPort = 8081;
var sMessage = "Hello world";
//create Http Server
var oServer = mHttp.createServer(function(req, res){
console.log("\r\nnoServer created.");

res.writeHead(200, {'Content-Type': 'text/plain'});
res.write(sMessage);
res.end();

console.log("Response sent!");

});

oServer.listen(iPort);

console.log('Server running at http://127.0.0.1:' + iPort + '/');

//var sMessage = "Hello world";
//sMessage = sMessage + "!";

console.log(sMessage);
