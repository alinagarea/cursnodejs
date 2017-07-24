var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})


app.post('/', function (req, res) {
  res.send('No post')
})

 
app.listen(3000)

console.log('Server running at http://127.0.0.1:3000/');