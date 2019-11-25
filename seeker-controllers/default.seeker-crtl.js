var defaultCtrl = {
    defaultCheck: function(req, res){
        res.send('welcome to jobseekers').status(200);
    },
    healthCheck: function(req, res){
        res.send({status: 'jobseekers is up on running'});
        res.status(200);
    }
}

module.exports = defaultCtrl