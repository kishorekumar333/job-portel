const jobseekermodel = require('../models/seeker.model');
const jobssvc = require('../services/seeker.srvc')
const dbJobseeker = {
    getJobseeker: async function (req, res) {
        try {
            let jobseekers = await jobssvc.getJobseeker();
            if (jobseekers.length >= 1) {
                res.json(jobseekers);
                res.status(200);
            } else {
                res.send('No Users are added Yet!!!!');
                res.status(400);
            }
        } catch (error) {
            res.send("Internal servere errro").status(200);
        }

    },
    getJobseekerByID:async function (req, res) {
        try {
            let id = req.params.id;
            console.log(id);
            let jobseeker = await jobssvc.getJobseekerByID(id);
            if(jobseeker){
               // console.log(jobseeker);
            res.send(jobseeker).status(200);
            }else{
                res.send("cananot get").status(200);
            }
            
        }
        catch (error) {
            res.send(error).status(200);
        }

    },
    addJobseeker:async function(req,res){
        try{
            let jobseeker = await jobssvc.getJobseekerByParameter(req.body.Username);
            if(jobseeker){
                res.send('already exist').status(200);
            }else{
                await jobssvc.addJobseeker(req.body);
                res.send('inserted successfully').status(200);
            }
        }
        catch(error){
            res.send(error).status(200);
        }

    },
    update: async function(req, res){
        try{
            let id = req.params.id;
            //console.log(req.body);
            let updated=await jobssvc.updateJobseeker(id, req.body);
            console.log(updated);
            if(updated)  res.send('updated successfully').status(200);
            else res.send("sorry boy").status(200);
        }
        catch(error){
            res.send(error).status(200);
        }
    },
    delete: async function(req, res){
        try{
            let id = req.params.id;
            await jobssvc.deleteJobseeker(id);
            res.send('Deleted successfully').status(200);

        }
        catch(error){
            res.send('failed in deleting').status(200);
        }
    }

}

module.exports = dbJobseeker;