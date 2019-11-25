var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const defaultRouter = require('./seeker-routers/default-router');
const jobseekerRouter = require('./seeker-routers/jobseekers.router');

app.use(bodyParser.json());

app.use('/', defaultRouter);
app.use('/api', jobseekerRouter);

// app.get('/', function(requst, response){
//     response.send('welcome to job-portel');
// })
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/job-portel', (error, res)=> {
    if (res) {
        console.log('DB connected successfully');
    }
    else {
        console.log("something error occurred");
    }
})

app.listen(3000, function(){
    console.log('server running on 3000 port');
})