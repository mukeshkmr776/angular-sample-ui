
var express = require('express')
var app = express()

var path = require('path')


app.use(express.static(path.join(__dirname, 'dist/sample-app'))); 


var PORT = process.env.PORT || 3000;
app.listen(PORT);


