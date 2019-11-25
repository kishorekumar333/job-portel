const seeker = require('../models/seeker.model');

const jobseekers ={
    getUser : function(data){
        return user.findOne({username:data.username, password: data.password })
        .exec();
    },
    addUser: function(data){
        let userpresent = new user(data);
        return userpresent.save();
    },
    allusers:function(){
        return seeker.find().exec();
    }
}

module.exports = jobseekers;

