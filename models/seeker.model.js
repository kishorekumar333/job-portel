const mongoose = require('mongoose');

const jobSeekerModel = mongoose.model('jobseekers', {
    Username: String,
    Email: String,
    Password: String,
    MobileNo: Number,
    Hometown: String,
    AreasOfInterest: String,
    MaterialStatus: String,
    LanguagesKnown: String,
    LastJobLoaction: String,
    YearsOfExperience: Number,
    JObRole: String,
    Department: String,
    ReasonsOfLeavingCurrentJob: String,
    LastWorking: {type: Date, default: Date.now()}
    
});

module.exports = jobSeekerModel;