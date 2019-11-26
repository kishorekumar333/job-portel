const jobSeekerModel = require('../models/seeker.model');

class jobseekers {
  getJobseeker(){
      return jobSeekerModel.find({}).exec();
  }
  getJobseekerByID(id){
      return jobSeekerModel.findById({_id:id}).exec();
  }
  getJobseekerByParameter(name){
      return jobSeekerModel.findOne({Username:name}).exec();
  }
  addJobseeker(data){
      let jobseeker = new jobSeekerModel(data);
      jobseeker.save();
  }
  updateJobseeker(id,data){
      return jobSeekerModel.findByIdAndUpdate({_id:id}, {$set: data}).exec();
  }
  deleteJobseeker(id){
      return jobSeekerModel.findByIdAndRemove(id)
      .exec()

  }
}

module.exports = new jobseekers;

