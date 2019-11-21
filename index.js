var express = require('express');
var app = express();

app.get('/', function(requst, response){
    response.send('welcome to job-portel');
})