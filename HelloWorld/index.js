"use strict";
//required module
var mHttp = require("http");
//variables
var iPort = 8081;
var sMessage = "Hello world";
var oResponse = {

"returnCode" : "1",
"returnMessage": "everything OK",
"returnData": null

};
//create Http Server
var oServer = mHttp.createServer(function(req, res){
console.log("\r\nnoServer created.");

res.writeHead(200, {'Content-Type': 'text/plain'});
res.write(JSON.stringify(oResponse));
res.end();

console.log("Response sent!");

});

oServer.listen(iPort);

console.log('Server running at http://127.0.0.1:' + iPort + '/');

//var sMessage = "Hello world";
//sMessage = sMessage + "!";

console.log(sMessage);
