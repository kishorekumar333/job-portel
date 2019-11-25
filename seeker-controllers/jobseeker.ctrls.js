const jobseekermodel = require('../models/seeker.model');
const jobssvc=require('../services/seeker.srvc')
const dbJobseeker = {
    getjobseeker: async function(req, res){
        try{
        let jobseekers=await jobssvc.allusers();
            if(jobseekers.length>=1){
                res.json(jobseekers);
                res.status(200);
            }else{
                res.send('No Users are added Yet!!!!');
                res.status(400);
            }
        }catch(error)
        {
            res.send("Internal servere errro").status(200);
        }
        
    },
    getJobseekerByID: function(req, res){
        let id = +req.params.id;
        let jobseeker;
        for(let i=0; i<jobseekers.length; i++){
            if(jobseekers[i].id === id){
                jobseeker = jobseekers[i];
            }
        }
        if(jobseeker){
            res.send(product).status(200);
        }else{
            res.send('not found').status(404);
        }

    }
}
module.exports = dbJobseeker;